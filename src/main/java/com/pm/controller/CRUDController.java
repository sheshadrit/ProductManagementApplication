package com.pm.controller;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;
import java.nio.channels.Channels;
import java.nio.channels.ReadableByteChannel;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.pm.model.Product;
import com.pm.model.User;
import com.pm.response.Response;
import com.pm.storage.MemoryStorage;

@Controller
public class CRUDController {

	private static Logger logger = LogManager.getLogger(LoginController.class.getName());
	
	@Autowired
	MemoryStorage store;
	
	@PostMapping(value = "/addProduct",produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public Response addProduct(@RequestBody Product product) {
		logger.debug("Indide addProduct method of CRUDController");
		Map<String, Product> productMap = store.getStore();
		Response res = new Response();
		try {
			String imageURL = product.getProductImageUrl();
			URL website = new URL(imageURL);
			ReadableByteChannel rbc = Channels.newChannel(website.openStream());
			String extension = "";
			int i = imageURL.lastIndexOf('.');
			if (i > 0) {
			    extension = imageURL.substring(i+1, i+4);
			}
			String fileName= product.getProductID()+"_"+product.getProductDescription().replaceAll(" ", "")+"."+extension;
			FileOutputStream fos = new FileOutputStream("src/main/resources/static/images/upload/"+fileName);
			fos.getChannel().transferFrom(rbc, 0, Long.MAX_VALUE);
			product.setUploadedImageFileName(fileName);
		} catch (IOException e) {
			e.printStackTrace();
		}
		productMap.put(product.getProductID(), product);
		logger.debug("Product: "+product.getProductID()+" got added into the map");
		List<Product> productList = new ArrayList<>();
		for(Product p : productMap.values()) {
			if(p.getSalesRep().equals(product.getSalesRep())) {
				productList.add(p);
			}
		}
		res.setProductList(productList);
		res.setStatus("OK");
		return res;
	}
	
	@PostMapping(value = "/addProductWithFileUplaod",produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public Response addProductWithFileUplaod(/*@RequestBody */Product product,@RequestParam("productImageFile") MultipartFile multipartFile) {
		logger.debug("Indide addProduct method of CRUDController");
		Map<String, Product> productMap = store.getStore();
		Response res = new Response();
		byte[] bytes;
		try {
			String orginalFileName = multipartFile.getOriginalFilename();
			int i = orginalFileName.lastIndexOf('.');
			String extension = "";
			if (i > 0) {
			    extension = orginalFileName.substring(i+1, i+4);
			}
			String fileName= product.getProductID()+"_"+product.getProductDescription().replaceAll(" ", "")+"."+extension;
			bytes = multipartFile.getBytes();
			Path path = Paths.get("src/main/resources/static/images/upload",fileName);
			Files.write(path, bytes);
			product.setUploadedImageFileName(fileName);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		productMap.put(product.getProductID(), product);
		logger.debug("Product: "+product.getProductID()+" got added into the map");
		List<Product> productList = new ArrayList<>();
		for(Product p : productMap.values()) {
			if(p.getSalesRep().equals(product.getSalesRep())) {
				productList.add(p);
			}
		}
		res.setProductList(productList);
		res.setStatus("OK");
		return res;
	}
	
	@PostMapping(value = "/editProduct",produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public Response editProduct(@RequestBody Product product,Model model) {
		logger.debug("Indide editProduct method of CRUDController");
		Response res = new Response();
		Map<String,Product> productMap = store.getStore();
		try {
			productMap.put(product.getProductID(), product);
			res.setProductList(new ArrayList<>(productMap.values()));
			res.setStatus("OK");
			logger.debug("Product: "+product.getProductID()+" got updated");
		}
		catch(NullPointerException npe) {
			logger.error("Product list was empty");
			res.setStatus("Fail");
			res.setErrorMessage("Product list was empty");
		}
		catch(Exception e) {
			logger.error("Exception occured while updating product: "+product.getProductID());
			res.setStatus("Fail");
			res.setErrorMessage("Exception occured while updating product: "+product.getProductID());
		}
		return res;
	}
	
	@GetMapping(value = "/getProduct/{productID}",produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public Response getProduct(@PathVariable("productID") String productID) {
		logger.debug("Indide getProduct method of CRUDController");
		Response res = new Response();
		try {
			Map<String,Product> productMap = store.getStore();
			Product product = productMap.get(productID);
			res.setEditableProduct(product);
			List<Product> productList = new ArrayList<>();
			for(Product p : productMap.values()) {
				if(p.getSalesRep().equals(product.getSalesRep()) && !(p.getProductID().equals(product.getProductID()))) {
					productList.add(p);
				}
			}
			res.setProductList(productList);
			res.setStatus("OK");
		}
		catch(Exception e) {
			logger.error("Exception occured while fetching details for product: "+productID);
			res.setStatus("Fail");
			res.setErrorMessage("Exception occured while fetching details for product: "+productID);
		}
		return res;
	}
	
	@PostMapping(value = "/delProduct",produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public Response delProduct(@RequestBody Product product,Model model) {
		logger.debug("Indide delProduct method of CRUDController");
		Response res = new Response();
		try {
			Map<String,Product> productMap = (HashMap<String,Product>) store.getStore();
			productMap.remove(product.getProductID());
			res.setProductList(new ArrayList<>(productMap.values()));
			res.setStatus("OK");
		}
		catch(NullPointerException npe) {
			logger.error("Product list was empty");
			res.setStatus("Fail");
			res.setErrorMessage("Product list was empty");
		}
		catch(Exception e) {
			logger.error("Exception occured while removing product: "+product.getProductID());
			res.setStatus("Fail");
			res.setErrorMessage("Exception occured while removing product: "+product.getProductID());
		}
		return res;
	}
	
	@GetMapping(value = "/getProductList",produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public Response getProductList() {
		logger.debug("Indide addProduct method of CRUDController");
		Map<String, Product> productMap = store.getStore();
		Response res = new Response();
		res.setProductList(new ArrayList<>(productMap.values()));
		res.setStatus("OK");
		return res;
	}
	
	@GetMapping(value = "/api/image/{productID}")
    public ResponseEntity<InputStreamResource> getImage(@PathVariable("productID") String productID) throws IOException {
		File file = new File("src/main/resources/static/images/upload/"+productID);
		FileInputStream fis = new FileInputStream(file);
        return ResponseEntity
                .ok()
                .contentType(MediaType.IMAGE_JPEG)
                .body(new InputStreamResource(fis));
    }
}
