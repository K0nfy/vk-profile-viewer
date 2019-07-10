<template>
  <div id="app">
    <header>VK profile viewer</header>
    <Authorization v-if="!this.$store.state.isUserAuthorized"></Authorization>

    <div id="nav" v-if="this.$store.state.isUserAuthorized">
      <router-link to="/">About you</router-link> |
      <router-link to="/search">Search</router-link> |
      <router-link to="/favourites">Favourites</router-link>
    </div>

    <keep-alive include="Search,Favourites">
      <router-view v-if="this.$store.state.isUserAuthorized"/>
    </keep-alive>
  </div>
</template>

<script>
// @ is an alias to /src
import Authorization from '@/components/Authorization.vue'

export default {
  components: {
    Authorization
  }
}
</script>

<style lang="sass">
#app
  max-width: 1140px
  margin: auto
  padding: 30px 0
  font-family: Arial, sans-serif
  text-align: center

#nav
  padding: 30px
  a
    font-weight: bold
    color: #000
    &.router-link-exact-active
      color: rgb(42, 130, 187)
    
.user
  &__link
    display: flex
    align-items: center
    justify-content: center
    height: 75px
    padding: 20px 15px
  &__avatar
    max-width: 70px
    max-height: 70px
    border-radius: 50%
  &__fullname
    margin-left: 20px
  &__secondary-info
    &-list
      text-align: left
</style>
