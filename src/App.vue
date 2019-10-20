<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/drop-words">Drop words</router-link>
    </div>
    <router-view/>
    <mdb-btn id="page-top-button" tag="a" role="button" outline="primary" href="#app"><mdb-icon icon="angle-double-up" class="mr-2" />Top</mdb-btn>
  </div>
</template>

<script>
import { mdbBtn, mdbIcon } from 'mdbvue';
import { components } from 'aws-amplify-vue'

export default {
  name: 'app',
  components: {
    mdbBtn,
    mdbIcon,
    ...components,
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#page-top-button {
  position: fixed;
  bottom: 0;
  right: 0;
  background-color: #fff !important;
}
</style>
