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
    <section class="preview--section">
      <PreviewShow/>
    </section>
  </div>
</template>

<script>
import NewHireForm from '@/components/NewHireForm.vue'
import NewHiresList from '@/components/NewHiresList.vue'
import IconButton from '@/components/IconButton.vue'
import PreviewShow from '@/components/PreviewShow.vue'

export default {
  name: 'app',

  components: {
    IconButton,
    NewHireForm,
    NewHiresList,
    PreviewShow
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
  font-family: 'Avenir',Helvetca, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: grid;
  grid-template:  "list preview" 1fr
                  "form preview" 320px
                  / 400px minmax(700px, 1fr);
  font-family: 'Open Sans', sans-serif;
  height: 100vh;
  /* overflow: hidden; */
}

.new-hires-list--section{
  grid-area: list
}
.new-hire-form--section{
  grid-area: form
}
.preview--section{
  grid-area: preview
}

.smallcaps {
  font-size: 10px;
  font-variant: small-caps;
  color: #666;
}
</style>
