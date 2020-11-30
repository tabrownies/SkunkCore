<template>
    <div class="wrapper">
        <h1>
            A Message to the TAs
        </h1>
        <p>
            On this website there are a number of connected parts, I thought it would intrige you to know about them.
        </p>
        <p>
            On the Digital Ocean server runs the front-end vue code, as well as one of the back-end codes. In that first
            back-end code there are two Mongo databases used, one to store the styles of this website and another to
            store those inspirational people. Feel free to add a style for the website.
        </p>
        <p>
            On a Raspberry Pi (a small Linux based single board computer) runs another server. This (if I finish it)
            provides two functions
        </p>
        <ol class = "numbered-list">
            <li>
                1. It has an interface which controls the default style on the website.
            </li>
            <li>
                2. It has a big red button, which if pressed sets the <em>armenian</em> variable to false, denoting that I've
                forgotten Armenian, and the line on the about page that says I'm bilingual disapears.
            </li>
        </ol>
        <p>
            I hope you enjoy looking around!
        </p>
    </div>
</template>
<script>
    export default {
        name: "Ta"
    }
</script>
<style scoped>
    h1{
        padding:20px;
        font-size: 50px;
        color: var(--header);
        text-align: center;
    }
    p,
    li{
        font-size:25px;
        color: var(--text);
        padding: 10px 30px;
        list-style-type: disc;
    }
    
</style>