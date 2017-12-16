/*----add welcome msg animation----*/
$(document).ready(function(){
    var message='Welcome...';
    var i=0;
    function addWord() {
        if (i < message.length){
            $('#welcome_words').text($('#welcome_words').text()+message.charAt(i));//message.charAt(i);
            i++;
        }
         setTimeout(addWord,300);
    }
    addWord();
});

/*----valide null and pop up tp msg---*/
$('#logBtn').bind('click',function(){
	if($('#username').val()==="" && $('#password').val()===""){
		$('#username').tooltip('show');
		$('#password').tooltip('show');
		return false;
	}
	
	if($('#username').val()===""){
		$('#username').tooltip('show');
		return false;
	}
	
	if($('#password').val()===""){
		$('#password').tooltip('show');
		return false;
	}
});

/*---destroy tp---*/
$('#username').bind('mouseover',function(){
	if($('#username').val()!==""){
        $('#username').tooltip('destroy');
	}
});
$('#password').bind('mouseover',function(){
    if($('#password').val()!==""){
        $('#password').tooltip('destroy');
	}
});
