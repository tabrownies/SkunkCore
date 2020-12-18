<template>
  <div id="app">
    <header>
      <router-link class="header" to="/">
        <div id="logo">Skunkcore</div>
      </router-link>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home <span class="sr-only">(current)</span></router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/projects">Projects</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">About</router-link>
            </li>
            <!--<li class="nav-item">
              <router-link class="nav-link" to="/resources">Resources</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/shop">Shop</router-link>
            </li>-->
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
        Admin Portal
      </router-link>
      <router-link to="#" class="footer-link">
        Contact Us
      </router-link>
    </footer>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    created: function () {
      this.stylePage();
    },
    methods: {
      stylePage: async function () {
        let style = document.getElementsByTagName('*')[0].style;
        try {
          let responce = await axios.get('/api/color-scheme');
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
  @import '/api/style/style.css';
</style>
<style scoped>
  @import '/api/style/app.css';
</style>
<!--<style>
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
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
    font-size: 80px;
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
    font-size:30px;
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
    font-size: 15px;
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
</style>-->