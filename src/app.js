import React, { Component } from "react";
import ReactDOM from "react-dom";
import { firebaseConfig } from './config';

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

  componentDidMount() {
    this.setState({ name: this.props.name });
  }

  render() {
    return <div>Hello { this.state.name }</div>;
  }
}

ReactDOM.render(<App name="Janny" />, document.querySelector("#react-container"));
