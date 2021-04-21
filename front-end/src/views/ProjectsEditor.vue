<template>
    <div class="projectsWrapper">
        <form>
            <h2>
                New Project:
            </h2>
            <input type="text" v-model="project.title" placeholder="Title">
            <textarea type="text" v-model="project.description" placeholder="Description"></textarea>
            <input type="text" v-model="project.link" placeholder="link">
            <button @click.prevent="addProject">Add</button>
        </form>
        <div class='projectSearch'>
            <p>
                Find Project:
            </p>
            <input v-model='searchbarText' placeholder="Search">
        </div>

        <ul>
            <li class="projectList" v-for="project in searchedProjects" :key="project.name">
                <input type="text" v-model="project.title">
                <h6>
                    ID: {{project._id}}
                </h6>
                <h6>
                    Link: {{project.link}}
                </h6>
                <textarea type="text" v-model="project.description"></textarea> 

                <div>
                    <button @click.prevent="updateProject(project)">Update</button>
                    <button @click.prevent="deleteProject(project)">Delete</button>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
    import axios from 'axios';
    export default {
        name: "ProjectsEditor",
        data: function () {
            return {
                project: {
                    title: '',
                    description: '',
                    link:'',
                },
                projects: Array,
                searchbarText: '',
            }
        },
        created: function () {
            this.getProjects();
        },
        computed: {
            searchedProjects: function () {
                let projects = [];
                for (let i = 0; i < this.projects.length; ++i) {
                    let match = true;
                    for (let j = 0; j < this.searchbarText.length; ++j) {
                        if (this.searchbarText[j].toLowerCase() != this.projects[i].title[j].toLowerCase()) {
                            match = false;
                        }
                    }
                    if (match) {
                        projects.push(this.projects[i]);
                    }
                }
                return projects;
            }
        },
        methods: {
            getProjects: async function () {
                try {
                    let responce = await axios.get("/api/projects");
                    console.log(responce);
                    this.projects = responce.data;
                } catch (error) {
                    console.log(error);
                    return [];
                }
            },
            addProject: async function () {
                try {
                    await axios.post("api/projects", this.project);
                    this.getProjects();
                } catch (error) {
                    console.log(error);
                }
            },
            updateProject: async function (project) {
                try {
                    await axios.put("/api/projects/" + project._id, project);
                    this.getProjects();
                } catch (error) {
                    console.log(error);
                }

            },
            deleteProject: async function (project) {
                try {
                    await axios.delete(`/api/projects/${project._id}`);
                    this.getProjects();
                } catch (error) {
                    console.log(error);
                }

            }
        }
    }
</script>
<style scoped>
    @import '/api/style/styles/projects.css';
</style>