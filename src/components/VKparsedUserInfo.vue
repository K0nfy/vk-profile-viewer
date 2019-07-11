<template>
<div>
  <el-row>
    <slot name="output-slot">
      <el-row class="user__primary-info">
        <a class="user__link" :href="`https://vk.com/id${parsedUserInfoObj.primary.id()}`" target="_blank" rel="noopener noreferrer">
          <img class="user__avatar" :src=parsedUserInfoObj.primary.avatarLink()>
          <span class="user__fullname">{{ parsedUserInfoObj.primary.fullName() }}</span>
        </a>
      </el-row>
      <el-row class="user__secondary-info">
        <ul class="user__secondary-info-list" v-for="(item, index) in parsedUserInfoObj.secondary" :key="item.id">
          <li>{{ `${index}: ${item()}` }}</li>
        </ul>
      </el-row>
    </slot>
  </el-row>
</div>
</template>

<script>
export default {
  name: 'VKparsedUserInfo',
  props: {
    parsedUserInfoObj: Object
  }
}
</script>

<style lang="sass" scoped>

</style>
