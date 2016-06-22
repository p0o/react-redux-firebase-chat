import React, { Component } from 'react';
import { connect } from 'react-redux';
import MessageInput from './MessageInput';

export class Message extends Component {
  render() {
    const { dispatch, userMessage } = this.props;

    return (
      <div>
        <MessageInput userMessage={ userMessage } dispatch={ dispatch } />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userMessage: state.userMessage
  }
};

export default connect(
  mapStateToProps
)(Message);
