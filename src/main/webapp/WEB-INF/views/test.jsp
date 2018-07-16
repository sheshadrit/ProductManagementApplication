<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" 
"http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>jQuery, Ajax and Servlet/JSP integration example</title>
<link rel="stylesheet" type="text/css" href="resources/css/test.css">

</head>
<body>

	<form>
		Enter Your Name: <input type="text" id="userId" />
	</form>
	<br>
	<br>
	
	<form id="imgUpload">
	<input type="text" name="productID"/><br/>
		<input name="productImageFile" id="productImageFile" type="file" class="inputFile" />
	</form>
	
	<div id="loadImageDiv"></div>
	<strong>Ajax Response</strong>:
	<div id="ajaxGetUserServletResponse"></div>
	<script type="text/javascript"
        src="resources/js/jquery.min.js"></script>
        <input class="loginButtonblue" id="" type="submit" value=" Login " />
        <script type="text/javascript" src="resources/js/test.js?newversion"></script>
<button id="editItem1" class="editButton">Edit Item</button> 
<!-- <table>
	            		<tr>
	            			<td>
	            				<div class="boldText">Product ID:</div>
	            			</td>
	            			<td>
	            				&nbsp;
	            			</td>
	            			<td>
	            				<input id="productID" name="productID" type="text" class="inputboxBg selectWidth80" size="15" maxlength="15">
	            			</td>
	            		</tr>
	            		<tr>
	            			<td>
	            				<div class="boldText">Product Name:</div>
	            			</td>
	            			<td>
	            				&nbsp;
	            			</td>
	            			<td>
	            				<input id="productName" name="productName" type="text" class="inputboxBg selectWidth80" size="15" maxlength="15">
	            			</td>
	            		</tr>
	            		<tr>
	            			<td>
	            				<div class="boldText">Product Description:</div>
	            			</td>
	            			<td>
	            				&nbsp;
	            			</td>
	            			<td>
	            				<input id="productDescription" name="productDescription" type="text" class="inputboxBg selectWidth80" size="15" maxlength="15">
	            			</td>
	            		</tr>
	            		<tr>
	            			<td>
	            				<div class="boldText">Price</div>
	            			</td>
	            			<td>
	            				&nbsp;
	            			</td>
	            			<td>
	            				<input id="price" name="price" type="text" class="inputboxBg selectWidth80" size="15" maxlength="15">
	            			</td>
	            		</tr>
	            		<tr>
	            			<td>
	            				<div class="boldText">Quantity</div>
	            			</td>
	            			<td>
	            				&nbsp;
	            			</td>
	            			<td>
	            				<input id="quantity" name="quantity" type="text" class="inputboxBg selectWidth80" size="15" maxlength="15">
	            			</td>
	            		</tr>
	            		<tr>
	            			<td>
	            				<div class="boldText">Select Product Image</div>
	            			</td>
	            			<td>
	            				&nbsp;
	            			</td>
	            			<td>
	            				<input id="productImageFile" name="productImageFile" type="file" class="inputboxBg selectWidth80" size="15" maxlength="15">
	            			</td>
	            		</tr>
	            		<tr>
	            			<td>
	            				<div class="boldText">Product Image URL</div>
	            			</td>
	            			<td>
	            				&nbsp;
	            			</td>
	            			<td>
	            				<input id="productImageUrl" name="productImageUrl" type="text" class="inputboxBg selectWidth80" size="15" maxlength="15">
	            			</td>
	            		</tr>
	            		<tr>
	            			<td>
	            				<button id="submitCrud" class="blueButton"></button>
	            			</td>
	            		</tr>
	            	</table> -->
	            	
</body>
</html>