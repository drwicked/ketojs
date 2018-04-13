const fs = require('fs');
const pug = require('pug')

/*
 * Usage:
 * var pug = require('diet-pug')({ path: app.path+'/static/pug' })
 *
 * app.header(pug)
 *
 * $.render('index') => $.render('index.pug')
 *
 */

module.exports = function(options = {}) {
  return function($) {
    $.render = function(filename) {
      console.log('FILENAME', filename)
      $.header('Content-Type', 'text/html; charset=UTF-8');
      if (!filename) {
        $.error('No pug file specified')
      } else {
        options.file = `${filename}${!filename.includes('.pug') ? '.pug' : ''}`;
      }
      const path = `${options.path}${!options.path.endsWith("/") ? '/' : ''}`;
      const fn = pug.compileFile(path + options.file, {
        pretty: true,
      })
      const html = fn($.data)
      $.end(html)
    }
    $.return()
  }
}
