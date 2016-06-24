import React, { Component } from "react";
import Header from './Header';
import Message from './../message/Message';
import Users from '../user/Users';

class App extends Component {
  render() {
    return (
      <div>
        <h1>React Redux Firebase Chat App</h1>
        <Header />
        <div style={{ display: 'flex' }}>
          <Message />
          <Users />
        </div>
      </div>
    );
  }
}

export default App;
