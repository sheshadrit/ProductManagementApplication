$(document).ready(function() {
	//alert(document.getElementById("#crudForm").prop('disabled',true));
	$("#crudForm").hide();
	$('#userId').blur(function() {
		$.ajax({
			type: "POST",
			url : '/test',
			data : {
				userId : $('#userId').val()
			},
			success : function(responseText) {
				$('#ajaxGetUserServletResponse').text(responseText);
			}
		});
	});
	
	//$('#productImageFile').change(function() {
	$('#submitCrud1').click(function(event) {
		event.preventDefault();
		var data = new FormData($("#mainForm")[0]);
		$.ajax({
			type: "POST",
			url : '/addProduct',
			data : data,
			enctype: 'multipart/form-data',
            processData: false, 
            contentType:false,
            timeout: 600000,
			success : function(responseText) {
				console.log(responseText);
				/*var img = $("<img />", {                
			        "alt": "test image",
			        "style":"width: 4%; height: 4%",
			        "src": "/api/image"
			    });
				$('#ajaxGetUserServletResponse').append(img);*/
			},
			error : function(e) {
				alert("Error!")
				console.log("ERROR: ", e);
			}
		});
	});
	
	
	$('#addProductClick').click(function() {
		$("#crudFormTitle").html("Add Product");
		$("#appTitle").html("Add Product Page: Product Management");
		$("#addedItemsList").hide();
		$("#salesRepInfo").hide();
		$("#quickAddScreen").hide();
		$("#homeHeader").hide();
		
		$("#submitCrud").html("Add Product");
		
		$("#productID").val("");
		$("#productName").val("");
		$("#productDescription").val("");
		$("#quantity").val("");
		$("#price").val("");
		$("#productImageFile").val("");
		$("#productImageUrl").val("");
		
		$("#crudForm").show();
		//$("#productDescription").val("My value");
	});
	$('#submitCrud').click(function() {
		event.preventDefault();
		if(this.value == " Quick Add ") {
			var errorMessage = "";
			
			if($("#quantity").val() == '') {
				errorMessage += "Quantity must have a value<br/> ";
				$('#quantity').removeClass("inputboxBg");
				$('#quantity').addClass("inputboxerror");
			}
			if($("#productID").val() == '') {
				errorMessage += "Item ID must have a value<br/> ";
				$('#productID').removeClass("inputboxBg");
				$('#productID').addClass("inputboxerror");
			}
			if($("#productName").val() == '') {
				errorMessage += "Item ID must have a value<br/> ";
				$('#productName').removeClass("inputboxBg");
				$('#productName').addClass("inputboxerror");
			}
			if($("#price").val() == '') {
				errorMessage += "Price must have a value<br/> ";
				$('#price').removeClass("inputboxBg");
				$('#price').addClass("inputboxerror");
			}
			if($("#productDescription").val() == '') {
				errorMessage += "Item Description must have a value<br/> ";
				$('#productDescription').removeClass("inputboxBg");
				$('#productDescription').addClass("inputboxerror");
			}
			var imageNotFileProvided = false,imageURLNotProvided = false;
			if($("#productImageUrl").val() == '') {
				imageURLNotProvided = true;
			}
			if($("#productImageFile").val() == '') {
				imageNotFileProvided = true;
			}
			if(imageURLNotProvided && imageNotFileProvided) {
				errorMessage += "Either item image URL must have a value or Image File must have been chosen<br/> ";
				$('#productImageUrl').removeClass("inputboxBg");
				$('#productImageUrl').addClass("inputboxerror");
				$('#productImageFile').removeClass("greenButton");
				$('#productImageFile').addClass("redButton");
			}
			if(errorMessage != '') {
				$('#errorMessageList').html(errorMessage);
				return false;
			}
			
			$("#addedItemsList").show();
			if($("#productImageFile").val() == '') {
				var data = {};
				data["productID"] = $("#productID").val();
				data["productName"] = $("#productName").val();
				data["productDescription"] = $("#productDescription").val();
				data["price"] = $("#price").val();
				data["quantity"] = $("#quantity").val();
				data["salesRep"] = $("#salesRep").val();
				data["productImageFile"] = $("#productImageFile").val();
				data["productImageUrl"] = $("#productImageUrl").val();
				$.ajax({
					type: "POST",
					url : '/addProduct',
					contentType: "application/json",
					data: JSON.stringify(data),
					success : function(responseText) {
						displayAddedItems(responseText);
					},
					error : function(e) {
						alert("Error!")
						console.log("ERROR: ", e);
					}
				});
				
			}
			else {
				var data = new FormData($("#mainForm")[0]);
				$.ajax({
					/*type: "POST",
					url : '/addProduct',
					contentType: "application/json",
					data: JSON.stringify(data),*/
					type: "POST",
					url : '/addProductWithFileUplaod',
					data : data,
					enctype: 'multipart/form-data',
		            processData: false, 
		            contentType:false,
		            timeout: 600000,
					success : function(responseText) {
						displayAddedItems(responseText);
					},
					error : function(e) {
						alert("Error!")
						console.log("ERROR: ", e);
					}
				});
			}
			
			$("#crudForm").hide();
			$("#salesRepInfo").show();
			$("#homeHeader").show();
			$("#quickAddScreen").show();
		}
		else if(this.value == " Update ") {
			$("#addedItemsList").show();
			var data = {};
			data["productID"] = $("#productID").val();
			data["productName"] = $("#productName").val();
			data["productDescription"] = $("#productDescription").val();
			data["price"] = $("#price").val();
			data["quantity"] = $("#quantity").val();
			data["productImageFile"] = $("#productImageFile").val();
			data["productImageUrl"] = $("#productImageUrl").val();
			$.ajax({
				type: "POST",
				url : '/editProduct',
				contentType: "application/json",
				data: JSON.stringify(data),
				success : function(responseText) {
					if(responseText.productList.length == 0) {
						$("#noItems").html("<div class='spacer2'></div> <div class='instructionText'>No items added</div> <div class='spacer2'></div>");
						$("#noItems").show();
					}
					else {
						$("#noItems").hide();
						var htmlData = "";
						for (var i = 0; i < responseText.productList.length; i++) {
							var product = responseText.productList[i];
							htmlData += "<div class='alignCenter padding15'> <div class='floatLeft selectWidth20 alignLeft blueText'> " +
									"<div class='floatLeft selectWidth70'> <button value="+product.productID+" id='editItem' class='blueButton'>Edit Item</button> </div> <div class='floatLeft'>|</div> " +
									"<div class='floatRight trashBlack' id="+product.productID+"></div> <div class='clear'></div> </div> " +
									"<div class='floatLeft selectWidth15'>"+product.productID+"</div> " +
											"<div class='floatLeft selectWidth45 alignLeft'>"+product.productDescription+"</div> " +
													"<div class='floatLeft selectWidth10'>"+product.quantity+"</div> " +
													"<div class='floatLeft selectWidth10 alignRight'>"+product.price+"</div> " +
															"<div class='clear'></div> </div> ";
						}
						$('#productListGrid').html(htmlData);
					}
				},
				error : function(e) {
					alert("Error!")
					console.log("ERROR: ", e);
				}
			});
			$("#crudForm").hide();
			$("#salesRepInfo").show();
			$("#homeHeader").show();
			$("#quickAddScreen").show();
		}
		
	});
	
	function displayAddedItems(responseText) {

		if(responseText.productList.length == 0) {
			$("#noItems").html("<div class='spacer2'></div> <div class='instructionText'>No items added</div> <div class='spacer2'></div>");
			$("#noItems").show();
		}
		else {
			$("#noItems").hide();
			var htmlData = "";
			for (var i = 0; i < responseText.productList.length; i++) {
				var product = responseText.productList[i];
				//grey color: htmlData += "<div class='alignCenter padding15 greybgContent'> <div class='floatLeft selectWidth20 alignLeft blueText'> " +
				//Error: htmlData += "<div class='alignCenter padding15 boldText dashedBorderRed'> <div class='floatLeft selectWidth20 alignLeft blueText'> " +
				htmlData += "<div class='alignCenter padding15'> <div class='floatLeft selectWidth20 alignLeft blueText'> " +
						"<div class='floatLeft selectWidth70'> <button value="+product.productID+" id='editItem' class='blueButton'>Edit Item</button> </div> <div class='floatLeft'>|</div> " +
						"<div class='floatRight trashBlack' id="+product.productID+"></div> <div class='clear'></div> </div> " +
						"<div class='floatLeft selectWidth15'>"+product.productID+"</div> " +
								"<div class='floatLeft selectWidth45 alignLeft'>"+product.productDescription+"</div> " +
										"<div class='floatLeft selectWidth10'>"+product.quantity+"</div> " +
										"<div class='floatLeft selectWidth10 alignRight'> $"+product.price+"</div> " +
												"<div class='clear'></div> </div> ";
			}
			$('#productListGrid').html(htmlData);
		}
		$('#salesRepName').html("These items will be tied to Sales Rep "+$("#salesRep").val()+".");
	
	}
	$(document).on('click', 'button', function() {
		if(this.id == "editItem") {
			/*$("#crudFormTitle").html("Edit Product");
			$("#appTitle").html("Edit Product Page: Product Management");
			$("#addedItemsList").hide();
			$("#salesRepInfo").hide();
			$("#quickAddScreen").hide();
			$("#homeHeader").hide();*/
			var htmlData = "";
			$("#submitCrud").val(" Update ");
			
			//$("#crudForm").show();
			$.ajax({
				type: "GET",
				url : '/getProduct/'+this.value,
				contentType: "application/json",
				success : function(responseText) {
					var product = responseText.editableProduct;
					$("#productID").val(product.productID);
					$("#productName").val(product.productName);
					$("#productDescription").val(product.productDescription);
					$("#quantity").val(product.quantity);
					$("#price").val(product.price);
					//$("#productImageFile").val(product.productImageFile);
					$("#productImageUrl").val(product.productImageUrl);
					htmlData += "<div class='alignCenter padding15 boldText dashedBorderRed'> <div class='floatLeft selectWidth20 alignLeft blueText'> " +
					"<div class='floatLeft selectWidth70'> <button value="+product.productID+" id='editItem' class='blueButton'>Edit Item</button> </div> <div class='floatLeft'>|</div> " +
					"<div class='floatRight trashBlack' id="+product.productID+"></div> <div class='clear'></div> </div> " +
					"<div class='floatLeft selectWidth15'>"+product.productID+"</div> " +
							"<div class='floatLeft selectWidth45 alignLeft'>"+product.productDescription+"</div> " +
									"<div class='floatLeft selectWidth10'>"+product.quantity+"</div> " +
									"<div class='floatLeft selectWidth10 alignRight'> $"+product.price+"</div> " +
											"<div class='clear'></div> </div> ";
					var img = $("<img />", {                
				        "alt": "test image",
				        "style":"width: 100px; height: 100px",
				        "src": "/api/image/"+product.uploadedImageFileName
				    });
					$('#ajaxGetUserServletResponse').append(img);
					for (var i = 0; i < responseText.productList.length; i++) {
						var product = responseText.productList[i];
						//grey color: htmlData += "<div class='alignCenter padding15 greybgContent'> <div class='floatLeft selectWidth20 alignLeft blueText'> " +
						//Edit: htmlData += "<div class='alignCenter padding15 boldText dashedBorderRed'> <div class='floatLeft selectWidth20 alignLeft blueText'> " +
						htmlData += "<div class='alignCenter padding15'> <div class='floatLeft selectWidth20 alignLeft blueText'> " +
								"<div class='floatLeft selectWidth70'> <button value="+product.productID+" id='editItem' class='blueButton'>Edit Item</button> </div> <div class='floatLeft'>|</div> " +
								"<div class='floatRight trashBlack' id="+product.productID+"></div> <div class='clear'></div> </div> " +
								"<div class='floatLeft selectWidth15'>"+product.productID+"</div> " +
										"<div class='floatLeft selectWidth45 alignLeft'>"+product.productDescription+"</div> " +
												"<div class='floatLeft selectWidth10'>"+product.quantity+"</div> " +
												"<div class='floatLeft selectWidth10 alignRight'> $"+product.price+"</div> " +
														"<div class='clear'></div> </div> ";
					}
					$('#productListGrid').html(htmlData);
				},
				error : function(e) {
					alert("Error!")
					console.log("ERROR: ", e);
				}
			});
		}
		
	
	});
	
	$(document).on('click', '.trashBlack', function() {
		$("#addedItemsList").hide();
		var data = {};
		data["productID"] = this.id;
		$.ajax({
			type: "POST",
			url : '/delProduct',
			contentType: "application/json",
			data: JSON.stringify(data),
			success : function(responseText) {
				if(responseText.productList.length == 0) {
					$("#noItems").html("<div class='spacer2'></div> <div class='instructionText'>All items got removed</div> <div class='spacer2'></div>");
					$('#productListGrid').html("");
					$("#addedItemsList").show();
					$("#noItems").show();
				}
				else {
					$("#noItems").hide();
					var htmlData = "";
					for (var i = 0; i < responseText.productList.length; i++) {
						var product = responseText.productList[i];
						htmlData += "<div class='alignCenter padding15'> <div class='floatLeft selectWidth20 alignLeft blueText'> " +
								"<div class='floatLeft selectWidth70'> <button value="+product.productID+" id='editItem' class='blueButton'>Edit Item</button> </div> <div class='floatLeft'>|</div> " +
								"<div class='floatRight trashBlack' id="+product.productID+"></div> <div class='clear'></div> </div> " +
								"<div class='floatLeft selectWidth15'>"+product.productID+"</div> " +
										"<div class='floatLeft selectWidth45 alignLeft'>"+product.productName+"</div> " +
												"<div class='floatLeft selectWidth10'>"+product.quantity+"</div> " +
												"<div class='floatLeft selectWidth10 alignRight'>"+product.price+"</div> " +
														"<div class='clear'></div> </div> ";
					}
					$('#productListGrid').html(htmlData);
					$("#addedItemsList").show();
				}
			},
			error : function(e) {
				alert("Error!")
				console.log("ERROR: ", e);
			}
		});
		$("#crudForm").hide();
		$("#salesRepInfo").show();
		$("#homeHeader").show();
		$("#quickAddScreen").show();
	});
	
	/*$("button").click(function(e) {
	    e.preventDefault();
	    alert($(this).val());
	});*/
});

$("#productImageUrl").change(function() {
	$("#productImageFile").prop("disabled",true);
});

$("#productImageFile").change(function() {
	$("#productImageUrl").val(this.files[0].name);
});

jQuery(document).ready(checkProductList);
function checkProductList () {
  if($('#addedItemsList').is(':visible')){ 
    $.ajax({
		type: "GET",
		url : '/getProductList',
		contentType: "application/json",
		data: {},
		success : function(responseText) {
			if(responseText.productList.length == 0) {
				$("#noItems").html("<div class='spacer2'></div> <div class='instructionText'>No items added</div> <div class='spacer2'></div>");
				$("#noItems").show();
			}
			else {
				$("#noItems").hide();
				var htmlData = "";
				for (var i = 0; i < responseText.productList.length; i++) {
					var product = responseText.productList[i];
					htmlData += "<div class='alignCenter padding15'> <div class='floatLeft selectWidth20 alignLeft blueText'> " +
							"<div class='floatLeft selectWidth70'> <button value="+product.productID+" id='editItem' class='blueButton'>Edit Item</button> </div> <div class='floatLeft'>|</div> " +
							"<div class='floatRight trashBlack' id="+product.productID+"></div> </div> " +
							"<div class='floatLeft selectWidth15'>"+product.productID+"</div> " +
									"<div class='floatLeft selectWidth45 alignLeft'>"+product.productDescription+"</div> " +
											"<div class='floatLeft selectWidth10'>"+product.quantity+"</div> " +
											"<div class='floatLeft selectWidth10 alignRight'>"+product.price+"</div> " +
													"<div class='clear'></div> </div> ";
				}
				$('#productListGrid').html(htmlData);
				//alert($("#salesRepInfo").is(':visible'));
			}
			$('#salesRepName').html("These items will be tied to Sales Rep "+$("#salesRep").val()+".");
		},
		error : function(e) {
			alert("Error!")
			console.log("ERROR: ", e);
		}
	});
  } else {
    setTimeout(checkContainer, 50);
  }
}