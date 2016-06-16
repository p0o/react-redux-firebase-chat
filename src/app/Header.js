import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as authActions from '../auth/authActions';
import SignInButton from '../auth/SignInButton';

export class Header extends Component {
  render() {
    return (
      <div>
        <SignInButton />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    users: state.users
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onSignInClick: authActions.signInUser()
  }
};

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

export default HeaderContainer;
