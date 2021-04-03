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
var currentSchemeId = '5fc436c92ba2b124e31743ec';
const styleDirectory = '/Users/timothybrown/Documents/Projects/SkunkCore/back-end/stylesheets/';
let currentDir = '/Users/timothybrown/Documents/Projects/SkunkCore/back-end/stylesheets/OG/';
const colorSchemeSchema = new mongoose.Schema({
    stylesheet: String,
    name: String,
    logo: String,
    logoHover: String,
    base: String,
    accent: String,
    accent2: String,
    navLink: String,
    navLinkHover: String,
    navLinkActive: String,
    link: String,
    linkHover: String,
    linkClick: String,
    header: String,
    header2: String,
    text: String,
    text2: String
})
const ColorScheme = mongoose.model("ColorScheme", colorSchemeSchema);
router.get('/color-scheme', async (req, res) => {
    try {
        let scheme = await ColorScheme.findById(currentSchemeId);
        res.send(scheme);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});
router.get('/color-scheme/:id', async (req, res) => {
    try {
        let scheme = await ColorScheme.findById(req.params.id);
        res.send(scheme);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});
router.get('/color-schemes', isAdmin, async (req, res) => {
    try {
        let schemes = await ColorScheme.find();
        res.send(schemes);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});
router.post('/color-scheme', isAdmin, async (req, res) => {
    try {
        let colorScheme = new ColorScheme({
            stylesheet: req.body.stylesheet,
            name: req.body.name,
            logo: req.body.logo,
            logoHover: req.body.logoHover,
            base: req.body.base,
            accent: req.body.accent,
            accent2: req.body.accent2,
            navLink: req.body.navLink,
            navLinkHover: req.body.navLinkHover,
            navLinkActive: req.body.navLinkActive,
            link: req.body.link,
            linkHover: req.body.linkHover,
            linkClick: req.body.linkClick,
            header: req.body.header,
            header2: req.body.header2,
            text: req.body.text,
            text2: req.body.text2
        })
        colorScheme.save();
        res.send(colorScheme);
    } catch (error) {
        console.log(error);
    }
});
router.put('/color-scheme/:id', isAdmin, async (req, res) => {
    try {
        let colorScheme = await ColorScheme.findOne({
            _id: req.params.id
        }, async (error, item) => {
            item.stylesheet = req.body.stylesheet;
            item.name = req.body.name;
            item.logo = req.body.logo;
            item.logoHover = req.body.logoHover;
            item.base = req.body.base;
            item.accent = req.body.accent;
            item.accent2 = req.body.accent2;
            item.navLink = req.body.navLink;
            item.navLinkHover = req.body.navLinkHover;
            item.navLinkActive = req.body.navLinkActive;
            item.link = req.body.link;
            item.linkHover = req.body.linkHover;
            item.linkClick = req.body.linkClick;
            item.header = req.body.header;
            item.header2 = req.body.header2;
            item.text = req.body.text;
            item.text2 = req.body.text2;
            await item.save();
            res.send(item);
        });
        colorScheme.save();
    } catch (error) {
        console.log(error);
    }
});
router.delete('/delete-color-scheme/:id', isAdmin, async (req, res) => {
    console.log('This prevents actual deleting!');
    return res.sendStatus(200);
    try {
        await ColorScheme.deleteOne({
            _id: req.params.id
        });
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

});

router.post('/set-scheme/:id', isAdmin, async (req, res) => {
    try {
        let currentScheme = await ColorScheme.findOne({
            _id: currentSchemeId
        });
        console.log(currentScheme);
        currentSchemeId = req.params.id;
        currentDir = styleDirectory + currentScheme.stylesheet + '/';
        console.log(currentDir);
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

});


router.get('/style/:file', async (req, res) => {
    try {
        await res.sendFile(currentDir + req.params.file);
    } catch (error) {
        console.log(error);
    }

})
router.get('/logo', async (req, res) => {
    try {
        ///Users/timothybrown/Documents/Projects/SkunkCore/back-end/assets/logo.png
        await res.sendFile('/Users/timothybrown/Documents/Projects/SkunkCore/back-end/assets/logo.png');
    } catch (error) {
        console.log(error);
        res.send(500);
    }

})
router.get('/favicon', async (req, res) => {
    try {
        await res.sendFile('/Users/timothybrown/Documents/Projects/SkunkCore/back-end/assets/favicon.png');
    } catch (error) {
        console.log(error);
    }

})
module.exports = {
    model: ColorScheme,
    routes: router,
}