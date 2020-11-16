<template>
    <div class="wrapper">
        <h2>
            These are some of my projects which are either a work in progress or abandoned.
        </h2>
        <ul>
            <li  v-for="project in projects" :key="project.name">
                <a :href="project.url">{{project.name}}</a>
            </li>
        </ul>
    </div>
</template>
<script>
    function playgroundProject(name,url='#'){
        this.name = name;
        this.url = url;
    }
    export default{
        name: "Playground",
        data: function(){
            return{
                projects: [new playgroundProject("Solar System", "http://creative2.timothyanthonybrown.com/"),new playgroundProject("The GAME", 'http://creative1.timothyanthonybrown.com/'), new playgroundProject("Pong"), new playgroundProject('Reaction Timer'), new playgroundProject('Christmas List Builder')]
            }
        }
    }
</script>
<style scoped>
    h2{
        text-align: center;
        font-size:40px;
        padding:20px;
    }
    ul{
        padding:0 30px;
        display:flex;
        flex-wrap: wrap;

    }
    li{
        padding:10px;
        font-size:30px;
        list-style-type: none;
        border-bottom:2px solid var(--accent);
    }
</style>