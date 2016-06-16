import React, { Component } from 'react';
import SignInButton from '../auth/SignInButton';

export default class Header extends Component {
  render() {
    return (
      <div>
        <SignInButton />
      </div>
    );
  }
}
