<template>
  <div id="app">
    <NewhireFormSection/>
  </div>
</template>

<script>
import NewhireFormSection from '@/components/NewhireFormSection.vue'
import IconButton from '@/components/IconButton.vue'

export default {
  name: 'app',

  components: {
    IconButton,
    NewhireFormSection
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}

html {
  overflow: hidden;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  display: grid;
  grid-template-columns: 400px minmax(700px, 1fr);
  grid-template-rows: 1fr 320px;
  font-family: 'Open Sans', sans-serif;
  height: 100vh;
  overflow: hidden;
}
</style>
