import React from 'react';

import Light from '../light';
import LightGroup from '../light-group';

import groups from '../../../test/data/groups';
import { lights } from '../../../test/data/lights';

const App = () => (
  <div className="grid grid-fluid">
    <div className="row">
      <h1>Hue Laurie</h1>
      <h2>Groups</h2>
      { groups.map((group, i) => <LightGroup key={i} group={group}/>) }
    </div>
    <div className="row">
      <h2>Lights</h2>
      { lights.map((light, i) => <Light key={i} light={light}/>) }
    </div>
  </div>
);

export default App;
