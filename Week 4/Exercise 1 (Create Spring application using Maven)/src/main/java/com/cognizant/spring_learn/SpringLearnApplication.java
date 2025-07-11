package com.cognizant.spring_learn;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringLearnApplication {

	public static void main(String[] args) {
		System.out.println("\n==================================================");
		System.out.println("INFO: Initializing SpringLearn Application...");
		System.out.println("INFO: Launching the application context...");
		System.out.println("==================================================\n");

		SpringApplication.run(SpringLearnApplication.class, args);

		System.out.println("\n==================================================");
		System.out.println("INFO: SpringLearn Application started successfully.");
		System.out.println("==================================================\n");
	}
}
