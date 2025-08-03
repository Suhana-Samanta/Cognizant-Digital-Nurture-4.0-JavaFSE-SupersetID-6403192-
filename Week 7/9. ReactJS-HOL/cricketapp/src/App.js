import React, { useState } from "react";
import "./App.css";
import ListofPlayers from "./ListofPlayers";
import IndianPlayers from "./IndianPlayers";

function App() {
  const [view, setView] = useState("");

  const handleChange = (e) => {
    setView(e.target.value);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>🏏 Cricket App</h1>
        <label>
          Choose your option:
          <select onChange={handleChange} value={view}>
            <option value="">-- options --</option>
            <option value="list">List of Players</option>
            <option value="indian">List of Indian Players</option>
          </select>
        </label>
      </header>

      {view === "list" && <ListofPlayers />}
      {view === "indian" && <IndianPlayers />}
    </div>
  );
}

export default App;
