

## 📦 **Ticket Booking App**

This is a ReactJS hands-on lab project built to practice **conditional rendering** using element variables and state.
Guest users can browse flight details, while logged-in users can book tickets. The UI updates based on login state, and clicking Login/Logout shows a window pop-up.

---


## 🛠 **Features**

* Guest page displays flight details and asks user to log in
* Logged-in user sees booking page and can book tickets
* Login and Logout buttons toggle dynamically
* Simple window pop-up alerts on login/logout click
* Clean, centered UI


---

## ✏ **Components Explained**

* **App.js** – Main component; manages `isLoggedIn` state and renders:

  * Login / Logout button
  * Greeting (“Welcome back” / “Please sign up.”)
  * UserPage or GuestPage content
* **UserPage.js** – Shows ticket booking section with a "Book Ticket" button (with success pop-up)
* **GuestPage.js** – Displays flight details and login prompt
* **App.css** – Basic styling to center content and style buttons

---

## 🚀 **Run the App**

Open [http://localhost:3000](http://localhost:3000) to see it.

---

---

## ✅ **Demo Behavior**

| State           | Shown UI                                       | Action                                     |
| --------------- | ---------------------------------------------- | ------------------------------------------ |
| Guest (default) | “Please sign up.” + flight details + Login btn | Clicking Login → pop-up → switch to user   |
| Logged-in user  | “Welcome back” + booking page + Logout btn     | Clicking Logout → pop-up → switch to guest |

---


Created as part of the hands-on lab exercise in **12. ReactJS-HOL** PDF.

