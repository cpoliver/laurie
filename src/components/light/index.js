import React from 'react';

import LightActionButtons from '../light-action-buttons';
import LightStatePreview from '../light-state-preview';
import StateActionButtons from '../light-action-buttons';

const Light = ({ light }) => (
  <div className="c-light">
    <ul>
      <li>id: {light.id}</li>
      <li>name: {light.name}</li>
      <li>type: {light.type}</li>
      <li><em><LightStatePreview state={light.state}/></em></li>
      <li><em><LightActionButtons/></em></li>
      <li><em><StateActionButtons/></em></li>
    </ul>
  </div>
);

export default Light;
