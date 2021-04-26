<template>
  <div class="projects-wrapper">
    <h2>My Projects</h2>
    <ul>
      <li class="project-list" v-for="project of projects" v-bind:key="project.title">
        <router-link class="project-link" :to="'/projects/'+project.link+project.linkIndex">
          <project-link 
            :description="project.description"
            :title="project.title"
            :img="project.mainPhotoPath"
          >
          </project-link>
        </router-link>
      </li>
    </ul>
    
  </div>
</template>
<script>
import axios from "axios";
import ProjectLink from "../components/ProjectLink.vue";
export default {
  name: "projects",
  components: {
    ProjectLink,
  },
  data: function () {
    return {
      projects: [],
    };
  },
  created: async function () {
    this.getProjects();
  },
  methods: {
    getProjects: async function () {
      try {
        let responce = await axios.get("/api/projects");
        this.projects = responce.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<style scoped>
@import '/api/styles/style/projects.css';
</style>