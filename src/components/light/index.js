import React from 'react';

import LightActionButtons from '../light-action-buttons';
import LightStatePreview from '../light-state-preview';
import StateActionButtons from '../state-action-buttons';

const Light = ({ light }) => (
  <div className="c-light col-4">
    <h4><a href="#">{light.name}</a></h4>
    <LightStatePreview state={light.state}/>
    <LightActionButtons/>
    <StateActionButtons/>
  </div>
);

export default Light;
