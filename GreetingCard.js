import React from 'react';

const GreetingCard = (props) => {
  const { name, greeting } = props;

  return (
    <div className="greeting-card">
      <h2>{greeting}, {name}!</h2>
    </div>
  );
};

export default GreetingCard;
