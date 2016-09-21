 export const STATE_ACTIONS = {
  TOGGLE: 'TOGGLE',
  TURN_OFF: 'TURN_OFF',
  TURN_ON: 'TURN_ON'
};

export const StateActionCreator = {
  toggle: lightIds => ({
    lightIds,
    type: STATE_ACTIONS.TOGGLE
  }),
  turnOff: lightIds => ({
    lightIds,
    type: STATE_ACTIONS.TURN_OFF
  }),
  turnOn: lightIds => ({
    lightIds,
    type: STATE_ACTIONS.TURN_ON
  }),
};
