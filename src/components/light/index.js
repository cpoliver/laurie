import React from 'react';

import Actions from '../actions';
import LightState from '../light-state';

const Light = ({ light }) => (
  <div className="c-light">
    <ul>
      <li>id: {light.id}</li>
      <li>name: {light.name}</li>
      <li>type: {light.type}</li>
      <li><em><LightState state={light.state}/></em></li>
      <li><em><Actions/></em></li>
    </ul>
  </div>
);

export default Light;
