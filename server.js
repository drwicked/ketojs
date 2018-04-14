const server = require('./ketosis-js')
const ketoStatic = require('./keto-static')
const cookies = require('./keto-cookies');
const pug = require('./keto-pug')
const fs = require('fs')

const isDev = process.env.NODE_ENV === 'development';

const http = {}
const https = {}

const certFile = process.env.NODE_ENV !== 'development' && fs.readFileSync(`/etc/letsencrypt/live/writeordie.social/cert.pem`)
const keyFile = process.env.NODE_ENV !== 'development' && fs.readFileSync(`/etc/letsencrypt/live/writeordie.social/privkey.pem`)

const sites = require('./sites.json')

const createPugServer = ({ url, local }) => {
  const proto = isDev ? 'http' : 'https';
  const app = server();
  const { path } = app;
  const sitePath = `${path}/sites/${url}`;
  const kstatic = ketoStatic({
    path: `${sitePath}/static/`
  });
  const listenUrl = isDev ? local : `${proto}://${url}`;
  app.listen(listenUrl, {
    name: url
  })
  app.header(cookies);
  app.header(
    pug({path: `${sitePath}/pug/`})
  ).footer(kstatic);
  app.get('/', $ => {
    $.render('index.pug');
    $.end();
  })
  return app;
}
const createStaticServer = ({ url, local }) => {
  const proto = isDev ? 'http' : 'https';
  const app = server();
  const { path } = app;
  const sitePath = `${path}/sites/${url}`;
  const kstatic = ketoStatic({
    path: `${sitePath}/static/`
  });
  const listenUrl = isDev ? local : `${proto}://${url}`;
  app.listen(listenUrl, {
    name: url
  })
  app.header(cookies);
  app.view('html', kstatic);
  app.get('/', kstatic)
  app.footer(kstatic);
  return app;
}

const createHttpRedirect = ({ url }) => {
  const app = server();
  app.listen(`http://${url}`)
  app.get('/', $ => {
    $.redirect(`https://${url}`)
  })
}

const siteArray = sites.map(site => site.url);

sites.forEach((data) => {
  const { url, static } = data;
  if (static) {
    createStaticServer(data)
  } else {
    createPugServer(data)
  }
});
