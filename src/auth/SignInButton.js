import React, { Component } from 'react';

export default class SignInButton extends Component {
  render() {
    const { onSignInClick } = this.props;
    return <button onClick={ onSignInClick }>Signin Here</button>;
  }
}
