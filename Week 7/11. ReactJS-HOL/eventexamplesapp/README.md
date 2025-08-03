
# React Event Handling Examples

This project is a hands-on lab implementation for learning **event handling in ReactJS**, based on the provided training module instructions.

## ✅ Features Implemented (As per Hands-on PDF)

| Feature                             | Description                                                                 |
|------------------------------------|-----------------------------------------------------------------------------|
| 🔼 Counter Component                | Increment & Decrement buttons. Increment triggers multiple functions.       |
| 🙋‍♀️ Welcome Button                 | Button passes "welcome" as a string argument and displays it using `alert()` |
| 🖱 Synthetic Event Example          | Demonstrates React's Synthetic Event system with a click log and alert.    |
| 💱 Currency Convertor              | Converts Rupees to Euros with a submit button and popup confirmation.      |

---

## 📁 Components Summary

### `Counter.js`
- Button: **Increment** increases count and calls two methods:
  - `increment()` – Increases the count
  - `sayHello()` – Shows `alert("Hello! Button was clicked.")`
- Button: **Decrement** decreases the count

### `Welcome.js`
- Button: **Say welcome**
- Function takes `"welcome"` as argument and displays it using:
  - `alert("welcome")`

### `SyntheticEvent.js`
- Button: **Click on me**
- Triggers a `console.log(event)` for learning
- Shows `alert("I was clicked")`

### `CurrencyConvertor.js`
- Inputs: Rupee amount + static “Euro” field
- Button: **Submit**
- Converts to Euro using fixed rate `1 Euro = ₹90`
- Displays:
  - `alert("Converting to Euro Amount is X")`
  - On-screen output: `₹X is equal to €Y`

---

## 💻 How to Run This Project

### Prerequisites
- Node.js & npm
- VS Code or any React-supported editor

### Steps
1. Clone or download this repository
2. Run `npm install`
3. Run `npm start`
4. Open [http://localhost:3000](http://localhost:3000) in your browser

---

## 📝 Notes

- Alerts are implemented using **`window.alert()`** for authenticity, just like the screenshots in the hands-on PDF.
- This app is for educational/demo purposes — the styling is minimal and functional only.

---

## 📷 Screenshot Sample

```

localhost:3000 says
Converting to Euro Amount is 6400
\[OK]

```

---

## 📚 Learning Outcomes

- Understanding **React event handlers**
- Using the **`this` keyword** and `useState`
- Creating **synthetic events** and handling form submission
- Displaying dynamic content using **`alert()`** and state

---

## 📦 Folder Structure

```

src/
├── components/
│   ├── Counter.js
│   ├── Welcome.js
│   ├── SyntheticEvent.js
│   └── CurrencyConvertor.js
├── App.js
├── index.js
├── App.css


