/* import * as data from './beers.json'; */
const express = require("express");
const app = express();
const port = 9000;
const beers = require("./beers.json");

console.log(beers);

// For index.html
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

// For beers.json
app.get("/api/beers", (req, res) => {
    res.sendFile(__dirname + "/beers.json");
})

// For css style
app.use("/style", express.static(__dirname + "/style"))

// For listening on port 9000
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})