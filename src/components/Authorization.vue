<template>
  <div>
    <div id="vk_api_transport"></div>
    <p>This app can show you all public info of any VK profile, but first you need to make authorization in our VK app</p>
    <el-button @click="vkAuthInit" :loading="isAuthorizating || !isVKloaded" type="primary" round>Authorize</el-button>
  </div>
</template>

<script>
export default {
  name: 'Authorization',
  data: function() {
    return {
      isVKloaded: false,
      isAuthorizating: false
    }
  },
  methods: {
    vkOpenApiInit: function() {
      window.vkAsyncInit = () => {
        VK.init({
          apiId: 7047870
        })
        
        this.isVKloaded = true;
      }

      setTimeout(function() {
        const el = document.createElement("script");
        el.type = "text/javascript";
        el.src = "https://vk.com/js/api/openapi.js?161";
        el.async = true;
        document.getElementById("vk_api_transport").appendChild(el);
      }, 0)
    },
    vkAuthInit: function() {
      this.isAuthorizating = true;

      VK.Auth.login((response) => {
        this.isAuthorizating = false;
        
        if (response.session) {
          this.$store.commit('changeAuthState', true);
          this.$store.commit('setUserId', response.session.user.id);
        }
      });
    }
  },
  mounted() {
    this.vkOpenApiInit();
  }
}
</script>

<style scoped lang="sass">
  
</style>
