
# Exercise 2: Verifying Interactions

In this exercise, **Mockito** was used to verify that a method was called with specific arguments on a mock object during unit testing.

## 📌 Scenario  
The objective was to ensure that a method was invoked on a mock object with the correct parameters.

## 🛠 Technologies Used  
- Java  
- JUnit 5  
- Mockito  
- Maven  
- Visual Studio Code

## 🧪 Steps Followed

### 1. Mock Object Creation  
A mock of the `ExternalApi` dependency was created using Mockito.

### 2. Method Invocation  
The method `fetchData()` was called, which internally invoked the mocked method.

### 3. Interaction Verification  
The `verify()` method was used to confirm that `getData()` was called on the mocked object.

---


## ✅ Output

The test passed successfully, and Mockito confirmed that the expected interaction occurred.

## 📁 Output Location

`Week 2/TDD using JUnit5 & Mockito/Mockito Ex 2(Verifying Interactions)/output`


