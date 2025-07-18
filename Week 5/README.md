
# 🧩 Microservices with API Gateway

This project demonstrates the implementation of a microservices architecture using **Spring Boot**, **Eureka Discovery Server**, and **Spring Cloud Gateway**. It consists of two core microservices—**Account Service** and **Loan Service**—which are registered with Eureka and accessed via the API Gateway.

---

## 🔧 Project Structure

```text
├── eureka-discovery-server
├── api-gateway
├── account-service
└── loan-service
````

---

## 🚀 Microservices Overview

| Service Name        | Description                                    | Port |
| ------------------- | ---------------------------------------------- | ---- |
| **Eureka Server**   | Service registry for discovering microservices | 8761 |
| **API Gateway**     | Single entry point for routing requests        | 8083 |
| **Account Service** | Handles account-related requests               | 8081 |
| **Loan Service**    | Handles loan-related requests                  | 8082 |

---

## 🌐 Gateway Routing URLs

Once all services are running and registered with Eureka, the following URLs can be accessed via the API Gateway:

* 🏦 Account Service:
  `http://localhost:8083/account-service/accounts`

* 💰 Loan Service:
  `http://localhost:8083/loan-service/loans`

---

## 📸 Output Screenshots

### ✅ Eureka Server Dashboard

![Eureka Server](https://github.com/Suhana-Samanta/Cognizant-Digital-Nurture-4.0-JavaFSE-SupersetID-6403192-/raw/main/Week%205/outout/Eureka%20Server.png)

---

### 🟢 Running Microservices

![Microservices Running](https://github.com/Suhana-Samanta/Cognizant-Digital-Nurture-4.0-JavaFSE-SupersetID-6403192-/raw/main/Week%205/outout/running%20of%20Microservices.png)

---

## ⚙️ How to Run

1. **Start Eureka Server**
   Run the `eureka-discovery-server` on port `8761`.

2. **Run Microservices**
   Start `account-service` and `loan-service`. They will register with Eureka automatically.

3. **Start API Gateway**
   Launch the `api-gateway` on port `8083`.

4. **Test Endpoints via Gateway**

   * `http://localhost:8083/account-service/accounts`
   * `http://localhost:8083/loan-service/loans`

---

## 📚 Tech Stack

* Java 21
* Spring Boot 3.5.3
* Spring Cloud 2025.0.0
* Eureka Discovery Server
* Spring Cloud Gateway (WebFlux)
* Maven



---

Let me know if you want to include controller code samples or a demo video section too!
```
