package com.pm.controller;


import java.io.IOException;
import java.io.InputStream;
import java.lang.reflect.Member;
import java.util.ArrayList;
import java.util.Properties;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.PropertySource;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.pm.model.User;

@Controller
public class LoginController {

	@Autowired
	HttpSession httpSession;
	
	@GetMapping("/")
	public String index() {
		return "index";
	}
	
	@GetMapping("/home")
	public String home() {
		return "home";
	}
	
	@PostMapping(value = "/login")
	public String login(@ModelAttribute("loginForm") User user,Model model) {
		boolean isValidUser = authenticateUser(user.getUserId(),user.getPassword());
		isValidUser=true;
		if(isValidUser) {
			return "loginError";
		}
		model.addAttribute("userId", user.getUserId());
		ArrayList<String> userList = new ArrayList<>();
		Properties prop = getLoginProperties();
		userList.add("Select");
		userList.add(prop.getProperty("user.username1"));
		userList.add(prop.getProperty("user.username2"));
		model.addAttribute("userList", userList);
		return "home";
	}
	
	private boolean authenticateUser(String userId,String password) {
		boolean isValidUser=false;
		Properties prop = getLoginProperties();
		if ((userId.equals(prop.getProperty("user.username1")) || userId.equals(prop.getProperty("user.username2")))
				&& (password.equals(prop.getProperty("user.password1"))
						|| password.equals(prop.getProperty("user.password2")))) {
			isValidUser = true;
		}

		return isValidUser;
	}
	
	private Properties getLoginProperties() {
		Properties prop = new Properties();
		String propFileName = "loginDetails.properties";
		InputStream inputStream = getClass().getClassLoader().getResourceAsStream(propFileName);
		if(inputStream != null) {
			try {
				prop.load(inputStream);
			} catch (IOException e) {
				System.out.println("Error occured while reading file: "+propFileName);
			}
		}
		return prop;
	}
}
