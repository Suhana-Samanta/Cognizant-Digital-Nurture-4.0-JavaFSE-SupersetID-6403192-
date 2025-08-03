
## 🏢 Office Space, at affordable range

A simple ReactJS application that demonstrates the use of **JSX**, **inline styling**, and **conditional rendering** to display details of office spaces available for rent.

---

### 📌 Objectives

This project demonstrates the following key concepts of React:

* JSX syntax for element creation
* Embedding JavaScript expressions in JSX
* Rendering JSX to the DOM
* Using inline CSS styles
* Using conditional styling based on object data
* Dynamically rendering components using `.map()`

---

### 🛠️ Tech Stack

* **ReactJS**
* **JavaScript (ES6)**
* **HTML & CSS (with inline styles and external file)**
* IDE: Visual Studio Code

---

### 📂 Project Structure

```
officespacerentalapp/
├── public/
├── src/
│   ├── images/
│   │   ├── photo1.jpg
│   │   ├── photo2.jpg
│   │   └── photo3.jpg
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json
└── README.md
```

5. Open your browser and go to:

   ```
   http://localhost:3000
   ```

---

### 💡 App Features

* Displays a heading and list of office space cards.
* Each office space displays:

  * Image
  * Name
  * Rent
  * Address
* Rent is colored:

  * 🔴 **Red** if rent ≤ ₹60000
  * 🟢 **Green** if rent > ₹60000

---

### 🖼️ Sample Output

![App Screenshot](./src/images/photo1.jpg)

---

### ✨ Example JSX Used

```jsx
<h3 style={{ color: office.rent < 60000 ? "red" : "green" }}>
  Rent: ₹{office.rent}
</h3>
```

---

### 📚 Learning Outcomes

* Create and render React elements using `JSX`
* Apply conditional inline styles
* Import and use local image assets
* Render components dynamically using `.map()`
* Style components with CSS and shadow effects

