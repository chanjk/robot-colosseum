DROP TABLE IF EXISTS robot_types;
DROP TABLE IF EXISTS players;
DROP TABLE IF EXISTS equipment_types;
DROP TABLE IF EXISTS equipment;
DROP TABLE IF EXISTS upgrade_types;
DROP TABLE IF EXISTS upgrades;
DROP TABLE IF EXISTS equipment_inventory;
DROP TABLE IF EXISTS upgrades_inventory;

CREATE TABLE robot_types (
  id SERIAL4 PRIMARY KEY,
  image_url TEXT NOT NULL,
  role TEXT NOT NULL,
  power INTEGER NOT NULL,
  armor INTEGER NOT NULL,
  accuracy INTEGER NOT NULL,
  agility INTEGER NOT NULL,
  luck INTEGER NOT NULL
);

CREATE TABLE players (
  id SERIAL4 PRIMARY KEY,
  name VARCHAR(400) NOT NULL,
  robot_type_id INTEGER REFERENCES robot_types (id),
  role TEXT,
  level INTEGER NOT NULL,
  metalCount INTEGER NOT NULL,
  winCount INTEGER NOT NULL,
  power INTEGER NOT NULL,
  armor INTEGER NOT NULL,
  accuracy INTEGER NOT NULL,
  agility INTEGER NOT NULL,
  luck INTEGER NOT NULL
);

CREATE TABLE equipment_types (
  id SERIAL4 PRIMARY KEY,
  name VARCHAR(400) NOT NULL
);

CREATE TABLE equipment (
  id SERIAL4 PRIMARY KEY,
  name VARCHAR(400) NOT NULL,
  equipment_type_id INTEGER REFERENCES equipment_types (id),
  power_modifier INTEGER NOT NULL,
  armor_modifier INTEGER NOT NULL,
  accuracy_modifier INTEGER NOT NULL,
  agility_modifier INTEGER NOT NULL,
  luck_modifier INTEGER NOT NULL
);

CREATE TABLE upgrade_types (
  id SERIAL4 PRIMARY KEY,
  name VARCHAR(400) NOT NULL
);

CREATE TABLE upgrades (
  id SERIAL4 PRIMARY KEY,
  name VARCHAR(400) NOT NULL,
  upgrade_type_id INTEGER REFERENCES upgrade_types (id),
  power_modifier INTEGER NOT NULL,
  armor_modifier INTEGER NOT NULL,
  accuracy_modifier INTEGER NOT NULL,
  agility_modifier INTEGER NOT NULL,
  luck_modifier INTEGER NOT NULL
);

CREATE TABLE equipment_inventory (
  id SERIAL4 PRIMARY KEY,
  equipment_id INTEGER REFERENCES equipment (id),
  player_id INTEGER REFERENCES players (id)
);

CREATE TABLE upgrades_inventory (
  id SERIAL4 PRIMARY KEY,
  upgrade_id INTEGER REFERENCES upgrades (id),
  player_id INTEGER REFERENCES players (id)
);
