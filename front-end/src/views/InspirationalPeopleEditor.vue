<template>
    <div class="wrapper">
        <ul>
            <li @click.prevent="selectPerson(person)" v-for="person in inspiration" :key="person.name">
                <h1>
                    {{person.name}}
                </h1>
                <img :src="person.image">
            </li>
        </ul>
        <form>
            <div class="name-value-pair">
                <h3>Name:</h3>
                <input type="text" v-model="person.name" placeholder="Name">
            </div>
            <div class="name-value-pair">
                <h3>Image:</h3>
                <input type="text" v-model="person.image" placeholder="Image Link">
            </div>
            <div class="name-value-pair">
                <h3>Link:</h3>
                <input type="text" v-model="person.link" placeholder="Link">
            </div>
            <button @click.prevent="addPerson">
                Add
            </button>
            <button @click.prevent="updatePerson">
                Edit
            </button>
            <button @click.prevent="deletePerson">
                Delete
            </button>
        </form>
    </div>
</template>
<script>
    import axios from 'axios'
    export default {
        name: 'InspirationalPeopleEditor',
        data: function () {
            return {
                inspiration: Array,
                person: {
                    id: '',
                    name: '',
                    image: '',
                    link: '',
                }
            }
        },
        created: function () {
            this.getInspiration();
        },
        methods: {
            getInspiration: async function () {
                try {
                    let responce = await axios.get('/api/inspiration');
                    console.log(responce.data);
                    this.inspiration = responce.data;
                    this.inspiration = this.inspiration.map((item) => {
                        if (item.name === '') {
                            item.name = 'Not Entered';
                        }
                        return item;
                    });
                } catch (error) {
                    console.log(error);
                }

            },
            addPerson: async function () {
                try {
                    await axios.post('/api/inspiration', {
                        name: this.person.name,
                        image: this.person.image,
                        link: this.person.link,
                    })
                } catch (error) {
                    console.log(error);
                }
                this.getInspiration();
            },
            updatePerson: async function () {
                try {
                    await axios.put(`/api/inspiration/${this.person.id}`, {
                        name: this.person.name,
                        image: this.person.image,
                        link: this.person.link,
                    })
                } catch (error) {
                    console.log(error);
                }
                this.getInspiration();
            },
            deletePerson: async function () {
                try {
                    await axios.delete(`/api/inspiration/${this.person.id}`);
                } catch (error) {
                    console.log(error);
                }
                this.getInspiration();
            },
            selectPerson(person) {
                this.person.id = person._id;
                this.person.name = person.name;
                this.person.image = person.image;
                this.person.link = person.link;
            }
        }
    }
</script>
<style scoped>
    ul {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        margin: 20px;
    }

    li {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    form {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 15px;
    }

    .name-value-pair {
        display: flex;
        flex-wrap: wrap;
        width: 300px;
        justify-content: space-between;
    }

    input {
        width: 200px;
    }

    button {}
</style>