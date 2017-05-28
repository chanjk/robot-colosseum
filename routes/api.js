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
        .then(robotType => R.assoc('image_url', robotType.image_url, player)),

        t.map('SELECT * FROM equipment_inventory WHERE player_id = $1', player.id, saved_equipment =>
          t.one('SELECT * FROM equipment WHERE id = $1', saved_equipment.equipment_id)
          .then(equipment => R.assoc('in_use', saved_equipment.in_use, equipment))
        )
        .then(t.batch)
        .then(equipment => R.groupBy(equipment => equipment.equipment_type_id, equipment))
        .then(equipmentByTypeId => Object.keys(equipmentByTypeId).map(typeId =>
          t.one('SELECT name FROM equipment_types WHERE id = $1', typeId)
          .then(equipmentType => R.objOf(equipmentType.name, equipmentByTypeId[typeId]))
        ))
        .then(t.batch)
        .then(equipmentWithTypeName => { return { equipment: R.mergeAll(equipmentWithTypeName) } }),

        t.map('SELECT * FROM upgrades_inventory WHERE player_id = $1', player.id, saved_upgrade =>
          t.one('SELECT * FROM upgrades WHERE id = $1', saved_upgrade.upgrade_id)
          .then(upgrade => R.assoc('in_use', saved_upgrade.in_use, upgrade))
        )
        .then(t.batch)
        .then(upgrades => R.groupBy(upgrade => upgrade.upgrade_type_id, upgrades))
        .then(upgradesByTypeId => Object.keys(upgradesByTypeId).map(typeId =>
          t.one('SELECT name FROM upgrade_types WHERE id = $1', typeId)
          .then(upgradeType => R.objOf(upgradeType.name, upgradesByTypeId[typeId]))
        ))
        .then(t.batch)
        .then(upgradesWithTypeName => { return { upgrades: R.mergeAll(upgradesWithTypeName) } })
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
