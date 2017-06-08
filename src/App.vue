<template>
  <div id="main-content">
    <div style="float: left; width: 20%;">
      <img src="./assets/logo.png" style="height: 100px;" />
      <h2 style="clear: both;">Demo Links</h2>
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/GettingStarted">Getting Started</router-link>
        </li>
        <li>
          <router-link to="/Templates">Templates</router-link>
        </li>
        <li>
          <router-link to="/Routing">Routing</router-link>
        </li>
      </ul>
      <h2 style="clear: both;">Essential Links</h2>
      <ul>
        <li>
          <a href="https://vuejs.org" target="_blank">Core Docs</a>
        </li>
        <li>
          <a href="https://forum.vuejs.org" target="_blank">Forum</a>
        </li>
        <li>
          <a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a>
        </li>
        <li>
          <a href="https://twitter.com/vuejs" target="_blank">Twitter</a>
        </li>
      </ul>
      <h2>Ecosystem</h2>
      <ul>
        <li>
          <a href="http://router.vuejs.org/" target="_blank">vue-router</a>
        </li>
        <li>
          <a href="http://vuex.vuejs.org/" target="_blank">vuex</a>
        </li>
        <li>
          <a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a>
        </li>
        <li>
          <a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a>
        </li>
      </ul>
    </div>
    <div style="float: right; width: 80%;">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  export default {
  name: 'app'
  }
</script>
<style>
  #main-content {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 5px;
  }
  li {
  list-style-type: none;
  }
  ul {
  padding: 0;
  }
</style>
