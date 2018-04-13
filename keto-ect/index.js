// ECT based diet plugin for rendering Dynamic HTML files

// Dependencies
const fs = require('fs')
const ect = require('ect')
const merge = require('merge')
const clone = require('clone')

module.exports = function(options = {}){
  const renderer = ect(merge({
  root : options.path,
  ext: '.html',
  open: '{{', close: '}}',
  cache: true,
  watch: true,
  gzip: true,
  }, options))

  return function($){
  $.htmlModule = function(pathname){
    if(!pathname || (pathname && pathname.indexOf(/\n|\r/) !== -1)){
      const path = pathname || 'index.html'
      const context = merge(clone($, false, 1), $.data)
      const html = renderer.render(path, context)
      $.response.end(html)
  } else if (pathname) {
      $.response.end(pathname)
  }

  $.nextRoute() // call next route
  }
  $.return()
  }
}
