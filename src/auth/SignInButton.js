import React, { Component } from 'react';

export default class SignInButton extends Component {
  render() {
    const { signInUser } = this.props;
    return <button onClick={ signInUser }>Signin Here</button>;
  }
}
