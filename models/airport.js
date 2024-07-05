'use strict';
module.exports = (sequelize, DataTypes) => {
    const Airport = sequelize.define('Airport', {
        iata_code: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        city_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {});
    Airport.associate = function(models) {
        Airport.belongsTo(models.City, { foreignKey: 'city_id' });
    };
    return Airport;
};