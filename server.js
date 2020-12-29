const express = require('express');
const path = require('path');

const app = express();

//Set headers for the requests
//----------------------------------------------------------
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,Authorization,content-type,application/json');
    next();
});

// Start the server
app.listen(process.env.PORT || '8080', () => {
    console.log("App running on localhost:8080");
});

var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

module.exports = app;
