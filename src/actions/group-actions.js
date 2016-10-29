export const LIGHT_GROUP_ACTIONS = {
  CREATE: 'CREATE',
  DELETE: 'DELETE',
  RENAME: 'RENAME'
};

export const LightGroupActionCreator = {
  create: (name, lightIds) => ({
    name,
    lightIds,
    type: LIGHT_GROUP_ACTIONS.CREATE
  }),
  delete: id => ({
    id,
    type: LIGHT_GROUP_ACTIONS.DELETE
  }),
  rename: name => ({
    name,
    type: LIGHT_GROUP_ACTIONS.RENAME,
  })
};
