<template>
    <div class="projects-editor-wrapper">
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
                <img :src="project.mainPhotoPath">
                <input class="image-input" ref="imageInput" type="file" @input="fileChanged">
                <textarea type="text" v-model="project.description"></textarea> 

                <div>
                    <button @click.prevent="updateProject(project)">Update</button>
                    <button @click.prevent="deleteProject(project)">Delete</button>
                </div>
                Active: <input type="checkbox" v-model="project.active">
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
                    active:'',
                    mainPhotoPath:'',
                },
                projects: Array,
                searchbarText: '',
                url: '',
                file: null,
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
                    let responce = await axios.get("/api/projects/all");
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
                //for uploading photos
                let photoDestinationResponce;
                if(this.file!=null){
                    const formData = new FormData();
                    formData.append('project-photo', this.file, this.file.name);
                    try{
                        photoDestinationResponce = await axios.post('/api/projects/project-photo', formData);
                        project.mainPhotoPath = photoDestinationResponce.data.path
                    }catch(error){
                        console.log(error);
                    }
                }
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

            },
            fileChanged: function(){
                this.file = event.target.files[0];
                this.url = URL.createObjectURL(this.file);
            },
        }
    }
</script>
<style scoped>
    @import '/api/style/styles/projectsEditor.css';
</style>