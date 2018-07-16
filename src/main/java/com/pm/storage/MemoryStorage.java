package com.pm.storage;

import java.util.HashMap;
import java.util.Map;

import org.springframework.context.annotation.Scope;
import org.springframework.web.context.WebApplicationContext;

import com.pm.model.Product;


public class MemoryStorage {
	private Map<String, Product> map;
	
	public MemoryStorage() {
		map = new HashMap<>();
	}
	
	public Map<String, Product> getStore() {
		return map;
	}
	
}
