'use strict';
module.exports = (sequelize, DataTypes) => {
    const City = sequelize.define('City', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        country_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {});
    City.associate = function(models) {
        City.belongsTo(models.Country, { foreignKey: 'country_id' });
        City.hasMany(models.Airport, { foreignKey: 'city_id' });
    };
    return City;
};