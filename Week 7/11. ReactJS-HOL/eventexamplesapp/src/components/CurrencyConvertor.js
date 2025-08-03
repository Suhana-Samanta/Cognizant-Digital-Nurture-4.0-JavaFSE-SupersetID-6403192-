import React, { useState } from 'react';

const CurrencyConvertor = () => {
  const [rupees, setRupees] = useState('');
  const [euros, setEuros] = useState('');

  const handleRupeesChange = (event) => {
    setRupees(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const euroValue = (rupees / 90).toFixed(2);
    setEuros(euroValue);
    alert(`Converting to Euro Amount is ${euroValue}`);
  };

  return (
    <div>
      <h2 style={{ color: 'green' }}>Currency Convertor!!!</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Amount:
          <input
            type="number"
            value={rupees}
            onChange={handleRupeesChange}
            required
          />
        </label>
        <br />
        <label>
          Currency:
          <input type="text" value="Euro" readOnly />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <p>₹{rupees} is equal to €{euros}</p>
    </div>
  );
};

export default CurrencyConvertor;
