<template>
  <div>
    <h2>Projects on their way!</h2>
    <ul>
      <li v-for="project of projects" v-bind:key="project.title">
        <router-link :to="'/projects/'+project._id">
          <project-link
            :description="project.description"
            :title="project.title"
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
//import IndividualProject from "../components/IndividualProject.vue"
export default {
  name: "projects",
  components: {
    ProjectLink,
    //IndividualProject
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