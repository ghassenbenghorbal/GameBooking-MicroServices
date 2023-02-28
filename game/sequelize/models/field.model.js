const {DataTypes} = require('sequelize');

module.exports = (sequelize)=>{
    sequelize.define('field', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
                type: DataTypes.STRING,
                allowNull: false,
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        country: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        size:{
            type:DataTypes.INTEGER,
            allowNull:false,
        },
        createdAt: { type: DataTypes.DATE, field: 'created_at' },
        updatedAt: { type: DataTypes.DATE, field: 'updated_at' },
    });
    console.log('field model loaded');
}