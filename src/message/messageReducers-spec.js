import { userMessage } from './messageReducers';
import * as types from './messageActionTypes';
import expect from 'expect.js';

describe('userMessages Reducer', function() {
  describe(`userMessages() -  ${ types.SEND_MESSAGE }`, function() {
    const testUid = 123;
    const testMessage = 'a test message';
    const testCreatedAt = 999343454;

    const result = userMessage(
      undefined, {
        type: types.SEND_MESSAGE,
        uid: testUid,
        message: testMessage,
        createdAt: testCreatedAt
      });

    it('is expected to return an object', function() {
      expect(result).to.be.an('object');
    });
    it('is expected to return an object with items array', function() {
      expect(result.items).to.be.an('array');
    });

    describe('items[] array in userMessage', function() {
      it('is expected to have length 1', function() {
        expect(result.items).to.have.length(1);
      });
      it('is expected to have length 2 after next action', function() {
        expect(
          userMessage(
            result, {
              type: types.SEND_MESSAGE,
              uid: testUid,
              message: testMessage,
              createdAt: testCreatedAt
            }).items
        ).to.have.length(2);
      })
    });

    it('is expected to return the uid, message and createdAt properties from action', function() {
      expect(result.items[0].uid).to.be(testUid);
      expect(result.items[0].message).to.be(testMessage);
      expect(result.items[0].createdAt).to.be(testCreatedAt);
    });
  });
});
