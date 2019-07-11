<template>
<div>
  <el-row :gutter="20" type="flex" justify="center">
    <el-col :span="9">
      <SearchById></SearchById>
      <ParsedUserInfo v-if="Object.keys(userFoundByIdInfo).length" :parsed-user-info-obj="userFoundByIdInfo"/>
    </el-col>
    <el-col :span="9">
      <SearchByName></SearchByName>
      <ParsedUserInfo v-if="Object.keys(userFoundByNameInfo).length" :parsed-user-info-obj="userFoundByNameInfo"/>
    </el-col>
  </el-row>
</div>
</template>

<script>
// @ is an alias to /src
import SearchById from '@/components/SearchById.vue';
import SearchByName from '@/components/SearchByName.vue';
import ParsedUserInfo from '@/components/ParsedUserInfo.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'Search',
  components: {
    SearchById, SearchByName, ParsedUserInfo
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
