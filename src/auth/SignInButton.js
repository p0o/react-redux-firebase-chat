import React, { Component } from 'react';

export default class SigninButton extends Component {
  handleSignin() {
    const provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope('email');

    firebase.auth().signInWithPopup(provider).then((result) => {
      const { accessToken } = result.credential;
      const { user } = result;
      console.log(user);
    }).catch((error) => {
      console.log(error.message);
    });
  }

  render() {
    return <button onClick={ () => this.handleSignin() }>Signin Here</button>;
  }
}
