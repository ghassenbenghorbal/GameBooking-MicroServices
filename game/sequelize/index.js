const { Sequelize } = require('sequelize');
const { applyExtraSetup } = require('./extra-setup');

const sequelize = new Sequelize('sports','root','root', {
    dialect: 'mysql',
    host: 'db',
	port: 3306
})

const modelDefiners = [
	require('./models/sport.model'),
	require('./models/game.model'),
	require('./models/team.model'),
	require('./models/field.model'),
];

for (const modelDefiner of modelDefiners) {
	modelDefiner(sequelize);
}

applyExtraSetup(sequelize);

module.exports = sequelize;