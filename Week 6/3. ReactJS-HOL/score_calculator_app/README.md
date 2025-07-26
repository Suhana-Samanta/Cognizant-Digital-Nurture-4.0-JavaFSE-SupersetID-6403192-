
# 📊 Score Calculator React App

Welcome to the **Score Calculator App**, built with **ReactJS** during Week 6 of the Java FSE Digital Nurture Program by Cognizant.
This app calculates and displays a student’s score as a percentage with styled output using custom CSS.

---

## ✨ Features

* Built using `create-react-app`
* React component for student score display
* Color-coded CSS classes for clarity
* Responsive and centered layout
* Clean folder structure

---

## 📸 Output

### ✅ App running on local server

![Localhost Running](https://github.com/Suhana-Samanta/Cognizant-Digital-Nurture-4.0-JavaFSE-SupersetID-6403192-/raw/main/Week%206/3.%20ReactJS-HOL/score_calculator_app/Output/local%20host.png)

### ✅ VS Code with Code + Output

![Code and Output](https://github.com/Suhana-Samanta/Cognizant-Digital-Nurture-4.0-JavaFSE-SupersetID-6403192-/raw/main/Week%206/3.%20ReactJS-HOL/score_calculator_app/Output/code%20and%20output.png)

---

## 📂 Folder Structure

```
score_calculator_app/
├── public/
│   └── index.html
├── src/
│   ├── App.js                 # Main component
│   ├── CalculateScore.js      # Functional component for score calculation
│   ├── mystyle.css            # Custom CSS styles
│   └── index.js               # React entry point
├── package.json               # Project metadata and dependencies
└── README.md                  # This file
```

---

## 🖥️ How to Run Locally

### ✅ Prerequisites

* Node.js (v18 or higher recommended)
* npm (comes with Node.js)



The app will run at:

👉 [http://localhost:3000](http://localhost:3000)

---

## 🎨 Styling Overview

The app uses a separate `mystyle.css` for stylized output:

* `.formatstyle` → Layout and center alignment
* `.Name`, `.School`, `.Total`, `.Score` → Colored sections

---

## 🧠 Component Example

### Props Passed to `CalculateScore`:

```jsx
<CalculateScore 
  Name="Steeve" 
  School="DNV Public School" 
  total={284} 
  goal={3}
/>
```

