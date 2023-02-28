const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const sequelize = require('./sequelize');
const routes = require('./express/app');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(routes);

sequelize.authenticate().then(
    async ()=>{
        console.log("Connection has been established successfully.");
    },
).catch(()=>{
    console.log("Unable to connect to the database.")   
})



app.listen(8082, '0.0.0.0', () => {console.log("server running on port 8082 ....")})
