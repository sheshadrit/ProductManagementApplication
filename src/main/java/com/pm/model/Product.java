package com.pm.model;

public class Product {

	private String productID;
	private String productName;
	private String productDescription;
	private String productImageFile;
	private String productImageUrl;
	private int quantity;
	private float price;
	
	public Product() {
		// TODO Auto-generated constructor stub
	}

	public Product(String productID, String productName, String productDescription, String productImageFile,
			String productImageUrl, int quantity, float price) {
		super();
		this.productID = productID;
		this.productName = productName;
		this.productDescription = productDescription;
		this.productImageFile = productImageFile;
		this.productImageUrl = productImageUrl;
		this.quantity = quantity;
		this.price = price;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
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

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public String getProductDescription() {
		return productDescription;
	}

	public void setProductDescription(String productDescription) {
		this.productDescription = productDescription;
	}

	public String getProductImageFile() {
		return productImageFile;
	}

	public void setProductImageFile(String productImageFile) {
		this.productImageFile = productImageFile;
	}

	public String getProductImageUrl() {
		return productImageUrl;
	}

	public void setProductImageUrl(String productImageUrl) {
		this.productImageUrl = productImageUrl;
	}
	
	
}
