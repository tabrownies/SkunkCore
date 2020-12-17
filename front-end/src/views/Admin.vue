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
    @import '/Users/timothybrown/Documents/School/CS 260/Creative Projects/Skunkcore/back-end/stylesheets/OG/admin.css';
</style>