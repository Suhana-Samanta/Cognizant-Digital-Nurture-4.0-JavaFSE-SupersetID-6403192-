import React, { useState } from "react";
import "./App.css";
import UserPage from "./UserPage";
import GuestPage from "./GuestPage";

function LoginButton(props) {
  return <button onClick={props.onClick}>Login</button>;
}

function LogoutButton(props) {
  return <button onClick={props.onClick}>Logout</button>;
}

function UserGreeting() {
  return <h1>Welcome back</h1>;
}

function GuestGreeting() {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    alert("You are now logged in!");
    setIsLoggedIn(true);
  };

  const handleLogoutClick = () => {
    alert("You are now logged out!");
    setIsLoggedIn(false);
  };

  const button = isLoggedIn ? (
    <LogoutButton onClick={handleLogoutClick} />
  ) : (
    <LoginButton onClick={handleLoginClick} />
  );

  const pageContent = isLoggedIn ? <UserPage /> : <GuestPage />;

  return (
    <div className="App">
      <Greeting isLoggedIn={isLoggedIn} />
      {pageContent}
      {button}
    </div>
  );
}

export default App;
