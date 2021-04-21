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
        computed: {
            admin() {
                return this.$root.$data.admin;
            }
        }
    }
</script>
