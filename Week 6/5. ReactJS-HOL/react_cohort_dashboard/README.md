
# 🧑‍💻 React Cohort Dashboard (Styled)

This project demonstrates how to build and style a **Cohort Dashboard** using **React**, created during **Week 6** of the *Java FSE Digital Nurture Program by Cognizant*.
It showcases both *CSS Modules* and *inline styles* to make React components visually engaging and maintainable.

---

## 🎯 Learning Objectives

This project demonstrates how to:

* Understand the need for styling React components
* Apply styles using **CSS Modules** and **inline styles**
* Use `className` and `style` props effectively in React


## 📁 Project Description

The **goal** of this project is to help a Cognizant team build a **dashboard** that shows the status of **ongoing** and **completed** cohorts.

A basic React app is scaffolded — your task is to **style the components** cleanly using modular CSS and conditional rendering logic.

---

## 🎨 Styling Methods

### 📦 Using CSS Modules

All component styles are scoped locally using **`.module.css`** files. This ensures that classes are modular and do not leak globally.

Example:

```js
import styles from "./CohortDetails.module.css";
```

### 🎨 Using Inline Styles

Components also use **inline styles**, especially when styles are **dynamic based on props**.

Example:

```jsx
<h3
  className={
    cohort.currentStatus === "Ongoing"
      ? styles["ongoing"]
      : styles["other-status"]
  }
>
  {cohort.cohortCode}
</h3>
```

---

## 🧠 Component Design

* **Cohort.js** – holds array of cohort data (`id`, `name`, `count`, `status`)
* **CohortDetails.js** – reusable component styled based on `currentStatus`
* **App.js** – renders a list of all cohorts using `.map()`
* **App.test.js** – includes a basic test with `@testing-library/react`

---

## 🖥️ How to Run

### ✅ Prerequisites

* Node.js (v18+)
* npm


App will run on: 👉 [http://localhost:3000](http://localhost:3000)

---

## 📸 Output Screenshots

### ✅ Dashboard Display on Localhost

![Dashboard on Localhost](https://github.com/Suhana-Samanta/Cognizant-Digital-Nurture-4.0-JavaFSE-SupersetID-6403192-/raw/main/Week%206/5.%20ReactJS-HOL/react_cohort_dashboard/Output/cohort%20dashboard%20in%20local%20host.png)

### ✅ Successfully Compiled Code in VS Code

![Compilation Success](https://github.com/Suhana-Samanta/Cognizant-Digital-Nurture-4.0-JavaFSE-SupersetID-6403192-/raw/main/Week%206/5.%20ReactJS-HOL/react_cohort_dashboard/Output/succefully%20compiled%20code.png)
