TRUNCATE robot_types RESTART IDENTITY CASCADE;
TRUNCATE players RESTART IDENTITY CASCADE;
TRUNCATE equipment_types RESTART IDENTITY CASCADE;
TRUNCATE equipment RESTART IDENTITY CASCADE;
TRUNCATE upgrade_types RESTART IDENTITY CASCADE;
TRUNCATE upgrades RESTART IDENTITY CASCADE;
TRUNCATE equipment_inventory RESTART IDENTITY;
TRUNCATE upgrades_inventory RESTART IDENTITY;

--
INSERT INTO robot_types (name, role, image_url, power, armor, accuracy, agility, luck) VALUES ('Zero', 'Maverick Hunter', '/images/zero_profile.jpg', 4, 2, 3, 4, 2);
--

--
INSERT INTO players (name, robot_type_id, role, level, metalCount, winCount, power, armor, accuracy, agility, luck) VALUES ('Zero', (SELECT id FROM robot_types WHERE name = 'Zero'), 'Maverick Hunter', 30, 2000, 20, 15, 15, 15, 15, 15);
--

--
INSERT INTO equipment_types (name) VALUES ('Head');

INSERT INTO equipment_types (name) VALUES ('Left Arm');

INSERT INTO equipment_types (name) VALUES ('Right Arm');

INSERT INTO equipment_types (name) VALUES ('Body');

INSERT INTO equipment_types (name) VALUES ('Feet');
--

--
INSERT INTO equipment (name, equipment_type_id, robot_type_id, power_modifier, armor_modifier, accuracy_modifier, agility_modifier, luck_modifier) VALUES ('Basic Helmet', (SELECT id FROM equipment_types WHERE name = 'Head'), (SELECT id FROM robot_types WHERE name = 'Zero'), 0, 3, 2, 0, 0);

INSERT INTO equipment (name, equipment_type_id, robot_type_id, power_modifier, armor_modifier, accuracy_modifier, agility_modifier, luck_modifier) VALUES ('Dark Helmet', (SELECT id FROM equipment_types WHERE name = 'Head'), (SELECT id FROM robot_types WHERE name = 'Zero'), 4, -2, 2, 3, -3);

INSERT INTO equipment (name, equipment_type_id, robot_type_id, power_modifier, armor_modifier, accuracy_modifier, agility_modifier, luck_modifier) VALUES ('Z-Buster', (SELECT id FROM equipment_types WHERE name = 'Left Arm'), (SELECT id FROM robot_types WHERE name = 'Zero'), 7, 0, 5, 0, 0);

INSERT INTO equipment (name, equipment_type_id, robot_type_id, power_modifier, armor_modifier, accuracy_modifier, agility_modifier, luck_modifier) VALUES ('Dark Buster', (SELECT id FROM equipment_types WHERE name = 'Left Arm'), (SELECT id FROM robot_types WHERE name = 'Zero'), 15, -1, 7, 1, -1);

INSERT INTO equipment (name, equipment_type_id, robot_type_id, power_modifier, armor_modifier, accuracy_modifier, agility_modifier, luck_modifier) VALUES ('Z-Saber', (SELECT id FROM equipment_types WHERE name = 'Right Arm'), (SELECT id FROM robot_types WHERE name = 'Zero'), 10, 0, 7, 0, 0);

INSERT INTO equipment (name, equipment_type_id, robot_type_id, power_modifier, armor_modifier, accuracy_modifier, agility_modifier, luck_modifier) VALUES ('Dark Saber', (SELECT id FROM equipment_types WHERE name = 'Right Arm'), (SELECT id FROM robot_types WHERE name = 'Zero'), 20, 0, 12, 3, -3);

INSERT INTO equipment (name, equipment_type_id, robot_type_id, power_modifier, armor_modifier, accuracy_modifier, agility_modifier, luck_modifier) VALUES ('Basic Armor', (SELECT id FROM equipment_types WHERE name = 'Body'), (SELECT id FROM robot_types WHERE name = 'Zero'), 0, 15, 0, 0, 0);

INSERT INTO equipment (name, equipment_type_id, robot_type_id, power_modifier, armor_modifier, accuracy_modifier, agility_modifier, luck_modifier) VALUES ('Dark Armor', (SELECT id FROM equipment_types WHERE name = 'Body'), (SELECT id FROM robot_types WHERE name = 'Zero'), 5, 10, -5, 5, 0);

INSERT INTO equipment (name, equipment_type_id, robot_type_id, power_modifier, armor_modifier, accuracy_modifier, agility_modifier, luck_modifier) VALUES ('Dash Boots', (SELECT id FROM equipment_types WHERE name = 'Feet'), (SELECT id FROM robot_types WHERE name = 'Zero'), 0, 3, 0, 10, 0);

INSERT INTO equipment (name, equipment_type_id, robot_type_id, power_modifier, armor_modifier, accuracy_modifier, agility_modifier, luck_modifier) VALUES ('Dark Boots', (SELECT id FROM equipment_types WHERE name = 'Feet'), (SELECT id FROM robot_types WHERE name = 'Zero'), 0, -5, -3, 15, -1);
--

--
INSERT INTO upgrade_types (name) VALUES ('Head');

INSERT INTO upgrade_types (name) VALUES ('Left Arm');

INSERT INTO upgrade_types (name) VALUES ('Right Arm');

INSERT INTO upgrade_types (name) VALUES ('Body');

INSERT INTO upgrade_types (name) VALUES ('Feet');
--

--
INSERT INTO upgrades (name, upgrade_type_id, robot_type_id, power_modifier, armor_modifier, accuracy_modifier, agility_modifier, luck_modifier) VALUES ('Eagle Eye', (SELECT id FROM upgrade_types WHERE name = 'Head'), (SELECT id FROM robot_types WHERE name = 'Zero'), 0, 3, 2, 0, 0);

INSERT INTO upgrades (name, upgrade_type_id, robot_type_id, power_modifier, armor_modifier, accuracy_modifier, agility_modifier, luck_modifier) VALUES ('Recovery Module', (SELECT id FROM upgrade_types WHERE name = 'Head'), (SELECT id FROM robot_types WHERE name = 'Zero'), 4, -2, 2, 3, -3);

INSERT INTO upgrades (name, upgrade_type_id, robot_type_id, power_modifier, armor_modifier, accuracy_modifier, agility_modifier, luck_modifier) VALUES ('Double Shot', (SELECT id FROM upgrade_types WHERE name = 'Left Arm'), (SELECT id FROM robot_types WHERE name = 'Zero'), 7, 0, 5, 0, 0);

INSERT INTO upgrades (name, upgrade_type_id, robot_type_id, power_modifier, armor_modifier, accuracy_modifier, agility_modifier, luck_modifier) VALUES ('Plasma Shot', (SELECT id FROM upgrade_types WHERE name = 'Left Arm'), (SELECT id FROM robot_types WHERE name = 'Zero'), 15, -1, 7, 1, -1);

INSERT INTO upgrades (name, upgrade_type_id, robot_type_id, power_modifier, armor_modifier, accuracy_modifier, agility_modifier, luck_modifier) VALUES ('Energy Buster', (SELECT id FROM upgrade_types WHERE name = 'Right Arm'), (SELECT id FROM robot_types WHERE name = 'Zero'), 10, 0, 7, 0, 0);

INSERT INTO upgrades (name, upgrade_type_id, robot_type_id, power_modifier, armor_modifier, accuracy_modifier, agility_modifier, luck_modifier) VALUES ('Range Extender', (SELECT id FROM upgrade_types WHERE name = 'Right Arm'), (SELECT id FROM robot_types WHERE name = 'Zero'), 20, 0, 12, 3, -3);

INSERT INTO upgrades (name, upgrade_type_id, robot_type_id, power_modifier, armor_modifier, accuracy_modifier, agility_modifier, luck_modifier) VALUES ('Shock Absorber', (SELECT id FROM upgrade_types WHERE name = 'Body'), (SELECT id FROM robot_types WHERE name = 'Zero'), 0, 15, 0, 0, 0);

INSERT INTO upgrades (name, upgrade_type_id, robot_type_id, power_modifier, armor_modifier, accuracy_modifier, agility_modifier, luck_modifier) VALUES ('Damage Reflect', (SELECT id FROM upgrade_types WHERE name = 'Body'), (SELECT id FROM robot_types WHERE name = 'Zero'), 5, 10, -5, 5, 0);

INSERT INTO upgrades (name, upgrade_type_id, robot_type_id, power_modifier, armor_modifier, accuracy_modifier, agility_modifier, luck_modifier) VALUES ('Wind Dash', (SELECT id FROM upgrade_types WHERE name = 'Feet'), (SELECT id FROM robot_types WHERE name = 'Zero'), 0, 3, 0, 10, 0);

INSERT INTO upgrades (name, upgrade_type_id, robot_type_id, power_modifier, armor_modifier, accuracy_modifier, agility_modifier, luck_modifier) VALUES ('Double Jump', (SELECT id FROM upgrade_types WHERE name = 'Feet'), (SELECT id FROM robot_types WHERE name = 'Zero'), 0, -5, -3, 15, -1);
--

--
INSERT INTO equipment_inventory (equipment_id, player_id) VALUES ((SELECT id FROM equipment WHERE name = 'Basic Helmet'), (SELECT id FROM players WHERE name = 'Zero'));

INSERT INTO equipment_inventory (equipment_id, player_id) VALUES ((SELECT id FROM equipment WHERE name = 'Dark Helmet'), (SELECT id FROM players WHERE name = 'Zero'));

INSERT INTO equipment_inventory (equipment_id, player_id) VALUES ((SELECT id FROM equipment WHERE name = 'Z-Buster'), (SELECT id FROM players WHERE name = 'Zero'));

INSERT INTO equipment_inventory (equipment_id, player_id) VALUES ((SELECT id FROM equipment WHERE name = 'Dark Buster'), (SELECT id FROM players WHERE name = 'Zero'));

INSERT INTO equipment_inventory (equipment_id, player_id) VALUES ((SELECT id FROM equipment WHERE name = 'Z-Saber'), (SELECT id FROM players WHERE name = 'Zero'));

INSERT INTO equipment_inventory (equipment_id, player_id) VALUES ((SELECT id FROM equipment WHERE name = 'Dark Saber'), (SELECT id FROM players WHERE name = 'Zero'));

INSERT INTO equipment_inventory (equipment_id, player_id) VALUES ((SELECT id FROM equipment WHERE name = 'Basic Armor'), (SELECT id FROM players WHERE name = 'Zero'));

INSERT INTO equipment_inventory (equipment_id, player_id) VALUES ((SELECT id FROM equipment WHERE name = 'Dark Armor'), (SELECT id FROM players WHERE name = 'Zero'));

INSERT INTO equipment_inventory (equipment_id, player_id) VALUES ((SELECT id FROM equipment WHERE name = 'Dash Boots'), (SELECT id FROM players WHERE name = 'Zero'));

INSERT INTO equipment_inventory (equipment_id, player_id) VALUES ((SELECT id FROM equipment WHERE name = 'Dark Boots'), (SELECT id FROM players WHERE name = 'Zero'));
--

--
INSERT INTO upgrades_inventory (upgrade_id, player_id) VALUES ((SELECT id FROM upgrades WHERE name = 'Eagle Eye'), (SELECT id FROM players WHERE name = 'Zero'));

INSERT INTO upgrades_inventory (upgrade_id, player_id) VALUES ((SELECT id FROM upgrades WHERE name = 'Recovery Module'), (SELECT id FROM players WHERE name = 'Zero'));

INSERT INTO upgrades_inventory (upgrade_id, player_id) VALUES ((SELECT id FROM upgrades WHERE name = 'Double Shot'), (SELECT id FROM players WHERE name = 'Zero'));

INSERT INTO upgrades_inventory (upgrade_id, player_id) VALUES ((SELECT id FROM upgrades WHERE name = 'Plasma Shot'), (SELECT id FROM players WHERE name = 'Zero'));

INSERT INTO upgrades_inventory (upgrade_id, player_id) VALUES ((SELECT id FROM upgrades WHERE name = 'Energy Buster'), (SELECT id FROM players WHERE name = 'Zero'));

INSERT INTO upgrades_inventory (upgrade_id, player_id) VALUES ((SELECT id FROM upgrades WHERE name = 'Range Extender'), (SELECT id FROM players WHERE name = 'Zero'));

INSERT INTO upgrades_inventory (upgrade_id, player_id) VALUES ((SELECT id FROM upgrades WHERE name = 'Shock Absorber'), (SELECT id FROM players WHERE name = 'Zero'));

INSERT INTO upgrades_inventory (upgrade_id, player_id) VALUES ((SELECT id FROM upgrades WHERE name = 'Damage Reflect'), (SELECT id FROM players WHERE name = 'Zero'));

INSERT INTO upgrades_inventory (upgrade_id, player_id) VALUES ((SELECT id FROM upgrades WHERE name = 'Wind Dash'), (SELECT id FROM players WHERE name = 'Zero'));

INSERT INTO upgrades_inventory (upgrade_id, player_id) VALUES ((SELECT id FROM upgrades WHERE name = 'Double Jump'), (SELECT id FROM players WHERE name = 'Zero'));
--
