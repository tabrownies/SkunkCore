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

const cookieParser = require("cookie-parser");
app.use(cookieParser());

const cookieSession = require('cookie-session');
app.use(cookieSession({
    name: 'session',
    keys: [
        'secretValue'
    ],
    cookie: {
        maxAge: 24 * 60 * 60 * 1000 // 24 hours
    }
}));

const styles = require("./styles.js");
app.use("/api", styles.routes);

const inspiration = require("./inspiration.js");
app.use("/api", inspiration.routes)
const admin = require('./admin.js');
app.use("/api/admin", admin.routes);
const tools = require('./tools.js');
app.use("/api/tools", tools.routes);
app.listen(5000, () => console.log("Listening on Port 5000!"));