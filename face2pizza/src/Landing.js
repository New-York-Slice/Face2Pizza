import React from 'react';
import Button from 'react-bootstrap/Button';
import './App.css';

function Landing(props) {
  return (
    <div>
      <div className="navbar" ></div>
      <div className="banner" ></div>
      <div className="logo"></div>
      <div className="centerText1">
        Face Your Pizza
      </div>
      <div className="centerText2">
        Face2Pizza uses revolutionary computer vision technology to create your own personalized pizza based on your current mood.
      </div>
      <div>
        <Button href="/upload" type="button" className="buttonRef">It's Pizza Time!</Button>
      </div>
    </div>
  );
}

export default Landing;

