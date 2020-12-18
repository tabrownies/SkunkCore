const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/museum', {
    useNewUrlParser: true
});

const styles = require("./styles.js");
app.use("/api", styles.routes);

const inspiration = require("./inspiration.js");
app.use("/api",inspiration.routes)

app.listen(5000, () => console.log("Listening on Port 5000!"));