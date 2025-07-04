
# 🏛️ Library Management app
## 📌 Exercise: Implementing Dependency Injection 

This Spring Core exercise demonstrates how to implement dependency injection using an XML configuration file, with user interaction via the console. The application simulates adding a book to a repository and prints confirmation messages.

---

## 📘 Scenario  
The goal was to create a basic backend workflow that uses Spring's XML-based configuration to inject dependencies and take input from the user through the terminal. The program was fully developed and run inside VS Code.

---

## 🧰 Technologies Used  
- Java 21  
- Spring Framework Core (v7.0.0-M6)  
- Maven  
- Visual Studio Code (VS Code)  

---

## 🧪 Implementation Breakdown  

### 🔹 1. Bean Configuration (XML)  
Beans were configured in `applicationContext.xml` using setter-based dependency injection:  
- `bookRepository` (interface implementation) and `bookService` were wired manually using `<bean>` and `<property>` tags.

### 🔹 2. Class Responsibilities  
- **BookRepository**: Interface declaring the `save` method.  
- **BookRepositoryImpl**: Implements `BookRepository` and simulates saving a book by printing to the console.  
- **BookService**: Acts as the service layer using `BookRepository` to add books.  
- **Main**: Loads the Spring context, takes user input, and triggers the book addition process.

### 🔹 3. User Interaction Flow (Console)  
The main class prompts the user to enter a book name and displays output with separators before and after for clarity.

---

## 🖥️ Setup Instructions  

### Prerequisites  
- Java 21 installed and added to PATH  
- Maven 3.8.0 or higher  
- VS Code with Java and Maven extensions installed  

### How to Run (From VS Code Terminal)  
1. Open the project folder in VS Code  
2. Compile the project:  
   ```bash
   mvn clean compile
````

3. Run the app with clean output:

   ```bash
   mvn -q exec:java "-Dexec.mainClass=com.suhana.Main"
   ```
4. Enter the book name when prompted

---

## ✅ Sample Output

```
----------------------------

Enter book name: bleach
enter book" bleach
book "bleach added successfullu

----------------------------
```

---

## 📁 Output Location

Output is visible directly in the GitHub repository at:
`Week 3/Exercise 2(Implementing Dependency Injection)/Output`

![Output Screenshot](https://github.com/Suhana-Samanta/Cognizant-Digital-Nurture-4.0-JavaFSE-SupersetID-6403192-/blob/main/Week%203/Exercise%202\(Implementing%20Dependency%20Injection\)/Output/dependency%20injection.png?raw=true)

---

## 🧩 Project Structure

```bash
LibraryApp/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/suhana/
│   │   │       ├── service/
│   │   │       │   └── BookService.java
│   │   │       ├── repository/
│   │   │       │   ├── BookRepository.java
│   │   │       │   └── BookRepositoryImpl.java
│   │   └── resources/
│   │       └── applicationContext.xml
├── com/
│   └── suhana/
│       └── Main.java
├── pom.xml
└── README.md
```

