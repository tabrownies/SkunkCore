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
const inspirationSchema = new mongoose.Schema({
    name: String,
    image: String,
    link: String
});
const Inspiration = mongoose.model('Inspiration', inspirationSchema);
//inpiration commands
router.get('/inspiration', async (req, res) => {
    try {
        let inspirations = await Inspiration.find();
        console.log(inspirations);
        res.send(inspirations);
    } catch (error) {
        console.log(error);
    }
})
router.post('/inspiration', isAdmin, async (req, res) => {
    const inspiration = new Inspiration({
        name: req.body.name,
        image: req.body.image,
        link: req.body.link
    });
    try {
        await inspiration.save();
        console.log(inspiration);
        res.send(inspiration);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});
router.put('/inspiration/:id', isAdmin, async (req, res) => {
    try {
        let person = await Inspiration.findOne({
            _id: req.params.id
        }, async (error, person) => {
            person.name = req.body.name;
            person.image = req.body.image;
            person.link = req.body.link;
            await person.save();
            res.send(person);
        })
    } catch (error) {
        console.log(error);
    }
});
router.delete('/inspiration/:id', isAdmin, async (req, res) => {
    try {
        await Inspiration.deleteOne({
            _id: req.params.id
        });
        res.send(200);
    } catch (error) {
        console.log(error);
    }
});
module.exports = {
    model:Inspiration,
    routes:router,
}