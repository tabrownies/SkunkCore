<template>
    <div class="wrapper">
        <h1>
            Welcome {{admin.firstname}} {{admin.lastname}}
        </h1>
        <nav class="options-nav">
            <ul>
                <li>
                    <router-link class="router-link" to="/color-scheme-editor">
                        Color Schemes
                    </router-link>
                </li>
                <li>
                    <router-link  class="router-link" to="/inspirational-people-editor">
                        Inspirational People
                    </router-link>
                </li>
                <li>
                    <router-link class="router-link" to="/projects">
                        Projects
                    </router-link>
                </li>
                <li>
                    <router-link class="router-link" to="/color-scheme-editor">
                        Shop
                    </router-link>
                </li>
                <li>
                    <router-link class="router-link" to="/tools">
                        Tools
                    </router-link>
                </li>
                <li>
                    <router-link class="router-link" to="/parts">
                        Parts
                    </router-link>
                </li>
                <li>
                    <button @click.prevent="logout">Logout</button>
                </li>
            </ul>
        </nav>
        
    </div>
</template>
<script>
    import axios from 'axios'
    export default {
        name: "AdminOptions",
        computed: {
            admin() {
                return this.$root.$data.admin;
            }
        },
        methods:{
            logout: async function(){
                try{
                    await axios.delete('/api/admin');
                    this.$root.$data.admin = null;
                }catch(error){
                    this.$root.$data.admin = null;
                }
            }
        }
    }
</script>
<style scoped>
    @import '/api/style/adminOptions.css';
</style>