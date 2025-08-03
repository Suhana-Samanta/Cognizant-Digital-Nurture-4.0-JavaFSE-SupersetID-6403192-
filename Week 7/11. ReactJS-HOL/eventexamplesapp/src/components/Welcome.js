import React from 'react';

const Welcome = () => {
  const sayWelcome = (message) => {
    alert(message);
  };

  return (
    <div>
   
      <button onClick={() => sayWelcome('welcome')}>Say welcome</button>
    </div>
  );
};

export default Welcome;
