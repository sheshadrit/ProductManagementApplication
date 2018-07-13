$(document).ready(function() {
	$('#userId').blur(function() {
		$.ajax({
			type: "post",
			url : '/test',
			data : {
				userId : $('#userId').val()
			},
			success : function(responseText) {
				$('#ajaxGetUserServletResponse').text(responseText.userId);
			}
		});
	});
});