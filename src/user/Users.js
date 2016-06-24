import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Users extends Component {
  render() {
    <div>Users here!</div>
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
};

export default connect(
  mapStateToProps
)(Users);
