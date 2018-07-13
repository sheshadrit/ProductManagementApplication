package com.pm.controller;

import java.util.ArrayList;
import java.util.HashMap;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.pm.model.Product;
import com.pm.model.User;
import com.pm.response.Response;

@Controller
public class CRUDController {

	@Autowired
	HttpSession httpSession;
	
	@GetMapping("/test")
	public String showTest(Model model) {
		return "test";
	}
	
	@RequestMapping(value="/test", method=RequestMethod.POST, 
            produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
	public User addTest(@ModelAttribute User user,Model model) {
		User newUser = new User("test","test");
		
		return newUser;
	}
	
	@PostMapping(value = "/addProduct",produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public Response addProduct(@RequestBody Product product,Model model) {
		HashMap<String,Product> productMap = (HashMap<String,Product>) httpSession.getAttribute("productMap");
		Response res = new Response();
		if(productMap == null) {
			productMap = new HashMap<>();
		}
		productMap.put(product.getProductID(), product);
		httpSession.setAttribute("productMap", productMap);
		res.setProductList(new ArrayList<>(productMap.values()));
		res.setStatus("OK");
		return res;
	}
	
	@PostMapping(value = "/editProduct",produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public Response editProduct(@RequestBody Product product,Model model) {
		HashMap<String,Product> productMap = (HashMap<String,Product>) httpSession.getAttribute("productMap");
		productMap.put(product.getProductID(), product);
		Response res = new Response();
		res.setProductList(new ArrayList<>(productMap.values()));
		res.setStatus("OK");
		return res;
	}
	
	@GetMapping(value = "/getProduct/{productID}",produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public Response getProduct(@PathVariable("productID") String productID) {
		HashMap<String,Product> productMap = (HashMap<String,Product>) httpSession.getAttribute("productMap");
		Product product = productMap.get(productID);
		ArrayList al = new ArrayList<>();
		al.add(product);
		Response res = new Response();
		res.setProductList(al);
		res.setStatus("OK");
		return res;
	}
	
	@PostMapping(value = "/delProduct",produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public Response delProduct(@RequestBody Product product,Model model) {
		HashMap<String,Product> productMap = (HashMap<String,Product>) httpSession.getAttribute("productMap");
		productMap.remove(product.getProductID());
		Response res = new Response();
		res.setProductList(new ArrayList<>(productMap.values()));
		res.setStatus("OK");
		return res;
	}
}
