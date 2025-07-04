
# 🏛️ Library Management Console App — Spring Core + VS Code

## 📌 Exercise: Creating and Configuring a Maven Project

This Spring Core exercise demonstrates how to set up a new Maven project, add essential Spring dependencies, configure Java compatibility, and verify setup with a basic Spring context initialization.

---

## 📘 Scenario

The objective was to configure a clean Maven-based backend setup for a Library Management system using **Spring Core** modules. This included organizing the project structure, updating the `pom.xml` with required Spring libraries, and initializing a Spring context as a setup check. The project was fully built and tested using **VS Code**.

---

## 🧰 Technologies Used

- Java 1.8  
- Spring Framework Core (v5.3.22)  
- Maven 3.8.0+  
- **Visual Studio Code** (VS Code)

---

## 🧪 Implementation Breakdown

### 🔹 1. Maven Dependency Configuration

- Added dependencies for:
  - `spring-context`  
  - `spring-aop`  
  - `spring-webmvc`  
  - `aspectjweaver` (for AOP support)

- Configured the Maven Compiler Plugin to use Java 1.8 via `<source>` and `<target>`.

### 🔹 2. Setup Confirmation

- The `Main.java` class uses Spring’s `AnnotationConfigApplicationContext` to print a message confirming successful context initialization.

---

## 🖥️ Setup Instructions

### Prerequisites

- Java 1.8 installed and added to PATH  
- Maven 3.8.0 or higher  
- **VS Code** with Java and Maven extensions installed  

### How to Run

1. Open the project folder in **VS Code**  
2. In the integrated terminal, run:

   - Compile:
   ```
   mvn clean compile
   ````

   - Run manually using terminal command `mvn exec:java -D"exec.mainClass"="com.suhana.Main"`

---

## ✅ Sample Output

```
Spring Context Initialized!

```


---
## 📁 Output Location

Output is visible directly in the GitHub repository at:  
`Week 3/Exercise 4(Creating n Configuring Maven Project)/Output/creating and configuring Maven Prj.png`

![Output Screenshot](https://github.com/Suhana-Samanta/Cognizant-Digital-Nurture-4.0-JavaFSE-SupersetID-6403192-/blob/main/Week%203/Exercise%204(Creating%20n%20Configuring%20Maven%20Project)/Output/creating%20and%20configuring%20Maven%20Prj.png?raw=true)

---

## 🧩 Project Structure

```

LibraryManagement/
├── Output/
│   └── creating and configuring Maven Prj.png
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/suhana/
│   │   │       └── Main.java
│   │   └── resources/
│   └── test/
│       └── java/
│           └── com/suhana/
├── pom.xml
└── README.md

