Great! Here's the updated **README.md** draft incorporating your new instructions (without the images for now):

---

# 🧑‍💻 React Cohort Dashboard (Styled)

This project demonstrates how to build and style a **Cohort Dashboard** using **React**, created during **Week 6** of the *Java FSE Digital Nurture Program by Cognizant*.
It showcases both *CSS Modules* and *inline styles* to make React components visually engaging and maintainable.

---

## 🎯 Learning Objectives

This project demonstrates how to:

* Understand the need for styling React components
* Apply styles using **CSS Modules** and **inline styles**
* Use `className` and `style` props effectively in React

---

## 🛠️ Skills You’ll Practice

* Styling React components
* Working with CSS Modules (`.module.css`)
* Inline styling using the `style` prop
* Applying dynamic styling based on component props

---

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

### ▶️ Steps

```bash
git clone <repo-url>
cd react_cohort_dashboard
npm install
npm start
```

App will run on: 👉 [http://localhost:3000](http://localhost:3000)

---

Let me know when you're ready to add the images — I’ll update the `📸 Output Screenshots` section for you!
