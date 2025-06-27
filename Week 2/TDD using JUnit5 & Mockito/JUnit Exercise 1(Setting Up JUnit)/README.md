
# Exercise 1: Setting Up JUnit

In this exercise, JUnit 4 was configured in a Java project using **Visual Studio Code**.

## 📌 Scenario  
The objective was to set up JUnit in a Maven-based Java project and verify the configuration with a simple unit test.

## 🛠 Technologies Used  
- Java  
- JUnit 4 (v4.13.2)  
- Maven  
- Visual Studio Code

## 🧪 Steps Followed

### 1. Project Setup  
A new Maven-based Java project was created using **Visual Studio Code**.

### 2. Dependency Configuration  
The following JUnit dependency was added to the `pom.xml` file:

```xml
<dependency>
    <groupId>junit</groupId>
    <artifactId>junit</artifactId>
    <version>4.13.2</version>
    <scope>test</scope>
</dependency>
````

### 3. Test Class Creation

A test class was written with a basic unit test to verify the setup:

```java
import org.junit.Test;
import static org.junit.Assert.*;

public class SampleTest {

    @Test
    public void testAddition() {
        assertEquals(5, 2 + 3);
    }
}
```

## ✅ Output

The test was executed successfully using Maven in **Visual Studio Code**, and the expected output was observed.

## 📁 Output Location

`Week 2/TDD using JUnit5 & Mockito/JUnit Exercise 1(Setting Up JUnit)/output`


