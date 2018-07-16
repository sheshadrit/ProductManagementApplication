$(document).ready(function() {
	$('#userId').blur(function() {
		$.ajax({
			type: "post",
			url : '/test',
			data : {
				userId : $('#userId').val()
			},
			success : function(responseText) {
				var img = $("<img />", {                
			        "alt": "test image",
			        "style":"width: 60%; height: 60%",
			        "src": responseText
			    });
				$('#ajaxGetUserServletResponse').append(img);
			}
		});
	});
	
	var img = $("<img />", {                
        "alt": "test image",
        "style":"width: 60%; height: 60%",
        "src": "/api/image"
    })
    .on('load', function() {
        if (!this.complete || 
        		typeof this.naturalWidth == "undefined" || 
        		this.naturalWidth == 0) {
            alert('broken image!');
        } else {
           //$("#loadImageDiv").append(img);
        }
    });
	
	$('#productImageFile').change(function() {
		var data = new FormData($("#imgUpload")[0]);
		$.ajax({
			type: "POST",
			url : '/imageUplaod',
			data : data,
			enctype: 'multipart/form-data',
            processData: false, 
            contentType:false,
            timeout: 600000,
			success : function(responseText) {
				var img = $("<img />", {                
			        "alt": "test image",
			        "style":"width: 4%; height: 4%",
			        "src": "/api/image/102_NikeSportShoe.jpg"
			    });
				$('#ajaxGetUserServletResponse').append(img);
			},
			error : function(e) {
				alert("Error!")
				console.log("ERROR: ", e);
			}
		});
	});
});