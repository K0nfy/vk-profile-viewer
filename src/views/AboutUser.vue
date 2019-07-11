<template>
<div>
  <SearchById :user-id="this.$store.state.currentUserId">
    <div slot="input-slot" style="display: none"></div>
  </SearchById>
  <ParsedUserInfo v-if="Object.keys(currentUserInfo).length" :parsed-user-info-obj="currentUserInfo"/>
</div>
</template>

<script>
  // @ is an alias to /src
  import SearchById from '@/components/SearchById.vue';
  import ParsedUserInfo from '@/components/ParsedUserInfo.vue';
  import { mapGetters } from 'vuex';

  export default {
    name: 'AboutUser',
    components: {
      SearchById, ParsedUserInfo
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
