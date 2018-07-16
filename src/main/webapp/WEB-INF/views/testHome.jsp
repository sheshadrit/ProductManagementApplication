<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" type="text/css" href="resources/css/OM.css">
<link rel="stylesheet" type="text/css" href="resources/css/pm.css">

          
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
            <form id="mainForm">
            <div class="container1" id="quickAddScreen"> 
                <div class="floatLeft selectWidth85 marginLeft20">
                	<div class="boldText">Scan an item or enter information below</div>
                    <div class="spacer2"></div>
                    <div class="floatLeft selectWidth25">
                        <input name="productID" type="text" class="inputboxBg selectWidth80" size="15" maxlength="15" id="productID">
                        <div class="padding10">*Item ID, UPC, SIM, or IMEI</div>
                    </div>
                    <div class="floatLeft selectWidth25">
                        <input name="productName" type="text" class="inputboxBg selectWidth80" size="15" maxlength="15" id="productName">
                        <div class="padding10">*Item Name</div>
                    </div>
                    <div class="floatLeft selectWidth45">
                        <input name="productDescription" type="text" class="inputboxBg selectWidth80" size="100" maxlength="100" id="productDescription">
                        <div class="padding10">*Item Description</div>
                    </div> 
                    <div class="floatLeft selectWidth15">
                        <input name="quantity" type="number" class="inputboxBg selectWidth45" size="15" maxlength="15" id="quantity">
                        <div class="padding10">*Qty</div>
                    </div>
                    <div class="floatLeft selectWidth15">
                        <input name="price" type="number" class="inputboxBg selectWidth45" size="15" maxlength="15" id="price">
                        <div class="padding10">*Price</div>
                    </div> 
                    <div class="floatLeft selectWidth25">
                         <label class="custom-select selectWidth90">
                            <select id="salesRep" name="salesRep">
                                <option value="Steve" selected>Steve</option>
                                <option value="Jake">Jake</option>
                            </select>
                        </label>
                        <div class="padding10">Sales Rep</div>
                    </div> 
                    <div class="floatLeft selectWidth30">
                        <input name="productImageUrl" type="text" class="inputboxBg selectWidth80" size="15" id="productImageUrl">
                        <div class="padding10">Item Image URL</div>
                    </div>
                    <div class="floatLeft selectWidth15">
                        <input name="productImageFile" type="file" value=" Uplaod Image " class="greenButton selectWidth65" id="productImageFile">
                        <div class="padding10"></div>
                    </div>  
                    <div class="floatLeft selectWidth15">
                        <input type="submit" value=" Quick Add " class="greenButton" id="submitCrud">
                    </div> 
                    <div id="ajaxGetUserServletResponse"></div>
                    <!-- <div style="width: 50%; height: 70px; float: left; margin: 5px; background: rgb(255,140,0);">
                        
                    </div>   -->
                             
                    <div class="clear"></div>
                    <div class="spacer2"></div>
                    <div id="errorMessageList" class="redText"></div>                	
                </div>
                <div class="clear"></div>                                                            	                
            </div>
            </form>
            <div id="addedItemsList">
	            <div class="sharpblueBar">Added Items</div>
	            <div class="container1" id="noItems">
	            		<div class="spacer2"></div>
		            	<div class="instructionText">No items added</div>
		                <div class="spacer2"></div>
	            </div>
	            <div class="omblueLine"></div>
            </div>
            
           <!--  <div class="container1">
            	<div id="noItems">
	            	<div class="spacer2"></div>
	            	<div class="instructionText">No items added</div>
	                <div class="spacer2"></div>
                </div>
            </div> -->
            <div id="productListGrid">
	            </div>
            <div class="omblueLine"></div>
            <div class="container1" id="salesRepInfo">
            	<div class="blueText boldText" id="salesRepName"></div>
                <div>To change the rep, select from dropdown.</div>
                <div class="spacer2"></div>
                <div class="boldText">
                	AT&T Any City, USA<br>
                	(555) 555-5555
                </div>
                <div class="spacer2"></div>
                <div class="floatLeft selectWidth15">
                    <input type="submit" value=" Update Stock " class="blueButton">
                </div>                
                <div class="clear"></div>
            </div>
            <div id="crudForm">
	            <div id="crudFormTitle" class="sharpblueBar"></div>
	            <div class="container1">
	            	<div class="spacer2"></div>
	            	
	            	
	            	
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
        <script type="text/javascript" src="resources/js/pm.js?newversion"></script>
</body>
</html>