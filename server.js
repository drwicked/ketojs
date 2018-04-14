const server = require('./ketosis-js')
const ketoStatic = require('./keto-static')
const cookies = require('./keto-cookies');
const pug = require('./keto-pug')
const fs = require('fs')

const http = {}
const https = {}

const sites = {
  'writeordie.social': {

  },
  'editminion.com': {
    static: true
  }
}
let stPort = 8000;
Object.keys(sites).forEach(site => {
  http[site] = module.app = server()
  http[site].header(cookies)
  https[site] = module.app = server()
  https[site].header(cookies)
  const { path } = http[site];
  const sitePath = `${path}/sites/${site}`;
  const siteData = sites[site];
  if (process.env.NODE_ENV === 'development') {
    http[site].listen(stPort, {
      name: site
    })
    http[site].name = 'TEST'
    const kstatic = ketoStatic({ path: `${sitePath}/static/` })
    http[site].view('file', kstatic);
    if (!siteData.static) {
      http[site].header(
        pug({path: `${sitePath}/pug/`})
      );
      http[site].get('/', $ => {
        $.render('index.pug');
      })
    } else {
      http[site].view('html', kstatic);
      http[site].get('/', $ => {
        $.send('index.html');
      })
    }
    http[site].footer(kstatic);
    stPort += 1
  } else {
    http[site].listen(`http://${site}`)
    http[site].get('/', $ => {
      $.redirect(`https://${site}`)
    })
    https[site].listen(`https://${site}`, {
      cert: fs.readFileSync(`/etc/letsencrypt/live/${site}/cert.pem`),
      key: fs.readFileSync(`/etc/letsencrypt/live/${site}/privkey.pem`),
      name: site
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
