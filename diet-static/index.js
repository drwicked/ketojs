// Dependencies
const url  = require('url');
const path = require('path');
const mime = require('mime');
const fs = require('fs');
const zlib = require('zlib');
const cache = {}

module.exports = (options) => {
	return function($){
		const pathname = $.url.pathname;
		const mimeType = mime.getType(pathname);
		const extension = path.extname(pathname);
		const dateOffset = 604800000;

		// if no route was specified there is an extension and mimeType is not binary
		if(extension){
			// set header
			$.header('Content-Type', mimeType);
			$.status(200);
			const source = options.path + $.url.pathname;
			fs.stat(source, (error, stats) => {
				if(!error){
					$.header('Last-Modified', new Date(stats.mtime).toUTCString())
					$.header('Expires', new Date(new Date().getTime() + dateOffset).toUTCString())
					$.header('Cache-Control', 'public')
					const modified_since = new Date($.headers['if-modified-since']).getTime();
					const last_modified = new Date(stats.mtime).getTime()
					if(!$.headers['if-modified-since'] || last_modified > modified_since){

						// file was modified
						fs.readFile(source, (readerror, data) => {
							if(readerror) throw readerror

							if(mimeType === 'text/css' || mimeType === 'application/javascript'){
								const buffer = new Buffer(data);
								zlib.gzip(buffer, (error, gzip) => {
									if(error) throw error
									cache[source] = gzip;
									$.header('Content-Encoding', 'gzip')
									$.header('Vary', 'Accept-Encoding')
									$.passed = false;
									$.responded = true;
									$.response.end(gzip)
									$.return()
								})
							} else {
								$.passed = false;
								$.responded = true;
								$.response.end(data)
								$.return()
							}
						})

					} else {
						// not modified
						$.status(304)
						$.responded = true;
						$.response.end()
						$.return()
					}

				} else if (error.type !== 'ENOENT') {
					$.status(error.status || 500, 'File not found');
					$.return();
				} else {
					throw error;
					$.return()
				}

			});
		} else {
			$.return();
		}
	}
}
