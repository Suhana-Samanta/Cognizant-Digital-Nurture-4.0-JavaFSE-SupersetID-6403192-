
# 🛡️ Exercise 6: Create Authentication Service that Returns JWT

This exercise involved building a Spring Boot-based authentication service that returns a **JWT token** upon successful authentication using **Basic Auth**. The solution was implemented and verified in **Visual Studio Code**.

---

## 📌 Objective

To expose a secured REST endpoint (`/authenticate`) that:

* Accepts Basic Auth credentials (`username:password`)
* Validates the credentials
* Generates a JWT token
* Returns the token in JSON format

---

## 💠 Technologies Used

* Java 21
* Spring Boot 3.5.3
* Spring Security
* JJWT (Java JWT Library)
* Maven
* Visual Studio Code

---

## 🧪 Steps Followed

* Spring Boot project was initialized with Spring Web and Security dependencies.
* `/authenticate` endpoint was created using a REST controller.
* JWT generation logic was added using a utility class.
* Tested via PowerShell using Base64-encoded Basic Auth credentials.

---

## ✅ Output

The JWT token was successfully generated and returned for valid credentials.

![JWT Token Output](https://github.com/Suhana-Samanta/Cognizant-Digital-Nurture-4.0-JavaFSE-SupersetID-6403192-/raw/main/Week%204/Exercise%206%20\(Create%20authentication%20service%20that%20returns%20JWT\)/output/output.png)

---

## 📁 Output Location

`Week 4/Exercise 6 (Create authentication service that returns JWT)/output`

---

## 📁 Folder Structure Overview

```bash
Exercise 6 (Create authentication service that returns JWT)/
├── output/                                   <-- Output screenshot and token response
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/cognizant/springlearn/
│   │   │       ├── controller/
│   │   │       │   └── AuthController.java
│   │   │       ├── config/
│   │   │       │   └── SecurityConfig.java
│   │   │       ├── model/
│   │   │       │   └── AuthResponse.java
│   │   │       ├── util/
│   │   │       │   └── JwtUtil.java
│   │   │       └── JwtAuthApplication.java   <-- Main class
│   │   └── resources/
│   │       └── application.properties
├── target/                                   <-- Compiled class files
├── pom.xml                                   <-- Maven build file
├── mvnw / mvnw.cmd                           <-- Maven wrapper
└── README.md                                 <-- This file
```
