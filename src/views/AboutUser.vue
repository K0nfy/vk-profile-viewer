<template>
<div>
  <VKsearchById :user-id="this.$store.state.currentUserId">
    <div slot="input-slot" style="display: none"></div>
  </VKsearchById>
  <VKparsedUserInfo v-if="Object.keys(currentUserInfo).length" :parsed-user-info-obj="currentUserInfo"/>
</div>
</template>

<script>
  // @ is an alias to /src
  import VKsearchById from '@/components/VKsearchById.vue';
  import VKparsedUserInfo from '@/components/VKparsedUserInfo.vue';
  import { mapGetters } from 'vuex';

  export default {
    name: 'AboutUser',
    components: {
      VKsearchById, VKparsedUserInfo
    },
    computed: {
      ...mapGetters({
        currentUserInfo: 'getCurrentUserInfo'
      })
    }
  }
</script>

<style scoped lang="sass">
  
</style>
