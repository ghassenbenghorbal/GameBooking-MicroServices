const { DataTypes} = require('sequelize')
    

module.exports = (sequelize)=>{
    sequelize.define('game', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        score_team_1: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        score_team_2: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        starts_at:{
            type:DataTypes.DATE,
            allowNull:false,
        },
        createdAt: { type: DataTypes.DATE, field: 'created_at' },
        updatedAt: { type: DataTypes.DATE, field: 'updated_at' },
    });
    console.log('game model loaded');
};