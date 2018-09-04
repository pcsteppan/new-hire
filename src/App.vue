<template>
  <div id="app">
    <icon-button name="edit"/>
    <icon-button name="update"/>
    <icon-button name="remove"/>
    <icon-button name="add"/>
  </div>
</template>

<script>
import IconButton from '@/components/IconButton.vue'

export default {
  name: 'app',

  components: {
    IconButton
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
