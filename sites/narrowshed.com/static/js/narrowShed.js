$(function () {
	$('#q1').keyup(function(){
		$('#q1restate').html('"'+$("#q1").val()+'"');
		$('#start2').show();
	});
	$('#subQuestionLink').on('click',function(){
		console.log('clickety');
		$('#subQuestions').show();
	});
})

// TODO: Simplify, DRY