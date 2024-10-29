<script>
export default {
  name: "App",
};
</script>

<template>
  <div id="app">
    <router-view /> <!-- This will render HomeView or other views based on the route -->
  </div>
</template>

<style>
/* Reset some basic styles */
html, body, #app {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: Arial, sans-serif;
  background-color: #1c1c1c; /* Ensure background color matches HomeView */
  color: #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Ensure the router-view content is centered in App.vue */
#app {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh; /* Full viewport height */
}
</style>
