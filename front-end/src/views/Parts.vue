<template>
    <div class="partsWrapper">
        <form>
            <h2>
                New Part:
            </h2>
            <input type="text" v-model="part.name" placeholder="Name">
            <input type="text" v-model="part.link" placeholder="Link">
            <input type="text" v-model="part.imageLink" placeholder="Image">
            <button @click.prevent="addPart">Add</button>
        </form>
        <div class='partSearch'>
            <p>
                Find Part:
            </p>
            <input v-model='searchbarText' placeholder="Search">
        </div>

        <ul>
            <li class="partList" v-for="part in searchedParts" :key="part.name">
                <img :src="part.imageLink">
                <div>
                    <input type="text" v-model="part.name">
                    <input type="text" v-model="part.link">
                    <input type="text" v-model="part.imageLink">
                    <input type="number" v-model="part.price">
                </div>

                <div>
                    <button @click.prevent="updatePart(part)">Update</button>
                    <button @click.prevent="deletePart(part)">Delete</button>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
    import axios from 'axios';
    export default {
        name: "Parts",
        data: function () {
            return {
                part: {
                    name: '',
                    link: '',
                    imageLink: '',
                    ImagePath: '',
                    price: '',
                },
                parts: Array,
                searchbarText: '',
            }
        },
        created: function () {
            this.getParts();
        },
        computed:{
            searchedParts: function(){
                let parts = [];
                for(let i = 0; i<this.parts.length; ++i){
                    let match = true;
                    for(let j = 0; j<this.searchbarText.length; ++j){
                        if(this.searchbarText[j].toLowerCase() != this.parts[i].name[j].toLowerCase()){
                            match = false;
                        }
                    }
                    if(match){
                        parts.push(this.parts[i]);
                    }
                }
                return parts;
            }
        },
        methods: {
            getParts: async function () {
                try {
                    let responce = await axios.get("/api/parts");
                    console.log(responce);
                    this.parts = responce.data;
                } catch (error) {
                    console.log(error);
                    return [];
                }
            },
            addPart: async function () {
                try {
                    await axios.post("api/parts", {
                        name: this.part.name,
                        link: this.part.link,
                        imageLink: this.part.imageLink,
                        price: this.part.price,
                    });
                    this.getParts();
                } catch (error) {
                    console.log(error);
                }
            },
            updatePart: async function (part) {
                try {
                    await axios.put("/api/parts/" + part._id, part);
                    this.getParts();
                } catch (error) {
                    console.log(error);
                }

            },
            deletePart: async function (part) {
                try {
                    await axios.delete(`/api/parts/${part._id}`);
                    this.getParts();
                } catch (error) {
                    console.log(error);
                }

            }
        }
    }
</script>
<style scoped>
    @import '/api/style/parts.css';
</style>