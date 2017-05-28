const express = require('express');
const pgp = require('pg-promise')();
const R = require('ramda');

const router = express.Router();
const db = pgp({ database: 'robot_colosseum'});

router.get('/players/:name', (req, res) => {
  db.task(t =>
    t.one('SELECT * FROM players WHERE LOWER(name) = LOWER($1)', req.params.name)
    .then(player => {
      const statNames = ['power', 'armor', 'accuracy', 'agility', 'luck'];
      return R.assoc('stats', R.pick(statNames, player), R.omit(statNames, player));
    })
    .then(player =>
      t.batch([
        t.one('SELECT * FROM robot_types WHERE id = $1', player.robot_type_id)
        .then(robot_type => R.assoc('image_url', robot_type.image_url, player)),

        t.map('SELECT * FROM equipment_inventory WHERE player_id = $1', player.id, saved_equipment =>
          t.one('SELECT * FROM equipment WHERE id = $1', saved_equipment.equipment_id)
        )
        .then(t.batch)
        .then(equipment => { return { equipment: equipment } }),

        t.map('SELECT * FROM upgrades_inventory WHERE player_id = $1', player.id, saved_upgrades =>
          t.one('SELECT * FROM upgrades WHERE id = $1', saved_upgrades.upgrade_id)
        )
        .then(t.batch)
        .then(upgrades => { return { upgrades: upgrades } }),
      ])
    )
    .catch(err => {
      console.log(err);
      return null;
    })
  )
  .then(data => res.json(data && R.mergeAll(data)));
});

module.exports = router;
