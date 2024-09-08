const express = require("express");

const app = express();

const PORT = 8001;

app.get("/", (req, res) => {
    res.send("GET succesfull");
});

app.post("/", (req, res) => {
    res.post("POST succesfull");
});

app.listen(PORT, console.log(`listening on port ${PORT}`));
