

# **Exercise 4: Spring Boot – REST Country Web Service**

This project demonstrates a RESTful web service using **Spring Boot**, run in **Visual Studio Code**. The service exposes an endpoint `/country` that returns the details of the country "India", configured in an XML file (`applicationContext.xml`).

---

## 📌 Objective

To build a REST API that loads bean data from XML configuration and serves it as a JSON response via an HTTP endpoint.

---

## 💠 Technologies Used

* Java 21
* Spring Boot
* Spring Context
* Maven
* Visual Studio Code

---

## 🧪 Steps Followed

* Defined a `Country` bean in `applicationContext.xml`.
* Configured Spring Boot to import the XML using `@ImportResource`.
* Created a REST controller that returns the bean on hitting `/country`.
* Verified the output in browser and VS Code terminal.

---

## ✅ Output

The `/country` endpoint responded with JSON showing the ISO code and name for "India".

### 🖼️ Output Screenshots

| Web Output                                                                                                                                                                                                                  | Terminal Output                                                                                                                                                                                                                                  |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ![Web Output](https://raw.githubusercontent.com/Suhana-Samanta/Cognizant-Digital-Nurture-4.0-JavaFSE-SupersetID-6403192-/main/Week%204/Exercise%204%20\(REST%20-%20Country%20Web%20Service\)/Output/coutput%20in%20Web.png) | ![Terminal Output](https://raw.githubusercontent.com/Suhana-Samanta/Cognizant-Digital-Nurture-4.0-JavaFSE-SupersetID-6403192-/main/Week%204/Exercise%204%20\(REST%20-%20Country%20Web%20Service\)/Output/output%20in%20VS%20Code%20terminal.png) |

---

## 📁 Output Location

`Week 4/Exercise 4 (REST - Country Web Service)/Output`

---

## 📁 Folder Structure Overview

```bash
spring-learn/
├── Output/                                <-- Output screenshots
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/cognizant/springlearn/
│   │   │       ├── model/
│   │   │       │   └── Country.java
│   │   │       ├── controller/
│   │   │       │   └── CountryController.java
│   │   │       └── RestCountryWebServiceApplication.java
│   │   └── resources/
│   │       ├── application.properties
│   │       └── applicationContext.xml
├── target/                                <-- Compiled output
├── pom.xml
└── README.md
```

