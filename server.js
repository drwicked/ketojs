const server = require('./ketosis-js')
const ketoStatic = require('./keto-static')
const cookies = require('./keto-cookies');
const pug = require('./keto-pug')

const app = module.app = server()

app.listen("localhost:8000")

const pugDir = pug({path: `${app.path}/site/pug/`})
const staticServer = ketoStatic({ path: app.path+'/site/static/' })

app.header(cookies);
app.header(pugDir);
app.view('file', staticServer);
app.get('/', $ => {
  $.render('index.pug');
})
