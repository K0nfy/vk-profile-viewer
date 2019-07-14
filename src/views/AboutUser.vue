<template>
<div>
  <el-row type="flex" justify="center">
    <el-col :span="8">
      <UserInfoParser :expanded="true" :q-user-id="currentUserId">
        <template v-slot:fav-btn-slot>
          <div style="display: none"/>
        </template>
        <template v-slot:expand-btn-slot>
          <div style="display: none"/>
        </template>
      </UserInfoParser>
    </el-col>
  </el-row>
</div>
</template>

<script>
// @ is an alias to /src
import InputById from '@/components/InputById.vue';
import UserInfoParser from '@/components/UserInfoParser.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'AboutUser',
  components: {
    InputById, UserInfoParser
  },
  computed: {
    ...mapGetters({
      currentUserId: 'getCurrentUserId'
    })
  }
}
</script>

<style scoped lang="sass">
  
</style>
