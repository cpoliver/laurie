import React from 'react';

import GroupActionButtons from '../group-action-buttons';
import StateActionButtons from '../state-action-buttons';

const LightGroup = ({ group }) => (
  <div className="c-light-group col-4">
    <h4><a href="#">{group.name}</a></h4>
    (light-list)
    <GroupActionButtons/>
    <StateActionButtons/>
  </div>
);

export default LightGroup;
