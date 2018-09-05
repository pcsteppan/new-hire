<template>
  <div>
    <div class="new-hire-li-nav" :class="{ expanded: newHire.isExpanded }">
      <div class="name">
          <p>{{pNewHire.firstName + '&nbsp;' + pNewHire.lastName}}</p>
        </div>
        <div class="btns">
          <icon-button name="edit" v-if="!newHire.isExpanded" @edit="newHire.isExpanded = true"/>
          <icon-button name="update" v-else @update="update"/>
          <icon-button name="remove" @remove="$emit('remove')"/>
        </div>
      </div>
      <div v-if="newHire.isExpanded" class="new-hire-li-card">
        <input v-model="newHire.firstName">
        <input v-model="newHire.lastName">
        <input v-model="newHire.preferredName">
        <input v-model="newHire.title">
        <input v-model="newHire.department">
        <input v-model="newHire.supervisor">
        <textarea v-model="newHire.description" rows="4" class="input-description"></textarea>
      <div class="input input-is-returning-container">
        <label for="input-is-returning" class="smallcaps">
        returning associate
        </label>
        <input class="input-is-returning" type="checkbox" v-model="newHire.isReturning">
      </div>
    </div>
  </div>
</template>

<script>
import IconButton from '@/components/IconButton'

export default {
  components: {
    IconButton
  },
  props: {
    pNewHire: {
      required: true,
      type: Object
    }
  },
  data: function () {
    return {
      newHire: { ...this.pNewHire }
    }
  },
  methods: {
    remove () {
      console.log('remove')
    },
    update () {
      this.$emit('update', this.newHire)
      this.newHire.isExpanded = false
    }
  }
}
</script>

<style scoped>
.new-hire-li-card {
  box-sizing: border-box;
  width: 400px;
  height: 200px;
  padding: 10px 25px;
  display: grid;
  grid-gap: 10px 10px;
  grid-template-rows: 1fr 2fr 2fr 3fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  border-left: 6px solid #1d44d4;
}

.new-hire-li-nav {
  box-sizing: border-box;
  border-top: 1px solid #ccc;
  padding: 5px 25px;
  height: 30px;
}

.new-hire-li-nav.expanded {
  z-index: 2;
  box-shadow: 0 8px 13px -4px rgba(0, 0, 0, .08);
}

input {
  width: 100%;
}

textarea {
  grid-column: 1/4;
  width: 100%;
}

.new-hire-li-nav>.name {
  float: left;
}

.new-hire-li-nav>.btns {
  height: 30px;
  width: 20%;
  float: right;
  display: flex;
  justify-content: space-around;
  align-items: center;
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
</style>
