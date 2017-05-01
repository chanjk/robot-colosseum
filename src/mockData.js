const mockData = {
  player: {
    name: 'Zero',
    role: 'Maverick Hunter',
    imageUrl: 'https://static.comicvine.com/uploads/original/11122/111224383/4484237-8931671768-x7_ze.jpg',
    level: 30,
    metalCount: 2000,
    winCount: 20
  },

  stats: ['Power', 'Armor', 'Accuracy', 'Agility', 'Luck'].map(name => ({ name: name, value: 15 })),

  equipment: [
    {
      type: 'Head',
      name: 'Basic Helmet',
      all: ['Basic Helmet', 'Dark Helmet']
    },
    {
      type: 'Left Arm',
      name: 'Z-Buster',
      all: ['Z-Buster', 'Dark Buster']
    },
    {
      type: 'Right Arm',
      name: 'Z-Saber',
      all: ['Z-Saber', 'Dark Saber']
    },
    {
      type: 'Body',
      name: 'Basic Armor',
      all: ['Basic Armor', 'Dark Armor']
    },
    {
      type: 'Feet',
      name: 'Dash Boots',
      all: ['Dash Boots', 'Dark Boots']
    }
  ],

  upgrades: [
    {
      type: 'Head',
      name: 'Eagle Eye',
      all: ['Eagle Eye', 'Recovery Module']
    },
    {
      type: 'Left Arm',
      name: 'Double Shot',
      all: ['Double Shot', 'Plasma Shot']
    },
    {
      type: 'Right Arm',
      name: 'Energy Buster',
      all: ['Energy Buster', 'Range Extender']
    },
    {
      type: 'Body',
      name: 'Shock Absorber',
      all: ['Shock Absorber', 'Damage Reflect']
    },
    {
      type: 'Feet',
      name: 'Wind Dash',
      all: ['Wind Dash', 'Double Jump']
    }
  ]
}

export default mockData;
