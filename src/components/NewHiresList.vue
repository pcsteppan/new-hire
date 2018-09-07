<template>
  <div class="wrapper">
    <!-- <transition-group name="slide" tag="div"> -->
      <NewHireListItem
        v-for="(newHire, key) in newHires"
        :key=key
        :pNewHire=newHire
        @saveLocally="$emit('saveLocally')"
        @update="$emit('update', {data:$event, key})"
        @remove="$emit('remove', key)"
      />
    <!-- </transition-group> -->
  </div>
</template>

<script>
import NewHireListItem from '@/components/NewHireListItem.vue'

export default {
  components: {
    NewHireListItem
  },
  props: {
    newHires: {
      required: true,
      type: Array
    }
  }
}
</script>

<style scoped>
  .wrapper{
    height: 100%;
  }
</style>
