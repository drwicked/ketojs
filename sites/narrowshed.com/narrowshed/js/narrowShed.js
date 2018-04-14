var verbing = '[verbing]',
	stuckType = 'default';

$(function () {
	$('.startHidden').hide();
	$('#q1').keyup(function(event){ 
	    var keyCode = (event.keyCode ? event.keyCode : event.which);   
	    if (keyCode == 13) {
	       start2();
	    } else {
		    $('#start2').show();
	    }
	    $('#q1restate').html('"'+$("#q1").val()+'"');
		
	});
	
	$('#subQuestionLink').on('click',function(){
		console.log('clickety');
		$('#subQuestions').show();
	});
})

function stuckAdverb() {
	$('#adverbDescribe').show();
	scrollToId("adverbDescribe");
	changePlaceholder('q1',"I'm not [verbing] [adverbly]");
	changePlaceholder('q2','I want to [verb] more [adverbly]');
	//scrollToBottom();
}

function stuckExternal() {
	$('#externalDescribe').show();
	scrollToId("externalDescribe");
	changePlaceholder('q1','My [subject] is not [verbing] ([adverbly])');
	changePlaceholder('q2','I want to my [subject] to [verb] (more [adverbly])');
	//scrollToBottom();
}

function start2() {
	console.log($('#externalCheck').val(),$('#adverbCheck').val());
	if ($('#externalCheck').is(":checked")) {
		$('#externalInput').show();
	} else {
		$('#externalInput').hide();
	}
	if ($('#adverbCheck').is(":checked")) {
		$('#adverbInput').show();
	} else {
		$('#adverbInput').hide();
	}
	hideAndProceed('start2','q2section','verb');

	$('#verbing').keyup(function(event){ 
	    var keyCode = (event.keyCode ? event.keyCode : event.which);   
	    if (keyCode == 13) {
	       start3();
	    } else {
		    $('#start3').show();
	    }
	    verbing = $('#verbing').val();
	    $('#q1restate').html('"'+$("#q1").val()+'"');
		
	});
	
};

function start3() {
	$('#verbingRestate').html(verbing);
	$('#q3restate').html('I would know I was '+verbing+' if');
	hideAndProceed('start3','q3section','q3');
	$('#q3').keyup(function(event){
	    $('#q3sectionB').show();
		$('#q3restate').html('I would know I was '+verbing+' if '+$("#q3").val());
	});
	$('#successAction').keyup(function(event){
		var keyCode = (event.keyCode ? event.keyCode : event.which);   
	    if (keyCode == 13) {
	    	start4();
	    } else {
		    $('#start4').show();
	    }
	    
	})
};
var sentenceSoFar ='',
	butFear,butUncertainty,butDesire;
function start4() {
	sentenceSoFar = "I want to be " + verbing + ".<br/>" + $('#q3restate').html()+'.<br/>The first step toward that first win is '+$('#successAction').val();
	console.log(sentenceSoFar);
	$('#soFar').html(sentenceSoFar);
	hideAndProceed('start4','q4section');
	$('#explainMore').click(function(){
		$('#oppositionExplain').show();
	});
	$('.butInput').on('keyup', function(){
		$('#start5').show();
		console.log("but also input:" + this.id);
		if (this.id == "butFear") {
			butFear = $(this).val();
			$('#fearDragon').show();
		} else if (this.id == "butUncertain") {
			butUncertainty = $(this).val();
			$('#uncertaintyDragon').show();
		} else if (this.id == "butDesire") {
			butDesire = $(this).val();
			$('#desireDragon').show();
		}
	});
}
function start5() {
	hideAndProceed('start5','q5section');
	console.log(sentenceSoFar);
	$('#desireRestate').html(sentenceSoFar+'<br/>but I also want '+butDesire);
	$('#fearRestate').html(sentenceSoFar+'<br/>but if I did '+butFear);
	$('#uncertaintyRestate').html(sentenceSoFar+"<br/>but I don't know "+butUncertainty);
	
	
}
function showScroll(theId){
	$('#'+theId).show();
	scrollToId(theId)
}
function scrollToId(goToId) {
	$('html, body').animate({
        scrollTop: $("#"+goToId).offset().top
    }, 1000);
}

function hideAndProceed(hideId,sectionId,focusId){
	$('#'+hideId).hide();
	
	$('#'+sectionId).show();
	scrollToId(sectionId);
	if (!!focusId){
		$('#'+focusId).focus();
	}
}

function scrollToBottom() {
	$('html, body').animate({
	   scrollTop: $(document).height()-$(window).height()}, 
	   500);
}

function changePlaceholder(inputId,text) {
	$('#'+inputId).attr('placeholder',text);
}

function autoTour() {
	window.setTimeout($('#q1').autotype("I'm not writing {{enter}}", {delay: 30}),1000);
	window.setTimeout($('#verb').autotype("write {{tab}}", {delay: 30}),10000);
	window.setTimeout($('#verbing').autotype("writing {{enter}}", {delay: 30}),4000);
	window.setTimeout($('#q3').autotype("I had a full page written {{tab}}", {delay: 30}),7000);
	window.setTimeout($('#successAction').autotype("I write a single sentence {{enter}}", {delay: 30}),10000);
}

// TODO: Simplify, DRY, tooltips, encourage tabs