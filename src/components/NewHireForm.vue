<template>
  <div class="wrapper">
    <form class="new-hire-form smallcaps" v-on:submit.prevent="$emit('addNewHire', newHire); reset()">
      <div class="input">
        <label for="input-first-name">
          first name
        </label>
        <input id="input-first-name" type="text" v-model="newHire.firstName">
      </div>
      <div class="input">
        <label for="input-last-name">
          last name
        </label>
        <input id="input-last-name" type="text" v-model="newHire.lastName">
      </div>
      <div class="input">
        <label for="input-preferred-name">
          preferred name
        </label>
        <input id="input-preferred-name" type="text" v-model="newHire.preferredName">
      </div>
      <div class="input">
        <label for="input-job-title">
          job title
        </label>
        <input id="input-job-title" type="text" v-model="newHire.title">
      </div>
      <div class="input">
        <label for="input-department-name">
          department
        </label>
        <input id="input-department-name" type="text" v-model="newHire.department">
      </div>
      <div class="input">
        <label for="input-supervisor-name">
          supervisor
        </label>
        <input id="input-supervisor-name" type="text" v-model="newHire.supervisor">
      </div>
      <div class="input input-description-container">
        <label for="input-description">
          description
        </label>
        <textarea rows="6" class="input-description" v-model="newHire.description"></textarea>
      </div>
      <div class="input input-is-returning-container">
        <label for="input-is-returning">
          returning associate
        </label>
        <input class="input-is-returning" type="checkbox" v-model="newHire.isReturning">
      </div>
      <icon-button
        name="add"
        id="input-button"
      />
    </form>
  </div>
</template>

<script>
import IconButton from '@/components/IconButton.vue'

export default {
  components: {
    IconButton
  },

  data () {
    return {
      NEW_HIRE_TEMPLATE: {
        firstName: '',
        lastName: '',
        preferredName: '',
        title: '',
        department: '',
        supervisor: '',
        description: '',
        isReturning: false,
        isExpanded: false
      },
      newHire: {
        ...this.NEW_HIRE_TEMPLATE
      }
    }
  },
  methods: {
    reset () {
      this.newHire = { ...this.NEW_HIRE_TEMPLATE }
    }
  }
}
</script>

<style scoped>
.wrapper{
  height: 100%;
}
.new-hire-form {
  width: 100%;
  height: 100%;
  border: 1px solid #ccc;
  box-sizing: border-box;
  padding: 25px;
  position: relative;
  display: grid;
  grid-gap: 15px 10px;
  grid-template-rows: auto auto 1fr auto;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: white;
  z-index: 2;
}
.input-is-returning-container {
  grid-column: 1 / 4;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.input-is-returning-container>input {
  width: 14px;
  margin-left:1em;
}

input,
textarea{
  width: 100%;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #1d44d4;
  font-family: inherit;
}

.input-description-container {
  grid-column: 1/4;
  width: 100%;
}

.input-description {
  width: 100%;
}

#input-button {
  position: absolute;
  width: 40px;
  height: 40px;
  right: -20px;
  top: -20px;
}
</style>
