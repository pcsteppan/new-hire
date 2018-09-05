<template>
  <form id="newhire-form" v-on:submit.prevent="$emit('addAssociate', associate)" class="smallcaps">
    <div class="input">
      <label for="input-first-name">
        first name
      </label>
      <input id="input-first-name" type="text" v-model="associate.firstName">
    </div>
    <div class="input">
      <label for="input-last-name">
        last name
      </label>
      <input id="input-last-name" type="text" v-model="associate.lastName">
    </div>
    <div class="input">
      <label for="input-preferred-name">
        preferred name
      </label>
      <input id="input-preferred-name" type="text" v-model="associate.preferredName">
    </div>
    <div class="input">
      <label for="input-job-title">
        job title
      </label>
      <input id="input-job-title" type="text" v-model="associate.title">
    </div>
    <div class="input">
      <label for="input-department-name">
        department
      </label>
      <input id="input-department-name" type="text" v-model="associate.department">
    </div>
    <div class="input">
      <label for="input-supervisor-name">
        supervisor
      </label>
      <input id="input-supervisor-name" type="text" v-model="associate.supervisor">
    </div>
    <div class="input input-description-container">
      <label for="input-description">
        description
      </label>
      <textarea rows="4" class="input-description" v-model="associate.description"></textarea>
    </div>
    <div class="input input-is-returning-container">
      <label for="input-is-returning">
        returning associate
      </label>
      <input class="input-is-returning" type="checkbox" v-model="associate.isReturning">
    </div>
    <icon-button
      name="add"
      id="input-button"
    />
  </form>
</template>

<script>
import IconButton from '@/components/IconButton.vue'

export default {
  components: {
    IconButton
  },

  data () {
    return {
      ASSOCIATE_TEMPLATE: {
        firstName: '',
        lastName: '',
        preferredName: '',
        title: '',
        department: '',
        supervisor: '',
        description: '',
        isReturning: false
      },
      associate: {
        ...this.ASSOCIATE_TEMPLATE
      }
    }
  },
  methods: {
    reset () {
      this.associate = { ...this.ASSOCIATE_TEMPLATE }
    }
  }
}
</script>

<style scoped>
#newhire-form {
  width: 100%;
  height: 100%;
  border: 1px solid #ccc;
  box-sizing: border-box;
  padding: 25px;
  position: relative;
  grid-column: 1;
  grid-row: 2;
  display: grid;
  grid-gap: 20px 10px;
  grid-template-rows: 2fr 2fr 3fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: white;
  z-index: 2;
}
.input-is-returning-container {
  grid-column: 3;
}
.input-is-returning-container>label {
  float: left;
}
.input-is-returning-container>input {
  width: 14px;
  float: right;
}
.input-is-returning {
  float: right;
  width: 16px;
}
.smallcaps {
  font-size: 10px;
  font-variant: small-caps;
  color: #666;
}

input,
textarea{
  width: 110px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #1d44d4;
  font-family: inherit;
  font-size: 12px;
}

.input-description-container {
  grid-column: 1/4;
  width: 350px;
}

.input-description {
  width: 350px;
}

#input-button {
  position: absolute;
  width: 40px;
  height: 40px;
  right: -20px;
  top: -20px;
}
</style>
