<template>
<div>
  <el-row>
    <slot name="input-slot">
      <el-row>
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
      </el-row>
      <el-row>
        <el-button 
          type="primary"
          icon="el-icon-search"
          size="medium"
          @click="handleInput(false, inputUserId)"
        >Search by ID
        </el-button>
      </el-row>
    </slot>
  </el-row>
</div>
</template>

<script>
export default {
  name: 'InputById',
  data() {
    return {
      sugsLinks: [],
      inputUserId: null
    }
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
        return this.$emit('inputReceived', item.value);
      }
      return this.$emit('inputReceived', inputUserId);
    }
  },
  mounted() {
    this.sugsLinks = this.sugsLoadAll();
  }
}
</script>

<style lang="sass" scoped>
  .el-autocomplete
    width: 100%
        
  .suggestions
    &__value
      font-family: sans-serif
</style>
