export const LIGHT_ACTIONS = {
  RENAME: 'RENAME'
};

export const LightActionCreator = {
  rename: name => ({
    name,
    type: LIGHT_ACTIONS.RENAME,
  })
};
