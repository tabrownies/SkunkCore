<template>
    <div v-html="rawHTML">
        
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'IndividualProject',
        created: async function () {
            let responce = await axios.get(`/api/projects/pages/${this.id}`);
            this.rawHTML = responce.data;
        },
        data: function (){
            return {
                id: this.$route.params.id,
                rawHTML:'',
                
            }
        }
    }
</script>