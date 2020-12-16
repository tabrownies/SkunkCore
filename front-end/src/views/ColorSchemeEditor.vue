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
            <h4>
                Refresh the Page to See Changes
            </h4>
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
                try {
                    let responce = await axios.delete(`/api/delete-color-scheme/${scheme._id}`);
                    console.log(responce);
                } catch (error) {
                    console.log(error);
                }

                this.getSchemes();
            },
            applyScheme: async function (scheme) {
                try {
                    let responce = await axios.post(`/api/set-scheme/${scheme._id}`);
                    document.location.reload(true);
                    console.log(responce);
                } catch (error) {
                    console.log(error);
                }

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
                try {
                    let responce = await axios.get('/api/color-schemes');
                    console.log(responce);
                    this.schemes = responce.data;
                    this.fixSchemeNames();
                } catch (error) {
                    console.log(error);
                }

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
                try {
                    let responce = await axios.post('/api/color-scheme', this.newColorScheme);
                    console.log(responce);
                } catch (error) {
                    console.log(error);
                }
                this.getSchemes();
                //this.resetNewColorScheme();
            }
        }
    }
</script>
<style scoped>
    @import '../assets/stylesheets/OG/colorSchemeEditor.css';
</style>