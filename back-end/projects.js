const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

let fs = require('fs');

const admin = require('./admin.js');
const isAdmin = admin.valid;
const router = express();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: false
}));
const projectSchema = new mongoose.Schema({
    title: String,
    urlTitle:String,
    description: String,
    tags: Array,
    type: String,
    version: Number,
    link: String,
    linkIndex: Number,
    active: Boolean,
})
const Project = mongoose.model('project', projectSchema);
//these functions are the basic getting and setting functions to manage the projects
router.get('/', async (req, res) => {
    try {
        let projects = await Project.find({"active":true});
        res.send(projects);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});
router.get('/all', isAdmin, async (req,res)=>{
    try {
        let projects = await Project.find();
        res.send(projects);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})
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
        let linkName = '';
        let linkIndex = 0;
        for (char of req.body.title) {
            if (char === ' ') {
                linkName+='-';
            } else {
                linkName+=char;
            }
        }
        try{
            await Project.find({'link':linkName}, function(err, project){
                if (err) throw err;
                
                linkIndex+=project.length;
                console.log(linkIndex);
                
            })
        }catch(error){
            console.log(error);
        }
        let project = new Project({
            title: req.body.title,
            description: req.body.description,
            tags: req.body.tags,
            link: linkName,
            linkIndex: linkIndex,
            version: 1,
            type: "Project Description"
        });
        await project.save();
        let projectFolder = `./projects/${linkName+linkIndex}`;
        await fs.mkdirSync(projectFolder);
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
            project.title = req.body.title;
            project.description = req.body.description;
            project.tags = req.body.tags;
            project.active = req.body.active;
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
//This returns the project specific HTML for the blog post
router.get('/pages/:linkNameWithIndex', async (req, res) => {
    try {
        let project = await Project.findOne({
            link: req.params.linkName,
        })
        res.sendFile(`/Users/timothybrown/Documents/Projects/SkunkCore/back-end/projects/${req.params.linkNameWithIndex}/index.html`);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});
router.get('/pages/:linkNameWithIndex/:fileName', async(req,res)=>{
    try{
        console.log(req.params.fileName);
        res.sendFile(`/Users/timothybrown/Documents/Projects/SkunkCore/back-end/projects/${req.params.linkNameWithIndex}/${req.params.fileName}`);
    }catch(error){
        console.log(error);
    }
})
module.exports = {
    routes: router,
    project: Project,
}