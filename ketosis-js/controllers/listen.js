// ===========================================================================
//  Diet.js
//  Listener Controller
// ===========================================================================
"use strict"

// ===========================================================================
//  Dependencies
// ===========================================================================
const utils = require('./utils')

// ===========================================================================
//  Exports
// ===========================================================================

module.exports = function(app, servers){
  return function(location, opts, cb){
    const callback = typeof opts === 'function' ? opts : cb;
    const options = !opts || typeof opts === 'function' ? {} : opts;
    const host = utils.getHost(location, options)
    app.location = host.location
    app.port = host.port

    // create route containers
    app.routes = typeof app.routes !== "undefined" ? app.routes : { get: [], post: [], options: [], put: [], patch: [], head: [], delete: [], trace: [], header: [], footer: [], missing: [], error: [] }

    // define host
    app.location.host = app.location.host.split(':')[1] ? app.location.host : app.location.host + ':' + app.port;

    // save host to hosts
    app.hosts[app.location.host] = app

    app.emit('listen', { port: app.port, location: app.location, options });

    // create new server object
    // if port is not found in servers
    let server;
    if(!servers[app.port]){
    app.protocols.forEach((protocolObject) => {
    server = protocolObject.handler(app, options, callback)
    })

    // save server to servers with it's port
    servers[app.port] = server

    // listen on localhost addresses
    // Implement check if app.hosts['127.0.0.1:' + port] do nothing else
    //app.listen('http://localhost:'+app.port, options);
    //app.listen('http://127.0.0.1:'+app.port, options);
    //app.listen('http://'+app.address+':'+app.port, options);

    // otherwise reuse the server object
    } else {
      server = servers[app.port]
      if(callback) callback();
    }

    // return server
    app.server = server;

    // return app
    return app;
  }
}
