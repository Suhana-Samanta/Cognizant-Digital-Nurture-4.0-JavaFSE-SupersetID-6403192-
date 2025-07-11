Here is the cleaned-up `README.md` for:

---

# **Exercise 5: Spring Boot REST API – Get Country by Code**

This project demonstrates a **Spring Boot** REST API that returns country details based on a country code. The country data is loaded from an XML file (`country.xml`) at application startup using **JAXB**.

---

## 📌 Objective

To implement a RESTful service that fetches country details from an XML source and returns them as JSON upon request to `/countries/{code}`.

---

## 💠 Technologies Used

* Java
* Spring Boot
* JAXB
* Maven
* Visual Studio Code

---

## 🧪 API Usage Example

### ✅ Supported Requests:

* `http://localhost:8080/countries/in`
* `http://localhost:8080/countries/usa`
* `http://localhost:8080/countries/japan`

Each request fetches the country by its ISO code (case-insensitive).

---

## ✅ Output



### 🖼️ Output Screenshots

| Web Output                                                                                                                                                                                                                                     | Terminal Output                                                                                                                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Web Output](https://raw.githubusercontent.com/Suhana-Samanta/Cognizant-Digital-Nurture-4.0-JavaFSE-SupersetID-6403192-/main/Week%204/Exercise%205%20\(REST%20-%20Get%20country%20based%20on%20country%20code\)/Output/output%20in%20Web.png) | ![Terminal Output](https://raw.githubusercontent.com/Suhana-Samanta/Cognizant-Digital-Nurture-4.0-JavaFSE-SupersetID-6403192-/main/Week%204/Exercise%205%20\(REST%20-%20Get%20country%20based%20on%20country%20code\)/Output/output%20in%20VS%20code%20terminal.png) |

---

## 📁 Output Location

`Week 4/Exercise 5 (REST - Get country based on country code)/Output`

---

## 🏗️ Folder Structure

```bash
spring-learn/
├── Output/                                
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/cognizant/spring_learn/
│   │   │       ├── controller/
│   │   │       │   └── CountryController.java
│   │   │       ├── model/
│   │   │       │   ├── Country.java
│   │   │       │   └── CountryList.java
│   │   │       ├── service/
│   │   │       │   └── CountryService.java
│   │   │       └── SpringLearnApplication.java
│   │   └── resources/
│   │       ├── application.properties
│   │       └── country.xml
├── target/
├── pom.xml
└── README.md
```

