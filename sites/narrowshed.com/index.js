// NarrowShed build script

var Metalsmith = require('metalsmith'),
    markdown   = require('metalsmith-markdown'),
    templates  = require('metalsmith-templates'),
    jade = require('metalsmith-jade'),
    watch = require('metalsmith-watch');


Metalsmith(__dirname)
    .use(jade())
    .use(templates('jade'))
    .destination('./narrowshed')
    .use(
	    watch({
	      paths: {
	        "${source}/**/*": true,
	        "templates/**/*": "**/*.md",
	      },
	      livereload: true,
	    })
  )
  .build(function (err) { if(err) console.log(err) });