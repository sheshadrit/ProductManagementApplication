package com.pm.controller;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.URL;
import java.nio.channels.Channels;
import java.nio.channels.ReadableByteChannel;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.pm.model.Product;
import com.pm.model.User;

@Controller
public class Test {

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
	
	@PostMapping(value="/imageUplaod")
	public ResponseEntity<InputStreamResource> imageUplaod(Product product,@RequestParam("productImageFile") MultipartFile multipartFile) throws IOException {
		/*Product product2 = new Product();
		product2.setProductID("ghn");
		//product2.setProductImageFile(multipartFile);
		return product2;*/
		byte[] bytes = multipartFile.getBytes();
		Path path = Paths.get("src/main/resources/static/images/upload",product.getProductID()+multipartFile.getOriginalFilename());
		Files.write(path, bytes);
		ClassPathResource imgFile = new ClassPathResource("static/images/products/"+product.getProductID()+multipartFile.getOriginalFilename());
		URL website = new URL("https://ichef.bbci.co.uk/childrens-responsive-ichef-live/r/400/1x/cbeebies/show-me-show-me_brand_logo_bid.png");
		ReadableByteChannel rbc = Channels.newChannel(website.openStream());
		FileOutputStream fos = new FileOutputStream("src/main/resources/static/images/upload/test.png");
		fos.getChannel().transferFrom(rbc, 0, Long.MAX_VALUE);
		return ResponseEntity.ok().contentType(MediaType.IMAGE_JPEG).body(new InputStreamResource(imgFile.getInputStream()));
	}
	
	@GetMapping(value = "/api/image2/{productID}")
    public ResponseEntity<InputStreamResource> getImage(@PathVariable("productID") String productID) throws IOException {
 
        //ClassPathResource imgFile = new ClassPathResource("src/main/resources/static/images/upload/"+productID);
		File file = new File("src/main/resources/static/images/upload/"+productID);
		FileInputStream fis = new FileInputStream(file);
        return ResponseEntity
                .ok()
                .contentType(MediaType.IMAGE_JPEG)
                .body(new InputStreamResource(fis));
    }
}
