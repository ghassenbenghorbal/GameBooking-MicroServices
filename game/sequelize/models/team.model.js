const {DataTypes} = require('sequelize')

module.exports = (sequelize)=>{
    sequelize.define('team',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        country:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        region:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        flag:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        createdAt: { type: DataTypes.DATE, field: 'created_at' },
        updatedAt: { type: DataTypes.DATE, field: 'updated_at' },
    });
    console.log('team model loaded');
}