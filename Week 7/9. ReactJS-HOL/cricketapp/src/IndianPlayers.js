import React from "react";

// 8 T20 + 8 Ranji = 16 players
const T20Players = [
  "Virat Kohli",
  "Rohit Sharma",
  "Suryakumar Yadav",
  "Hardik Pandya",
  "Jasprit Bumrah",
  "Ravindra Jadeja",
  "Bhuvneshwar Kumar",
  "Yuzvendra Chahal",
];

const RanjiPlayers = [
  "Sandeep Sharma",
  "Tanush Kotian",
  "Prasidh Krishna",
  "Navdeep Saini",
  "Avesh Khan",
  "Rahul Tewatia",
  "Deepak Hooda",
  "Prithvi Shaw",
];

const allIndianPlayers = [...T20Players, ...RanjiPlayers];

const OddPlayers = ({ players }) => {
  const odd = players.filter((_, index) => index % 2 === 0);
  return (
    <div>
      <h3>Odd Players</h3>
      <ul>
        {odd.map((player, idx) => (
          <li key={idx}>Odd {idx * 2 + 1} : {player}</li>
        ))}
      </ul>
    </div>
  );
};

const EvenPlayers = ({ players }) => {
  const even = players.filter((_, index) => index % 2 !== 0);
  return (
    <div>
      <h3>Even Players</h3>
      <ul>
        {even.map((player, idx) => (
          <li key={idx}>Even {idx * 2 + 2} : {player}</li>
        ))}
      </ul>
    </div>
  );
};

const IndianPlayers = () => {
  return (
    <div>
      <h1>Indian Team</h1>
      <OddPlayers players={allIndianPlayers} />
      <EvenPlayers players={allIndianPlayers} />

      <hr />

      <h2>List of Indian Players Merged:</h2>
      <ul>
        {allIndianPlayers.map((player, index) => (
          <li key={index}>Mr. {player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
