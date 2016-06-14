import React, { Component } from "react";
import ReactDOM from "react-dom";
import { createStore } from 'redux';
import { firebaseConfig } from './../config';

if (window.firebase) {
  firebase.initializeApp(firebaseConfig);
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }

  handleSignin() {
    const provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope('email');

    firebase.auth().signInWithPopup(provider).then((result) => {
      const { accessToken } = result.credential;
      const { user } = result;
      this.setState({ name: user.displayName });
    }).catch((error) => {
      console.log(error.message);
    });
  }

  render() {
    const { name } = this.state;
    return (
      <div>
        <div>{ name? `Hello ${ name }`: '' }</div>
        <p><a href="#" onClick={ () => this.handleSignin() }>Sign in here</a></p>
      </div>
    );
  }
}

export default App;
