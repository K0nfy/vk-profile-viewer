<template>
<div>
  <el-button @click="changeUserFavState(userId)" type="warning" :icon="favBtnIcon" circle/>
</div>
</template>

<script>
export default {
  data() {
    return {
      favBtnIcon: "el-icon-star-off",
      favBtnIconOff: "el-icon-star-off",
      favBtnIconOn: "el-icon-star-on"
    }
  },
  props: {
    userId: Number
  },
  methods: {
    checkUserFavState(userId) {
      return this.$store.state.favourites[userId];
    },
    changeUserFavState(userId) {
      if (this.checkUserFavState(userId)) {
        this.$store.commit('removeFavUser', userId);
        this.favBtnIcon = this.favBtnIconOff;
        return;
      }

      this.$store.commit('addFavUser', userId);
      this.favBtnIcon = this.favBtnIconOn;
    }
  },
  watch: {
    userId() {
      if (this.checkUserFavState(this.userId)) {
        return this.favBtnIcon = this.favBtnIconOn;
      }
      this.favBtnIcon = this.favBtnIconOff;
    }
  }
}
</script>

<style lang="sass" scoped>
  
</style>
