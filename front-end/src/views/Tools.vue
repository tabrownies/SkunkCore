<template>
    <div class="toolsWrapper">
        <form>
            <h2>
                New Tool:
            </h2>
            <input type="text" v-model="tool.name" placeholder="Name">
            <input type="text" v-model="tool.link" placeholder="Link">
            <input type="text" v-model="tool.imageLink" placeholder="Image">
            <button @click.prevent="addTool">Add</button>
        </form>
        <div class='toolSearch'>
            <p>
                Find Tool:
            </p>
            <input v-model='searchbarText' placeholder="Search">
        </div>

        <ul>
            <li class="toolList" v-for="tool in searchedTools" :key="tool.name">
                <img :src="tool.imageLink">
                <div>
                    <input type="text" v-model="tool.name">
                    <input type="text" v-model="tool.link">
                    <input type="text" v-model="tool.imageLink">
                    <input type="number" v-model="tool.price">
                </div>

                <div>
                    <button @click.prevent="updateTool(tool)">Update</button>
                    <button @click.prevent="deleteTool(tool)">Delete</button>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
    import axios from 'axios';
    export default {
        name: "Tools",
        data: function () {
            return {
                tool: {
                    name: '',
                    link: '',
                    imageLink: '',
                    ImagePath: '',
                    price: '',
                },
                tools: Array,
                searchbarText: '',
            }
        },
        created: function () {
            this.getTools();
        },
        computed:{
            searchedTools: function(){
                let tools = [];
                for(let i = 0; i<this.tools.length; ++i){
                    let match = true;
                    for(let j = 0; j<this.searchbarText.length; ++j){
                        if(this.searchbarText[j].toLowerCase() != this.tools[i].name[j].toLowerCase()){
                            match = false;
                        }
                    }
                    if(match){
                        tools.push(this.tools[i]);
                    }
                }
                return tools;
            }
        },
        methods: {
            getTools: async function () {
                try {
                    let responce = await axios.get("/api/tools");
                    console.log(responce);
                    this.tools = responce.data;
                } catch (error) {
                    console.log(error);
                    return [];
                }
            },
            addTool: async function () {
                try {
                    await axios.post("api/tools", {
                        name: this.tool.name,
                        link: this.tool.link,
                        imageLink: this.tool.imageLink,
                        price: this.tool.price,
                    });
                    this.getTools();
                } catch (error) {
                    console.log(error);
                }
            },
            updateTool: async function (tool) {
                try {
                    await axios.put("/api/tools/" + tool._id, tool);
                    this.getTools();
                } catch (error) {
                    console.log(error);
                }

            },
            deleteTool: async function (tool) {
                try {
                    await axios.delete(`/api/tools/${tool._id}`);
                    this.getTools();
                } catch (error) {
                    console.log(error);
                }

            }
        }
    }
</script>
<style scoped>
    @import '/api/style/tools.css';
</style>