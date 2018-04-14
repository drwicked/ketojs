//
// HTTP(S) Protocol
//
const Host = require('./host')

module.exports = (app, options = {}, callback) => {
  const { cert, key, ca, name } = options;
  // create new host object
  const protocolName = (cert || key || ca) ? 'https' : 'http' ;
  const protocol = require(protocolName)
  const host = new Host(app, protocol, app.location)
  
  // if (!cert && !key && !ca) {
  //   throw new Error('Cannot start a HTTPS server without Options');
  // }
  // define http or https server
  const server =
    protocolName === 'http'
      ? protocol.createServer(host).listen(app.port, callback)
      : protocol.createServer(options, host).listen(app.port, callback)
  // console inititalization message
  if(!options.noMessage && !app.silent) {
    console.log(
      ' KetoJS 🥓 '.magenta,
      app.location.protocol.split(':')[0].toUpperCase().green,
      `Server ${name || ''} is listening on`.cyan,
      (app.location.href || (app.location.host)).underline.white
    )
  }
  
  return server;
}
