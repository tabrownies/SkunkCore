<template>
    <div class="wrapper">
        <div class="title-wrapper">
            <h2 class="title">
                {{title}}
            </h2>
        </div>

        <img :src="img">
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
<style scoped>
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    .wrapper {
        width: 100%;
        height: 100%;
        position: relative;
    }

    img {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;
    }

    .title-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        background-image: linear-gradient(rgb(20, 20, 20, .5), rgb(255, 255, 255, .5));
    }

    h2 {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        display: flex;
        justify-content: left;
        align-items: center;
        padding: 20px;
        padding-left: 60px;
        background-image: linear-gradient(rgb(20, 20, 20, .5), rgb(255, 255, 255, .5));
        font-size: 50px;
        z-index: 1;

    }

    p {
        position: absolute;
        bottom: 0;
        left: 0;
        padding:10px;
        background-image: linear-gradient(rgb(70, 70, 70,.5),rgb(151, 151, 151,.5));
        color:rgb(20, 24, 92);
        
        font-size: 30px;
        display: none;
    }

    
    .wrapper:hover {}

    .wrapper:hover .title-wrapper {
        background-image: linear-gradient(rgb(150, 150, 150, .5), rgb(250, 250, 250, .5));
        z-index: 1;
        height: 100%;
    }

    .wrapper:hover h2 {
        background-image: linear-gradient(rgb(150, 150, 150, .5), rgb(250, 250, 250, .5));
    }

    .wrapper:hover img {}

    .wrapper:hover p {
        z-index:2;
        display:initial;
    }
</style>