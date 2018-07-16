package com.pm.model;

public class Product {

	private String productID;
	private String productName;
	private String productDescription;
	private String uploadedImageFileName;
	private String productImageUrl;
	private String salesRep;
	private int quantity;
	private float price;
	//http://localhost:8080/home?productID=101&productName=Shapoo&productDescription=Nevia+Shappo&quantity=2&price=10&salesRep=Jake&productImageUrl=&productImageFile=ShoesFormal.png
	public Product() {
	}

	public Product(String productID, String productName, String productDescription, String productImageFile,String uploadedImageFileName,
			String productImageUrl, String salesRep, int quantity, float price) {
		super();
		this.productID = productID;
		this.productName = productName;
		this.productDescription = productDescription;
		this.uploadedImageFileName = uploadedImageFileName;
		this.productImageUrl = productImageUrl;
		this.salesRep=salesRep;
		this.quantity = quantity;
		this.price = price;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public float getPrice() {
		return price;
	}

	public void setPrice(float price) {
		this.price = price;
	}

	public String getProductID() {
		return productID;
	}

	public void setProductID(String productID) {
		this.productID = productID;
	}

	public String getProductDescription() {
		return productDescription;
	}

	public void setProductDescription(String productDescription) {
		this.productDescription = productDescription;
	}

	public String getSalesRep() {
		return salesRep;
	}

	public void setSalesRep(String salesRep) {
		this.salesRep = salesRep;
	}

	

	public String getUploadedImageFileName() {
		return uploadedImageFileName;
	}

	public void setUploadedImageFileName(String uploadedImageFileName) {
		this.uploadedImageFileName = uploadedImageFileName;
	}

	public String getProductImageUrl() {
		return productImageUrl;
	}

	public void setProductImageUrl(String productImageUrl) {
		this.productImageUrl = productImageUrl;
	}
	
	
}
