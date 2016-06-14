import React, { Component } from "react";
import SignInButton from '../components/SignInButton.js';

class App extends Component {
  render() {
    return (
      <div>
        <h1>React Redux Firebase Chat App</h1>
        <SignInButton />
      </div>
    );
  }
}

export default App;
