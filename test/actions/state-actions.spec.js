import { STATE_ACTIONS, StateActionCreator } from '../../src/actions/state-actions';

describe('the state action creator', () => {
  describe('the `toggle` method', () => {
    it('should return the toggle action', () => {
      const expected = {
        lightIds: ['01', '02'],
        type: STATE_ACTIONS.TOGGLE
      };

      const actual = StateActionCreator.toggle(expected.lightIds);

      expect(actual).toEqual(expected);
    });
  });

  describe('the `turnOff` method', () => {
    it('should return the turnOff action', () => {
      const expected = {
        lightIds: ['02', '03'],
        type: STATE_ACTIONS.TURN_OFF
      };

      const actual = StateActionCreator.turnOff(expected.lightIds);

      expect(actual).toEqual(expected);
    });
  });

  describe('the `turnOn` method', () => {
    it('should return the turnOn action', () => {
      const expected = {
        lightIds: ['03', '04'],
        type: STATE_ACTIONS.TURN_ON
      };

      const actual = StateActionCreator.turnOn(expected.lightIds);

      expect(actual).toEqual(expected);
    });
  });

});
