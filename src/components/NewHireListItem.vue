<template>
  <div>
    <div class="new-hire-li-nav" :class="{ expanded: newHire.isExpanded }">
      <div class="name">
        <p>{{pNewHire.firstName + '&nbsp;' + pNewHire.lastName}}</p>
      </div>
      <div class="btns">
        <icon-button name="edit" v-if="!newHire.isExpanded" @edit="expand"/>
        <icon-button name="update" v-else @update="update"/>
        <icon-button name="cancel" v-if="newHire.isExpanded" @cancel="cancelEdit"/>
        <icon-button name="remove" @remove="remove"/>
      </div>
    </div>
    <form v-if="newHire.isExpanded" class="new-hire-li-card" v-on:submit.prevent="update">
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
      <input style="display:none;" type="submit">
    </form>
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
      if (confirm(`Are you sure you'd like to remove ${this.pNewHire.firstName} ${this.pNewHire.lastName}?`)) {
        this.$emit('remove')
      }
    },
    update () {
      this.newHire.isExpanded = false
      this.$emit('update', this.newHire) // This handles the local save
    },
    cancelEdit () {
      this.newHire = { ...this.pNewHire }
      this.$emit('update', this.newHire)
      // this.newHire.isExpanded = false
      // this.saveLocally()
    },
    expand () {
      this.newHire.isExpanded = true
      this.$emit('update', this.newHire)
      // this.saveLocally()
    },
    saveLocally () {
      this.$emit('saveLocally')
    }
  }
}
</script>

<style scoped>
.new-hire-li-card {
  box-sizing: border-box;
  width: 100%;
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
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  font-size: 1rem;
  height: 3rem;
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
  width: auto;
  float: right;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.input-is-returning-container {
  grid-column: 1 / 4;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.input-is-returning-container>input {
  margin-left: 1em;
  width: 14px;
}
</style>
