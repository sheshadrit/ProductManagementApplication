package com.pm.response;

import java.util.ArrayList;

import com.pm.model.Product;

public class Response {
	
	ArrayList<Product> productList;
	String status;
	String errorMessage;
	
	public Response() {
		
	}

	public ArrayList<Product> getProductList() {
		return productList;
	}

	public void setProductList(ArrayList<Product> productList) {
		this.productList = productList;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getErrorMessage() {
		return errorMessage;
	}

	public void setErrorMessage(String errorMessage) {
		this.errorMessage = errorMessage;
	}
	
	

}
