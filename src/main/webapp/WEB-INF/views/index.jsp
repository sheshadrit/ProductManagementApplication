<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Product Management Application</title>

<link rel="stylesheet" type="text/css" href="resources/css/OM.css">

</head>
<body>
<h1>Product Management Application</h1>
<div class="container3">
        <div class="loginForm "> 
	        <form action="login" method="post" commandName="loginForm">               
	            <div class="selectWidth95">
	            	<input name="userId" id="userId" type="text" class="inputboxBg" size="15" maxlength="15" placeholder="ATTUID">
	            </div>
	            <div class="spacer1"></div>
	            <div class="selectWidth95">
	            	<input name="password" type="password" class="inputboxBg" placeholder="Password">
	            </div>            
	            <div class="container alignCenter">             
	                <span class="floatLeft marginTop15">  
	                    <a href="#" title="Login Information">
	                    	<button class="roundedButtoninfo" type="button" align="top"> </button>
	                    </a>
	                </span>        
	                <input class="loginButtonblue" id="" type="submit" value=" Login " />
	            </div>
	         </form>
        </div>
	</div>
</body>
</html>