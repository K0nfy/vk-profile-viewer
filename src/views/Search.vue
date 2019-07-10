<template>
<div>
  <el-row :gutter="20" type="flex" justify="center">
    <el-col :span="9">
      <VKsearchById></VKsearchById>
    </el-col>
    <el-col :span="9">
      <VKsearchByName></VKsearchByName>
    </el-col>
  </el-row>
</div>
</template>

<script>
// @ is an alias to /src
import VKsearchById from '@/components/VKsearchById.vue'
import VKsearchByName from '@/components/VKsearchByName.vue'

export default {
  name: 'Search',
  components: {
    VKsearchById, VKsearchByName
  }
}
</script>

<style lang="sass">
  
</style>
