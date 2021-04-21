<template>
    <div class="edit-color-scheme-wrapper" v-if="this.$root.$data.admin">
        <h1>
            {{scheme.name}}
        </h1>
        <form>
            <div class="name-value-pair">
                <h3>Name:</h3>
                <input type="text" v-model="scheme.name" placeholder="Name">
            </div>
            <div class="name-value-pair">
                <h3>Stylesheet:</h3>
                <input type="text" v-model="scheme.stylesheet" placeholder="Stylesheet">
            </div>
            <div class="name-value-pair">
                <h3>Logo:</h3>
                <input type="text" v-model="scheme.logo" placeholder="Logo">
            </div>
            <div class="name-value-pair">
                <h3>Logo Hover:</h3>
                <input type="text" v-model="scheme.logoHover" placeholder="Logo Hover">
            </div>
            <div class="name-value-pair">
                <h3>Base:</h3>
                <input type="text" v-model="scheme.base" placeholder="Base">

            </div>
            <div class="name-value-pair">
                <h3>Accent:</h3>
                <input type="text" v-model="scheme.accent" placeholder="Accent">
            </div>
            <div class="name-value-pair">
                <h3>Accent 2:</h3>
                <input type="text" v-model="scheme.accent2" placeholder="Accent 2">
            </div>
            <div class="name-value-pair">
                <h3>Nav Link:</h3>
                <input type="text" v-model="scheme.navLink" placeholder="Nav Link">
            </div>
            <div class="name-value-pair">
                <h3>Nav Link Hover:</h3>
                <input type="text" v-model="scheme.navLinkHover" placeholder="Nav Link Hover">
            </div>
            <div class="name-value-pair">
                <h3>Nav Link Active:</h3>
                <input type="text" v-model="scheme.navLinkActive" placeholder="Nav Link Active">
            </div>
            <div class="name-value-pair">
                <h3>Link:</h3>
                <input type="text" v-model="scheme.link" placeholder="Link">
            </div>
            <div class="name-value-pair">
                <h3>Link Hover:</h3>
                <input type="text" v-model="scheme.linkHover" placeholder="Link Hover">
            </div>
            <div class="name-value-pair">
                <h3>Link Click:</h3>
                <input type="text" v-model="scheme.linkClick" placeholder="Link Click">
            </div>
            <div class="name-value-pair">
                <h3>Header:</h3>
                <input type="text" v-model="scheme.header" placeholder="Header">
            </div>
            <div class="name-value-pair">
                <h3>Header 2:</h3>
                <input type="text" v-model="scheme.header2" placeholder="Header 2">
            </div>
            <div class="name-value-pair">
                <h3>Text:</h3>
                <input type="text" v-model="scheme.text" placeholder="Text">
            </div>
            <div class="name-value-pair">
                <h3>Text 2:</h3>
                <input type="text" v-model="scheme.text2" placeholder="Text 2">
            </div>
        </form>
        <button @click.prevent="updateScheme">
            Update
        </button>
    </div>
</template>
<script>
    import axios from 'axios'
    export default {
        name: "EditColorScheme",
        data: function () {
            return {
                id: this.$route.params.id,
                scheme: {
                    stylesheet: '',
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
            }
        },
        created: function () {
            this.getScheme();
        },
        methods: {
            getScheme: async function () {
                try {
                    let responce = await axios.get(`/api/styles/color-scheme/${this.id}`);
                    console.log(this.scheme.data);
                    this.scheme = responce.data;
                } catch (error) {
                    console.log(error);
                }
            },
            updateScheme: async function () {
                try {
                    let responce = await axios.put(`/api/styles/color-scheme/${this.id}`, this.scheme);
                    console.log(responce);
                } catch (error) {
                    console.log(error);
                }
            }
        },
    }
</script>
<style scoped>
    @import '/api/style/styles/editColorScheme.css'
</style>