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
	$('#username').tooltip('destroy');
	$('#password').tooltip('destroy');	
	
});

