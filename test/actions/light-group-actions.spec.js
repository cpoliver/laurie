import { LIGHT_GROUP_ACTIONS, LightGroupActionCreator } from '../../src/actions/light-group-actions';

describe('the light group action creator', () => {
  describe('the `create` method', () => {
    it('should return the create action', () => {
      const expected = {
        name: 'Kitchen',
        lightIds: ['01', '02', '03'],
        type: LIGHT_GROUP_ACTIONS.CREATE
      };

      const actual = LightGroupActionCreator.create(expected.name, expected.lightIds);

      expect(actual).toEqual(expected);
    });
  });

  describe('the `delete` method', () => {
    it('should return the delete action', () => {
      const expected = {
        id: '42',
        type: LIGHT_GROUP_ACTIONS.DELETE
      };

      const actual = LightGroupActionCreator.delete(expected.id);

      expect(actual).toEqual(expected);
    });
  });

  describe('the `rename` method', () => {
    it('should return the rename action', () => {
      const expected = {
        name: 'Living Room',
        type: LIGHT_GROUP_ACTIONS.RENAME
      };

      const actual = LightGroupActionCreator.rename(expected.name);

      expect(actual).toEqual(expected);
    });
  });
});
