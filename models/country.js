'use strict';
module.exports = (sequelize, DataTypes) => {
    const Country = sequelize.define('Country', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {});
    Country.associate = function(models) {
        Country.hasMany(models.City, { foreignKey: 'country_id' });
    };
    return Country;
};