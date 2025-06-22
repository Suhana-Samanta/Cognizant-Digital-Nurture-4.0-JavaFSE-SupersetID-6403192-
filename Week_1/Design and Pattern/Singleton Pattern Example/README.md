
# Singleton Pattern Example

This project demonstrates how to implement the **Singleton design pattern** for a logging utility class.  
The goal is to ensure that only one instance of the logger exists throughout the application lifecycle to provide consistent logging.

---

## Scenario

You need to ensure that a logging utility class in your application has only one instance across the entire application.

---

## Steps

### 1️⃣ Create a New Java Project
Create a new Java project named `SingletonPatternExample`.

---

### 2️⃣ Define a Singleton Class
- Create a class named `Logger`.
- Include a **private static instance** of `Logger` within the class.
- Make the **constructor private** to prevent external instantiation.
- Provide a **public static method** (e.g., `getInstance`) that returns the single instance of `Logger`.

---

### 3️⃣ Implement the Singleton Pattern
Write code that ensures:
- Only one instance of `Logger` can be created.
- The same instance is returned for all calls to `getInstance`.

---

### 4️⃣ Test the Singleton Implementation
Create a test class (e.g., `Main`) to verify:
- Multiple calls to `getInstance` return the same `Logger` object.
- The logger behaves consistently throughout the application.

---

## Running the Code

1️⃣ **Compile the Java files**
```bash
javac Logger.java Main.java
=======
# Singleton Pattern Example

This project demonstrates how to implement the **Singleton design pattern** for a logging utility class.  
The goal is to ensure that only one instance of the logger exists throughout the application lifecycle to provide consistent logging.

We need to ensure that a logging utility class in my application has only one instance across the entire application.

---

## Output- 
![alt text](https://github.com/Suhana-Samanta/Cognizant-Digital-Nurture-4.0-JavaFSE-SupersetID-6403192-/blob/b2761a826c6c2aa19e7e6b412daef134ba417157/Week_1/Design%20and%20Pattern/Singleton%20Pattern%20Example/Output/output1.png)

>>>>>>> 21ed27c64170b5033cc987db5b93fd32e1c39b26
