<template>
    <div class="projectsWrapper">
        <form>
            <h2>
                New Project:
            </h2>
            <input type="text" v-model="project.title" placeholder="Title">
            <input type="text" v-model="project.description" placeholder="Description">
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
                    {{project._id}}
                </h6>
                <input type="text" v-model="project.description">
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
        name: "Projects",
        data: function () {
            return {
                project: {
                    title: '',
                    description: '',
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
                        if (this.searchbarText[j].toLowerCase() != this.projects[i].name[j].toLowerCase()) {
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
                    await axios.post("api/projects", {
                        name: this.project.name,
                        link: this.project.link,
                        imageLink: this.project.imageLink,
                        price: this.project.price,
                    });
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
    @import '/api/style/projects.css';
</style>