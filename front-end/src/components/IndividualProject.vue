<template>
    <div v-html="rawHTML">
        
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'IndividualProject',
        created: async function () {
            let responce = await axios.get('/api/projects/pages');
            this.rawHTML = responce.data;
        },
        data: function (){
            return {
                rawHTML:'<p>hii</p>',
                
            }
        }
    }
</script>