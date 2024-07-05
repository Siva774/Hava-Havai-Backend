const express = require('express');
const { Airport, City, Country, sequelize } = require('./models');

const app = express();
const port = process.env.PORT || 3000;

app.get('/airport/:iata_code', async(req, res) => {
    try {
        const airport = await Airport.findOne({
            where: { iata_code: req.params.iata_code },
            include: {
                model: City,
                include: [Country]
            }
        });

        if (!airport) {
            return res.status(404).json({ error: 'Airport not found' });
        }

        const response = {
            iata_code: airport.iata_code,
            name: airport.name,
            city: {
                name: airport.City.name,
                country: airport.City.Country ? airport.City.Country.name : null
            }
        };

        res.json(response);
    } catch (error) {
        console.error('Error occurred:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});