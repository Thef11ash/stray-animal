<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/NavigationBar.vue';

export default {
  components: {
    Navbar,
  },
};
</script>

<style>
/* App component styles here */
</style>
