<template>
  <div class="home">
    <ProjectLink class="big-project-link" :title="title" :img="img" :description="description"></ProjectLink>
    <ProjectLink class="big-project-link" :title="title" :img="img" :description="description"></ProjectLink>
    <ProjectLink class="big-project-link" :title="title" :img="img" :description="description"></ProjectLink>
    <ProjectLink class="big-project-link" :title="title" :img="img" :description="description"></ProjectLink>
    <ProjectLink class="big-project-link" :title="title" :img="img" :description="description"></ProjectLink>

  </div>
</template>

<script>
  // @ is an alias to /src
  import ProjectLink from '../components/ProjectLink.vue'
  export default {

    name: 'Home',
    components: {
      ProjectLink,
    },
    data: function () {
      return {
        title: 'New Project',
        img: 'https://images-na.ssl-images-amazon.com/images/I/81ZBYMUy%2B3L._AC_SX569_.jpg',
        description: 'this is a long project description. this is a long project description. this is a long project description. '
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

  .home {
    display:flex;
    flex-wrap: wrap;
    justify-content:space-around;
  }

  .big-project-link,
  .little-project-link {}

  .big-project-link {
    width:30%;
    height:450px;
    margin:20px;
    border:5px solid var(--accent);
  }

  .little-project-link {
    width: 30%;
    height: 500px;
  }
</style>