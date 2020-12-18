<template>
    <div class="wrapper">
        <h1>
            Admin Options
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
                    <router-link class="router-link" to="/color-scheme-editor">
                        Projects
                    </router-link>
                </li>
                <li>
                    <router-link class="router-link" to="/color-scheme-editor">
                        Shop
                    </router-link>
                </li>
                <li>
                    <router-link class="router-link" to="/color-scheme-editor">
                        Tools
                    </router-link>
                </li>
                <li>
                    <router-link class="router-link" to="/color-scheme-editor">
                        Parts
                    </router-link>
                </li>
            </ul>
        </nav>
        
    </div>
</template>
<script>
    export default {
        name: "Admin",
    }
</script>
<style scoped>
    @import '/api/style/admin.css';
</style>