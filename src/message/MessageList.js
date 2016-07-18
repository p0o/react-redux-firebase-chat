import React, { Component } from 'react';
import { retrieveMessage } from './messageActions';

export default class MessageList extends Component {
  componentDidMount() {
    this._firebaseRef = firebase.database().ref('messages');
    this._firebaseRef.on('child_added', (snapshot) => {
      const { uid, displayName, message } = snapshot.val();
      this.props.dispatch( retrieveMessage({ uid, displayName, message }) );
    });
  }

  render() {
    const { messages } = this.props;

    return (
      <ul>
        { messages.map(msg => <li>{ msg.displayName + ': ' + msg.message }</li>)}
      </ul>
    );
  }

  componentWillUnmount() {
    this._firebaseRef.off();
  }
}
