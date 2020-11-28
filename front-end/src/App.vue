<template>
  <div id="app">
    <header>
      <router-link class="header" to="#">
        <div id="logo">Skunkcore</div>
      </router-link>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <router-link class="nav-link" to="/">Home <span class="sr-only">(current)</span></router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/projects">Projects</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/shop">Shop</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">About</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/donate">Donate</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/playground">Playground</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </header>

    <router-view />
    <footer>
      <router-link to="/admin" class="footer-link">
        Admin
      </router-link>
      <a href="#" class="footer-link">
        Github Repository
      </a>
      <router-link to="ta" class="footer-link">
        For the TAs
      </router-link>
    </footer>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    created:function(){
      this.stylePage();
    },
    methods: {
      stylePage: async function() {
        let style = document.getElementsByTagName('*')[0].style;
        try {
          let responce = await axios.get('/color-scheme');
          let data = responce.data;
          console.log(data);
          await style.setProperty('--logo', data.logo);
          await style.setProperty('--logo-hover', data.logoHover);
          await style.setProperty('--base', data.base);
          await style.setProperty('--accent', data.accent);
          await style.setProperty('--accent2', data.accent2);
          await style.setProperty('--nav-link', data.navLink);
          await style.setProperty('--nav-link-hover', data.navLinkHover);
          await style.setProperty('--nav-link-active', data.navLinkActive);
          await style.setProperty('--link', data.navLink);
          await style.setProperty('--link-hover', data.linkHover);
          await style.setProperty('--link-click', data.linkClick);
          await style.setProperty('--header', data.header);
          await style.setProperty('--header2', data.header2);
          await style.setProperty('--text', data.text);
          await style.setProperty('--text2', data.text2);
          
        } catch (error) {
          console.log(error);
        }
      }
    }
  }
</script>
<style>
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    /*light red theme*/
    --light-red-base: rgb(242, 242, 242);
    --light-red-accent: rgb(217, 217, 217);
    --light-red-link: rgb(179, 15, 15);
    /*light green theme*/
    --light-green-base: rgb(242, 242, 242);
    --light-green-accent: rgb(217, 217, 217);
    --light-green-link: rgb(15, 179, 15);
    /*light blue theme*/
    --light-blue-base: rgb(242, 242, 242);
    --light-blue-accent: rgb(217, 217, 217);
    --light-blue-link: rgb(15, 15, 179);
    /*dark red theme*/
    --dark-red-base: rgb(50, 50, 50);
    --dark-red-accent: rgb(40, 40, 40);
    --dark-red-link: rgb(51, 0, 0);
    /*dark green theme*/
    --dark-green-base: rgb(50, 50, 50);
    --dark-green-accent: rgb(40, 40, 40);
    --dark-green-link: rgb(0, 51, 0);
    /*dark blue theme*/
    --dark-blue-base: rgb(50, 50, 50);
    --dark-blue-accent: rgb(40, 40, 40);
    --dark-blue-link: rgb(5, 0, 51);
    /*base theme
    --base: var(--dark-blue-base);
    --accent: var(--dark-blue-accent);
    --link: var(--dark-blue-link)
    */

    
  }

  body {
    background-color: var(--base);
  }
</style>
<style scoped>
  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

  }

  .header {
    padding: 20px;
    text-decoration: none;
  }

  nav {
    width: 100%;
    overflow: hidden;
    background-color: inherit !important;
    border-top: 8px solid var(--accent);
    border-bottom: 8px solid var(--accent);

  }

  #logo {
    color: var(--logo);
    font-size: 100px;
    text-align: center;
  }

  #logo:hover {
    color: var(--logo-hover);
    text-decoration: none;
  }

  .nav-item {
    font-size: 40px !important;
  }

  .nav-link {
    color: var(--nav-link) !important;
  }

  .active {
    text-decoration: underline;
  }

  .nav-link:hover {
    color: var(--nav-link-hover) !important;
  }

  footer {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    background-color: var(--accent);
  }

  .footer-link {
    font-size: 35px;
    padding: 15px 10px;
    text-align: center;
    color: var(--nav-link);
    text-decoration: none;
  }

  .footer-link:hover {
    color: var(--nav-link-hover);
    text-decoration: underline;
  }

  @media only screen and (min-width: 992px) {
    .collapse {
      display: flex;
      justify-content: center;
    }

    .navbar-nav {
      width: 100% !important;
      display: flex;
      justify-content: space-around !important;
    }
  }

  @media only screen and (max-width:490px) {
    #logo {
      font-size: 60px;
    }
  }
</style>