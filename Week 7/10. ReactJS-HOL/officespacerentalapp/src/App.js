import React from "react";
import "./App.css";
import photo1 from "./images/photo1.avif";
import photo2 from "./images/photo2.avif";
import photo3 from "./images/photo3.jpg";

function App() {
  const officeSpaces = [
    {
      name: "Tech Park Tower",
      rent: 55000,
      address: "Block A, Electronic City, Bangalore",
      image: photo1
    },
    {
      name: "Innovation Hub",
      rent: 75000,
      address: "Phase 2, Whitefield, Bangalore",
      image: photo2
    },
    {
      name: "Startup Bay",
      rent: 45000,
      address: "MG Road, Bangalore",
      image: photo3
    }
  ];

  const rentStyle = (rent) => {
    return {
      color: rent < 60000 ? "red" : "green",
      fontWeight: "bold"
    };
  };

  return (
    <div className="App">
      <h1> Office Space, affordable range</h1>

      {officeSpaces.map((office, index) => (
        <div key={index}>
          <img src={office.image} alt={office.name} width="40%" />
          <h2>{office.name}</h2>
          <h3 style={rentStyle(office.rent)}>Rent: ₹{office.rent}</h3>
          <p><strong>Address:</strong> {office.address}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
