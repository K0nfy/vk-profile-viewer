<template>
<div>
<div class="user-search-container">
  <el-row type="flex">
    <el-input
      size="medium"
      placeholder="Some name"
      v-model="inputUserName"
      clearable
      @keyup.enter.native="makeStoreAction(inputUserName)">
    </el-input>
    <el-button 
      type="primary"
      icon="el-icon-search"
      size="medium"
      @click="makeStoreAction(inputUserName)"
    >Search by name
    </el-button>
  </el-row>
</div>
</div>
</template>

<script>
export default {
  name: 'VKsearchByName',
  data() {
    return {
      inputUserName: null
    }
  },
  methods: {
    makeStoreAction(inputUserName) {
      return this.$store.dispatch('VKparseUpdateUserInfo', 
        { reqInfoQuery: inputUserName, searchType: 'byName' }
      );
    }
  }
}
</script>

<style lang="sass" scoped>
  .user-search-container
    max-width: 390px
    margin: auto
    & a
      text-decoration: none
      color: blue
      &:hover
        text-decoration: underline
      &:active
        color: red
</style>
