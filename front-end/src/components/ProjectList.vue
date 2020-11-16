<template>
    <div class="wrapper">
        <ul>
            <li class="project-link" v-for='project in projects'>
                asdf
            </li>
        </ul>
    </div>
</template>
<script>
    import ProjectLink from 'ProductLink.vue'
    export default{
        name: 'ProjectList',
        props:{
            projects: Array
        },  
        components:{
            ProjectLink
        }
    }
</script>
<style scoped>

</style>