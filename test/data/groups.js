module.exports = [
  {
    id: '1',
    name: 'Kitchen',
    lights: ['1', '15', '4', '2', '3'],
    type: 'LightGroup',
    state: {
      all_on: true,
      any_on: true
    },
    recycle: false,
    action: {
      on: true,
      bri: 153,
      hue: 21627,
      sat: 254,
      effect: 'none',
      xy: [0.5, 0.5],
      ct: 353,
      alert: 'lselect',
      colormode: 'hs'
    }
  },
  {
    id: '2',
    name: 'Lounge',
    lights: ['13', '12', '10', '9', '11', '18'],
    type: 'LightGroup',
    state: {
      all_on: false,
      any_on: false
    },
    recycle: false,
    action: {
      on: false,
      bri: 153,
      hue: 21627,
      sat: 254,
      effect: 'none',
      xy: [0.5, 0.5],
      ct: 153,
      alert: 'select',
      colormode: 'hs'
    }
  },
  {
    id: '3',
    name: 'Desk',
    lights: ['19', '6', '7', '8'],
    type: 'LightGroup',
    state: {
      all_on: true,
      any_on: true
    },
    recycle: false,
    action: {
      on: true,
      bri: 138,
      hue: 19897,
      sat: 91,
      effect: 'none',
      xy: [0.5, 0.5],
      ct: 293,
      alert: 'select',
      colormode: 'hs'
    }
  },
  {
    id: '4',
    name: 'Bedroom',
    lights: ['17', '16', '14'],
    type: 'LightGroup',
    state: {
      all_on: false,
      any_on: false
    },
    recycle: false,
    action: {
      on: false,
      bri: 153,
      hue: 21627,
      sat: 254,
      effect: 'none',
      xy: [0.5, 0.5],
      alert: 'none',
      colormode: 'hs'
    }
  },
  {
    id: '5',
    name: 'Living Room/Kitchen',
    lights: ['5', '1', '15', '4', '2', '3', '13', '12'],
    type: 'LightGroup',
    state: {
      all_on: false,
      any_on: true
    },
    recycle: false,
    action: {
      on: false,
      bri: 153,
      hue: 21627,
      sat: 254,
      effect: 'none',
      xy: [0.5, 0.5],
      ct: 353,
      alert: 'select',
      colormode: 'hs'
    }
  },
  {
    id: '6',
    name: 'Hue Camera',
    lights: ['10',
      '2',
      '15',
      '3',
      '11',
      '4',
      '16',
      '5',
      '12',
      '17',
      '6',
      '13',
      '7',
      '18',
      '8',
      '14',
      '1',
      '9'
    ],
    type: 'LightGroup',
    state: {
      all_on: false,
      any_on: true
    },
    recycle: false,
    action: {
      on: false,
      bri: 153,
      hue: 21627,
      sat: 254,
      effect: 'none',
      xy: [0.5, 0.5],
      ct: 153,
      alert: 'select',
      colormode: 'hs'
    }
  },
  {
    id: '7',
    name: 'Main sans Lightstrips',
    lights: ['4', '1', '15', '3', '5', '13', '12', '10', '11', '6', '7', '8'],
    type: 'LightGroup',
    state: {
      all_on: false,
      any_on: true
    },
    recycle: false,
    action: {
      on: true,
      bri: 138,
      hue: 19897,
      sat: 91,
      effect: 'none',
      xy: [0.5, 0.5],
      ct: 293,
      alert: 'select',
      colormode: 'hs'
    }
  },
  {
    id: '8',
    name: 'Main',
    lights: ['19',
      '4',
      '1',
      '15',
      '3',
      '2',
      '5',
      '13',
      '12',
      '10',
      '9',
      '11',
      '6',
      '7',
      '8',
      '18'
    ],
    type: 'LightGroup',
    state: {
      all_on: false,
      any_on: true
    },
    recycle: false,
    action: {
      on: false,
      bri: 153,
      hue: 21627,
      sat: 254,
      effect: 'none',
      xy: [0.5, 0.5],
      ct: 153,
      alert: 'select',
      colormode: 'hs'
    }
  },
  {
    id: '9',
    name: 'Lightstrips',
    lights: ['19', '2', '9', '18'],
    type: 'LightGroup',
    state: {
      all_on: false,
      any_on: true
    },
    recycle: false,
    action: {
      on: false,
      bri: 153,
      hue: 21627,
      sat: 254,
      effect: 'none',
      xy: [0.5, 0.5],
      ct: 153,
      alert: 'select',
      colormode: 'hs'
    }
  },
  {
    id: '10',
    name: 'My Side of the Bed',
    lights: ['17'],
    type: 'LightGroup',
    state: {
      all_on: false,
      any_on: false
    },
    recycle: false,
    action: {
      on: false,
      bri: 153,
      hue: 21627,
      sat: 254,
      effect: 'none',
      xy: [0.5, 0.5],
      alert: 'none',
      colormode: 'hs'
    }
  }
];
