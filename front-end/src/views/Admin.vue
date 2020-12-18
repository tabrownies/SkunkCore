<template>
    <div class="wrapper">
        <AdminOptions v-if="admin"></AdminOptions>
        <AdminLoginPopup v-else></AdminLoginPopup>
    </div>
</template>
<script>
    //import axios from 'axios';
    import AdminOptions from '../components/AdminOptions'
    import AdminLoginPopup from '../components/AdminLoginPopup'
    export default {
        name: "Admin",
        components: {
            AdminLoginPopup,
            AdminOptions
        },
        /*Moved to App.vue
        async created() {
            try{
                let responce = await axios.get('/api/admin');
                this.$root.$data.admin = responce.data.admin;
            }catch(error){
                console.log(error);
                this.$root.$data.admin = null;
            }
        },*/
        computed: {
            admin() {
                return this.$root.$data.admin;
            }
        }
    }
</script>
<style scoped>

</style>