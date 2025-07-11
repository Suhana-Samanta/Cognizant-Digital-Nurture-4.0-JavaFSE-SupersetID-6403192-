

# **Exercise 2: Spring Core – Load Country from Spring Configuration XML**

This exercise demonstrates how to use **Spring Core** with **XML-based configuration** in **Visual Studio Code**. A `Country` bean is defined in an external XML file and loaded using Spring's `ApplicationContext`.

---

## 🧩 Use Case

An airline platform requires country-specific configurations like country code and name. To support this, the system must load such configurations at runtime using Spring's XML-based configuration.

---

## 💠 Technologies Used

* Java 21
* Spring Framework (Core)
* Maven
* Visual Studio Code

---

## 🧪 Steps Followed

1. A `Country` bean was defined in `country.xml` under `src/main/resources`.
2. The application used `ClassPathXmlApplicationContext` to load the configuration.
3. SLF4J logs were added to trace constructor and method invocations.

---

### ✂️ Key Code Snippet

```java
ApplicationContext ctx = new ClassPathXmlApplicationContext("country.xml");
Country country = ctx.getBean("country", Country.class);
LOGGER.debug("Fetched Country bean: {}", country);
```

---

## ✅ Output

The application successfully loaded the `Country` bean and logged the details to the console.

### 🖼️ Output Screenshot

![Country Bean Output](https://raw.githubusercontent.com/Suhana-Samanta/Cognizant-Digital-Nurture-4.0-JavaFSE-SupersetID-6403192-/main/Week%204/Exercise%202%20\(Spring%20Core%20-%20Load%20Country%20from%20Spring%20Configuration%20XML\)/Output/output.png)

---

## 📁 Output Location

`Week 4/Exercise 2 (Spring Core - Load Country from Spring Configuration XML)/Output`

---

## 📁 Folder Structure Overview

```bash
SpringLearn/
├── Output/                                <-- Console output screenshot
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/cognizant/springlearn/
│   │   │       ├── Country.java
│   │   │       └── SpringLearnApplication.java
│   │   └── resources/
│   │       └── country.xml                <-- Spring XML Configuration
├── target/                                <-- Build output folder
│   ├── classes/
│   ├── generated-sources/
│   ├── maven-status/
│   └── test-classes/
├── pom.xml                                <-- Maven build file
└── README.md
```

