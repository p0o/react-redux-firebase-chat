import { auth } from './authReducers';
import * as types from './authActionTypes';
import expect from 'expect.js';

describe('auth Reducers', function() {
  describe('auth() - SIGNIN', function() {
    it('is expected to return an object', function() {
      expect(
        auth(undefined, {type: types.SIGNIN})
      ).to.be.an('object');
    });
    it('is expected to change isInProgress to true', function() {
      expect(
        auth(undefined, {type: types.SIGNIN}).isInProgress
      ).to.be(true);
    });
  });

  describe('auth() - SIGNIN_SUCCESS', function() {
    it('is expected to return an object', function() {
      expect(
        auth(undefined, {type: types.SIGNIN_SUCCESS})
      ).to.be.an('object');
    });
    it('is expected to change the state of user to Signed in', function() {
      expect(
        auth(undefined, {type: types.SIGNIN_SUCCESS}).isUserSignedIn
      ).to.be(true);
    });
    it('is expected to change the state of in progress to false', function() {
      expect(
        auth(undefined, {type: types.SIGNIN_SUCCESS}).isInProgress
      ).to.be(false);
    });
    it('is expected to set the uid of state from action', function() {
      const testUid = 123;

      const result = auth(undefined, {
        type: types.SIGNIN_SUCCESS,
        uid: testUid
      });

      expect(result.uid).to.be(testUid);
    });
  });

  describe('auth() - SIGNIN_ERROR', function() {
    it('is expected to return an object', function() {
      expect(
        auth(undefined, {type: types.SIGNIN_ERROR})
      ).to.be.an('object');
    });
    it('is expected to change hasError property to true', function() {
      expect(
        auth(undefined, {type: types.SIGNIN_ERROR}).hasError
      ).to.be(true);
    });
    it('is expected to return the errorMessage from action', function() {
      const testErrorMessage = 'I am an error!';
      expect(
        auth(undefined, {
          type: types.SIGNIN_ERROR,
          errorMessage: testErrorMessage
        }).errorMessage
      ).to.be(testErrorMessage);
    });
  });
});
