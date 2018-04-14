function percFromRatio(inCount, totalCount, top) {
	var getRatio = (inCount / totalCount) * 1000;
	var percentString = "0% " + ((getRatio / top) * 100).toFixed(0).toString() + '%';
	return percentString;
}

function createGradeLabel(el, text) {
	$('#' + el + '_label').html(el + ":" + text);
}


/*
 * jQuery Highlight Regex Plugin v0.1.2
 */(function(a){var b=function(c){if(!!c&&!!c.childNodes){var d=a.makeArray(c.childNodes),e=null;a.each(d,function(a,d){d.nodeType===3?d.nodeValue===""?c.removeChild(d):e!==null?(e.nodeValue+=d.nodeValue,c.removeChild(d)):e=d:(e=null,d.childNodes&&b(d))})}};a.fn.highlightRegex=function(c,d){typeof c=="object"&&c.constructor.name!=="RegExp"&&(d=c,c=undefined),typeof d=="undefined"&&(d={}),d.className=d.className||"highlight",d.tagType=d.tagType||"span",d.attrs=d.attrs||{},typeof c=="undefined"||c.source===""?a(this).find(d.tagType+"."+d.className).each(function(){a(this).replaceWith(a(this).text()),b(a(this).parent().get(0))}):a(this).each(function(){var e=a(this).get(0);b(e),a.each(a.makeArray(e.childNodes),function(e,f){var g,h,i,j,k,l;b(f);if(f.nodeType==3)while(f.data&&(j=f.data.search(c))>=0){k=f.data.slice(j).match(c)[0];if(k.length>0)g=document.createElement(d.tagType),g.className=d.className,a(g).attr(d.attrs),l=f.parentNode,h=f.splitText(j),f=h.splitText(k.length),i=h.cloneNode(!0),g.appendChild(i),l.replaceChild(g,h);else break}else a(f).highlightRegex(c,d)})});return a(this)}})(jQuery);

/*! Delayed Change Event for jQuery v1.0 | Copyright 2013 Alex King alexking.org | http://www.apache.org/licenses/LICENSE-2.0 */
(function($){$.fn.delayedChange=function(options){var settings=$.extend({delay:2000,eventNamespace:undefined,extra:undefined},options);this.each(function(){var timeoutRef,previousValue,$this=$(this);previousValue=$this.val();$this.on('input propertychange',function(){var val;if(window.event&&event.type=="propertychange"&&event.propertyName!="value"){return}val=$this.val();if(previousValue==val){return}previousValue=val;if(timeoutRef){clearTimeout(timeoutRef)}timeoutRef=setTimeout(function(){var eventName='delayedchange';if($this.val()==val){timeoutRef=undefined;if(settings.eventNamespace){eventName=eventName+'.'+settings.eventNamespace}$this.trigger(eventName,[{delay:settings.delay,eventNamespace:settings.eventNamespace,extra:settings.extra}])}},settings.delay)})});return this}})(jQuery);

// keywordHighlight
(function($) {
  $.fn.extend({
     keywordHighlight: function(options){
         var defaults = {
             highlightClass: 'highlight',
             caseSensitive: 'false'
         }
         var options = $.extend(defaults, options);

         return this.each(function(i, e) {
            var words = $(e).html().split(' ');
            var new_content = '';

            //check for inline data attributes.
            var currentKeyword = options.keyword;
            if($(e).attr("data-keyword"))
                currentKeyword = $(e).attr("data-keyword");

            var currentHighlightClass = options.highlightClass;
            if($(e).attr("data-highlightClass"))
                currentHighlightClass = $(e).attr("data-highlightClass");

            var currentCaseSensitive = options.caseSensitive;
            if($(e).attr("data-caseSensitive"))
                currentCaseSensitive = $(e).attr("data-caseSensitive");
         

            $(words).each(function(i,e) {
                var found = false;
                if(currentCaseSensitive != 'true') {
                    //not case sensitive, so lowercase all and compare.
                    if(e.toLowerCase() == currentKeyword.toLowerCase())
                        found = true;
                }
                else
                {
                    if(e == currentKeyword)
                        found = true;
                }

                if(found) {
                  //add span class around found word and add to new content
                  new_content += '<span class="' + currentHighlightClass + '">' + e + '</span>' + ' ';
                }
                else
                {
                  new_content += e  + ' ';
                }
            }); 
            $(this).html(new_content); //place new content back into the targetted element
         });
     }
  });
})(jQuery);

function countvalues(a) {
	var b = {},
		i = a.length,
		j;
	while (i--) {
		j = b[a[i]];
		b[a[i]] = j ? j + 1 : 1;
	}
	return b; // an object of element:count arrays
}

function sortByNumber(a, b) {
	var x = a.Number;
	var y = b.Number;
	return ((x < y) ? +1 : ((x > y) ? -1 : 0));
}

function word(wordElem, number) {
	this.WordElem = wordElem;
	this.Number = parseInt(parseFloat(number));
}

function countWords(text) {
	var regex = /\s+/gi;
	return text.trim().replace(regex, ' ').split(' ').length;
}

var topWordsSplit;

function liveEditNow(m) {
	var radioVal = m || $('[name="liveEditRadio"]:checked').val();
	switch (radioVal) {
		case 'adverbs':
			$("#inputbox").highlightTextarea('setOptions', {
				color: "#FFff00"
			});
			$("#inputbox").highlightTextarea('setWords', adverbs.split(','));
			break;
		case 'weakwords':
			$("#inputbox").highlightTextarea('setOptions', {
				color: "#FF3E80"
			});
			$("#inputbox").highlightTextarea('setWords', weakwords.split(','));
			break;
		case 'saidwords':
			$("#inputbox").highlightTextarea('setOptions', {
				color: "#FF3E80"
			});
			$("#inputbox").highlightTextarea('setWords', saidwords.split(','));
			break;
		case 'passive':
			$("#inputbox").highlightTextarea('setOptions', {
				color: "#FF62FE"
			});
			$("#inputbox").highlightTextarea('setWords', ["([^a-z])(was|is|were|will\s+be|am|has\s+been|are)(\\s)([^!.;,?]+)?([a-z]+ing)([\\s.;!?;])"]);
			//   color: "#FF62FE"
			break;
		case 'prepositions':
			$("#inputbox").highlightTextarea('setOptions', {
				color: "#CC99FF"
			});
			$("#inputbox").highlightTextarea('setWords', ["(aboard|about|above|absent|across|after|against|along|alongside|amid|amidst|among|amongst|around|as|aside|astride|at|athwart|atop|barring|before|behind|below|beneath|beside|besides|between|betwixt|beyond|but|by|circa|concerning|despite|down|during|except|excluding|failing|following|for|from|given|in|including|inside|into|like|minus|near|next|notwithstanding|of|off|on|onto|opposite|out|outside|over|pace|passim|past|plus|round|sans|save|since|than|through|throughout|till|times|to|toward|towards|under|underneath|unlike|until|up|upon|with|within|without|worth){1}(\.\?\!\")"]);
			break;
	}
}

function T(el, text) {
	Tipped.create(el, text, {
		skin: 'yellow'
	});
}

function toolTips() {

}
var rawText;

function listSentences(matchString) {
	var sentenceArray = [];
	var pattern = /(.+?([A-Z].)[\.|\?](?:['")\\\s]?)+?\s?)/igm,
		match;
	var ol = document.getElementById("sentenceList");
	$('#sentenceList').html('<li><h3>Sentences containing "' + matchString + '"</h3></li>');
	while ((match = pattern.exec(rawText)) !== null) {
		if (match.index === pattern.lastIndex) {
			pattern.lastIndex++;
		}

		if (match[0].indexOf(matchString) > -1) {
			var li = document.createElement("li");
			li.appendChild(document.createTextNode(match[0]));
			ol.appendChild(li);
		}

		//console.log(match[0]);
	}

}

function sentenceArray(text) {
	var sentenceArray = [];
	var pattern = /(.+?([A-Z].)[\.|\?](?:['")\\\s]?)+?\s?)/igm,
		match;
	var ol = document.getElementById("sentenceList");

	while ((match = pattern.exec(text)) !== null) {
		if (match.index === pattern.lastIndex) {
			pattern.lastIndex++;
		}
		sentenceArray.push(match[0]);
	}
	return sentenceArray;
}

function sortArrayByLength(arr, ascYN) {
	arr.sort(function(a, b) { // sort array by length of text
		if (ascYN) return a.length - b.length; // ASC -> a - b
		else return b.length - a.length; // DESC -> b - a
	});
}

function splitSentences(text, matchString) {
	var sentenceArray = [];
	var pattern = /(.+?([A-Z].)[\.|\?](?:['")\\\s]?)+?\s?)/igm,
		match;
	var ol = document.getElementById("sentenceList");
	while ((match = pattern.exec(text)) !== null) {
		if (match.index === pattern.lastIndex) {
			pattern.lastIndex++;
		}

		if (match[0].indexOf(matchString) > -1) {
			var li = document.createElement("li");
			li.appendChild(document.createTextNode(match[0]));
			ol.appendChild(li);
		}

		//console.log(match[0]);
	}

}


function makeTips(JSONfile, tipType, tipSkin, tipIcon) {
	var JSONdata = {};
	$.getJSON(JSONfile, function(data) {
		$.each(data[tipType], function(key, val) {
			$('#output').keywordHighlight({
				keyword: key,
				caseSensitive: 'false',
				highlightClass: tipType
			});
			JSONdata[key] = val;
		});
	}).done(function() {
		//console.dir(ambrose);
		$('.' + tipType).each(function() {
			var tipWord = $(this).text().toLowerCase();
			//console.log(tipWord);
			var dataSplit = JSONdata[tipWord].split("|");
			var tipTitle = dataSplit[0];
			var tipBody = dataSplit[1];
			//console.log(ambroseSplit)
			Tipped.create(this, "<div class='" + tipType + "tip tipDiv'><div class='" + tipType + "Title tipTitle'>" + tipTitle + "<img src='" + tipIcon + "' class='" + tipType + "Icon' width='48px'/></div><div class='" + tipType + "Body tipBody'>" + tipBody + "</div></div>", {
				skin: tipSkin,
				onShow: function(content, element) {
					//	console.log(Tipped.findElement(element).textContent);
				}
			});
		});
	});
}

function displayOutput() {
	$("#reportcard_out").show();
	//blastSentence();
	$('#explanationwrap').slideUp(function() {
		$("#output").show();
		$("#outputWrap").show();
		$('.loading').fadeOut();
		$('#submittext').val("Edit!");
		$(document.body).animate({
			'scrollTop': $('#scrollTo').offset().top
		}, 1000, function() {
			$("#legend").fadeIn();
		});
	});


}
/*

function blastSentence() {
	$("#output").blast({ 
	    delimiter: "sentence", // Set the delimiter type (see left)
	    search: false, // Perform a search *instead* of delimiting
	    tag: "span", // Set the wrapping element type (e.g. "div")
	    customClass: "sentence", // Add a custom class to wrappers
	    generateIndexID: false, // Add #customClass-i to wrappers
	    generateValueClass: false, // Add .blast-word-val to wrappers
	    stripHTMLTags: true // Strip HTML before blasting
	});
}
*/

function avgArray(array) {
	if ($.isArray(array) === false) {
		array = [].push(array);
	}
	var sum = 0;
	if (array.length > 1) {
		array.forEach(function(num) {
			sum += parseFloat(num) || 0;
		});
		var avg = Math.floor(sum / array.length);
		return avg;
	} else {
		return array;
	}
}

function showQuote() {
	$.get('quotes.txt', function(data) {
		var quotes = data.split("@");
		var idx = Math.floor(quotes.length * Math.random());
		$('.quotes').html(quotes[idx]);
	});
}

function placeholderNews() {
	$.get('news.txt', function(data) {
		$('#inputbox').attr("placeholder",data);
	});
	
}

var ambrose, help;
$(function() {
	$(document).ajaxStart(function() {
		
		timer = setTimeout(function() {
			$(".loading").show();
		}, 250);
	}).ajaxStop(function() {
		clearTimeout(timer);
		$(".loading").hide();
	});
	storage = $.localStorage;
	$('#radiobtns .row ul li a').on('click', function(e) {
		e.preventDefault();
		var catid = '#' + $(this).attr('id') + "-rdio";
		var checkedinput = $("input[name='category']:checked").val();
		if (checkedinput === undefined) {
			// if no input is defined then we set the button clicked first
			$(catid).prop('checked', true);
		} else {
			// otherwise unset everything and then set the clicked button
			$("input[name='category']").prop('checked', false);
			$(catid).prop('checked', true);
		}
		var newval = $("input[name='category']:checked").val();
		if ($(this).attr('id') == newval) {
			$('#radiovaltxt').html(newval);
		}
		if ($(this).hasClass('sel')) {
			// if already selected then we do nothing
		} else {
			$('#radiobtns .row ul li a').removeClass('sel');
			$(this).addClass('sel');
		}
	});
	showQuote();
	$('.quotes').click(function() {
		showQuote();
	});
	$(".doSwitch").button();
	$('.prefSwitch').each(function(index, value) {
		var switchPos = storage.get($(this).attr('id')) || undefined;
		$(this).switchButton({
			on_label: $(this).attr('title'),
			off_label: '',
			height: 15,
			width: 28,
			button_width: 15,
			checked: switchPos
		});
	});
	
	
	$('#enableTooltips').switchButton({
		on_label: 'Tooltips',
		off_label: '',
		height: 15,
		width: 28,
		button_width: 15

	});

	$('.liveEditLabel').click(function() {
		console.log(this.id);
		liveEditNow(this.id);
	});
	$('#inputbox').delayedChange().on('delayedchange', function() {
		//liveEditNow();
		//console.log("I'm attached to the 'delayedchange' event for this element.");
	});
	// THIS IS A WORKING VERSION WITH PASSIVE ING SEARCH

	help = {
		adverb: "The Adverbinator will seek out adverbs for destruction. It uses a curated list of pernicious adverbs. If you see one that shouldn't be there, let me know.",
		commonly: "This will search your text for Wikipedia's list of over 4000 commonly misspelled words. It's likely that your word processor will catch these so it's unchecked by default.",
		homonym: "This will search for frequently confused homonyms, from accept/except to weather/whether as well as the ever-popular your/you're.",
		weakword: "This will find words that are often found in weak or stilted prose. It's meant to point out over-use, some of these words will naturally occur. TODO: Find these words only outside dialogue.",
		saidwords: "This will find examples of dialogue attribution where you should have used \"he said\" or \"she said\", it will also find the same sort of words outside of dialog attribution.",
		cliche: "This will point out where someone else has been secretly adding cliches to your work. Because you'd never do that.",
		//  nutsbolts: "Finds basic technical issues like double-spacing after periods and super long sentences.",
		preposition: "Highlights sentences ending with a preposition. A preposition is something you should not end a sentence with.",
		passive: "Check this to look for instances of the passive voice. Works in a limited way, catches \"(to be verb) ... (gerund)\". You'll get it once you use it.",
		topwords: "Enables the highlighting of frequently used words so you can see if you use that word too much. Frequently used words will be colored reddish-brown.",
		ambrose: "Ambrose Bierce's writing tips from his 1909 book Write It Right. MIGHT CRASH TAB",
		greek: "Shows words with Greek roots. Gives you some idea where the words you're using come from.",
		latin: "Shows words with Latin roots. Gives you some idea where the words you're using come from.",
		german: "Shows words with Germanic origin. Gives you some idea where the words you're using come from.",
		dialog: "Highlights dialog. Helpful for checking if you have any unclosed quotations."
	};
	for (var prop in help) {
		Tipped.create('#' + prop + '-tip', help[prop], {
			skin: 'white'
		});
	}


	/*
   $('#hashtag').data('help', "This will put descriptive #hashtags after found words. Useful for searching through text, or if you're colorblind.");
    $('#reportcard').data('help', "This will generate a report card result of your words, silently judging you, hoping you fail. Not really. Just some things that are nice to know.");
*/

	// TO DO: Sentence-level finding, average sentence length, longest sentence, comma density double space after sentences

	// Convert each into an array
	for (var key in wordArray) {
		wordArray[key] = wordArray[key].split(/,/);
	}

	// Lock in the current height
	var explain = $('#explain');
	explain.height(explain.height() + 'px');

	// Copy help text into the appropriate elements as data elements
	for (var key in help) {
		$('#check_' + key).data('help', help[key]);
	}

	// Set up a general hover handler
	var original_explain = explain.html();
	$('label').hover(function(e) {
		explain.text($('#' + this.getAttribute('for')).data('help'));
	}, function() {
		explain.html(original_explain);
	});

	$('#cleartext').click(function() {
		$("textarea#inputbox").val("");
	});

	$('#tryme').click(function() {
		var book = ["text/WarOfTheWorlds.txt", "text/AroundTheWorldIn80Days.txt", "text/AliceInWonderland.txt"];
		$("#inputbox").trigger('change');
		$.ajax({
			url: new Chance().pick(book),
			success: function(data) {
				var randomChapter = data.split("||");
				$("#inputbox").val(new Chance().pick(randomChapter));
			}
		});
	});
	$("#inputbox").on('focus keyup change', function() {
		$("#inputbox").css("background-image", "none");
	});
	placeholderNews();
	$('#submittext').click(function() {
		$('#submittext').val("Editing.");
		$('.loading').fadeIn();
		setTimeout(function() {
			editMinion();
		}, 500);

	});

	function editMinion() {

		// See what we're matching
		var todo = ['alot'];
		var switchesOff = [];
		for (var key in help) {
			if ($('#check_' + key).is(':checked')){
				todo.push(key);
				$("#" + key + "Legend").css("display", "inline");
				storage.set('check_' + key,true);
			}  else {
				switchesOff.push(key);
				$("#" + key + "Legend").css("display", "none");
				storage.set('check_' + key,false);
			}
		}
		
		// Prepare a word hash, and a regex hash
		var regex_hash = {};

		frequentWords();
		//        alert(topWordsSplit);
		wordArray.topwords = topWordsSplit.slice(0, -1);

		for (var j = 0; j < todo.length; ++j) {
			var key = todo[j];
			var suffix = (key == 'preposition') ? '[\.\?\!\"]' : '[^a-z]';
			if (key == 'passive' || key == 'dialog' || key == 'past') {
				regex_hash[key] = new RegExp(wordArray[key], 'ig');
				//   } else if (key == 'topwords') {
				//   	alert(match[key].slice(0, -1));
			} else if (key == 'present') {
				regex_hash[key] = new RegExp('([^a-z])(' + wordArray[key].join('|') + ')(s)?', 'ig');
			} else {
				//console.log(key); 
				regex_hash[key] = new RegExp('([^a-z])(' + wordArray[key].join('|') + ')(' + suffix + ')', 'ig');

			}
		}

		// Get the input text
		var text = $('#inputbox').val();


		// HTMLify, padding it with spaces
		//        {
		var e = document.createElement('div');
		e.appendChild(document.createTextNode(' '));
		e.appendChild(document.createTextNode(text));
		e.appendChild(document.createTextNode(' '));
		text = e.innerHTML;
		//        }
		rawText = text;
		// Replace newlines
		text = text.replace(/\n\n/g, ' </p><p class="paragraph"> ');
		text = text.replace(/\n/g, ' <br> ');
 
			
		// Replace all the regexes
		for (var key in regex_hash) {
			var regex = regex_hash[key];
			if (key == 'passive') {
				text = text.replace(regex, "$1<span class='" + key + "' title='" + key + "'>$2$3$4$5</span>$6");
			} else {
				text = text.replace(regex, "$1<span class='" + key + "' title='" + key + "'>$2</span>$3");
			}

		}

		// Output!
		var output = $('#output');
		output[0].innerHTML = text;

		function jsonTips(jsonFile,name) {
			var items = [];
			var jsonObj = {};
			$.getJSON(jsonFile, function(data) {
				$.each(data.word, function(key, val) {
					$('#output').keywordHighlight({
						keyword: key,
						caseSensitive: 'false',
						highlightClass: name
					});
					items.push(key);
					//   console.log(key);
					jsonObj[key] = val;
				});
			}).done(function() {
				$('.'+name).each(function() {
					var tipWord = $(this).text().toLowerCase();
					var descriptionSplit = jsonObj[tipWord].split("|");
					var descriptionTitle = descriptionSplit[0];
					var descriptionBody = descriptionSplit.slice(1);
					if (descriptionBody.length > 1) {
						Tipped.create(this, "<div class='"+name+"Tip'><img src='"+name+"Icon.png' class='"+name+"Icon' width='48px'/><div class='"+name+"Title'>" + descriptionTitle + "</div><div class='"+name+"Body'>" + descriptionBody + "</div></div>", {
							skin: 'gray',
							onShow: function(content, element) {
								//console.log(Tipped.findElement(element).textContent);
							}
						});
					} else {
						Tipped.create(this, "<div class='"+name+"Tip'><img src='"+name+"Icon.png' class='"+name+"Icon' width='48px'/><div class='"+name+"Title'>" + descriptionTitle + "</div></div>", {
							skin: 'gray',
							onShow: function(content, element) {
								//console.log(Tipped.findElement(element).textContent);
							}
						});
					}
					//console.log(ambroseSplit)
					
				});

			});
		}

		output.find('.alot').append('<div class="alot_img"><a href="http://hyperboleandahalf.blogspot.com/2010/04/alot-is-better-than-you-at-everything.html" target="_blank"><img src="img/ALOT.png" width="100"></a></div>');
		if ($('#shakespeare').is(':checked')){
			jsonTips('words/shakespeare.js','shakespeare');
		}
		if ($('#ambrose').is(':checked')) {
			$('.loading').show(function() {
				//makeTips("writeItRight.js","ambrose","yellow","ambroseIcon.png");
				var items = [];
				ambrose = {};
				$.getJSON("writeItRight.js", function(data) {
					$.each(data.ambrose, function(key, val) {
						$('#output').keywordHighlight({
							keyword: key,
							caseSensitive: 'false',
							highlightClass: 'ambrose'
						});
						items.push(key);
						ambrose[key] = val;
					});
				}).done(function() {
					$('.ambrose').each(function() {
						var tipWord = $(this).text().toLowerCase();
						var ambroseSplit = ambrose[tipWord].split("|");
						var ambroseTitle = ambroseSplit[0];
						var ambroseBody = ambroseSplit.slice(1);
						Tipped.create(this, "<div class='ambroseTip'><img src='ambroseIcon.png' class='ambroseIcon' width='48px'/><div class='ambroseTitle'>" + ambroseTitle + "</div><div class='ambroseBody'>" + ambroseBody + "</div></div>", {
							skin: 'gray',
							onShow: function(content, element) {
								console.log(Tipped.findElement(element).textContent);
							}
						});
					});

				});
			});
			$('.loading').fadeOut();
		}

		function sortByLengthDesc(a, b) {
			if (a.length > b.length)
				return -1;
			if (a.length < b.length)
				return 1;
			return 0;
		}
		var averageSentenceLength = [];
		var sentences = sentenceArray(rawText);
		var sortedSentences = sentenceArray(rawText).sort(sortByLengthDesc);
		var sentenceLengthArray = [];
		$('#longestSentence_text').html(sortedSentences[0]).hide();
		$('#sentenceList').hide();
		$('#longest').click(function() {
			$('#sentenceList').html('<li><h3>10 Longest Sentences</h3></li>');
			for (var sentence in sortedSentences) {
				if (sentence > 9) {
					$('#sentenceList').fadeIn();
					$('#longestClose').click(function() {
						$('#sentenceList').hide();
					});
					return;
				} else {
					$('#sentenceList').append('<li><span class="sentenceCount">' + countWords(sortedSentences[sentence]) + ' words.</span>' + sortedSentences[sentence] + '</li>');

				}

			}
		});
		for (var sentence in sentences) {
			sentenceLengthArray.push(countWords(sentences[sentence]));
		}
		averageSentenceLength = avgArray(sentenceLengthArray);
		//console.log(averageSentenceLength, sentenceLengthArray);

		$('#longestSentence_label').html('Longest Sentence: ' + countWords(sortedSentences[0]) + ' words.').click(function() {
			$('#longestSentence_text').slideToggle();
		});
		$('#averageSentence_label').html('Average Sentence: ' + averageSentenceLength + ' words.');
		displayOutput();

		if ($('#enableTooltips').is(':checked')) {
			T('.passive', 'Passive verbs are things that are not necessarily always bad.');
			T('.weakword', 'Weak word. Could possibly be stronger.');
			T('.homonym', 'Homonym. Make sure you\'ve used the right spelling.');
			T('.preposition', 'Ends with preposition');
			//	T('.adverb','Adverb' + $(this).val());

			$('.adverb').each(function() {
				var tipWord = $(this).text();
				Tipped.create(this, /* tipWord +  */ 'Adverb', {
					skin: 'yellow',
					onShow: function(content, element) {
						console.log(Tipped.findElement(element).textContent);
					}
				});
			});

			T('.saidwords', '"Said" Replacements');
			T('.greek', 'Greek origin');
			T('.latin', 'Latin origin');
			T('.german', 'Germanic origin');
		}
		var totalfound = 0;
		// Make some counts
		$('.count').text('');
		var countHash = {};
		for (var key in regex_hash) {
			$('.' + key + ' .count').text(': ' + output.find('.' + key).length);
			countHash[key] = output.find('.' + key).length;
		}
		$('.count').show();
		$('#sentenceGraph').sparkline(sentenceLengthArray);
		if (true) {

			var wordcount = $('#inputbox').val().split(/\b[\s!?,;:']/).length;
			$('#wordcount').text(wordcount);
			//	  var adverb_ratio = (countHash["adverb"]/wordcount)*1000;
			//	  var adverb_percent = "0% " + ((adverb_ratio/12)*100).toFixed(0).toString() + '%';
			//	  alert(percFromRatio(countHash["adverb"],wordcount,13));
			console.log(countHash);
			$('#adverbGrade').css("backgroundPosition", percFromRatio(countHash.adverb, wordcount, 15));
			$('#adverbLabel').html(countHash.adverb + " Adverbs");
			var adjCount = returnMatches('adjective', rawText);
			$('#adjectiveGrade').css("backgroundPosition", percFromRatio(adjCount, wordcount, 90));
			$('#adjectiveLabel').html(adjCount + " adjectives");
			$('#weakGrade').css("backgroundPosition", percFromRatio(countHash.weak, wordcount, 13));
			$('#weakLabel').html(countHash.weakword + " weak words");
			$('#passiveGrade').css("backgroundPosition", percFromRatio(countHash.passive, wordcount, 10));
			$('#passiveLabel').html(countHash.passive + " passive words");
			$('#saidGrade').css("backgroundPosition", percFromRatio(countHash.saidwords, wordcount, 13));
			$('#saidLabel').html(countHash.saidwords + " 'said' alternatives");
			$('#prepositionGrade').css("backgroundPosition", percFromRatio(countHash.preposition, wordcount, 8));
			$('#prepositionLabel').html(countHash.saidwords + " preposition ends");
			$('#presentLabel').html(countPresentTense(rawText) + " present tense");
			$('#pastLabel').html(countPastTense(rawText) + " past tense");
			$('#greekLabel').html(returnMatches('greek', rawText) + " Greek roots");
			$('#latinLabel').html(returnMatches('latin', rawText) + " Latin roots");
			
		}
	}

	$('.both_ribbon').fadeIn('slow');
});

function returnMatches(key, text) {
	var rgx = new RegExp('([^a-z])(' + wordArray[key].join('|') + ')(s)?', 'ig');
	return text.match(rgx).length;
}

function countPastTense(text) {
	var regex = /\b(arose|awoke|was|were|bore|beat|became|began|bent|bet|bit|bled|blew|broke|brought|built|burned|burnt|burst|bought|caught|chose|clung|came|cost|crept|cut|dealt|dug|dived|dove|did|drew|dreamed|dreamt|drank|drove|ate|fell|fed|felt|fought|found|fit|fitted|fled|flung|flew|forbade|forbad|forgot|forgave|forwent|froze|got|gave|went|ground|grew|hung|hanged|had|heard|hid|hit|held|hurt|kept|knelt|kneeled|knitted|knit|knew|laid|led|leapt|leaped|left|lent|let|lay|lit|lighted|lost|made|meant|met|paid|proved|put|quit|read|rode|rang|rose|ran|sawed|said|saw|sought|sold|sent|set|sewed|shook|shaved|sheared|shone|shined|shot|showed|shrank|shrunk|shut|sang|sank|sat|slew|slept|slid|sneaked|snuck|spoke|sped|spent|spilled|spilt|spun|spat|spit|split|spread|sprang|stood|stole|stuck|stung|stank|stunk|strewed|struck|strove|strived|swore|swept|swam|swung|took|taught|tore|told|thought|thrived|throve|threw|underwent|understood|upset|woke|waked|wore|wove|wept|won|wound|withdrew|wrung|wrote)\b/g;
	return text.match(regex).length;
}

function countPresentTense(text) {
	var regex = /\b(arise|awake|be|bear|beat|become|begin|bend|bet|bite|bleed|blow|break|bring|build|burn|burst|buy|catch|choose|cling|come|cost|creep|cut|deal|dig|dive|do|draw|dream|drink|drive|eat|fall|feed|feel|fight|find|fit|flee|fling|fly|forbid|forget|forgive|forgo|freeze|get|give|go|grind|grow|hang|have|hear|hide|hit|hold|hurt|keep|kneel|knit|know|lay|lead|leap|leave|lend|let|lie|(down)|light|lose|make|mean|meet|pay|prove|put|quit|read|ride|ring|rise|run|saw|say|see|seek|sell|send|set|sew|shake|shave|shear|shine|shoot|show|shrink|shut|sing|sink|sit|slay|sleep|slide|sneak|speak|speed|spend|spill|spin|spit|split|spread|spring|stand|steal|stick|sting|stink|strew|strike|strive|swear|sweep|swim|swing|take|teach|tear|tell|think|thrive|throw|undergo|understand|upset|wake|wear|weave|weep|win|wind|withdraw|wring|write)s?\b/g;
	return text.match(regex).length;
}


// BEGIN
var commonWords = ["Youll", "Heat", "Only", "Foot", "Miss", "Year", "Came", "Show", "Moon", "Good", "Like", "Give", "Were", "Deep", "Word", "Name", "Very", "Blue", "Just", "Form", "Much", "Full", "Stay", "That", "Help", "Your", "Line", "Long", "Turn", "Inch", "Same", "Mean", "Fact", "Move", "Tail", "Make", "When", "Word", "Does", "Tell", "Mind", "With", "Free", "Want", "Word", "Well", "Also", "Play", "Warm", "Have", "Look", "Home", "Read", "Hand", "Port", "More", "Gave", "Said", "Even", "Land", "Here", "Must", "Game", "High", "Such", "Week", "Some", "Come", "Each", "What", "Done", "Went", "Able", "Kind", "East", "Need", "Rest", "Noun", "This", "Most", "From", "Star", "Plan", "Wait", "Note", "Near", "Dark", "Self", "Time", "Lead", "Head", "Unit", "Over", "Page", "Know", "Fine", "Town", "Fall", "Cold", "Grow", "Pull", "Rule", "They", "Road", "Love", "Food", "Than", "Four", "Slow", "Call", "Keep", "Will", "Gold", "Last", "Door", "Fill", "City", "Tree", "Down", "Word", "Hard", "Less", "Side", "Sing", "Been", "Snow", "Find", "Draw", "Left", "Late", "Many", "Five", "Fast", "West", "Hold", "Step", "Real", "Life", "Then", "Stop", "Work", "Open", "Seem", "Part", "Next", "Take", "True", "Hour", "Them", "Walk", "Best", "Ease", "Size", "King", "Boat", "Farm", "Pass", "Both", "Mark", "Book", "Knew", "Told", "Mile", "Fire", "Made", "Feet", "Care", "Rock", "Half", "Area", "Took", "Rain", "Live", "Room", "Ship", "Wind", "Idea", "Fish", "Song", "Pose", "Once", "Base", "Hear", "Test", "Busy", "Sure", "Body", "Soon", "Face", "Wood", "Main", "Bird", "Talk", "Girl", "Feel", "List", "Back", "Ever", "Found", "Above", "Young", "There", "Usual", "Plain", "Other", "Color", "Watch", "Horse", "Which", "Bring", "North", "Leave", "Their", "About", "State", "Would", "Black", "Short", "Write", "Class", "Began", "These", "Thing", "Shape", "Could", "Carry", "Group", "Check", "Order", "River", "South", "Sound", "Piece", "Until", "Laugh", "Those", "Music", "Water", "Whole", "Often", "Paper", "Heard", "First", "Begin", "Plane", "Place", "White", "Where", "After", "Round", "Every", "Night", "Early", "Close", "Press", "Under", "Force", "Reach", "While", "Don'T", "Story", "Great", "Might", "Table", "Wheel", "Start", "Think", "Since", "Cross", "Cause", "Right", "Vowel", "Clear", "Three", "Never", "Small", "Sleep", "Quick", "Large", "Cover", "Green", "Money", "Serve", "Spell", "Plant", "Learn", "Final", "Still", "Teach", "Study", "Front", "Stood", "Voice", "Drive", "Power", "Ready", "Pound", "Light", "House", "Stand", "Field", "Earth", "Build", "Again", "World", "Point", "Among", "Mother", "Animal", "Weight", "Though", "Father", "Should", "Enough", "Family", "Direct", "Change", "Beauty", "Answer", "Notice", "Happen", "School", "Govern", "Follow", "Friend", "Appear", "Person", "Center", "Second", "Number", "Letter", "Wonder", "Always", "Minute", "Strong", "Better", "People", "Behind", "Toward", "Common", "Record", "Differ", "Street", "Simple", "Before", "During", "Course", "Little", "Travel", "Figure", "Island", "Ground", "Object", "Decide", "Listen", "Surface", "Machine", "Picture", "Correct", "Morning", "Hundred", "Nothing", "Produce", "Perhaps", "Several", "Certain", "Country", "Special", "Example", "Between", "Against", "Pattern", "Measure", "Through", "Problem", "Thought", "Science", "Product", "Contain", "Brought", "Numeral", "Develop", "Question", "Thousand", "Mountain", "Possible", "Sentence", "Complete", "Together", "Interest", "Remember", "Language", "Children"];

function frequentWords() {
	wordsonly = $('#inputbox').val().replace(/[\"\';:\.,!?]+/ig, "");
	// alert(lorem);
	var arr = wordsonly.split(/\s+/);
	var a = countvalues(arr);
	var msg = '';
	var myData = [];

	var i = 0;
	var topWords = '';


	String.prototype.hashCode = function() {
		var hash = 0;
		if (this.length === 0) return hash;
		for (i = 0; i < this.length; i++) {
			char = this.charCodeAt(i);
			hash = ((hash << 5) - hash) + char;
			hash = hash & hash; // Convert to 32bit integer
		}
		return hash;
	};



	// To see how many times each element appears
	for (var elem in a) {
		myData[i] = new word(elem, a[elem]);
		i++;
		//msg += '\n' + elem + ' : ' + a[elem];
	}
	myData.sort(sortByNumber);
	$("#occurrence").html("");
	$("#characterList").html("");
	for (var i = 0; i < myData.length; i++) {
		// msg += '\n' + myData[i].WordElem + ' : ' + (myData[i].Number);
		var trimmedWord = myData[i].WordElem.replace(/[^a-zA-Z]+/gi, "");
		if (myData[i].Number > 3 && trimmedWord.length > 3) {

			topWords = topWords + myData[i].WordElem + ',';

			if (/([A-Z]{1}[a-z]+)/.test(trimmedWord) && commonWords.indexOf(trimmedWord) == -1) {
				$("#characterList").append('<li class="character pointer" onclick="listSentences(\'' + trimmedWord + '\')">' + trimmedWord + ' <span class="characterCount">' + myData[i].Number + ' mentions</span></li>');
			}
			$("#occurrence").append("<li>" + myData[i].WordElem + " <span class=\"theCount\">" + myData[i].Number + "</span></li>");
		}
		//alert (myData[i].WordElem);
		//alert (myData[i].Number);
		//v += myData[i].WordElem + " (" + myData[i].Number + ")\n";
	}
	$("#occurrence li:even").addClass('even');
	$("#occurrence li:odd").addClass('odd');
	T('#nameColumn', 'Click a name to list all sentences where the name occurs.');


	topWordsSplit = topWords.split(',');

	//alert(topWords.hashCode());
	// ADD FREQUENTLY USED WORDS TO HASH, FIND THOSE WORDS AND HIGHLIGHT THEM
	// END
}