package com.pm.response;

import java.util.ArrayList;
import java.util.List;

import com.pm.model.Product;

public class Response {
	
	List<Product> productList;
	String status;
	String errorMessage;
	Product editableProduct;
	
	public Response() {
		
	}

	public List<Product> getProductList() {
		return productList;
	}

	public void setProductList(List<Product> productList) {
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

	public Product getEditableProduct() {
		return editableProduct;
	}

	public void setEditableProduct(Product editableProduct) {
		this.editableProduct = editableProduct;
	}
	
	

}
