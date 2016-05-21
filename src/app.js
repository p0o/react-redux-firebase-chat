import React from "react";
import ReactDOM from "react-dom";

var HelloMessage = React.createClass({
  render: function() {
    return <div>Hello { this.props.name }</div>;
  }
});

ReactDOM.render(<HelloMessage name="Pooria" />, document.querySelector("#react-container"));
