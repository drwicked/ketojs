/*

Copyright 2015 Christos Dimas <specktator@totallynoob.com>

This file is part of typeWriter.

femto is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

femto is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with femto.  If not, see <http://www.gnu.org/licenses/>.
Source: https://github.com/specktator/scraper

Github:  https://github.com/specktator/typewriter
*/
  
/* usage: typeWriter.type(settingsObject);
  settingsObejct = {
        id: 'idOfTheElement', // @string, default value = 'typewriter'
        text: `multiline
          text to type`, //multiline text is acceptable- ES6
        index:5 // starting character
        timeSetting: 'fast' // @string , see default values timeSets
        };
  NOTE: you can skip any property in settings except text.
  NOTE2: run on document ready.
*/

typeWriter = (function(){
  var defSettings, settings, timeSets, local;
  local = {};
 
  /* name : [max ms, min ms] */
  timeSets= {
    'breeze': [40,5],
    'fast': [100,50],
    'slow': [150,100],
    'momtyping': [350,100]
  };
  
  defSettings = {
    text: 'No text inserted.', // multiline text with `` is legit for usage - ES6
    index: 0, // The index of the first character to start typing
    id: 'typewriter', //default element id to put the text into
    timeSetting: timeSets.momtyping, //typewriter's speed
    autoScroll: true, // enable / disable autoscrolling
    after: function(){}
  };
  


  writer = function()
  {
    char = settings.text.charAt(settings.index);

    if(char != ''){
      e = document.getElementById( settings.id );
      e.innerHTML += char;
      if(settings.autoScroll === true){
        e.scrollTop = e.scrollHeight;
      }
      settings.index += 1;
      var t = setTimeout('writer()', Math.floor( (Math.random() * settings.timeSetting[0]) + settings.timeSetting[1]));
    } else {
	    console.log("floop");
	};

  };

  settingsCheck = function (s){
    
    if ( typeof s == "undefined" ){
      s = defSettings;
      console.log("No settings defined! Trying default ...");
    }
    if ( typeof s.text === "undefined"){
      s.text = defSettings.text;
      console.log("No text defined!");
    }
    if ( typeof s.index === "undefined" || s.index != parseInt(s.index) ){
      s.index = defSettings.index;
    }
    if ( typeof s.id === "undefined"){
      s.id = defSettings.id;
    }
    if ( typeof s.timeSetting === "undefined"){
      s.timeSetting = defSettings.timeSetting;
    }
    if ( typeof s.timeSetting === "string" ){
      s.timeSetting = eval("timeSets."+s.timeSetting);
    }
    if ( typeof s.autoScroll === "undefined" ){
      s.autoScroll = defSettings.autoScroll;
    }
    settings = s;
    
  };

  local.type = function (settings){
    settingsCheck(settings);
    writer();

  };
  
  return local;
  
} () );