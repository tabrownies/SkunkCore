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
const toolSchema = mongoose.Schema({
    name: String,
    link: String,
    imageLink: String,
    imagePath: String,
    price: Number
});
const Tool = mongoose.model('Tool', toolSchema);
router.get('/', async (req, res) => {
    try {
        let tools = await Tool.find();
        res.send(tools);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});
router.get('/:id', async (req, res) => {
    
    try {
        let tool = await Tool.findOne({
            _id: req.params.id
        });
        res.send(tool);
    } catch (error) {
        console.log(error);
    }
});
router.post('/', isAdmin, async (req, res) => {
    try {
        let tool = new Tool({
            name: req.body.name,
            link: req.body.link,
            imageLink: req.body.imageLink,
            imagePath: req.body.imagePath,
            price: req.body.price,
        });
        await tool.save();
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})
router.put('/:id', isAdmin, async (req, res) => {
    try {
        let tool = await Tool.findOne({
            _id: req.params.id
        }, async (error, tool) => {
            tool.name = req.body.name;
            tool.link = req.body.link;
            tool.imageLink = req.body.imageLink;
            tool.imagePath = req.body.imagePath;
            tool.price = req.body.price;
            await tool.save();
        });
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})
router.delete('/:id', isAdmin, async (req, res) => {
    try {
        let tool = await Tool.deleteOne({
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
    tool: Tool,
}