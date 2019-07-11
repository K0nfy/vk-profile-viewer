<template>
<div>
<div class="user-search-container">
  <el-row>
    <slot name="input-slot">
      <el-autocomplete
        popper-class="suggestions"
        v-model="inputUserId"
        :fetch-suggestions="inputGetSuggestions"
        size="medium"
        placeholder="Some id"
        clearable
        @select="handleInput"
        @keyup.enter.native="handleInput(false, inputUserId)"
      >
        <template slot-scope="{ item }">
          <div class="suggestions__value">{{ item.value }}</div>
          <span class="suggestions__link">{{ item.link }}</span>
        </template>
      </el-autocomplete>
      <el-button 
        type="primary"
        icon="el-icon-search"
        size="medium"
        @click="handleInput(false, inputUserId)"
      >Search by ID
      </el-button>
    </slot>
  </el-row>
</div>
</div>
</template>

<script>
export default {
  name: 'SearchById',
  data() {
    return {
      sugsLinks: [],
      inputUserId: null
    }
  },
  props: {
    userId: [Number,String]
  },
  methods: {
    inputGetSuggestions(queryString, cb) {
      var links = this.sugsLinks;
      var results = queryString ? links.filter(this.sugsCreateFilter(queryString)) : links;
      // call callback function to return suggestions
      cb(results);
    },
    sugsCreateFilter(queryString) {
      return (link) => {
        return (link.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
      };
    },
    sugsLoadAll() {
      return [
        { "value": "1" },
        { "value": "id1" },
        { "value": "durov" }
        ];
    },

    handleInput(item, inputUserId) {
      if (item) { // value was selected from suggestions
        return this.makeStoreAction(item.value);
      }
      return this.makeStoreAction(inputUserId);
    },
    makeStoreAction(value, isCurrentUser) {
      this.$store.dispatch('VKparseUpdateUserInfo', 
        { reqInfoQuery: value, searchType: 'byId', isCurrentUser }
      );
    }
  },
  mounted() {
    if (this.userId) {
      // means the component was invoked by AboutUser.vue
      // and VK ID of the app user was passed on
      // second parameter means that the userType is currentUser
      this.makeStoreAction(this.userId, true)
    }

    this.sugsLinks = this.sugsLoadAll();
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
        
  .suggestions
    &__value
      font-family: sans-serif
</style>
