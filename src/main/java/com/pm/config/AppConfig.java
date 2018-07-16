package com.pm.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;
import org.springframework.web.context.WebApplicationContext;

import com.pm.storage.MemoryStorage;

@Configuration
public class AppConfig {

	@Bean
	@Scope(value = WebApplicationContext.SCOPE_APPLICATION)
	public MemoryStorage getMemoryStorage() {
		return new MemoryStorage();
	}
}
