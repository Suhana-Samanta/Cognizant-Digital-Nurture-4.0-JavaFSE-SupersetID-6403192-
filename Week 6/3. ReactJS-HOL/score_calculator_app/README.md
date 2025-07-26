
# 📊 Score Calculator React App

Welcome to the **Score Calculator App**, built with **ReactJS** during **Week 6** of the **Java FSE Digital Nurture Program** by Cognizant.
This app calculates and displays a student’s score as a percentage with a styled layout using custom CSS.

---

## ✨ Features

* Built using `create-react-app`
* Functional React component to display student details
* Custom logic for score calculation
* CSS-based visual formatting with colored fields
* Responsive, center-aligned layout
* Clean and minimal folder structure

---

## 📸 Output Screenshots

### ✅ App Running on Localhost

![React App on Localhost](https://github.com/Suhana-Samanta/Cognizant-Digital-Nurture-4.0-JavaFSE-SupersetID-6403192-/raw/main/Week%206/3.%20ReactJS-HOL/score_calculator_app/Output/react%20app%20on%20local%20host%20\(1\).png)

---

### ✅ VS Code Compilation + Code Output

![Code and Compilation](https://github.com/Suhana-Samanta/Cognizant-Digital-Nurture-4.0-JavaFSE-SupersetID-6403192-/raw/main/Week%206/3.%20ReactJS-HOL/score_calculator_app/Output/code%20and%20compilation.png)

---

## 📂 Folder Structure

```
score_calculator_app/
├── public/
│   └── index.html
├── src/
│   ├── App.js               # Main wrapper component
│   ├── CalculateScore.js    # Score display logic and props
│   ├── mystyle.css          # Custom CSS for styled output
│   └── index.js             # Entry point of the app
├── package.json             # Dependencies and scripts
└── README.md                # This file
```

---

## 🖥️ How to Run Locally

### ✅ Prerequisites

* [Node.js](https://nodejs.org/) (v18 or higher recommended)
* npm (comes pre-installed with Node.js)



Your app will be available at:
👉 [http://localhost:3000](http://localhost:3000)

---

## 🎨 Styling Overview

Defined in `mystyle.css`, these classes style different sections:

| CSS Class      | Description                  | Example Color   |
| -------------- | ---------------------------- | --------------- |
| `.formatstyle` | Center alignment + font size | Centered layout |
| `.Name`        | Student's name               | Blue            |
| `.School`      | School name                  | Crimson         |
| `.Total`       | Total marks                  | DarkMagenta     |
| `.Score`       | Calculated score             | ForestGreen     |

---

## 🧠 Component Usage Example

The app uses a **reusable functional component** `CalculateScore` that accepts the following props:
