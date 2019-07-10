<template>
<div>
<div class="user-search-container">
  <el-row>
    <slot name="input-slot">
      <el-autocomplete
        popper-class="sugs-autocomplete"
        v-model="inputUserId"
        :fetch-suggestions="inputGetSuggestions"
        size="medium"
        placeholder="Some id"
        clearable
        @select="handleInputSelect"
        @keyup.enter.native="VKupdateUserInfo(inputUserId)"
      >
        <template slot-scope="{ item }">
          <div class="sugs-autocomplete__value">{{ item.value }}</div>
          <span class="sugs-autocomplete__link">{{ item.link }}</span>
        </template>
      </el-autocomplete>
      <el-button 
        type="primary"
        icon="el-icon-search"
        size="medium"
        @click="VKupdateUserInfo(inputUserId)"
      >Search by ID
      </el-button>
    </slot>
  </el-row>
  <el-row>
    <slot v-if="parsedUserInfo">
      <el-row class="user__primary-info">
        <a class="user__link" :href="`https://vk.com/id${parsedUserInfo.primary.id()}`" target="_blank" rel="noopener noreferrer">
          <img class="user__avatar" :src=parsedUserInfo.primary.avatarLink()>
          <span class="user__fullname">{{ parsedUserInfo.primary.fullName() }}</span>
        </a>
      </el-row>
      <el-row class="user__secondary-info">
        <ul class="user__secondary-info-list" v-for="(item, index) in parsedUserInfo.secondary" :key="item.id">
          <li>{{ `${index}: ${item()}` }}</li>
        </ul>
      </el-row>
    </slot>
  </el-row>
</div>
</div>
</template>

<script>
export default {
  name: 'VKsearchById',
  data() {
    return {
      sugsLinks: [],
      inputUserId: null,
      userInfo: {},
      parsedUserInfo: null
    }
  },
  props: {
    userId: [String, Number]
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
    handleInputSelect(item) {
      this.VKupdateUserInfo(item.value);
    },

    VKgetInfoById(userId) {
      return new Promise((resolve, reject) => {
        if (userId) {
          VK.Api.call('users.get', 
          {
            user_ids: userId, 
            fields: 'sex,bdate,city,country,home_town,photo_100,online,lists,domain,has_mobile,contacts,site,education,status,last_seen,followers_count,common_count,occupation,relation,connections,exports,wall_comments,activities,interests,music,movies,tv,books,games,about,quotes,can_post,can_see_audio,can_write_private_message,can_send_friend_request,timezone,maiden_name',
            v: '5.101'
          }, function(r) {
            if(r.response) { resolve(r.response[0]) }
            return reject(r);
          })
        } else return reject('userId was not provided');
      })
    },
    VKparseInfo(obj) {
      console.log('userInfo: ');
      console.log(obj);

      return {
        primary: {
          fullName: function() { return `${obj.first_name} ${obj.last_name}` },
          avatarLink: function() { return obj.photo_100 },
          id: function() { return obj.id }
        },
        secondary: {
          "Profile type": function() { return obj.is_closed ? "closed" : "opened" },
          "Sex": function() {
            switch (obj.sex) {
              case 1:
                return "female"
              case 2:
                return "male"
              default:
                return "not specified"
            }
          },
          "Birthday": function() { return obj.bdate ? obj.bdate : "unknown" },
          "Timezone": function() { return obj.timezone !== undefined ? `+${obj.timezone}` : "unknown" },
          "VK has the user phone number": function() { return obj.has_mobile ? "true" : "false" },
          "Last seen online": function() {
            if (obj.online) {
              return "online right now"
            }
            if (obj.last_seen) {
              let getPlatform = () => {
                switch (obj.last_seen.platform) {
                  case 1:
                    return "web mobile version";
                  case 2:
                    return "iPhone app";
                  case 3:
                    return "iPad app";
                  case 4:
                    return "Android app";
                  case 5:
                    return "Windows Phone app";
                  case 6:
                    return "Windows 10 app";
                  case 7:
                    return "web desktop version";
                  default:
                    return "unknown client";
                }
              }
              return `${ new Date(obj.last_seen.time * 1000).toLocaleDateString('en', {hour: 'numeric', minute: 'numeric', second: 'numeric'}) }, ${getPlatform()}`
            }
            return "unknown";
          },
          "Wall commenting": function() { return obj.wall_comments ? "allowed" : "not allowed" },
          "Post on the wall": function() { return obj.can_post ? "allowed" : "not allowed" },
          "Private messages": function() { return obj.can_write_private_message ? "opened" : "closed" },
          "Send friend request": function() { return obj.can_send_friend_request ? "allowed" : "not allowed" },
          "Status": function() { return obj.status },
          "Website": function() { return obj.site ? obj.site : "not specified" },
          "Home phone": function() { return obj.home_phone ? obj.home_phone : "not specified"  },
          "Mobile phone": function() { return obj.mobile_phone ? obj.mobile_phone : "not specified"  },
          "Followers count": function() { return obj.followers_count }
        }
      }
    },
    VKupdateUserInfo(someId) {
      if (someId == 0) return;
      
      this.VKgetInfoById(someId).then(response => {
        this.userInfo = response;
      })
    },
  },
  watch: {
    userInfo: function() {
      this.parsedUserInfo = this.VKparseInfo(this.userInfo);
    }
  },
  mounted() {
    if (this.userId) {
      this.VKupdateUserInfo(this.userId);
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
        
  .sugs-autocomplete
    &__value
      font-family: sans-serif
</style>
