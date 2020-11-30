<template>
    <div class="wrapper">
        <h1>
            Scheme Admin Page
        </h1>
        <div class="page-option create-scheme">
            <h2>
                Create New Scheme
            </h2>
            <form>
                <input type="text" v-model="newColorScheme.name" placeholder="Name">
                <input type="text" v-model="newColorScheme.logo" placeholder="Logo">
                <input type="text" v-model="newColorScheme.logoHover" placeholder="Logo Hover">
                <input type="text" v-model="newColorScheme.base" placeholder="Base">
                <input type="text" v-model="newColorScheme.accent" placeholder="Accent">
                <input type="text" v-model="newColorScheme.accent2" placeholder="Accent 2">
                <input type="text" v-model="newColorScheme.navLink" placeholder="Nav Link">
                <input type="text" v-model="newColorScheme.navLinkHover" placeholder="Nav Link Hover">
                <input type="text" v-model="newColorScheme.navLinkActive" placeholder="NavLinkActive">
                <input type="text" v-model="newColorScheme.link" placeholder="Link">
                <input type="text" v-model="newColorScheme.linkHover" placeholder="Link Hover">
                <input type="text" v-model="newColorScheme.linkClick" placeholder="Link Click">
                <input type="text" v-model="newColorScheme.header" placeholder="Header">
                <input type="text" v-model="newColorScheme.header2" placeholder="Header 2">
                <input type="text" v-model="newColorScheme.text" placeholder="Text">
                <input type="text" v-model="newColorScheme.text2" placeholder="Text 2">
            </form>
            <button class="upload-scheme" @click.prevent="uploadNewColorScheme">Upload</button>
        </div>
        <div class="page-option schemes">
            <h2>
                All Schemes
            </h2>
            <ul>
                <li v-for="scheme in schemes" :key="scheme.name">
                    <h3>{{scheme.name}}</h3>
                    <div class="buttons">
                        <button class="scheme-option" @click.prevent="deleteScheme(scheme)">
                            Delete
                        </button>
                        <button class="scheme-option" @click="applyScheme(scheme)">
                            Apply
                        </button>
                        <router-link tag="button" class="scheme-option" :to="'/edit-color-scheme/' + scheme._id">
                            Edit
                        </router-link>
                    </div>
                </li>
            </ul>
        </div>


    </div>
</template>
<script>
    import axios from 'axios';
    export default {
        name: "ColorSchemeEditor",
        data: function () {
            return {
                newColorScheme: {
                    name: '',
                    logo: '',
                    logoHover: '',
                    base: '',
                    accent: '',
                    accent2: '',
                    navLink: '',
                    navLinkHover: '',
                    navLinkActive: '',
                    link: '',
                    linkHover: '',
                    linkClick: '',
                    header: '',
                    header2: '',
                    text: '',
                    text2: ''
                },
                schemes: [],
            }
        },
        created: function () {
            this.getSchemes();
        },
        methods: {
            deleteScheme: async function (scheme) {
                console.log(scheme._id);
                await axios.delete(`/delete-color-scheme/${scheme._id}`);
                this.getSchemes();
            },
            applyScheme: async function (scheme) {
                await axios.post(`/set-scheme/${scheme._id}`);
                document.location.reload(true);
            },
            resetNewColorScheme: function () {
                this.newColorScheme.name = this.newColorScheme.logo = this.newColorScheme.logoHover = this
                    .newColorScheme.base = this
                    .newColorScheme.accent =
                    this.newColorScheme.accent2 = this.newColorScheme.navLink = this.newColorScheme.navLinkHover =
                    this.newColorScheme
                    .navLinkActive = this.newColorScheme.link = this.newColorScheme.linkHover = this.newColorScheme
                    .linkClick =
                    this.newColorScheme.header = this.newColorScheme.header2 = this.newColorScheme.text = this
                    .newColorScheme.text2 = '';
            },
            getSchemes: async function () {
                let responce = await axios.get('/color-schemes');
                //console.log(responce.data);
                this.schemes = responce.data;
                this.fixSchemeNames();
            },
            fixSchemeNames: function (name = 'Unnamed Scheme') {
                this.schemes = this.schemes.map(scheme => {
                    if (scheme.name === '' || scheme.name == null) {
                        scheme.name = name;
                        //console.log(scheme);
                    }
                    return scheme;
                });
            },
            uploadNewColorScheme: async function () {
                await axios.post('/color-scheme', this.newColorScheme);
                this.getSchemes();
                //this.resetNewColorScheme();
            }
        }
    }
</script>
<style scoped>
    .wrapper{
        display: flex;
        flex-direction: column;
        align-items: center;
        width:100%;
    }
    h1 {
        text-align: center;
        padding: 15px;
        font-size: 60px;
        color: var(--header);
    }
    h2 {
        text-align: center;
        padding: 10px;
        font-size: 40px;
        color: var(--header2);
    }
    .create-scheme{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    form{
        display:flex;
        flex-wrap: wrap;
        justify-content: space-around;
        background-color: var(--accent);
        padding:10px;
        margin:10px;
    }
    form input{
        margin:2px;
    }
    .upload-scheme,
    .scheme-option{
        color:var(--text1);
        background-color: var(--accent2);
        padding:3px 5px;
        border:1px solid var(--accent);
        margin:4px;
        font-size:15px;
        font-family:inherit;
        text-align: center;
        border-radius: 2.5px;
    }
    .upload-scheme:active,
    .scheme-option:active{
        
        margin:4px;
    }
    .upload-scheme{
        margin:10px;
        font-size:20px;
    }
    .upload-scheme:active{
        margin:10px;   
    }
    ul{
        list-style: none;
        display:flex;
        flex-wrap: wrap;
        justify-content: space-around;
        background-color: var(--accent);
        margin:10px 20px;
    }
    li{
        display:flex;
        flex-direction: column;
        align-items: center;
        padding:10px;
    }
    li h3{
        color:var(--text2);
    }

</style>