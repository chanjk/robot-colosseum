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
      name: 'Basic Helmet'
    },
    {
      type: 'Left Arm',
      name: 'Z-Buster'
    },
    {
      type: 'Right Arm',
      name: 'Z-Saber'
    },
    {
      type: 'Body',
      name: 'Basic Armor'
    },
    {
      type: 'Feet',
      name: 'Dash Boots'
    }
  ],

  upgrades: [
    {
      type: 'Head',
      name: 'None'
    },
    {
      type: 'Left Arm',
      name: 'Double Shot'
    },
    {
      type: 'Right Arm',
      name: 'Energy Buster'
    },
    {
      type: 'Body',
      name: 'None'
    },
    {
      type: 'Feet',
      name: 'Wind Dash'
    }
  ]
}

export default mockData;
