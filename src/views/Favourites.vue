<template>
<div v-if="favsObj">
  <div v-for="(item) in Object.keys(favsObj)" :key="item.id">
    <el-row type="flex" justify="space-around">
      <el-col :span="8">
        <UserInfoParser :expanded="expanded" :q-user-id="item">
          <template v-slot:fav-btn-slot>
            <el-col :span="6">
              <AdderToFavourites :user-id="Number(item)"/>
            </el-col>
          </template>
          <template v-slot:expand-btn-slot>
            <el-col :span="1" :offset="1">
              <span @click="expanded = !expanded" class="expand-btn"/>
            </el-col>
          </template>
        </UserInfoParser>
      </el-col>
    </el-row>
  </div>
</div>
</template>

<script>
// @ is an alias to /src
import UserInfoParser from '@/components/UserInfoParser.vue';
import AdderToFavourites from '@/components/AdderToFavourites.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'Favourites',
  components: {
    UserInfoParser, AdderToFavourites
  },
  data() {
    return {
      expanded: false
    }
  },
  computed: {
    ...mapGetters({
      favsObj: 'getFavsObj'
    })
  }
}
</script>

<style lang="sass" scoped>
  .expand-btn
    display: block
    width: 16px
    height: 16px
    position: relative
    cursor: pointer
    &:before,&:after
      content: ''
      width: 10px
      height: 2px
      position: absolute
      bottom: 7px
      background: black
    &:before
      left: 0
      transform: rotate(45deg)
    &:after
      right: 0
      transform: rotate(-45deg)
    &--active
      transform: rotate(-180deg)
</style>
