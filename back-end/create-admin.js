const reader = require("readline-sync");
const mongoose = require('mongoose');
const admin = require("./admin.js");

const Admin = admin.model;

// connect to Mongo
mongoose.connect('mongodb://localhost:27017/museum', {
    useUnifiedTopology: true,
    useNewUrlParser: true
});


// get the needed info
let firstname = reader.question("First name: ");
let lastname = reader.question("Last name: ");
let username = reader.question("Username: ");
const password = reader.question("Password: ", {
    hideEchoBack: true
});

if (firstname === "" || lastname === "" || username === "" || password === "") {
    console.log("You need to enter a first name, last name, username, and password");
    process.exit();
}

Admin.findOne({
    username: username
}).then((user) => {
    if (user) {
        console.log("That username already exists");
        process.exit();
    }
}).then(() => {
    let admin = new Admin({
        firstname: firstname,
        lastname: lastname,
        username: username,
        password: password,
    });
    admin.save().then(() => {
        console.log("OK, admin user created for", admin.firstname, admin.lastname, "with username", admin.username);
        //console.log(Admin.findOne({_id:admin._id}));
        process.exit();
    });
}).catch(error => {
    console.log(error);
});