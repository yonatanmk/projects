import React, { Component } from 'react';
import CryptoJS from 'crypto-js';
import hmacSHA512 from 'crypto-js/hmac-sha512';
import Base64 from 'crypto-js/enc-base64';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      string: 'I like Apples',
      hash: '',
      aesString: 'Where is the dog',
      aesEncrypted: '',
      aesDecrypted: ''
    }
  }
  
  async componentDidMount() {
    const salt = 'sfdfshyb5nuesyba4wvtbey5s4etrbd'

    const hash = Base64.stringify(hmacSHA512(this.state.string, salt));
    
    const aesEncrypted = CryptoJS.AES.encrypt(this.state.aesString, salt).toString();
    const aesDecrypted = CryptoJS.AES.decrypt(aesEncrypted, salt).toString(CryptoJS.enc.Utf8);

    this.setState({ aesEncrypted, aesDecrypted, hash })

    const location = {
      lat: 42.3603758,
      lng: -71.0866083
    }

    const locationEncrypted = CryptoJS.AES.encrypt(JSON.stringify(location), salt).toString();
    const locationDecrypted = JSON.parse(CryptoJS.AES.decrypt(locationEncrypted, salt).toString(CryptoJS.enc.Utf8));

    console.log(locationEncrypted)
    console.log(locationDecrypted)
  }
  
  render() {
    return (
      <div>
        <h2>Salt Hashing</h2>
        <p>{this.state.string}</p>
        <p>{this.state.hash}</p>
        <p>{this.state.decodedString}</p>
        <br/>
        <p>{this.state.aesString}</p>
        <p>{this.state.aesEncrypted}</p>
        <p>{this.state.aesDecrypted}</p>
      </div>
    )
  }
}

export default App;
