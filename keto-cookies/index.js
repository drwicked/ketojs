// Cookie Object
function Cookies($){
	this.__proto__.header = [];
	this.__proto__.signal = $;

	const cookieHeader = $.header('cookie');
	if(cookieHeader){
		const split = cookieHeader.split(';');
		const split_length = split.length;
		for(let i = 0; i < split_length; i++){
			const item = split[i];
			const cookieSplit = item.split('=');
			if(cookieSplit.length){
				const name = cookieSplit[0] ? cookieSplit[0].trim() : '';
				const value = cookieSplit[1] ? cookieSplit[1].trim() : '' ;
				this[name] = value;
			}
		}
	}

	return this;
}

Cookies.prototype.set = function(name, value, options = {}){
	// Calculate Expiration Time
	let expires = ''
	if(isset(options.expire)){
		const days 	 		= options.expire[0]*1000*60*60*24;
		const hours 	 	= options.expire[1] ? options.expire[1]*1000*60*60 : 0 ;
		const minutes  	= options.expire[2] ? options.expire[2]*1000*60 : 0;
		const seconds  	= options.expire[3] ? options.expire[3]*1000 : 0;
		const ms  			= options.expire[4] ? options.expire[4] : 0;
		const future 	 	= days+hours+minutes+seconds+ms;
		const now 	 		= new Date().getTime();
		expires  = ` Expires=${new Date(now+future).toGMTString()} `;
	}

	// Create Safe References to Cookie Options
	const domain 	 = (!isset(options.domain))  ? '' : ' Domain='+options.domain+'; ';
	const secure 	 = (isset(options.secure)) 	 ? '; secure ' : '';
	const httpOnly = (isset(options.httpOnly)) ? '; httpOnly ' : '';
	const path 	 	 = (!isset(options.path)) 	 ? '/' : options.path;

	const header_string = `${name}=${value}'; Path=${path};${domain}${expires}${secure}${httpOnly}`;

	this[name] = value;
	this.header.push(header_string);
	this.signal.header('set-cookie', this.header);
};

Cookies.prototype.delete = function(name, options = {}){
	const domain 	= (!isset(options.domain))	? '' : ' Domain='+options.domain+'; ' ;
	const path 	= (!isset(options.path)) ? '/' : options.path;

	delete this[name];
	this.header.push(`${name}=;${domain} expires=Thu, 10 Mar 1994 01:00:00 UTC; path=${path}`);
	this.signal.header('set-cookie', this.header);
};

// Isset Utility
function isset(object){
	return (object !== "undefined" && object !== undefined && object !== null && object !== '' && typeof(object) !== 'undefined');
}

// Cookie Handler Module
module.exports = function($){
	$.cookies = new Cookies($)
	$.return();
}
