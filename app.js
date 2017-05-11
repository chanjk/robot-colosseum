const path = require('path');
const express = require('express');
const R = require('ramda');
const pgp = require('pg-promise')();

const app = express();
const apiRouter = express.Router();
const db = pgp({ database: 'robot_colosseum'});

app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', apiRouter);

// app.get('/', (req, res) => res.sendFile('index'));

apiRouter.get('/players/:name', (req, res) => {
  db.task(t =>
    t.one('SELECT * FROM players WHERE LOWER(name) = LOWER($1)', req.params.name)
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

module.exports = app;
