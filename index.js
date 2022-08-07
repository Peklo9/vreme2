const express = require("express");
const app = express();
const importData = require("./data.json")
let port = process.env.port || 3000;

app.get("/", (req, res) => {
    res.send("test")
})

app.get("/mesta", (req, res) => {
    res.send(importData)
})

app.listen(port, () => {
    console.log('Exaple app is listening on port http')
})