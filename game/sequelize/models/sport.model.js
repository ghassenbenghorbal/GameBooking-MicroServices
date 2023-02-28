const {DataTypes} = require('sequelize')

module.exports = (sequelize)=>{
    sequelize.define('sport', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
                type: DataTypes.STRING,
                allowNull: false,
        },
        createdAt: { type: DataTypes.DATE, field: 'created_at' },
        updatedAt: { type: DataTypes.DATE, field: 'updated_at' },
    });
    console.log('sport model loaded');
};