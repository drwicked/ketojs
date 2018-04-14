/* ========================================================================
 * Bash.js :p
 * ======================================================================== */

var bjs = {
    MOBILE_BROWSER_REGEX: /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i,
    EMAIL_REGEX: /\S+@\S+\.\S+/,
    SEPARATOR_REGEX: / |,/,

    AUTOCOMPLETE: ['./signup', 'cat', 'cat README', 'cat signup', 'help', 'clear', 'pwd', 'rm', 'rm README', 'rm signup', 'antagonist', 'protagonist', 'myself', 'character', 'secondary'],
    DEFAULT_PROMPT: 'user@museboot.com:~$',

    MAX_HISTORY_LINE_COUNT: 25,

    lastInput: '',
    input: '',
    email: '',
    password1: '',
    password2: '',
};

if (bjs.MOBILE_BROWSER_REGEX.test(navigator.userAgent.toLowerCase())) {
    bjs.MAX_HISTORY_LINE_COUNT = 10;
    // force the mobile browser user to tap the page before typing
    $('#cursor').removeClass('blink');
}

storage=$.localStorage;

$(function () {
	$('#contentWrap').hide();
	user.theme = storage.get('theme') || 'boot.css';
	$('#css').attr('href',user.theme);
	$('#topRight').on('click',function(){
		$('#css').attr('href',$('#css').attr('href') == 'boot.css' ? 'notebook.css' : 'boot.css');
		storage.set('theme',$('#css').attr('href'));
		//$(this).css('background', $(this).css('background') == '' ? 'Net' : 'Price';)
	});
	setTimeout(function(){
		$('#contentWrap').fadeIn();
		
		h("Are you ready to get ready to write? [Y/N]")
		$('#prompt').text('>');
	}, 1000)
});

/* ========================================================================
 * History management
 * ======================================================================== */

//!Add to history
var after;
var timePerLetter = 2000;
var newLineCharacter = '|';

function h(line, tag, next) {
	console.log($("#prompt").offset().top);
	 
    var lineArr;
    var contentArray = line.split(""),
        current = 0,
        elem = $("#typed");
    if (!!tag){
	    elem.append($('<'+tag+'>'));
		elem = $('#typed '+tag);
    }
    var letterInterval = setInterval(function() {
        if(current < contentArray.length) {
	        if (contentArray[current] == '|') {
		        elem.html(elem.html() + '<br/>');
/*
		        $('html, body').animate({
			        scrollTop: $("#scroll").offset().top - 200
			    }, 500);
*/
		        console.log("|");
		        current++;
	        } else {
	            elem.html(elem.html() + contentArray[current++]);
	        }
        } else {
	        console.log("done");
	        clearInterval(letterInterval);
	        //$('html, body').animate({scrollTop:$(document).height()}, 500);
			$('#history').append( '<p>'+$('#typed').html()+'</p>' );
			$('#typed').html('');
			if (!!next){
				next();
				
			}
	        $('html, body').animate({
		        scrollTop: $("#scroll").offset().top - 200
		    }, 1000);
			
        }
    }, chance.integer({min:20,max:30}));
    
	while ($('#history').children().length >= bjs.MAX_HISTORY_LINE_COUNT) {
        $('#history p').first().remove();
    }
}

function c(txt,noDoc) {
	if (noDoc) {
		
	} else {
		addToDoc(txt);
		
	}
    $('#history').append('<p>'+txt+'</p>');
}

/* ========================================================================
 * Input rendering
 * ======================================================================== */

function renderInput() {
    if ($('#prompt').text().indexOf('password') == '0') {
        var input = '';
        for (var i = 0; i < bjs.input.length; i++) {
            input = input + '*';
        }
        $('#input').text(input);
    } else {
        $('#input').text(bjs.input);
    }
}

/* ========================================================================
 * Control keys
 * ======================================================================== */

$(document).on('keydown', function(event) {
    // backspace
    if (event.which == 8) {
        bjs.input = bjs.input.substring(0, bjs.input.length - 1);
        renderInput();
        return false;
    // tab
    } else if (event.which == 9) {
        if (bjs.input.trim() == '') {
            return false;
        }
        var input = bjs.input.trimLeft();
        for (var i = 0; i < bjs.AUTOCOMPLETE.length; i++) {
            if (bjs.AUTOCOMPLETE[i].indexOf(input) == 0) {
                bjs.input = bjs.AUTOCOMPLETE[i];
                renderInput();
                break;
            }
        }
        return false;
    // up arrow
    } else if (event.which == 38) {
        if (bjs.input.trim() == '') {
            bjs.input = bjs.lastInput;
            renderInput();
        }
    // Ctrl+L
    } else if (event.ctrlKey && (event.which == 76 || event.which == 108)) {
        $('#history').text('');
        return false;
    // Ctrl+C
    } else if (event.ctrlKey && (event.which == 67 || event.which == 99)) {
        var line = $('#line').text();
        if (bjs.input != '') {
            line = line.trim();
            if (bjs.input[bjs.input.length - 1] == ' ') {
                line = line + ' ';
            }
        }
        h(line + '^C');
        bjs.input = '';
        renderInput();
        // reset potential sign up attempt
        $('#prompt').text(bjs.DEFAULT_PROMPT);
        bjs.email = '';
        bjs.password1 = '';
        bjs.password2 = '';
        return false;
    }
});

function addToDoc(text) {
	//text = text.replace(/<\/?[^>]+(>|$)/g, "") + '\n';
	text = text.replace(/(\|)/g, "\n")
	doc += text + '\n';
	//$('#outDoc').html(doc);
}


function stepTwo(){
	part = 2;
	step = 1;
	console.log("Step two");
	var qString = getQuote();
	doc += qString + '\n';
	$('#line').hide();
	var adjList = '';
	console.log(user.adjectives);
	
	
	$('#history').html('Five adjectives: '+user.adjectives.join(', '));
	h("Well done!||Here's another cookie.",null,function(){
		h(qString,'blockquote',function(){
			setTimeout(function(){
				h("Select the subject for the next set of exercises.|Type 'myself' or 'character'",null,function(){
					$('#line').show();
				});
			}, 2000)
		});
		
	});
	
}
var lastQuote;
function getQuote() {
	var q = chance.pick(quoteCookies);
	var quo = '"'+q.quote + '" - ' + q.author;
	if (lastQuote == quo){
		quo = getQuote();
	}
	addToDoc('\n'+quo+'\n');
	lastQuote = quo;
	return quo;
}

function verbPhrase() {
	sentence = chance.pick(characterVerbs);
	if (user.self === true) {
		sentence = sentence.replace( new RegExp("my protagonist","igm"),"I");
		sentence = sentence.replace(/\[([^\]]+)\]/g, '$1');
		sentence = sentence.replace( new RegExp("posPronoun","igm"),"I'm");
		sentence = sentence.replace( new RegExp("pronoun","igm"),"I");
	} else {
		sentence = sentence.replace( new RegExp("my protagonist","igm"),user.name);
		sentence = sentence.replace(/\[([^\]]+)\]/g, '$1s');
		sentence = sentence.replace( new RegExp("posPronoun","igm"),user.pronoun+"'s");
		sentence = sentence.replace( new RegExp("pronoun","igm"),user.pronoun);
	}
	return sentence;
}

/* ========================================================================
 * Keypress
 * ======================================================================== */

var doc = "";

$(document).on('keypress', function(event) {
    // enter

    if (event.which == 13) {
	    var input = bjs.input.trim();
        var output = '';
       // $('#history').append( $('p').text(':' + input) );
        if (bjs.input.trim() != '') {
            bjs.lastInput = bjs.input;
	        
        }
        //document.getElementById('prompt').scrollIntoView();
       //$('html, body').animate({scrollTop:$('#content').offset()}, 500);
        cmd = true;
			
		switch (input) {
            case 'help':
                h("Here's where the help goes.")
                output = 'Type things.';
                break;

            case 'help -s':
                h("Well you're no fun...");
                output = 'Type "./signup" to start the sign up process.';
                break;

            case 'save':
                h('Saving file...');
                var blob = new Blob([doc], {type: "text/plain;charset=utf-8"});
				saveAs(blob, "hello world.txt");
                output = "Saved";
                break;

            case 'ls -l':
                h('total 16K');
                h('-rw-rw-r-- 1 signup signup     62 sep 12 15:07 README');
                output = '-rwxrwxr-x 1 signup signup 8K sep 12 15:09 signup';
                break;

            case 'ls -lh':
                h('total 16K');
                h('-rw-rw-r-- 1 signup signup     62 sep 12 15:07 README');
                output = '-rwxrwxr-x 1 signup signup 8K sep 12 15:09 signup';
                break;

            case 'pwd':
                output = '/home/signup';
                break;

            case 'clear':
                $('#history').text('');
                break;

            case ';':
                output = "syntax error near unexpected token `;'";
                break;

            case 'rm':
                output = 'rm: missing operand';
                break;

            case 'rm signup':
                output = "I wouldn't do that if I were you";
                break;

            case 'rm README':
                output = "I wouldn't do that if I were you";
                break;

            case 'rm *':
                output = 'cookies deleted successfully';
                break;

            case 'rm -rf /':
                output = 'cookies deleted successfully';
                break;

            case 'cat':
                break;

            case 'cat README':
                h('Say my name and I am no more.');
                output = 'Who am I? My name is {ecnelis}.';
                break;

            case 'dir':
                output = 'do I look like Command Prompt to you?';
                break;

            case './signup':
                h('This utility will walk you through creating a CTF365.com account.');
                output = 'Press ^C at any time to quit.';
                $('#prompt').text('email address:');
                break;

            default:
                if (input != '') {
                    if ($('#prompt').text().indexOf('email address:') == 0) {
                        if (bjs.EMAIL_REGEX.test(bjs.input)) {
                            bjs.email = input;
                            $('#prompt').text('password:');
                        } else {
                            output = 'Invalid email address: ' + input;
                        }
                    } else if ($('#prompt').text().indexOf('password:') == 0) {
                        bjs.password1 = input;
                        $('#prompt').text('password, again:');
                    } else if ($('#prompt').text().indexOf('password, again:') == 0) {
                        bjs.password2 = input;
                        if (bjs.password1 != bjs.password2) {
                            output = 'The passwords you typed do not match';
                            bjs.password1 = '';
                            bjs.password2 = '';
                            $('#prompt').text('password:');
                        } else {
                            h('Please wait...');
                            // var data = {
                            //     email: bjs.email,
                            //     password: bjs.password1,
                            // };
                            // $.ajax({
                            //     url: '/url-to-signup',
                            //     type: 'POST',
                            //     data: data,
                            //     dataType: 'json',
                            //     async: false,
                            //     success: function(resp) {
                            //         h('Your CTF365.com account has been created successfully.');
                            //         h('Please <a href="#">click here</a> to sign in.', true);
                            //         $('#prompt').text(bjs.DEFAULT_PROMPT);
                            //     },
                            // });
                            h('Your CTF365.com account has been created successfully.');
                            h('Please <a href="#">click here</a> to sign in.', true);
                            $('#prompt').text(bjs.DEFAULT_PROMPT);
                        }
                    } else {
/*
                        var command = bjs.input.trim().split(bjs.SEPARATOR_REGEX)[0];
                        output = command + ': command not found';
*/
                       console.log("other");
                       cmd = false;
                    }
                }
        }
        
         if (output.trim() != '') {
            //h(output);
            $('#history').append('<p>'+output+'</p>');
            console.log("out");
        }
        console.log(part,step,input,cmd);
	if (cmd === false || part == 0) {
		
	
		switch (part) {
	        case 0:
	        		if (input == 'Y'||input == 'y') {
					c("Y",true);
					$('#line').hide();
					h("Good for you! Here's an inspirational quote-cookie:",null,function(){
						
						h(getQuote(),'blockquote',function(){
							h('Press enter to continue.');
							$('#line').show();
						});
					})
				} else if (input == 'again') {
					
					h(getQuote(),'blockquote');
				} else if (input == 'N'|| input == 'n') {
					
				} else {
					var notice = chance.pick(noticeList);
					var adjectiveQ = "List five adjectives to describe " + notice;
					addToDoc(adjectiveQ);
					h("Let's get started!||"+adjectiveQ + "|Press enter after each word or use commas between words.");
					user.adjectives = [];
					part = 1;
					step = 1
				}
		        	break;
	        case 1:
	        		
	        		if (input == 'skip') {
					stepTwo();
				} else {
					if (step <= 5) {
					//	step++
						//c(step+': '+input);
						$('#history').append(step+': '+input+'<br/>');
						console.log("adj",input);
						if (input.split(',').length > 3) {
							user.adjectives = input.split(',');
							stepTwo();
						} else {
							user.adjectives.push(input);
							if (step == 5) {
								stepTwo();
							} else {
								step++
								
							}
							
						}
						//output = input;
					}
					
				}
	        		break;
	        	case 2:
	        	//PART TWO
	        		switch (step) {
		        		case 1:
		        			switch (input) {
			        			
				            case 'myself':
				            case 'Myself':
				            		user.pronoun = "I";
								user.self = true;
								user.protag = "my";
								user.subject = "my";
								console.log("my");
								h("What is your name?");
								
								step = 3;
				            		break;
				            case 'character':
				            case 'Character':
				            		c(input,true);
								h("What kind of character?|Type antagonist, protagonist or secondary");								
								
				            		break;
				            	case 'antagonist':
				            	case 'Antagonist':
				            	case 'protagonist':
				            	case 'Protagonist':
				            	case 'secondary':
				            	case 'Secondary':
				            		user.subject = input;
				            		c(input,true);
								h("What is your "+user.subject+"'s gender?|Type M, F, or just press enter.");
				            		step++;
				            		break;
		        			}
		        		
		        			break;
		        		case 2:
		        		// NAME
		        			user.name = input.trim();
		        			output = user.name;
		        			c(input);
		        			if (user.subject == "my") {
			        			//user.name = input.trim();
			        			user.self = true;
			        			step++;
		        			} else {
			        			
			        			switch (input) {
				        			case 'M':
				        			case 'm':
				        			case 'Male':
				        			case 'male':
				        				user.gender = "male";
				        				user.pronoun = "he";
				        				user.possessive = "his";
				        				break;
				        			case 'F':
				        			case 'f':
				        			case 'Female':
				        			case 'female':
				        				user.gender = "female";
				        				user.pronoun = "her";
				        				user.possessive = "her";
				        				break;
				        			default:
				        				user.gender = "other";
				        				user.pronoun = "they";
				        				user.possessive = "their";
				        				break;
			        			}
			        			h("What is "+user.possessive+" name?");
			        			step++;
							user.self = false;
		        			}
						
		        			break;
		        		case 3:
		        			//Verbfind()
		        			//sentence = chance.pick(characterVerbs).replace( new RegExp("my protagonist","igm"),user.protag);
						if (user.subject !== "my") {
							user.name = input;
							c("Writing about "+user.name);
						}
			        		//c(input);
			        		h('Finish the sentence with a 3-word verb phrase including the gerund (-ing) form of any verb but "being".');
			        		sentence = verbPhrase();
						console.log(sentence);
			        		$('#prompt').html(sentence + " >");
						$("#input").attr("placeholder", "(ex.) "+chance.pick(threeWord));
		        			step++;
		        			break;
		        		case 4:
		        			if (input.split(' ').length >= 2) {
			        			var gerund = true;//input.match( /(\b[a-z]+ing)/ig );
			        			if (gerund === true) {
				        			addToDoc(sentence+" "+input);
				        			c(sentence+" "+input);
				        			$('#typed').html('');
				        			$('#prompt').html(">");
				        			h("Rewrite the above as a 2-word sentence with a new verb that increases intensity, specificity or emotional impact.");
				        			
			        			} else {
				        			$('#typed').html('Your sentence must contain a word ending in -ing.');
			        			}
			        			step++;
		        			} else if (input == 'again') {
			        			$('#prompt').html(verbPhrase() + " >");
		        			} else if (input == 'example') {
			        			$('#typed').append('<p>example: '+chance.pick(threeWord) + '</p>');
		        			}
		        			break;
		        		case 5:
			        		c(input);
		        			addToDoc(input);
		        			h("Take the noun in your verb phrase and make it the subject of a two-word sentence that your protagonist would agree with.");
		        			h("If your verb phrase doesn’t include a noun, turn its pronoun, adverb or adjective into one.");
		        			step++
		        			break;
		        		case 6:
			        		c(input);
		        			h("Find a new verb that mean basically the same thing but increase its intensity, specificity or emotional impact.");
		        			step++
		        			break;
		        		case 7:
			        		c(input);
		        			h("Write a sentence in which your protagonist is the subject using the best verb from above.");
		        			step++
		        			break;
		        		case 8:
			        		c(input);
		        			h("GET WARM!",null,function(){
			        			h("What's the emotional tone of what you're writing next?  What do you want your readers to feel?");
		        			});
		        			step++
		        			break;
		        		case 9:
			        		c(input);
		        			h("Describe how that emotion feels in your body.");
		        			step++
		        			break;
		        		case 10:
			        		c(input);
		        			h("Write a sentence in which the way a character performs some action makes it clear they’re feeling that emotion.");
		        			step++
		        			break;
		        		case 11:
			        		c(input);
		        			h("If not just the expression of that emotion, but the emotion itself were completely unacceptable to "+user.name+" what might "+user.pronoun+" pretend to feel instead?");
		        			step++
		        			break;
		        		case 12:
			        		c(input);
		        			h("Think about the relationship being described in the following metaphor:",null,function(){
			        			h(chance.pick(metaphor).quote,'blockquote',function(){
				        			setTimeout(function(){
					        			h('Rewrite it as a simile (using “like” or “as”)');
				        			}, 2000);
			        			});
		        			});
		        			step++
		        			break;
		        		case 13:
			        		c(input);
		        			h("What does it mean?");
		        			step++
		        			break;
		        		case 14:
			        		c(input);
		        			h("Rewrite your simile comparing the same subject to "+chance.pick(comparison));
		        			step++
		        			break;
		        		case 15:
			        		c(input);
		        			h("Rewrite it as a metaphor.");
		        			step++
		        			break;
		        		case 16:
			        		c(input);
		        			h("Get to work!",null,function(){
			        			h("Type 'save' to export your work to open in the word processor of your choice and get started.");
		        			});
		        			//h(doc);
		        			//step++
		        			break;
	        		}
        }
    }		
       
       
        bjs.input = '';
    // != enter
    } else {
        bjs.input = bjs.input + String.fromCharCode(event.which);
    }
    renderInput();
});

var cmd;

/* ========================================================================
 * Toggle cursor when focus changes
 * ======================================================================== */

$('input').focus(function() {
    $('#cursor').addClass('blink');
});

$('input').blur(function() {
    $('#cursor').removeClass('blink');
});

$(document).on('click touchstart', function() {
    $('input').focus();
});

/* ========================================================================
 * Section
 * ======================================================================== */
 
 
 var noticeList = [
	"the air touching your skin right now.",
	"how the inside of your mouth tastes right now.",
	"the shape your fingers made on the keyboard right now.",
	"the way your feet feel right now.",
	"how it feels when you inhale deeply right now.",
	"the quality of light in the room right now.",
	"the way it feels if you tighten all the muscles in your face right now.",
	"anything you’re hearing right now.",
	"how your stomach feels right now.",
	"the condition of your clothes right now.",
	"the way your keyboard looks right now.",
	"your posture right now.",
	"the object closest to your left right now.",
	"your mood right now.",
	"the position of your legs right now.",
	"the object closest to the ceiling of the room you’re in right now right now.",
	"the color whatever is closest on your right right now.",
	"the quality of your breathing right now",
	"the texture of your hair if you touch it right now.",
	"the shape and texture of your finger nails right now.",
	"the place in your body that holds the most tension right now.",
	"the way that the part of your body that feels the best feels right now.",
	"the most distant object you can see right now.",
	"the way it feels to drop your chin to your chest right now",
	"the space between you and the closest door right now",
];
var characterVerbs = [
	"My protagonist [hate]",
	"My protagonist [fear]",
	"My protagonist [love]",
	"My protagonist [start] every day by",
	"My protagonist would never be caught",
	"When posPronoun really blissed out, my protagonist can be seen",
	"Under stress, my protagonist [start]",
	"My protagonist is happiest",
	"My protagonist [dream] of",
	"When posPronoun exceptionally angry my protagonist [start]",
	"My protagonist [believe] love means",
	"My protagonist [believe] you can never go wrong",
	"My protagonist [feel] like posPronoun always",
	"When my protagonist was a child pronoun loved",
];

var threeWord = [
	"speaking to strangers",
	"crawling through spiders",
	"shutting down emotionally",
	"painting portraits of children",
	"photographing poisonous snakes"
]

var comparison = [
	"a mammal",
	"something from the field of astronomy",
	"an article of clothing",
	"something from the Middle Ages",
	"some kind of weapon",
	"something from Star Wars/Star Trek the imagined future",
	"a fictional character",
	"something you’d buy at the grocery store",
	"one of your verbs",
	"a song or other piece of music",
	"some kind of commerce",
	"a particular sort of  person",
	"some kind of intoxicant or intoxication",
	"something from the ocean",
	"something that didn’t exist five years ago",
	"a memory from your childhood",
	"something mechanical",
	"something obsolete",
	"a mythological creature or person",
	"a part of the human body",
	"a weather event",
	"some kind of plant",
	"something very tiny",
];
var metaphor = [
	{quote:"Reading is a means of thinking with another person’s mind; it forces you to stretch your own."},
	{quote:"It is good to rub and polish our brain against that of another."},
	{quote:"Wear your learning like your watch, in a private pocket; do not pull it out and strike it merely to show you have one. "},
	{quote:"Words are the physicians of a mind diseased."},
	{quote:"Such as are your habitual thoughts, such also will be the character of your mind; for the soul is dyed by the color of the thoughts."},
	{quote:"Words are, of course, the most powerful drug used by mankind."},
	{quote:"Men heap together the mistakes of their lives, and create a monster they call Destiny. ",author:"JOHN OLIVER HOBBES"},
	{quote:"Mrs Campbell is an aged British battleship sinking rapidly and firing every available gun on her rescuers."},
	{quote:"Barbara was a hyena in syrup."},
	{quote:"He looked as though he’d been weaned on a pickle."},
	{quote:"His ears made him look like a taxi cab with both doors open."},
	{quote:"He was a one-man slum."},
	{quote:"She is a shiver looking for a spine to run up."},
	{quote:"He occasionally stumbled over the truth, but would hastily pick himself up and hurry on as if nothing had happened. "},
	{quote:"A man is not necessarily intelligent because he has plenty of ideas, any more than he is a good general because he has plenty of soldiers.", author:"NICOLAS CHAMFORT"},
	{quote:"The desire for success lubricates secret prostitutions in the soul.", author:"NORMAN MAILER"},
	{quote:"If you’re black, you got to look at America a little bit different. You got to look at America like the uncle who paid for you to go to college, but who molested you.", author:"CHRIS ROCK"},
	{quote:"Love may be the fairest gem which Society has filched from Nature.", author:"Balzac"},
	{quote:"Love doesn’t just sit there, like a stone, it has to be made, like bread; remade all the time, made new.", author:"URSULA K. LE GUIN"},
	{quote:"Anger is the fluid that love bleeds when you cut it.", author:" C. S. LEWIS"},
	{quote:"Art washes away from the soul the dust of everyday life.", author:"Pablo Picasso"},
	{quote:"All the world’s a stage, and all the men and women merely players.", author:"William Shakespeare"},
	{quote:"A committee is a cul-de-sac down which ideas are lured and then quietly strangled."},
	{quote:"I find the great thing in this world is not so much where we stand, as in what direction we are moving. To reach the port of heaven, we must sail sometimes with the wind and sometimes against it— but we must sail, and not drift, nor lie at anchor..", author:"OLIVER WENDELL HOLMES, SR"},
	{quote:"In the depth of winter, I finally learned that within me there lay an invincible summer."},
];

var quoteCookies = [
{quote:"Inspiration is just the sudden dissipation of fear.",author:"Alex Baze"},
{quote:"To achieve great things, two things are needed: a plan, and not quite enough time.",author:"Leonard Bernstein"},
{quote:"Nothing that is done for the first time ever worked before.",author:"Steven Brust"},
{quote:"An idea that is not dangerous is unworthy of being called an idea at all.",author:"Oscar Wilde"},
{quote:"You can't study the darkness by flooding it with light.",author:"Edward Abbey"},
{quote:"Myths are public dreams, dreams are private myths.",author:"Joseph Campbell"},
{quote:"Far and away the best prize that life offers is the chance to work hard at work worth doing.",author:"Theodore Roosevelt"},
{quote:"Wanting to meet an author because you like his work is like wanting to meet a duck because you like paté.",author:"Margaret Atwood"},
{quote:"You confuse two things: solving a problem and stating a problem correctly.  It is only the second that is obligatory for the artist.",author:"Chekhov"},
{quote:"It is not because things are difficult that we do not dare, it is because we do not dare that things are difficult.",author:"Seneca"},
{quote:"We are all apprentices in a craft where no one ever becomes a master.",author:"Ernest Hemingway"},
{quote:"All great passions are angels of God.",author:"WB Yeats"},
{quote:"Do not hoard what seems good for a later place in the book, or for another book; give it, give it all, give it now.",author:"Annie Dillard"},
{quote:"Don't tell me the moon is shining; show me the glint of light on broken glass.",author:" Anton Chekhov"},
{quote:"If you want your children to be brilliant, read them fairy tales. If you want them to be geniuses, read them more fairy tales.",author:" Albert Einstein"},
{quote:"The most beautiful things are those that madness prompts and reason writes.",author:"Andre Gide"},
{quote:"The difference between the almost right word and the right word is ... the difference between the lightning bug and the lightning.",author:"Mark Twain"},
{quote:"After nourishment, shelter and companionship, stories are the thing we need most in the world.",author:"Philip Pullman"},
{quote:"Stories may well be lies, but they are good lies that say true things, and which can sometimes pay the rent.",author:"Neil Gaiman"},
{quote:"The scariest moment is always just before you start.",author:"Stephen King"},
{quote:"Painting consists of long periods of minutes followed by short bursts of hours",author:"Steven Brust"},
{quote:"Start writing, no matter what. The water does not flow until the faucet is turned on.",author:"Louis L'Amour"},
{quote:"There are three rules for writing a novel. Unfortunately, no one knows what they are.",author:"W. Somerset Maugham"},
{quote:"The first draft of anything is shit.",author:" Ernest Hemingway"},
{quote:"Tomorrow may be hell, but today was a good writing day, and on the good writing days nothing else matters.",author:"Neil Gaiman"},
{quote:"You can't wait for inspiration. You have to go after it with a club.",author:"Jack London"},
{quote:"That's what fiction is for. It's for getting at the truth when the truth isn't sufficient for the truth.",author:"Tim O'Brien"},
{quote:"I was a late bloomer. But anyone who blooms at all, ever, is very lucky. ",author:"Sharon Olds"},
{quote:"A non-writing writer is a monster courting insanity.",author:"Franz Kafka"},
{quote:"Education is not the filling of a pail, but the lighting of a fire.",author:"W.B. Yeats"},
{quote:"A small daily task, if it be really daily, will beat the labours of a spasmodic Hercules.",author:"Anthony Trollope"},
{quote:"How do I know what I think until I see what I say?",author:"E.M. Forster"},
{quote:"Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.",author:"G.K. Chesterton"},
{quote:"There's a hell of a distance between wise-cracking and wit. Wit has truth in it; wise-cracking is simply calisthenics with words.",author:"Dorothy Parker"},
{quote:"It is never too late to be what you might have been.",author:"George Eliot"},
{quote:"The world is full of magic things, patiently waiting for our senses to grow sharper.",author:"W.B. Yeats"},
{quote:"Creativity is not a talent or ability. It is the fruit of a person's decision to matter.",author:"Eric Maisel"},
{quote:"Everything you can imagine is real.",author:"Pablo Picasso"},
{quote:"Life isn't about finding yourself. Life is about creating yourself.",author:"George Bernard Shaw"},
{quote:"Whatever you are, be a good one.",author:"Abraham Lincoln"},
{quote:"When one gets quiet, then something wakes up inside one, something happy and quiet like the stars.",author:"W.B. Yeats"},
{quote:"Everybody makes their own fun. If you don't make it yourself, it isn't fun. It's entertainment.",author:"David Mamet"},
{quote:"The secret to getting ahead is getting started.",author:"Mark Twain"},
{quote:"It is what you read when you don't have to that determines what you will be when you can't help it.",author:"Oscar Wilde"},
{quote:"Happiness is neither virtue nor pleasure nor this thing nor that but simply growth. We are happy when we are growing.",author:"W.B. Yeats"},
{quote:"Any emotion, if it is sincere, is involuntary.",author:"Mark Twain"},
{quote:"The human race has only one really effective weapon and that is laughter.",author:"Mark Twain"},
{quote:"The real hero is always a hero by mistake; he dreams of being an honest coward like everybody else.",author:"Umberto Eco"},
{quote:"Reality can be beaten with enough imagination.",author:"Mark Twain"},
{quote:"If you want to tell people the truth, make them laugh, otherwise they'll kill you.",author:"George Bernard Shaw"},
{quote:"The suspense is terrible. I hope it will last.",author:"Oscar Wilde"},
{quote:"Good fiction's job is to comfort the disturbed and disturb the comfortable.",author:"David Foster Wallace"},
{quote:"Nowadays most people die of a sort of creeping common sense, and discover when it is too late that the only things one never regrets are one's mistakes.",author:"Oscar Wilde"},
{quote:"I usually solve problems by letting them devour me.",author:"Franz Kafka"},
{quote:"Plot is a literary convention. Story is a force of nature.",author:"Teresa Nielsen Hayden"},
{quote:"Life isn't divided into genres. It's a horrifying, romantic, tragic, comical science-fiction cowboy detective novel.",author:"Alan Moore"},
{quote:"You can fix anything but a blank page.",author:" Nora Roberts"},
{quote:"True learning must not be content with ideas, which are, in fact, signs, but must discover things in their individual truth.",author:"Umberto Eco"},
{quote:"Great writing is the world's cheapest special effect.",author:"Teresa Nielsen Hayden"},
{quote:"A blank piece of paper is God's way of telling us how hard it is to be God.",author:"Sidney Sheldon"},
{quote:"Do not wait to strike till the iron is hot; but make it hot by striking.",author:"W.B. Yeats"},
{quote:"People may or may not say what they mean... but they always say something designed to get what they want.",author:"David Mamet"},
{quote:"Name the greatest of all inventors. Accident.",author:"Mark Twain"},
{quote:"Words are sacred. They deserve respect. If you get the right ones, in the right order, you can nudge the world a little.",author:"Tom Stoppard"}
];

var chance = new Chance();

var user = {
	
};

function scrollFocus(el,foc) {
	$('html, body').animate({
        scrollTop: $("#"+el).offset().top
    }, 1000);
}

function showAndScroll(el,anim,foc) {
	if( !$('#'+el).is(":visible") ) {
		if (!!anim) {
			$('#'+el).show().animateCss(anim);
		} else {
			$("#"+el).show();
		}
		$('html, body').animate({
	        scrollTop: $("#"+el).offset().top
	    }, 1000);
	}
	if (!!foc){
		$('#'+foc).focus();
	}
	console.log("show and scroll:"+el);
}

function delayed(after){
	clearTimeout($.data(this, 'timer'));
	var wait = setTimeout(function(){
		after();
	},500);
	$(this).data('timer', wait);
}

var part = 0,
step = 1;



/*
var userDetails = new Ractive({
	el: "#subjectLabel",
	template: "#subjectTemplate",
	data: {
	  subjectAsk: "" 
	}
});
*/

var sentence,selectedSubject;
function stepTwoo(){
	console.log("Step two");
	part = 2;
	step = 1;
	var c1 = chance.pick(quoteCookies);
	var c2 = chance.pick(quoteCookies);
	h(c1.quote + ' - ' + c1.author);
	h("Select the subject for the next set of exercises.");
	h("Type 'myself' or 'character'");
	

	$("input:radio[name=selfCharacter]").on('click',function(){
		var selfOrCharacter = $("input:radio[name=selfCharacter]:checked").val();
		if (selfOrCharacter == 'self') {
			user.pronoun = "I";
			user.self = true;
			user.protag = "my";
			$('#subjectLabel').html("What is your name?");
			$('#genderWrap').hide();
			$('#characterType').hide();
			$('#2a').showAndScroll("flipInX","subject");
		} else {
			var pickChar = {
				"protagonist":"Let's work on your protagonist",
				"antagonist":"Tell me about your antagonist",
				"secondary character":"Let's pick one of your secondary characters",
				"love interest":"Let's talk about your protagonist's love interest",
			}
			$('#subjectLabel').html("");
			$('#2a').hide();
			$('#characterType').showAndScroll("flipInX");
			
			$("input:radio[name=character]").on('click',function(){
				var pick = $("input:radio[name=character]:checked").val();
				var charLabel = pickChar[pick];
				
				$('#characterPicked').html( charLabel );
				$('#genderWrap').show();
				$('#characterType').show();
				user.self = false;
				
				$('#2a').show();
				$('#subject').focus();
				$('#subjectLabel').html(pick);	
				$('#twoF').html(" Write a sentence in which your character is the subject using the best verb from above.");
			});
			
			
			
			
		}
		
	});

/*
	$("input:radio[name=character]").on('click',function(){
		selectedSubject = $("input:radio[name=character]:checked").val();
		
		$('.subjectLabel').html(selectedSubject);
		if( !$('#2a').is(":visible") ) {
			$('#2a').show().animateCss("flipInX");
			$('body').scrollTo("#stepTwo",1000);
		}
		$('#subject').focus();
	});
*/
	
	//$('.section').css("background-color","rgba(0, 144, 212, 0.8)");
/*
	if ( !$('#stepTwo').is(":visible") ) {
		$('#stepTwo').show().animateCss("flipInX");
		
		$('body').scrollTo("#stepTwo",1000);
		
	}
	$('#subject').on("keyup",function(){
		delayed(function(){
			if (user.self === false) {
				user.protag = $("#subject").val();
			} else {
				user.protag = "I";
			}
			//$('#protagSubject').val(user.protag);
			console.log(user);
			$('#go2b').showAndScroll("fadeIn");
		});
		
	});
*/
/*
	$('#next2b').click(function(){
		
	});
*/

	function verbFind(){
		console.log(user)
		
		sentence = chance.pick(characterVerbs).replace( new RegExp("my protagonist","igm"),user.protag);
		var genderPronoun = $("input:radio[name=gender]:checked").val();
		user.pronoun = genderPronoun;
		
		if (user.self === true) {
			sentence = sentence.replace(/\[([^\]]+)\]/g, '$1');
			sentence = sentence.replace( new RegExp("posPronoun","igm"),"I'm");
			sentence = sentence.replace( new RegExp("pronoun","igm"),"I");
		} else {
			sentence = sentence.replace(/\[([^\]]+)\]/g, '$1s');
			sentence = sentence.replace( new RegExp("posPronoun","igm"),genderPronoun+"'s");
			sentence = sentence.replace( new RegExp("pronoun","igm"),genderPronoun);
		}
		
		$('#verbFinding').html(sentence);
		$("#threeWordPhrase").attr("placeholder", "(ex.) "+chance.pick(threeWord));
	}
	
	$('#go2b').click(function(){
		$('#go2b').animateCss("bounceOut",function(){
			$('#go2b').hide();
		
			verbFind();
			$('#verbAgain').click(function(){
				verbFind();
			});
			$('#2b').showAndScroll("flipInX");
			
			$('#threeWordPhrase').keyUpDelay(function(){
				var twp = $('#threeWordPhrase').val();
				if (twp.split(' ').length > 2){
					$('#go2c').show();
					
				}
			});
			
			$('#go2c').click(function(){
					$('#go2c').hide();
/*
				$('#go2c').animateCss("bounceOut",function(){
				});
*/
				//$('#verbSentence').html(sentence + " " + $('#threeWordPhrase').val());
				$('#newVerbSentence').html(sentence);
				$('#2c').show();
				
				$('html, body').scrollTo("#2c",1000);
				
				$('#betterVerb').keyUpDelay(function(){
					$('#go2d').show();
				});
				
				$('#go2d').click(function(){
					//$('#verb1').html($('#threeWordPhrase').val());
					//var gerund = $('#newVerb').val().match( /(\b[a-z]+ing)/ig );
					//$('#twoWord').val(gerund[0]);
					$('#go2d').animateCss("bounceOut",function(){
						$('#go2d').hide();
					});
					$('#2d').show();
					$('#twoWord').keyUpDelay(function(){
						$('#go2e').show();
					});
					$('html, body').scrollTo("#2d",1000);
					$('#go2e').click(function(){
						//$('#newVerb3').val(gerund[0]);
						$('#2e').show();
						$('html, body').scrollTo("#2e",1000);
						$('#go2f').click(function(){
							$('#2f').show();
							$('html, body').scrollTo("#2f",1000);
							$('#go3').click(function(){
								$('#stepThree').show();
								$('html, body').scrollTo("#stepThree",1000);
							});
							
						})
					})
				});
			});
			
		})
		
	});
	
}

function stepThree(){
	$('#dominantEmotion').keyUpDelay(function(){
		console.log("foop");
		$('#3b').show();
		$('html, body').scrollTo("#3b",1000);
	});
}
function threeF() {
	$('#disdainLabel').html("If not just the expression of that emotion, but the emotion itself were completely unacceptable to "+user.protag+" what might "+user.pronoun+" pretend to feel instead?");
}

function go(el,foc,called){
	if( !$(el).is(":visible") ) {
		$(el).show()/* .animateCss("flipInX") */;
		$('body').scrollTo(el,1000);
		//!TODO Focus doesn't work
	}
	$(called).hide();
	$(foc).focus();
}

function showComparison(){
	$('#comparison').html("Rewrite your simile comparing the same subject to "+chance.pick(comparison));
}

function stepFour(){
	
	function newMetaphor() {
		var m = chance.pick(metaphor);
		var qStr = m.quote;
		if (!!m.author) {
			qStr += "<br/>"+m.author
		}
		$('#metaphor').html(qStr);
	};
	$('#metaphor').click(function(){
		newMetaphor();
	});
	newMetaphor();
}

$.fn.extend({
    animateCss: function (animationName,after) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
      //  if ( !$(this).is(":visible") ) {
	        $(this).addClass('animated ' + animationName).one(animationEnd, function() {
	            $(this).removeClass('animated ' + animationName);
	            if (!!after){
		            after();
		            
	            }
	        });
       // };
    },
    keyUpDelay: function(after) {
	    $(this).on('keyup',function(){
	        	clearTimeout($.data(this, 'timer'));
			var wait = setTimeout(function(){
				after();
			},500);
			$(this).data('timer', wait);
		    
	    })
    },
    anim: function(animType){
	    if ( !$(this).is(":visible") ) {
		    $(this).show().animateCss(animType)
		    
	    }
    },
    showAndScroll: function(anim,foc) {
	if( !$(this).is(":visible") ) {
		if (!!anim) {
			$(this).show().animateCss(anim);
		} else {
			$(this).show();
		}
		$('html, body').animate({
	        scrollTop: $(this).offset().top
	    }, 1000);
	}
	if (!!foc){
		$(this).focus();
	}
	console.log("show and scroll:");
}
    
});


 