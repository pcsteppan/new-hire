<template>
  <div id="app">
    <section class="new-hires-list--section">
      <NewHiresList
        :newHires = newHires
        @update = "updateNewHireData($event)"
        @remove = "removeNewHire($event)"
      />
    </section>
    <section class="new-hire-form--section">
      <NewHireForm
        v-on:addNewHire = "addNewHire($event)"
      />
    </section>
  </div>
</template>

<script>
import NewHireForm from '@/components/NewHireForm.vue'
import NewHiresList from '@/components/NewHiresList.vue'
import IconButton from '@/components/IconButton.vue'

export default {
  name: 'app',

  components: {
    IconButton,
    NewHireForm,
    NewHiresList
  },
  data: function () {
    return {
      newHires: [],
      nextNewHireId: 1
    }
  },
  methods: {
    addNewHire (newHireData) {
      this.newHires.push({
        ...newHireData,
        id: this.nextNewHireId++,
        isExpanded: false
      })
      // this.saveAssociates()
    },
    updateNewHireData ({ data: newHireData, key: index }) {
      this.newHires.splice(index, 1, { ...newHireData })
    },
    removeNewHire (index) {
      this.newHires.splice(index, 1)
    }
    // removeAssociate (x) {
    //   this.associates.splice(x, 1);
    //   this.saveAssociates();
    // },
    // saveAssociates() {
    //   let parsed = JSON.stringify(this.associates)
    //   localStorage.setItem('associates', parsed);
    // }
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
  max-height: 100vh;
  max-width: 100vw;
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
  /* overflow: hidden; */
}

.new-hires-list--section{
  grid-column: 1;
  grid-row: 1;
  max-height: 100%;
}
.new-hire-form--section{
  grid-column: 1;
  grid-row: 2;
}

.smallcaps {
  font-size: 10px;
  font-variant: small-caps;
  color: #666;
}
</style>
