const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const admin = require('./admin.js');
const isAdmin = admin.valid;
const router = express();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: false
}));
const partSchema = mongoose.Schema({
    name: String,
    link: String,
    imageLink: String,
    imagePath: String,
    price: Number
});
const Part = mongoose.model('Part', partSchema);
router.get('/', async (req, res) => {
    try {
        let parts = await Part.find();
        res.send(parts);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});
router.get('/:id', async (req, res) => {
    
    try {
        let part = await Part.findOne({
            _id: req.params.id
        });
        res.send(part);
    } catch (error) {
        console.log(error);
    }
});
router.post('/', isAdmin, async (req, res) => {
    try {
        let part = new Part({
            name: req.body.name,
            link: req.body.link,
            imageLink: req.body.imageLink,
            imagePath: req.body.imagePath,
            price: req.body.price,
        });
        await part.save();
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})
router.put('/:id', isAdmin, async (req, res) => {
    try {
        let part = await Part.findOne({
            _id: req.params.id
        }, async (error, part) => {
            part.name = req.body.name;
            part.link = req.body.link;
            part.imageLink = req.body.imageLink;
            part.imagePath = req.body.imagePath;
            part.price = req.body.price;
            await part.save();
        });
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})
router.delete('/:id', isAdmin, async (req, res) => {
    try {
        let part = await Part.deleteOne({
            _id: req.params.id,

        });
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

})
module.exports = {
    routes: router,
    part: Part,
}