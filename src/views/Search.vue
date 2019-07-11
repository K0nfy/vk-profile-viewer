<template>
<div>
  <el-row :gutter="20" type="flex" justify="center">
    <el-col :span="9">
      <VKsearchById></VKsearchById>
      <VKparsedUserInfo v-if="Object.keys(userFoundByIdInfo).length" :parsed-user-info-obj="userFoundByIdInfo"/>
    </el-col>
    <el-col :span="9">
      <VKsearchByName></VKsearchByName>
      <VKparsedUserInfo v-if="Object.keys(userFoundByNameInfo).length" :parsed-user-info-obj="userFoundByNameInfo"/>
    </el-col>
  </el-row>
</div>
</template>

<script>
// @ is an alias to /src
import VKsearchById from '@/components/VKsearchById.vue';
import VKsearchByName from '@/components/VKsearchByName.vue';
import VKparsedUserInfo from '@/components/VKparsedUserInfo.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'Search',
  components: {
    VKsearchById, VKsearchByName, VKparsedUserInfo
  },
  computed: {
    ...mapGetters({
      userFoundByIdInfo: 'getUserFoundByIdInfo',
      userFoundByNameInfo: 'getUserFoundByNameInfo'
    })
  }
}
</script>

<style lang="sass">
  
</style>
