import React from 'react';

const SyntheticEvent = () => {
  const handleClick = (event) => {
    console.log(event); // SyntheticEvent logged
    alert('I was clicked');
  };

  return (
    <div>
 
      <button onClick={handleClick}>Click on me</button>
    </div>
  );
};

export default SyntheticEvent;
