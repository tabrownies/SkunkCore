<template>
    <div class="wrapper">
        <div class="title-wrapper">
            <h2 class="title">
                {{title}}
            </h2>
        </div>
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
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    .wrapper {
        width: 600px;
        
        
    }
    .title-wrapper:hover{
        text-decoration: none !important;
    }
</style>