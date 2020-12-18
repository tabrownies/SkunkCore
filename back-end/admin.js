const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const argon2 = require('argon2');
const router = express();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: false
}));
const PermissionSchema = mongoose.Schema({
    colorshemes: {
        type: Boolean,
        default: true,
    },
    inspiration: {
        type: Boolean,
        default: true,
    },
    //projects is the same for materials
    projects: {
        type: Boolean,
        default: false,
    },
    shop: {
        type: Boolean,
        default: false,
    },
    tools: {
        type: Boolean,
        default: false,
    },
    parts: {
        type: Boolean,
        default: false,
    },
    users: {
        type: Boolean,
        default: false,
    }
})
const Permissions = mongoose.model('Permissions', PermissionSchema);
let AdminSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    username: String,
    password: String,
    permissions: {
        type: mongoose.Schema.ObjectId,
        ref: 'Permissions'
    }
})

modules.exports = {
    routes: router,
}