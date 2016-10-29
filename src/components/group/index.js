import React from 'react';

import GroupActions from './actions';
import StateActions from '../state/actions';

const LightGroup = ({ group }) => (
  <div className="c-light-group col-4">
    <h4><a href="#">{group.name}</a></h4>
    (light-list)
    <GroupActions/>
    <StateActions/>
  </div>
);

export default LightGroup;
