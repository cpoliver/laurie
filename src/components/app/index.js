import React from 'react';

import Light from '../light';
import LightGroup from '../light-group';

import groups from '../../../test/data/groups';
import { lights } from '../../../test/data/lights';

const App = () => (
  <div>
    <h1>Hue Laurie</h1>
    <hr/>
    <h2>Groups</h2>
    { groups.map((group, i) => <LightGroup key={i} group={group}/>) }
    <hr/>
    <h2>Lights</h2>
    { lights.map((light, i) => <Light key={i} light={light}/>) }
  </div>
);

export default App;
