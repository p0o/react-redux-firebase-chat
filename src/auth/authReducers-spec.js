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
});
