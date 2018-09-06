<template>
  <div v-if="type==='file'">
    <input class="iconBtn" type="file" accept="html" id="file-input" v-on:change="uploadFile()"/>
    <div v-html="svgData[name]"></div>
  </div>
  <button v-else class="iconBtn" @click="$emit(name)" v-html="svgData[name]"/>
</template>

<script>
export default {
  props: {
    name: {
      required: true,
      type: String
    },
    type: {
      type: String
    }
  },
  data () {
    return {
      svgData: {
        'edit': `<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"><path fill="#666" d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/><path d="M0 0h24v24H0z" fill="none"/></svg>`,
        'update': `<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"/><path fill="#4caf50" d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>`,
        'add': `<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"><path d="M8 8h8v8H8z" fill="#fff"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" fill="#1d44d4"/></svg>`,
        'cancel': `<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"><path fill="#ff9800" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/><path d="M0 0h24v24H0z" fill="none"/></svg>`,
        'remove': `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve"><path fill="none" d="M0,0h24v24H0V0z"/><path fill="#f44336" d="M7,11v2h10v-2H7z M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8   s3.59-8,8-8s8,3.59,8,8S16.41,20,12,20z"/></svg>`,
        'io': `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">path fill="none" d="M0,0h24v24H0V0z"/><path d="M9,3L5,6.99h3V14h2V6.99h3L9,3z M16,17.01V10h-2v7.01h-3L15,21l4-3.99H16z"/</svg>`,
        'save': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"/></svg>`
      }
    }
  }
  // methods: {
  //   uploadFile (files) {
  //     const fileInput = app.$el.document.getElementById('file-input').files
  //     this.$emit(this.name, fileInput)
  //   }
  // }
}
</script>

<style>
  .iconBtn {
    border: none;
    background: none;
  }
  .iconBtn > svg {
    height: 100%;
    width: 100%;
  }
  input.iconBtn {
    height: 35px;
    opacity: 0;
    z-index: 2;
    transform: translateX(-25%);
  }
  input.iconBtn + div {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
