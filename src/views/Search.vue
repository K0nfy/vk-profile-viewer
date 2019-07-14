<template>
<div>
  <el-row type="flex" justify="space-around">
    <el-col :span="8">
      <InputById @inputReceived="(input) => this.$router.push({ name: 'Search', query: { id: input } })"/>
      <UserInfoParser :expanded="true" :q-user-id="routeId" @rUserIdReceived="(userId) => rUserId = userId">
        <template v-slot:fav-btn-slot>
          <el-col :span="6">
            <AdderToFavourites :user-id="rUserId"/>
          </el-col>
        </template>
      </UserInfoParser>
    </el-col>
    <el-col :span="8">
      <InputByName @inputReceived="(input) => this.$router.push({ name: 'Search', query: { name: input } })"/>
      <UserInfoParser :expanded="true" :q-user-name="routeName" @rUserIdReceived="(userId) => rUserId = userId">
        <template v-slot:fav-btn-slot>
          <el-col :span="6">
            <AdderToFavourites v-if="rUserId" :user-id="rUserId"/>
          </el-col>
        </template>
      </UserInfoParser>
    </el-col>
  </el-row>
</div>
</template>

<script>
// @ is an alias to /src
import InputById from '@/components/InputById.vue';
import InputByName from '@/components/InputByName.vue';
import UserInfoParser from '@/components/UserInfoParser.vue';
import AdderToFavourites from '@/components/AdderToFavourites.vue';

export default {
  name: 'Search',
  props: {
    routeId: String,
    routeName: String
  },
  data() {
    return {
      rUserId: null
    }
  },
  components: {
    InputById, InputByName, UserInfoParser, AdderToFavourites
  }
}
</script>

<style lang="sass">
  
</style>
