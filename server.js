const server = require('./ketosis-js')
const ketoStatic = require('./keto-static')
const cookies = require('./keto-cookies');
const pug = require('./keto-pug')
const fs = require('fs')

const app = module.app = server()


const http = {}
const https = {}

const sites = [
  'writeordie.social'
]
let stPort = 8000;
sites.forEach(site => {
  http[site] = module.app = server()
  http[site].header(cookies)
  https[site] = module.app = server()
  https[site].header(cookies)
  const sitePath = `${app.path}/sites/${site}`;
  if (process.env.NODE_ENV === 'development') {
    http[site].listen(`http://localhost:${stPort}`)
    http[site].header(
      pug({path: `${sitePath}/pug/`})
    );
    http[site].view('file',
      ketoStatic({ path: `${sitePath}/static/` })
    );
    stPort += 1
  } else {
    http[site].listen(`http://${site}`)
    http[site].get('/', $ => {
      $.redirect(`https://${site}`)
    })
    https[site].listen(`https://${site}`, {
      cert: fs.readFileSync(`/etc/letsencrypt/live/${site}/cert.pem`),
      key: fs.readFileSync(`/etc/letsencrypt/live/${site}/privkey.pem`)
    })

    https[site].header(
      pug({path: `${sitePath}/pug/`})
    );
    https[site].view('file',
      ketoStatic({ path: `${sitePath}/static/` })
    );
    https[site].get('/', $ => {
      $.render('index.pug');
    })
  }


})
