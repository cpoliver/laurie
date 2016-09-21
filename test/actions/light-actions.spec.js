import { LIGHT_ACTIONS, LightActionCreator } from '../../src/actions/light-actions';

describe('the light action creator', () => {
  describe('the `rename` method', () => {
    it('should return the rename action', () => {
      const expected = {
        name: 'Kitchen Left',
        type: LIGHT_ACTIONS.RENAME
      };

      const actual = LightActionCreator.rename(expected.name);

      expect(actual).toEqual(expected);
    });
  });

});
