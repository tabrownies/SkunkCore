<template>
    <div v-html="rawHTML">
        
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'IndividualProject',
        created: async function () {
            let responce = await axios.get(`/api/projects/pages/${this.linkNameWithIndex}`);
            this.rawHTML = responce.data;
        },
        data: function (){
            return {
                linkNameWithIndex: this.$route.params.linkNameWithIndex,
                rawHTML:'',
                
            }
        }
    }
</script>
<style scoped>
 @import '/api/styles/style/individualProject.css';
</style>