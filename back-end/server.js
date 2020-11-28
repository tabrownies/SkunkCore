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
const colorSchemeSchema = new mongoose.Schema({
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
app.get('/color-scheme', async (req, res) => {
    try {
        let schemes = await ColorScheme.find();
        console.log(schemes);
    } catch (error) {
        console.log(error);
    }
});
app.post('/color-scheme', async (req, res) => {
    try {
        let colorScheme = new ColorScheme({
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
    }catch(error){
        console.log(error);
    }
})

//inpiration commands
app.get('/inspiration', async (req, res) => {
    try {
        let inspirations = await Inspiration.find();
        console.log(inspirations);
        res.send(inspirations);
    } catch (error) {
        console.log(error);
    }
})
app.post('/inspiration', async (req, res) => {
    const inspiration = new Inspiration({
        name: req.body.name,
        image: req.body.image,
        link: req.body.link
    });
    try {
        await inspiration.save();
        res.send(inspiration);
        console.log(inspiration);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.listen(3000, () => console.log("Listening on Port 3000!"));