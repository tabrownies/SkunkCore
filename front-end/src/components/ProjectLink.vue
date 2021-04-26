<template>
    <div class="project-link-wrapper">
        <div class="title-wrapper">
            <h2 class="title">
                {{title}}
            </h2>
            
        </div>
        <img class="project-image" :src="img">
        <p class="description">
            {{description}}
        </p>
    </div>
</template>
<script>
    export default {
        name: "ProjectLink",
        props: {
            img: String,
            title: String,
            description: String,
            to: String,
        },
        created() {
            //this.shortenDescription();
        },
        methods: {
            shortenDescription: function (length = 20) {
                console.log(length);
                //console.log(this.description.map((item, index)=>index<length));
                //this.description = this.description.map((item, index)=>index<length);
            }
        }
    }
</script>
<style scoped>/*this needs to be fixed*/
    @import '/api/styles/style/projectLink.css';
     
</style>