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
		if(this.textContent == "Add Product") {
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
				url : '/addProduct',
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
											"<div class='floatLeft selectWidth45 alignLeft'>"+product.productName+"</div> " +
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
		else if(this.textContent == "Edit Product") {
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
											"<div class='floatLeft selectWidth45 alignLeft'>"+product.productName+"</div> " +
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
	
	$(document).on('click', 'button', function() {
		if(this.id == "editItem") {
			$("#crudFormTitle").html("Edit Product");
			$("#appTitle").html("Edit Product Page: Product Management");
			$("#addedItemsList").hide();
			$("#salesRepInfo").hide();
			$("#quickAddScreen").hide();
			$("#homeHeader").hide();
			
			$("#submitCrud").html("Edit Product");
			
			$("#crudForm").show();
			$.ajax({
				type: "GET",
				url : '/getProduct/'+this.value,
				contentType: "application/json",
				success : function(responseText) {
					var product = responseText.productList[0];
					$("#productID").val(product.productID);
					$("#productName").val(product.productName);
					$("#productDescription").val(product.productDescription);
					$("#quantity").val(product.quantity);
					$("#price").val(product.price);
					$("#productImageFile").val(product.productImageFile);
					$("#productImageUrl").val(product.productImageUrl);
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