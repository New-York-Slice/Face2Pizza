import React from 'react';
import Button from 'react-bootstrap/Button';
import './App.css';

function Pizza(props) {
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
             Bacon, Mushrooms and Anchovies
      </div>
    </div>
  );
}

export default Pizza;

