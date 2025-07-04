
# 🧪Spring Data JPA Quick Example

This is a demo project showcasing how to use **Spring Boot**, **Spring Data JPA**, and **Hibernate** with an **Oracle Database** — developed entirely in **VS Code**.

---

## 📦 Project Details

- **Group**: `com.cognizant`
- **Artifact**: `orm-learn`
- **Spring Boot Version**: 3.5.3
- **Database**: Oracle 21c (or compatible)
- **Tools Used**:
  - **VS Code** (with Spring Boot and Java extensions)
  - Maven 3.6+
  - Oracle Database
  - DataGrip (for SQL execution)
  - Java 21

---

## 🧩 Project Structure

```bash
src/
├── main/
│   ├── java/
│   │   └── com/cognizant/orm_learn/
│   │       ├── model/
│   │       │   └── Country.java
│   │       ├── repository/
│   │       │   └── CountryRepository.java
│   │       ├── service/
│   │       │   └── CountryService.java
│   │       └── OrmLearnApplication.java
│   └── resources/
│       └── application.properties
```

---

## 💡 Core Concepts

* **@Entity, @Table, @Id, @Column** — JPA annotations used to map the `Country` class to the DB table.
* **JpaRepository** — Provides CRUD operations without custom SQL.
* **@Service + @Transactional** — Used in the service layer for transactional data access.

---

## ✅ Output

```bash
DEBUG --- org.hibernate.SQL : select c1_0.code, c1_0.name from country c1_0
DEBUG --- OrmLearnApplication : countries=[Country{code='IN', name='India'}, Country{code='US', name='United States of America'}]
```



## 📂 Output Location

All logs are visible in the VS Code terminal, and a screenshot is available in:
Week 3/Spring Data JPA (Quick Example)/output/

![Output Screenshot](https://github.com/Suhana-Samanta/Cognizant-Digital-Nurture-4.0-JavaFSE-SupersetID-6403192-/blob/main/Week%203/Spring%20Data%20JPA%20%28Quick%20Example%29/output/output.png?raw=true)


