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
    .wrapper{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    h1{
        font-size:60px;
        padding:25px;
        padding-bottom:0px;
    }
    ul{
        display:flex;
        flex-wrap: wrap;
        list-style: none;
    }
    li{
        padding:10px;
        font-size:30px;
        
    }
    .router-link{
        color:var(--text);
    }
</style>