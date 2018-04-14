const helper  = require("./lib/helper");
const path    = require("path");
const flutils = require("flutils");
const fileLib = require("./lib/file");
const fs      = require("fs");
const utils   = require("utils-pkg");

module.CONST = {
	OPTIONS: null
};

let opts;

module.exports = function(options){
	// Define Constant options
	module.CONST.OPTIONS = opts = helper.parseOptions(options);

	return function($){
		// Execute resolve request if passed
		if(opts.hook && opts.hook.request){
			opts.hook.request($);
		}
		
		const dir = path.join(opts.path, $.url.pathname);
		
		// Find the requested file
		const file = fileLib.findFile(dir);
		
		// If directory is file
		if(file !== null && file.file){
			const lastModified = $.header("if-modified-since");
			const modified = file.stats.mtime;

			// send file if "if-modified-since" header is undefined
			// if defined then compare if file is modified
			if(!lastModified || !helper.isEqualTime(lastModified, modified)){
				sendFile($, file);
			} else {
				// send 304 if file was not modified
				// Execute resolve cached if passed
				if(opts.hook && opts.hook.cached){
					opts.hook.cached($);
				}

				$.status("304");
				$.end();
			}
		}

		// The requested file was not found, send 404
		else{
			// Execute resolve fail if passed
			if(opts.hook && opts.hook.fail){
				opts.hook.fail($);
			}

			$.status("404");
			$.end("Page Not Found");
		}
	}
}

/**
 * Send chunks of file to the response
 * 
 * @param  {Object} $    The server response instance
 * @param  {Object} file The object that contains the file details
 */
function sendFile($, file){
	const readStream = fs.createReadStream(file.dir);
	// Send file when opens
	readStream.on("open", () => {
		// Default headers
		const headers = {
			"Content-Type": file.mime,
			"Cache-Control": opts.cache,
			"Last-Modified": new Date(file.stats.mtime).toUTCString()
		};

		$.status("200");

		// Set the cache value from the provided function
		if(utils.isFunction(opts.cache)){
			const result = opts.cache($);

			if(result !== false){
				headers["Cache-Control"] = result;
			}

			// Remove the cache headers if function returns false
			else{
				delete headers["Cache-Control"];
				delete headers["Last-Modified"];
			}
		}

		// Execute resolve function if defined in options
		if(opts.hook && opts.hook.success){
			opts.hook.success($, headers, file);
		}

		// Set all headers included with resolve
		for(const h in headers){
			$.header(h, headers[h]);
		}

		readStream.pipe($.response);
	});
	
	// Send an error when something failes
	readStream.on("error", (err) => {
		$.end(err);
	});	
}
