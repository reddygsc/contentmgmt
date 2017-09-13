package com.voxlogic.contentmgmt.application;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan (basePackages = {"com.voxlogic.contentmgmt"})
public class ContentManagementApplication {
		
		public static void main(String[] args)
		{
			SpringApplication.run(ContentManagementApplication.class, args);
		}
}
