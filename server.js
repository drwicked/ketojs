const server = require('./ketosis-js')
const ketoStatic = require('./keto-static')
const cookies = require('./keto-cookies');
const pug = require('./keto-pug')
const fs = require('fs')

const app = module.app = server()
const http = module.app = server()

const pugDir = pug({path: `${app.path}/site/pug/`})
const staticServer = ketoStatic({ path: app.path+'/site/static/' })

const httpApps = {}
const apps = {}

const sites = [
  'writeordie.social'
]
console.log('process', process.env.NODE_ENV);
sites.forEach(site => {
  apps[site] = module.app = server()
  httpApps[site] = module.app = server()
  httpApps[site].listen(`http://${site}`)
  apps[site].get('/', $ => {
    $.redirect(`https://${site}`);
  })
  apps[site].listen(`https://${site}`, {
     cert: fs.readFileSync(`/etc/letsencrypt/live/${site}/cert.pem`),
     key: fs.readFileSync(`/etc/letsencrypt/live/${site}/privkey.pem`)
  })

  apps[site].header(cookies);
  apps[site].header(pugDir);
  apps[site].view('file', staticServer);
  apps[site].get('/', $ => {
    $.render('index.pug');
  })
})
