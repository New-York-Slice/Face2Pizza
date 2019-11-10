import React from 'react';
import Button from 'react-bootstrap/Button';
import './App.css';
import { S_IFDIR } from 'constants';

function Pizza(props) {
  const toppings = ['Bacon', 'Mushrooms', 'Anchovies', 'Pepperoni', 'Extra Cheese', 'Barbeque Chicken', 'Spinach', 'Chili Peppers', 'Sausage'];
    const choices = toppings
        .filter(() => Math.random() > .5)
        .slice(0, 3)
        .join(', ');

  return (
    <div>
      <div className="navbar"></div>
        <div className="logo"></div>
              <div className="banner" ></div>
          <Button href="/" type="button" className="butt">Home</Button>
            <div className="centerText3">
              Based on your Mood we suggest the following Toppings:
            </div>
           <div className="centerText4">
              {choices}
           </div>
    </div>
  );
}

export default Pizza;

