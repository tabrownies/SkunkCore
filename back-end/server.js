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
const inspirationSchema = new mongoose.Schema({
    name: String,
    image: String,
    link: String
});

const Inspiration = mongoose.model('Inspiration', inspirationSchema);


//classes
/*function inspirationPerson(name, image, link = '#') {
    this.name = name;
    this.image = image;
    this.link = link;
}

let inspiration = [new inspirationPerson("Mark Rober",
        'https://yt3.ggpht.com/a/AATXAJzvkraPRAIFqK9z8eod2AGevxsiQ0KcfkhqY_o=s176-c-k-c0x00ffffff-no-rj-mo',
        "https://www.youtube.com/user/onemeeeliondollars"), new inspirationPerson(
        "The King of Random",
        'https://yt3.ggpht.com/a/AATXAJzf_KQ1EY07m9GISG4iCIokNPD2IKL7p8N1LEspjg=s176-c-k-c0x00ffffff-no-rj-mo',
        "https://www.youtube.com/user/01032010814"),
    new inspirationPerson('JK Brickworks',
        'https://yt3.ggpht.com/a/AATXAJx7urhc89Fm6AbGVhVPYgW9SkiwA3SvRIvnfviI=s176-c-k-c0x00ffffff-no-rj-mo',
        'https://www.youtube.com/user/truedimensions'),
    new inspirationPerson("Mysnaileatspizza",
        'https://yt3.ggpht.com/a/AATXAJwblGlWnpKDLgYlsa_azU6KiBovdMRzYbHAj1IX=s176-c-k-c0x00ffffff-no-rj-mo',
        'https://www.youtube.com/playlist?list=PL936EACCB51B0704A')
];*/
var currentSchemeId = '5fc2d7abaad9971a1d56a156';
const colorSchemeSchema = new mongoose.Schema({
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
app.get('/api/color-scheme', async (req, res) => {
    try {
        let scheme = await ColorScheme.findById(currentSchemeId);
        console.log(scheme._id);
        res.send(scheme);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});
app.get('/api/color-scheme/:id', async (req, res) => {
    try {
        let scheme = await ColorScheme.findById(req.params.id);
        console.log(scheme._id);
        res.send(scheme);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});
app.get('/api/color-schemes', async (req, res) => {
    try {
        let schemes = await ColorScheme.find();
        console.log(schemes);
        res.send(schemes);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});
app.post('/api/color-scheme', async (req, res) => {
    try {
        let colorScheme = new ColorScheme({
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
        console.log(colorScheme);
        colorScheme.save();
        res.send(colorScheme);
    } catch (error) {
        console.log(error);
    }
});
app.put('/api/color-scheme/:id', async (req, res) => {
    try {
        let colorScheme = await ColorScheme.findOne({
            _id: req.params.id
        }, async (error, item) => {
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
        console.log(colorScheme);
        colorScheme.save();
    } catch (error) {
        console.log(error);
    }
});
app.delete('/api/delete-color-scheme/:id', async (req, res) => {
    console.log(req.params.id);
    try {
        await ColorScheme.deleteOne({
            _id: req.params.id
        });
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
    }

});
app.post('/api/set-scheme/:id', async (req, res) => {
    currentSchemeId = req.params.id;
    console.log(currentSchemeId);
    res.sendStatus(200);
});
//inpiration commands
app.get('/api/inspiration', async (req, res) => {
    try {
        let inspirations = await Inspiration.find();
        console.log(inspirations);
        res.send(inspirations);
    } catch (error) {
        console.log(error);
    }
})
app.post('/api/inspiration', async (req, res) => {
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
app.put('/api/inspiration/:id', async (req,res)=>{
    try{
        let person = await Inspiration.findOne({_id:req.params.id}, async (error, person) =>{
            person.name = req.body.name;
            person.image = req.body.image;
            person.link = req.body.link;
            await person.save();
            res.send(person);
        })
    }catch(error){
        console.log(error);
    }
});
app.delete('/api/inspiration/:id', async (req,res)=>{
    try{
        await Inspiration.deleteOne({_id:req.params.id});
        res.send(200);
    }catch(error){
        console.log(error);
    }
});
app.listen(5000, () => console.log("Listening on Port 5000!"));