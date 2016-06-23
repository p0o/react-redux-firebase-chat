import { userMessage, messages } from './messageReducers';
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
    it('is expected to trigger isSending to true', function() {
      expect(result.isSending).to.be(true);
    });
  });

  describe(`userMessages() -  ${ types.SEND_MESSAGE_SUCCESS }`, function() {
    it('is expected to return an object', function() {
      expect(
        userMessage(undefined, {
          type: types.SEND_MESSAGE_SUCCESS
        })
      ).to.be.an('object');
    });
    it('is expected to trigger isSending to false', function() {
      expect(
        userMessage(undefined, {
          type: types.SEND_MESSAGE_SUCCESS
        }).isSending
      ).to.be(false);
    });
  });

  describe(`userMessages() -  ${ types.SEND_MESSAGE_ERROR }`, function() {
    it('is expected to return an object', function() {
      expect(userMessage(undefined, {
        type: types.SEND_MESSAGE_ERROR
      })).to.be.an('object');
    });
    it('is expected to trigger hasError to true', function() {
      expect(userMessage(undefined, {
        type: types.SEND_MESSAGE_ERROR
      }).hasError).to.be(true);
    });
    it('is expected to add errorMessage to the state', function() {
      const testErrorMessage = 'this is test error';
      const errorState = userMessage(
        undefined,
        {
          type: types.SEND_MESSAGE_ERROR,
          errorMessage: testErrorMessage
        }
      );

      expect(errorState.errorMessage).to.be(testErrorMessage);
    });
  });
});

describe('messages Reducer', function() {
  describe(`messages() - ${ types.RETRIEVE_MESSAGE }`, function() {
    it('is expected to return an array', function() {
      expect(
        messages(undefined, { type: types.RETRIEVE_MESSAGE })
      ).to.be.an('array');
    });
    it('is expected to add the message and uid props as an object to array', function() {
      const testUid = 123;
      const testMessage = 'this is a test message';

      const result = messages(
        undefined,
        {
          type: types.RETRIEVE_MESSAGE,
          message: testMessage,
          uid: testUid
        }
      );

      expect(result).to.have.length(1);
      expect(result[0].message).to.be(testMessage);
      expect(result[0].uid).to.be(testUid);

    });
    it('is expected to add the second message with keeping a previous state', function() {
      const testUid = 123;
      const testMessage = 'this is a test message';

      const testUid2 = 123;
      const testMessage2 = 'this is a test message';

      const result = messages(
        [
          {
            uid: testUid,
            message: testMessage
          }
        ],
        {
          type: types.RETRIEVE_MESSAGE,
          message: testMessage2,
          uid: testUid2
        }
      );

      expect(result).to.have.length(2);
      expect(result[0].message).to.be(testMessage);
      expect(result[0].uid).to.be(testUid);

      expect(result[1].message).to.be(testMessage2);
      expect(result[1].uid).to.be(testUid2);

    });
  });
});
