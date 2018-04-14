const server = require('./ketosis-js')
const ketoStatic = require('./keto-static-stream')
const cookies = require('./keto-cookies');
const pug = require('./keto-pug')
const fs = require('fs')

const http = {}
const https = {}

const certFile = process.env.NODE_ENV !== 'development' && fs.readFileSync(`/etc/letsencrypt/live/writeordie.social/cert.pem`)
const keyFile = process.env.NODE_ENV !== 'development' && fs.readFileSync(`/etc/letsencrypt/live/writeordie.social/privkey.pem`)

const sites = require('./sites.json')
console.log('sites', sites)

let stPort = 8000;
Object.keys(sites).forEach(site => {
  http[site] = server();
  http[site].header(cookies);
  https[site] = server();
  https[site].header(cookies);
  const { path } = http[site];
  const sitePath = `${path}/sites/${site}`;
  const siteData = sites[site];
  const kstatic = ketoStatic({ path: `${sitePath}/static/` });
  if (process.env.NODE_ENV === 'development') {
    http[site].listen(stPort)
    if (!siteData.static) {
      http[site].header(
        pug({path: `${sitePath}/pug/`})
      );
      http[site].get('/', $ => {
        $.render('index.pug');
      })
    } else {
      // http[site].view('file', kstatic);
      http[site].view('html', kstatic);
      http[site].get('/*', $ => {
        $.send(`index.html`);
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
      cert: certFile,
      key: keyFile,
      name: site
    })
    if (!siteData.static) {
      https[site].header(
        pug({path: `${sitePath}/pug/`})
      );
      https[site].get('/', $ => {
        $.render('index.pug');
      })
    } else {
      https[site].view('html', kstatic);
      https[site].get('/*', $ => {
        $.send('index.html');
      })
    }
    https[site].footer(kstatic);
  }


})
