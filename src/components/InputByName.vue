<template>
<div>
  <el-row>
    <el-input
      size="medium"
      placeholder="Some name"
      v-model="inputUserName"
      clearable
      @keyup.enter.native="$emit('inputReceived', inputUserName)">
    </el-input>
  </el-row>
  <el-row>
    <el-button 
      type="primary"
      icon="el-icon-search"
      size="medium"
      @click="$emit('inputReceived', inputUserName)"
    >Search by name
    </el-button>
  </el-row>
</div>
</template>

<script>
export default {
  name: 'InputByName',
  data() {
    return {
      inputUserName: null
    }
  }
}
</script>

<style lang="sass" scoped>
  
</style>
