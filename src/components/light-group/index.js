import React from 'react';

import Actions from '../actions';
import Light from '../light';

const LightGroup = ({ group }) => (
  <div className="c-light-group">
    <ul>
      <li>id: {group.id}</li>
      <li>name: {group.name}</li>
      <li>all on: {group.state.all_on ? 'true' : 'false'}</li>
      <li>any on: {group.state.any_on ? 'true' : 'false'}</li>
      <li><em>lights: { group.lights.join(', ') }</em></li>
      <li><em><Actions/></em></li>
    </ul>
  </div>
);

export default LightGroup;
