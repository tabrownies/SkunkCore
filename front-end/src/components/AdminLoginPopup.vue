<template>
    <div class="loginPopupWrapper">
        <form @submit.prevent="login">
            <div>
                <p>Username: </p> <input type="text" placeholder="Username">
            </div>
            <div>
                <p>Password: </p><input type="password" placeholder="Password">
            </div>
            <div>
                <router-link tag="button" to="/">Cancel</router-link>
                <button type="submit">Login</button>
            </div>



        </form>
    </div>

</template>
<script>
    import axios from 'axios';
    export default {
        name: "AdminLoginPopup",
        data: function () {
            return {
                username: '',
                password: '',
                error: '',
            }
        },
        methods:{
            async login(){
                this.error = '';
                if(!this.username||!this.password){
                    return;
                }
                try{
                    let responce = axios.post('/api/admin/login',{
                        username: this.username,
                        password:this.password,
                    });
                    this.$root.$data.admin = responce.data.admin;
                }catch(error){
                    this.error = "Error: " +error.responce.data.message;
                    console.log(this.error);
                    this.$root.$data.admin = null;
                }
            },
        },
    }
</script>
<style scoped>
    @import '/api/style/adminLoginPopup.css';
</style>