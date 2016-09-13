import React from 'react';

import LightState from '../light-state';
import LightActions from '../light-actions';

const Light = ({ light }) => (
  <div className="c-light">
    <ul>
      <li>id: {light.id}</li>
      <li>name: {light.name}</li>
      <li>type: {light.type}</li>
      <li><em><LightState state={light.state}/></em></li>
      <li><em><LightActions/></em></li>
    </ul>
  </div>
);

export default Light;
