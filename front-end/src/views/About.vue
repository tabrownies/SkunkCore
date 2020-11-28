<template>
    <div class="wrapper">
        <h2>
            About Skunkcore
        </h2>
        <div class="image-wrapper">
            <img class='my-image' src="../assets/meCropped.jpg">
        </div>

        <h3>
            My name is Timothy Brown
        </h3>
        <p>
            I am currently a Math Major at BYU with an emphasis in Applied Mathematics (see <a
                href="https://acme.byu.edu">this website</a> for details). I enjoy running, swimmming, and most any
            other sport. I also enjoy building things and being creative, which is one of the reasons I've built
            Skunckcore. <span v-show="this.armenian">I am bilingual and speak both English and Armenian fluently.</span>
            I am a proud member of The Church
            of Jesus Christ of Latter-day Saints (AKA Mormons, but we don’t like that name, find out why at <a
                href="https://www.comeuntochrist.org/beliefs/book-of-mormon/what-is-the-book-of-mormon">comeuntochrist.org</a>
            )
        </p>
        <hr />
        <h3>
            What is Skunkcore
        </h3>
        <p>
            Skunkcore is my small corner of the world-wide-web for testing little programs I create and showing off some
            of my projects. I hope to eventually produce inventions and market them here (hence the shop section of the
            website). One of my major goals in life is to invent and sell them, Skunkcore is one big step in that
            direction. The website is called Skunkcore because the name came to me one day, it sounded cool and
            origional, and was open on the internet.
        </p>
        <hr />
        <h3>
            The Team
        </h3>
        <h4>
            These are the people who help me create my projects
        </h4>
        <ul class="team-members">
            <li class="team-member" v-for="member in team" :key="member.name">
                <img :src="member.image">
                <h5>{{member.name}}</h5>
            </li>
        </ul>
        <hr />
        <h3>
            Where we get our inspiration
        </h3>
        <ul class="inspiration-list">
            <li v-for="inspire in inspiration" :key="inspire.name">
                <img :src="inspire.image">
                <a :href="inspire.link">{{inspire.name}}</a>
            </li>
        </ul>
        <hr />
        <h3>
            What is playground?
        </h3>
        <p>
            Playground is an place for me to test out ideas. They are unfinished and rusty, so don't expect professional
            work. It gives me
            an oportunity to practice.
        </p>
        <hr />
        <h3>
            How is it built
        </h3>
        <p>
            Skunkcore is built using a variety of technology. The front-end (the website you are seeing right now), is
            built using HTML, CSS, and JavaScript in a VUE framework, whereas the backend is using Node.js, Express and
            a Mongo database. There are, of course, other fun technologies integrated in, but to see those, go look
            through some of <router-link class="internal-link" to="/projects">the projects.</router-link>
        </p>
    </div>
</template>
<style scoped>
    /*global link style, might need to be changed*/
    a,
    internal-links {
        color: var(--link);
    }

    a:hover,
    internal-links:hover {
        color: var(--link-hover);
    }

    hr {
        border-top: 2px dashed var(--accent2) !important;
    }


    h2 {
        font-size: 70px;
        padding: 30px;
        text-align: center;
        color: var(--header);
    }

    h3 {
        font-size: 50px;
        padding: 15px;
        text-align: center;
        color: var(--header2);
    }

    p {
        font-size: 35px;
        padding: 10px;
        color: var(--text);
    }

    .my-image {
        margin: 25px;
        height: 450px;
        border: 2px solid var(--accent);
    }

    h4 {
        font-size: 40px;
        text-align: center;
        color: var(--text2);
    }

    .team-members {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        list-style: none;
    }

    .team-members li {
        margin: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .team-members h5 {
        font-size: 40px;
        text-align: center;
        color: var(--text);
    }

    .team-members img {
        height: 250px;
    }

    .inspiration-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    .inspiration-list li {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .inspiration-list img {
        width: 250px;
    }

    .inspiration-list a {
        font-size: 30px;
        text-align: center;
    }

    @media only screen and (max-width:750px) {
        .image-wrapper {
            width: 100%;
            display: flex;
            justify-content: center;
        }
    }

    @media only screen and (min-width:751px) {
        .my-image {
            float: left;
        }
    }
</style>
<script>
    function getImgUrl(name) {
        var images = require.context('../assets/', false)
        return images('./' + name)
    }

    function teamMember(name, image) {
        this.name = name;
        this.image = image;
    }

    /* This is the template used in the inspiration Array
    function inspirationPerson(name, image, link = '#') {
        this.name = name;
        this.image = image;
        this.link = link;
    }*/
    import axios from 'axios';
    export default {
        name: 'About',
        data: function () {
            return {
                team: [new teamMember("Joshua Brown", getImgUrl('joshy.jpg')), new teamMember(
                        "Thomas Andrews", getImgUrl('thomas.jpg')),
                    new teamMember('Ben Whatcott', getImgUrl('ben.jpg')), new teamMember('Chris Whatcott',
                        getImgUrl('chris_profile.jpg'))
                ],
                inspiration: [],
                armenian: false
            }
        },
        created: function () {
            //this.getArmenian();
            this.getInspiration();
            //this.postInspirationManual();
        },
        methods: {
            /*getArmenian: async function () {
                let responce = await axios.get('http://192.168.1.27:3000/armenian');
                console.log(responce);
                this.armenian = responce.data;
            },*/
            getInspiration: async function () {
                let responce = await axios.get('/inspiration');
                console.log(responce.data);
                this.inspiration = responce.data;
            },
            postInspirationManual: async function () {
                /*Don't want to accidentally turn this on...
                try {
                    axios.post('/inspiration', {
                        name: "Mysnaileatspizza",
                        image: 'https://yt3.ggpht.com/a/AATXAJwblGlWnpKDLgYlsa_azU6KiBovdMRzYbHAj1IX=s176-c-k-c0x00ffffff-no-rj-mo',
                        link: 'https://www.youtube.com/playlist?list=PL936EACCB51B0704A'
                    })
                } catch (error) {
                    console.log(error);
                }*/
            }
        },

    }
</script>