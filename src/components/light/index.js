import React from 'react';

import LightState from '../light-state';
import LightActions from '../light-actions';

const Light = ({ light }) => (
  <div className="c-light">
    <ul>
      <li>{light.id}</li>
      <li>{light.name}</li>
      <li>{light.type}</li>
    </ul>
    <LightState state={light.state}/>
    <LightActions/>
  </div>
);

export default Light;
