const express = require("express");
const app = express();
const port = 9000;
const fs = require("fs");
/* const beers = require("./beers.json"); */

// For css style
app.use("/style", express.static(__dirname + "/style"));

const data = fs.readFileSync("./beers.json", error => {
    if (error) {
        console.log(error);
    }
})
const beers = JSON.parse(data);

// For index.html
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

// For beers.json
app.get("/api/beers", (req, res) => {
    res.send(beers);
});


// For listening on port 9000
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});