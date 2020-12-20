<template>
  <div id="app">
    <header>
      <router-link class="header" to="/">
        <img id="logo" src="/api/logo">
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
            <li class="nav-item">
              <router-link class="nav-link" to="/resources">Resources</router-link>
            </li>
            <!--<li class="nav-item">
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
      <router-link to="/graditude" class="footer-link">
        Graditude Journal
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
    created: async function () {
      this.stylePage();
      try {
        let responce = await axios.get('/api/admin');
        this.$root.$data.admin = responce.data.admin;
      } catch (error) {
        console.log(error);
        this.$root.$data.admin = null;
      }
    },
    methods: {
      stylePage: async function () {
        let style = document.getElementsByTagName('*')[0].style;
        try {
          let responce = await axios.get('/api/color-scheme');
          let data = responce.data;
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