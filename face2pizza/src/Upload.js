import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';

class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      success: false,
      picture: null,
      res: null,
      tHappy: 'Bacon',
      tSad: 'Extra Cheese',
      tFear: 'Sausage',
      tAnger: 'ChilliPepper',
      tNeutral: 'Mushrooms',
      tDisgust: 'Pineapple',
      tSurprise: 'Anchovies',
      tContempt: 'Spinach',
      topping1: null,
      topping2: null,
      topping3: null,
    }
    this.fileChanged = this.fileChanged.bind(this);
  }

  fileChanged = (event) => {
    const file = event.target.files[0];
    this.setState({
      picture: file,
    });
  }

  submitPicture = (event) => {
    // const fileType = this.state.picture['type'];
    // const validImageTypes = ['image/gif', 'image/jpeg', 'image/png'];
    // if (validImageTypes.includes(fileType)) {

    //   this.state.success = true;

      //'use strict';

      const request = require('request');

      // Replace <Subscription Key> with your valid subscription key.
      const subscriptionKey = 'f0fdfc418d304f1bbed171db474cf17f';

      // You must use the same location in your REST call as you used to get your
      // subscription keys. For example, if you got your subscription keys from
      // westus, replace "westcentralus" in the URL below with "westus".
      const uriBase = 'https://eastus.api.cognitive.microsoft.com/face/v1.0/detect';

      const imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/5/56/Donald_Trump_official_portrait.jpg';
      // const image2 = 'https://cdn.newsapi.com.au/image/v1/d55a797470d890e2bdffc34d3885e6e8';
      // const image3 = 'https://previews.123rf.com/images/bowie15/bowie151401/bowie15140100071/39843011-angry-face-man.jpg';

      // const min = 1;
      // const max = 3;
      // const rand = min + Math.random() * (max - min);
        this.setState = {
          topping1: this.state.tHappy,
          topping2: this.state.tNeutral,
          topping3: this.state.tSurprise
        };

      // if(rand == 2){
      //   this.setState = {
      //     imageUrl: image2,
      //     topping1: this.state.tSad,
      //     topping2: this.state.tFear,
      //     topping3: this.state.tContempt
      //   };
      // }
      // if(rand == 3){
      //   this.setState = {
      //     imageUrl: image3,
      //     topping1: this.state.tAnger,
      //     topping2: this.state.tContempt,
      //     topping3: this.state.tDisgust
      //   };
      // }

      // Request parameters.
      const params = {
        'returnFaceId': 'true',
        'returnFaceLandmarks': 'false',
        'returnFaceAttributes': 'emotion'
      };

      const options = {
        uri: uriBase,
        qs: params,
        body: '{"url": ' + '"' + this.state.imageUrl + '"}',
        headers: {
          'Content-Type': 'application/json',
          'Ocp-Apim-Subscription-Key': subscriptionKey
        }
      };

      request.post(options, (error, response, body) => {
        if (error) {
          console.log('Error: ', error);
          return;
        }
        let jsonResponse = JSON.parse(body, null, '  ');
        //alert("parsed json")
        console.log('JSON Response\n');
        console.log(jsonResponse);
      });
  }
  
  render() {
    return (
      <React.Fragment>
      <div className="navbar"></div>
      <div className="logo"></div>
      //<Button href="/" type="button" className="butt">Home</Button>
      <div className="form">
        <label for="picture">Attach a picture of yourself</label>
          <input 
              type="file" 
              className="form-control-file" 
              id="picture"            
              onChange={this.fileChanged}
            />
        <Button href="/Pizza" type="button">Upload!</Button>
      </div>
      </React.Fragment>
    );
  }
}

export default Upload;