

# React Event Handling Examples

This project is a hands-on lab implementation for learning **event handling in ReactJS**, based on the provided training module instructions.

## ✅ Features Implemented (As per Hands-on PDF)

| Feature                    | Description                                                                  |
| -------------------------- | ---------------------------------------------------------------------------- |
| 🔼 Counter Component       | Increment & Decrement buttons. Increment triggers multiple functions.        |
| 🙋‍♀️ Welcome Button       | Button passes "welcome" as a string argument and displays it using `alert()` |
| 🖱 Synthetic Event Example | Demonstrates React's Synthetic Event system with a click log and alert.      |
| 💱 Currency Convertor      | Converts Rupees to Euros with a submit button and popup confirmation.        |

---

## 📁 Components Summary

### `Counter.js`

* Button: **Increment** increases count and calls two methods:

  * `increment()` – Increases the count
  * `sayHello()` – Shows `alert("Hello! Button was clicked.")`
* Button: **Decrement** decreases the count

### `Welcome.js`

* Button: **Say welcome**
* Function takes `"welcome"` as argument and displays it using:

  * `alert("welcome")`

### `SyntheticEvent.js`

* Button: **Click on me**
* Triggers a `console.log(event)` for learning
* Shows `alert("I was clicked")`

### `CurrencyConvertor.js`

* Inputs: Rupee amount + static “Euro” field
* Button: **Submit**
* Converts to Euro using fixed rate `1 Euro = ₹90`
* Displays:

  * `alert("Converting to Euro Amount is X")`
  * On-screen output: `₹X is equal to €Y`

Open [http://localhost:3000](http://localhost:3000) in your browser

---

## 📷 Output Screenshots

### 🧠 VS Code Workspace

![VS Code](https://github.com/Suhana-Samanta/Cognizant-Digital-Nurture-4.0-JavaFSE-SupersetID-6403192-/raw/main/Week%207/11.%20ReactJS-HOL/eventexamplesapp/output/VS%20Code.png)

### 🖥 App on Localhost

![App Running](https://github.com/Suhana-Samanta/Cognizant-Digital-Nurture-4.0-JavaFSE-SupersetID-6403192-/raw/main/Week%207/11.%20ReactJS-HOL/eventexamplesapp/output/app%20on%20local%20host.png)

### 🙋‍♀️ Welcome Message

![Welcome](https://github.com/Suhana-Samanta/Cognizant-Digital-Nurture-4.0-JavaFSE-SupersetID-6403192-/raw/main/Week%207/11.%20ReactJS-HOL/eventexamplesapp/output/welcome.png)

### 🖱 Synthetic Event Output

![Synthetic Event](https://github.com/Suhana-Samanta/Cognizant-Digital-Nurture-4.0-JavaFSE-SupersetID-6403192-/raw/main/Week%207/11.%20ReactJS-HOL/eventexamplesapp/output/SyntheticEvent.png)

### 💱 Currency Converter Output

![Currency Converter](https://github.com/Suhana-Samanta/Cognizant-Digital-Nurture-4.0-JavaFSE-SupersetID-6403192-/raw/main/Week%207/11.%20ReactJS-HOL/eventexamplesapp/output/currencyConverter.png)

---

## 📚 Learning Outcomes

* Understanding **React event handlers**
* Using the **`this` keyword** and `useState`
* Creating **synthetic events** and handling form submission
* Displaying dynamic content using **`alert()`** and state



