# 🏛️ Library Management Console App — Spring Core + VS Code

## 📌 Exercise: Configuring a Basic Spring Application Using XML

This Spring Core exercise demonstrates how to configure beans using an XML file and perform a simple user interaction via the console. The application simulates adding a book to a repository and prints confirmation.

---

## 📘 Scenario

The goal was to create a basic backend workflow that uses Spring's XML-based configuration to inject dependencies and take input from the user through the terminal. The program was fully developed and run inside **VS Code**.

---

## 🧰 Technologies Used

- Java 21  
- Spring Framework Core (v7.0.0-M6)  
- Maven  
- **Visual Studio Code** (VS Code)

---

## 🧪 Implementation Breakdown

### 🔹 1. Bean Configuration (XML)

Beans were configured in `applicationContext.xml` using setter-based dependency injection:
- `bookRepository` and `bookService` were wired manually using the `<bean>` and `<property>` tags.

### 🔹 2. Class Responsibilities

- **BookRepository**: Handles the logic for "saving" the book by printing to console.
- **BookService**: Acts as the middle layer and depends on `BookRepository`.
- **Main**: Loads the Spring context, takes user input, and triggers the book addition process.

### 🔹 3. User Interaction Flow (Console)

The main class prompts the user to enter a book name and displays output in a formatted structure, with separators before and after for clarity.

---

## 🖥️ Setup Instructions

### Prerequisites
- Java 21 installed and added to PATH  
- Maven 3.8.0+  
- **VS Code** with Java and Maven extensions enabled  

### How to Run (From VS Code Terminal)
1. Open the project folder in **VS Code**
2. Run the following in the integrated terminal:

   - Compile:
     ```
     mvn clean compile
     ```

   - Run the app (with clean output):
     ```
     mvn -q exec:java "-Dexec.mainClass=org.suhana.Main"
     ```

3. Enter the book name when prompted

---

## ✅ Sample Output

```
----------------------------

Enter book name to add:
> Fullmetal Alchemist
Saving book: Fullmetal Alchemist
Book added successfully: Fullmetal Alchemist

----------------------------
```

---

## 📁 Output Location

Output is visible directly in the github file `Week 3/Exercise 1(Configuring a Basic Spring App)/output`
![output](https://github.com/Suhana-Samanta/Cognizant-Digital-Nurture-4.0-JavaFSE-SupersetID-6403192-/blob/main/Week%203/Exercise%201(Configuring%20a%20Basic%20Spring%20App)/output/successfully%20running%20the%20Basic%20Spring%20app.png?raw=true)


---

## 🧩 Project Structure

```
LibraryApp/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/library/
│   │   │       ├── service/
│   │   │       │   └── BookService.java
│   │   │       └── repository/
│   │   │           └── BookRepository.java
│   │   └── resources/
│   │       └── applicationContext.xml
├── org/
│   └── suhana/
│       └── Main.java
├── pom.xml
└── README.md
```

