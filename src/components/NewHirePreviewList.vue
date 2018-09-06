<template>
  <tr class="wrapper">
    <NewHirePreviewListItem
      v-for="(newHire, key) in newHires"
      :newHire=newHire
      :key=key
      :isFirst="(key===0)"
    />
  </tr>
</template>

<script>
import NewHirePreviewListItem from '@/components/NewHirePreviewListItem'

export default {
  components: {
    NewHirePreviewListItem
  },
  props: {
    newHires: {
      required: true,
      type: Array
    }
  }
}
</script>

<style>

</style>
