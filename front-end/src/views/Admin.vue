<template>
    <div class="wrapper">
        <form>
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
            <button @click.prevent="uploadNewColorScheme">Upload</button>
        </form>
    </div>
</template>
<script>
    import axios from 'axios';
    export default {
        name: "Admin",
        data: function () {
            return {
                newColorScheme: {
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
                }
            }
        },
        methods: {
            resetNewColorScheme: function () {
                this.newColorScheme.logo = this.newColorScheme.logoHover = this.newColorScheme.base = this.newColorScheme.accent =
                    this.newColorScheme.accent2 = this.newColorScheme.navLink = this.newColorScheme.navLinkHover = this.newColorScheme
                    .navLinkActive = this.newColorScheme.link = this.newColorScheme.linkHover = this.newColorScheme.linkClick =
                    this.newColorScheme.header = this.newColorScheme.header2 = this.newColorScheme.text = this.newColorScheme.text2 = '';
            },
            uploadNewColorScheme: async function(){
                await axios.post('/color-scheme', this.newColorScheme);
                //this.resetNewColorScheme();
            }
        }
    }
</script>
<style scoped>

</style>