import React, { Component } from 'react';
import { connect } from 'react-redux';
import MessageInput from './MessageInput';
import MessageList from './MessageList';

export class Message extends Component {
  render() {
    const { dispatch, userMessage, isUserSignedIn } = this.props;

    return (
      <div>
        <MessageList dispatch={ dispatch } />
        { isUserSignedIn &&
            <MessageInput
              userMessage={ userMessage }
              dispatch={ dispatch }
            />
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userMessage: state.userMessage,
    isUserSignedIn: state.auth.isUserSignedIn
  }
};

export default connect(
  mapStateToProps
)(Message);
