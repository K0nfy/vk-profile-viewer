<template>
<div>
  <VKsearchById :userId="this.$store.state.userId">
    <div slot="input-slot" style="display: none"></div>
  </VKsearchById>
</div>
</template>

<script>
  // @ is an alias to /src
  import VKsearchById from '@/components/VKsearchById.vue'

  export default {
    name: 'AboutUser',
    components: {
      VKsearchById
    }
  }
</script>

<style scoped lang="sass">
  
</style>
