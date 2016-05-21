import React from "react";
import ReactDOM from "react-dom";
import { firebaseConfig } from 'config';

// Initialize Firebase
if (window.firebase) {
  firebase.initializeApp(config);
}

var HelloMessage = React.createClass({
  render: function() {
    return <div>Hello { this.props.name }</div>;
  }
});

ReactDOM.render(<HelloMessage name="Pooria" />, document.querySelector("#react-container"));
