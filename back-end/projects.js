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
const projectSchema = new mongoose.Schema({
    title: String,
    description: String,
    tags: Array,
})
const Project = mongoose.model('project', projectSchema);
router.get('/', async (req, res) => {
    try {
        let projects = await Project.find();
        res.send(projects);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});
router.get('/:id', async (req, res) => {

    try {
        let project = await Project.findOne({
            _id: req.params.id
        });
        res.send(project);
    } catch (error) {
        console.log(error);
    }
});
router.post('/', isAdmin, async (req, res) => {
    try {
        let project = new Project({
            title: req.body.title,
            description: req.body.description,
            tags: req.body.tags,
        });
        await project.save();
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})
router.put('/:id', isAdmin, async (req, res) => {
    try {
        let project = await Project.findOne({
            _id: req.params.id
        }, async (error, project) => {
            title = req.body.title;
            description = req.body.description;
            tags = req.body.tags;
            await project.save();
        });
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})
router.delete('/:id', isAdmin, async (req, res) => {
    try {
        let project = await Project.deleteOne({
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
    project: Project,
}