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
      <PreviewShow
        :newHires=newHires
      />
    </section>
    <button class="export--button smallcaps" @click="savePreviewOut">
      save
    </button>
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
      this.saveLocal()
    },
    updateNewHireData ({ data: newHireData, key: index }) {
      this.newHires.splice(index, 1, { ...newHireData })
      this.saveLocal()
    },
    removeNewHire (index) {
      this.newHires.splice(index, 1)
      this.saveLocal()
    },
    savePreviewOut () {
      const data = document.getElementsByClassName('preview--section')[0].innerHTML
      const formattedData = `<html xmlns="http://www.w3.org/1999/xhtml">
                              <head>
                                <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
                                <title></title>
                              </head>
                              <body style="margin: 0; padding: 0; width: 100% !important;">
                                ${data}
                              </body>
                            </html>`
      this.saveFile(formattedData, 'newhireannouncement', 'html')
    },
    saveFile (data, filename, type) {
      let file = new Blob([data], { type: type })
      if (window.navigator.msSaveOrOpenBlob) { // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename)
      } else { // Others
        let a = document.createElement('a')
        let url = URL.createObjectURL(file)
        a.href = url
        a.download = filename
        document.body.appendChild(a)
        a.click()
        setTimeout(function () {
          document.body.removeChild(a)
          window.URL.revokeObjectURL(url)
        }, 0)
      }
    },
    saveLocal () {
      let parsed = JSON.stringify(this.newHires)
      localStorage.setItem('newHires', parsed)
    }
    // removeAssociate (x) {
    //   this.associates.splice(x, 1);
    //   this.saveAssociates();
    // },
    // saveAssociates() {
    //   let parsed = JSON.stringify(this.associates)
    //   localStorage.setItem('associates', parsed);
    // }
  },
  mounted () {
    if (localStorage.getItem('newHires')) {
      try {
        this.newHires = JSON.parse(localStorage.getItem('newHires'))
      } catch (e) {
        localStorage.removeItem('newHires')
      }
    }
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
  max-height: 100vh;
  max-width: 100vw;
  overflow: hidden;
  font-size: 14px;
}

textarea {
  font-family: 'Open Sans', Arial, sans-serif;
  font-size: 1rem;
}

#app {
  font-family: 'Open Sans', Helvetca, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: grid;
  grid-template:  "list preview" 2fr
                  "form preview" minmax(320px,1fr)
                  / minmax(400px, 1fr) minmax(700px, 3fr);
  font-family: 'Open Sans', sans-serif;
  height: 100vh;
  /* overflow: hidden; */
}

.new-hires-list--section{
  grid-area: list;
  overflow-x: hidden;
  overflow-y: scroll;
}
.new-hire-form--section{
  grid-area: form;
}
.preview--section{
  grid-area: preview;
  overflow-y: scroll;
}
.export--button{
  position: absolute;
  top: 1em;
  right: 2em;
  width: 4em;
  height: 2em;
}

.smallcaps {
  font-size: 10px;
  font-variant: small-caps;
  color: #666;
}
</style>
