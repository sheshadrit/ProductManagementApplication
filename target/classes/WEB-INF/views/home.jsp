<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%> 
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" type="text/css" href="resources/css/OM.css">

          
</head>
<body>
<div class="container">
		<div class="orangeText boldText padding10" id="appTitle">Home Page: Product Management</div>
    	<div id="homeHeader">        
        <div class="headerBarblock">
        	<div class="floatLeft boldText">&minus;</div>
            <div class="floatLeft paddingLeft10">Product Inventory</div>
            <div class="clear"></div>
        </div>
        </div>
    	<!-- Below class to show LEFT and Right border -->
        <div class="headercontentblock1">                      
            <div class="container1" id="quickAddScreen"> 
                <div class="floatLeft selectWidth85 marginLeft20">
                	<div class="boldText">Scan an item or enter information below</div>
                    <div class="spacer2"></div>
                    <div class="floatLeft selectWidth15">
                        <input name="entertext" type="text" class="inputboxBg selectWidth45" size="15" maxlength="15" placeholder="5">
                        <div class="padding10">*Qty</div>
                    </div>
                    <div class="floatLeft selectWidth45">
                        <input name="entertext" type="text" class="inputboxBg selectWidth80" size="15" maxlength="15" placeholder="89723">
                        <div class="padding10">*Item ID, UPC, SIM, or IMEI</div>
                    </div>
                    <div class="floatLeft selectWidth25">
                         <label class="custom-select selectWidth90">
                            <form:select path="userList" items="${userList}" />
                        </label>
                        <div class="padding10">Sales Rep</div>
                    </div>
                    <div class="floatLeft selectWidth15">
                        <input type="submit" value=" Quick Add " class="greenButton">
                    </div>                
                    <div class="clear"></div>
                    <div class="spacer2"></div>                	
                </div>
                <div class="clear"></div>                                                            	                
            </div>
            <div id="addedItemsList">
	            <div class="sharpblueBar">Added Items</div>
	            <div class="container1" id="noItems">
	            	<div class="spacer2"></div>
	            	<div class="instructionText">No items added</div>
	                <div class="spacer2"></div>
	            </div>
	            <div id="productListGrid">
	            </div>          
	            <div class="omblueLine"></div>
            </div>
            <div class="container1" id="salesRepInfo">
            	<div class="blueText boldText">These items will be tied to Sales Rep ${userId}.</div>
                <div>To change the rep, select from dropdown.</div>
                <div class="spacer2"></div>
                <div class="boldText">
                	AT&T Any City, USA<br>
                	(555) 555-5555
                </div>
                <div class="spacer2"></div>
                <div class="floatLeft selectWidth15">
                    <button id="addProductClick" class="blueButton">Add product</button>
                </div>                
                <div class="clear"></div>
            </div>
            <div id="crudForm">
	            <div id="crudFormTitle" class="sharpblueBar"></div>
	            <div class="container1">
	            	<div class="spacer2"></div>
	            	<table>
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
	            	</table>
	            	
	            	
	                <div class="spacer2"></div>
	            </div>
	         </div>
        </div>
        <!-- End to show LEFT and Right border -->
        <!-- Below class to show Bottom border with LEFT and RIGHT rounded corners. -->
    	<div class="headercontentblock0"></div>
    	<!-- End to show Bottom border with LEFT and RIGHT rounded corners. -->
    	<div class="spacer2"></div>
    </div>
    <script type="text/javascript"
        src="resources/js/jquery.min.js"></script>
        <script type="text/javascript" src="resources/js/pm.js"></script>
</body>
</html>