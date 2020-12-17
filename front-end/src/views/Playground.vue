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
    @import '/Users/timothybrown/Documents/School/CS 260/Creative Projects/Skunkcore/back-end/stylesheets/OG/playground.css';
</style>