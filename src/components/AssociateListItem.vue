<template>
  <div>
    <div class="associate-li-nav" :class="{ expanded: associate.isExpanded }">
    <div class="name">
        <p>{{associate.firstname + '&nbsp;' + associate.lastname}}</p>
      </div>
      <div class="btns">
        <icon-button name="edit" v-if="!associate.isExpanded" v-on:click="associate.isExpanded = true" class="btn"/>
        <icon-button name="update" v-else v-on:click="update" class="btn"/>
        <icon-button name="remove" v-on:click="remove" class="btn">
      </div>
    </div>
    <div v-if="associate.isExpanded" class="associate-li-card">
      <input v-model="associate.firstname">
      <input v-model="associate.lastname">
      <input v-model="associate.preferredname">
      <input v-model="associate.title">
      <input v-model="associate.department">
      <input v-model="associate.supervisor">
      <div class="input-description-container">
        <textarea v-model="associate.description" rows="4" class="input-description"></textarea>
      </div>
      <div class="input input-is-returning-container">
        <label for="input-is-returning" class="smallcaps">
        returning associate
        </label>
        <input class="input-is-returning" type="checkbox" v-model="associate.isReturning">
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
    associate: {
      required: true,
      type: Object
    }
  }
}
</script>

<style>

</style>
