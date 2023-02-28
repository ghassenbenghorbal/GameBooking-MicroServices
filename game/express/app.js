const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fieldRoute = require('./routes/field_route');
const sportRoute = require('./routes/sport_route');
const teamRoute = require('./routes/team_route');
const gameRoute = require('./routes/game_route');

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

app.use("/api",fieldRoute);
app.use("/api",sportRoute);
app.use("/api",teamRoute);
app.use("/api",gameRoute);

module.exports = app;