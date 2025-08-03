Here is your updated `README.md` for the **Ticket Booking App**, now with all the screenshots embedded from your GitHub repo:

---

## 📦 **Ticket Booking App**

This is a ReactJS hands-on lab project built to practice **conditional rendering** using element variables and state.
Guest users can browse flight details, while logged-in users can book tickets. The UI updates based on login state, and clicking Login/Logout shows a window pop-up.

---

## 🛠 **Features**

* ✈️ Guest page displays flight details and asks user to log in
* 🙋‍♂️ Logged-in user sees booking page and can book tickets
* 🔁 Login and Logout buttons toggle dynamically
* 🪟 Simple window pop-up alerts on login/logout click
* 🎨 Clean, centered UI

---

## ✏ **Components Explained**

* **App.js** – Main component; manages `isLoggedIn` state and renders:

  * Login / Logout button
  * Heading: 🎟️ *Ticket Booking App*
  * GuestPage or UserPage content
* **UserPage.js** – Shows ticket booking section with a **"Book Ticket"** button that displays success pop-up using `window.alert()`
* **GuestPage.js** – Displays flight information and message asking user to log in
* **App.css** – Handles layout and button styling

---

## 🚀 **Run the App**

Start your development server and open:
**[http://localhost:3000](http://localhost:3000)**

---

## ✅ **Demo Behavior**

| State           | Shown UI                                       | Action                                       |
| --------------- | ---------------------------------------------- | -------------------------------------------- |
| Guest (default) | “Please sign up.” + flight details + Login btn | Clicking Login → pop-up → switch to user     |
| Logged-in user  | “Welcome back” + booking page + Logout btn     | Clicking Logout → pop-up → switch to guest   |
| Book Ticket     | Shows success pop-up                           | "The host says: Ticket booked successfully!" |

---

## 🖼️ **Output **

### 🧠 App Compiled in VS Code

![VS Code Compilation](https://github.com/Suhana-Samanta/Cognizant-Digital-Nurture-4.0-JavaFSE-SupersetID-6403192-/raw/main/Week%207/12.%20ReactJS-HOL/ticketbookingapp/output/VS%20Code%20App%20successful%20compilation.png)

### 🧳 Guest Page in Localhost

![Guest Page](https://github.com/Suhana-Samanta/Cognizant-Digital-Nurture-4.0-JavaFSE-SupersetID-6403192-/raw/main/Week%207/12.%20ReactJS-HOL/ticketbookingapp/output/guestpage%20in%20local%20host.png)

### 🎯 Interactive Login/Logout Buttons

![Interactive Button 1](https://github.com/Suhana-Samanta/Cognizant-Digital-Nurture-4.0-JavaFSE-SupersetID-6403192-/raw/main/Week%207/12.%20ReactJS-HOL/ticketbookingapp/output/interactive%20button.png)
![Interactive Button 2](https://github.com/Suhana-Samanta/Cognizant-Digital-Nurture-4.0-JavaFSE-SupersetID-6403192-/raw/main/Week%207/12.%20ReactJS-HOL/ticketbookingapp/output/interactive%20button%20\(2\).png)

---

✅ Created as part of the hands-on lab exercise in **12. ReactJS-HOL** PDF.
