package com.pm;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;


@SpringBootApplication
public class ProductManagementApplication  extends SpringBootServletInitializer {

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(ProductManagementApplication.class);
    }

	public static void main(String[] args) {
		SpringApplication.run(ProductManagementApplication.class, args);
		System.setProperty("log4j.configurationFile","./path_to_the_log4j2_config_file/log4j2.xml");
	}
}
