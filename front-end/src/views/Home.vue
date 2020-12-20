<template>
  <div class="homeWrapper">
    <ul>
      <li v-for="project in projects" :key="project.title">
        {{project.title}}
      </li>
    </ul>
  </div>
</template>

<script>
  // @ is an alias to /src
  import axios from 'axios'
  export default {
    name: 'Home',
    data: function () {
      return {
        projects: [],
      }
    },
    created: function(){
      this.getProjects();
    },
    methods: {
      getProjects: async function(){
        try{
          let responce = await axios.get('/api/projects');
          this.projects = responce.data;
        }catch(error){
          console.log(error);
        }
      }
    }
  }
</script>
<style scoped>
  @import '/api/style/home.css';
</style>