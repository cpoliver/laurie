import React from 'react';

import LightActions from './actions';
import StateActions from '../state/actions';
import StatePreview from '../state/preview';

const Light = ({ light }) => (
  <div className="c-light col-4">
    <h4><a href="#">{light.name}</a></h4>
    <StatePreview state={light.state}/>
    <LightActions/>
    <StateActions/>
  </div>
);

export default Light;
