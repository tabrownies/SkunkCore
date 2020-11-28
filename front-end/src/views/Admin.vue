<template>
    <div class="wrapper">
        <h1>
            Edit Website
        </h1>
        <div class="options">
            <div class="admin-option">
                <h2>
                    Administration
                </h2>
                <ul>
                    <li>
                        Add a Color Scheme
                    </li>
                    <li>
                        Edit a Color Scheme
                    </li>
                    <li>
                        Delete a Color Scheme
                    </li>
                    <li>
                        Add a Team Member
                    </li>
                    <li>
                        Edit a Team Member
                    </li>
                    <li>
                        Delete a Team Member
                    </li>
                </ul>
            </div>
            <div class="admin-option">
                <h2>
                    Projects
                </h2>
                <ul>
                    <li>
                        Add a Project
                    </li>
                    <li>
                        Edit a Project
                    </li>
                    <li>
                        Delete a Project
                    </li>
                </ul>
            </div>
            <div class="admin-option">
                <h2>
                    About Page
                </h2>
                <ul>
                    <li>
                        Add an Inspirational Person
                    </li>
                    <li>
                        Edit an Inspirational Person
                    </li>
                    <li>
                        Delete an Inspirational Person
                    </li>
                </ul>
            </div>
            <div class="admin-option">
                <h2>
                    Playground
                </h2>
                <ul>
                    <li>
                        Add an Playground Project
                    </li>
                    <li>
                        Edit a Playground Project
                    </li>
                    <li>
                        Migrate Playground Project to a Full Project
                    </li>
                    <li>
                        Delete an Playground Project
                    </li>
                </ul>
            </div>
        </div>

    </div>
</template>
<script>
    export default {
        name: "Admin"
    }
</script>
<style scoped>
    .wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    h1{
        color:var(--text);
        font-size:40px;
        padding:25px;
        padding-bottom:10px;
    }
    .options {
        display: flex;
        justify-content: space-around;
        width:100%;
    }
    .admin-option{
        width:300px;
        margin:10px;
        background-color: var(--accent);
    }
    .admin-option h2{
        width:100%;
        padding:10px;
        font-size:25px;
        text-align: center;
        color:var(--text);
    }
    .admin-option ul{
        list-style: none;
    }
    .admin-option li{
        padding:5px 10px;
        font-size:20px;
        color:var(--text2);
        text-align: center;
    }
</style>