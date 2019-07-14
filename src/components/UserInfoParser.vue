<template>
<div v-if="parsedUserInfoObj" class="user__info-container">
  <el-row>
    <slot>
      <el-row class="user__primary-info" type="flex" align="middle" justify="center">
        <slot name="fav-btn-slot"/>
        <el-col :span="12">
          <a class="user__link" :href="`https://vk.com/id${parsedUserInfoObj.primary.id()}`" target="_blank" rel="noopener noreferrer">
            <img class="user__avatar" :src=parsedUserInfoObj.primary.avatarLink()>
            <span class="user__fullname">{{ parsedUserInfoObj.primary.fullName() }}</span>
          </a>
        </el-col>
        <slot name="expand-btn-slot"/>
      </el-row>
      <el-row v-if="expanded" class="user__secondary-info">
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
  name: 'UserInfoParser',
  props: {
    qUserId: String,
    qUserName: String,
    expanded: Boolean
  },
  data() {
    return {
      parsedUserInfoObj: null
    }
  },
  methods: {
    VKgetUserInfo(qUserId, qUserName) {
      return new Promise((resolve, reject) => {
      const desiredInfoFields = 'sex,bdate,city,country,home_town,photo_100,online,lists,domain,has_mobile,contacts,site,education,status,last_seen,followers_count,common_count,occupation,relation,connections,exports,wall_comments,activities,interests,music,movies,tv,books,games,about,quotes,can_post,can_see_audio,can_write_private_message,can_send_friend_request,timezone,maiden_name';

      if (qUserId) {
        switch(qUserId) {
          case "0":
            return alert('Please, enter correct user ID')
            break;
        }
        
        VK.Api.call('users.get', 
          {
            user_ids: qUserId,
            fields: desiredInfoFields,
            v: '5.101'
          }, (r) => {
            if(r.response) {
              return resolve(this.prettifyUserInfo(r.response[0]));
            }
            
            alert("User with such ID was not found");
            return reject();
          }
        )
      }

      if (qUserName) {
        VK.Api.call('users.search', 
          {
            q: qUserName,
            count: 1,
            fields: desiredInfoFields,
            v: '5.101'
          }, (r) => {
            if(r.response.items.length) {
              return resolve(this.prettifyUserInfo(r.response.items[0]));
            }
            
            alert("User with such name was not found");
            return reject();
          }
        )
      }
    })},
    prettifyUserInfo(infoObj) {
      return {
        primary: {
          fullName: function() { return `${infoObj.first_name} ${infoObj.last_name}` },
          avatarLink: function() { return infoObj.photo_100 },
          id: function() { return Number(infoObj.id) }
        },
        secondary: {
          "Profile type": function() { return infoObj.is_closed ? "closed" : "opened" },
          "Sex": function() {
            switch (infoObj.sex) {
              case 1:
                return "female"
              case 2:
                return "male"
              default:
                return "not specified"
            }
          },
          "Birthday": function() { return infoObj.bdate ? infoObj.bdate : "unknown" },
          "Timezone": function() { return infoObj.timezone !== undefined ? `+${infoObj.timezone}` : "unknown" },
          "VK has the user phone number": function() { return infoObj.has_mobile ? "true" : "false" },
          "Last seen online": function() {
            if (infoObj.online) {
              return "online right now"
            }
            if (infoObj.last_seen) {
              let getPlatform = () => {
                switch (infoObj.last_seen.platform) {
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
              return `${ new Date(infoObj.last_seen.time * 1000).toLocaleDateString('en', {hour: 'numeric', minute: 'numeric', second: 'numeric'}) }, ${getPlatform()}`
            }
            return "unknown";
          },
          "Wall commenting": function() { return infoObj.wall_comments ? "allowed" : "not allowed" },
          "Post on the wall": function() { return infoObj.can_post ? "allowed" : "not allowed" },
          "Private messages": function() { return infoObj.can_write_private_message ? "opened" : "closed" },
          "Send friend request": function() { return infoObj.can_send_friend_request ? "allowed" : "not allowed" },
          "Status": function() { return infoObj.status },
          "Website": function() { return infoObj.site ? infoObj.site : "not specified" },
          "Home phone": function() { return infoObj.home_phone ? infoObj.home_phone : "not specified"  },
          "Mobile phone": function() { return infoObj.mobile_phone ? infoObj.mobile_phone : "not specified"  },
          "Followers count": function() { return infoObj.followers_count }
        }
      }
    },
    updateUserInfoObj() {
      this.VKgetUserInfo(this.qUserId, this.qUserName).then(resObj => {
        this.parsedUserInfoObj = resObj;
      });
    }
  },
  created() {
    if (this.qUserId || this.qUserName) {
      this.updateUserInfoObj();
    }
  },
  watch: {
    qUserId() {
      this.updateUserInfoObj();
    },
    qUserName() {
      this.updateUserInfoObj();
    },
    parsedUserInfoObj() {
      this.$emit('rUserIdReceived', this.parsedUserInfoObj.primary.id())
    }
  }
}
</script>

<style lang="sass" scoped>
.user
  &__info-container
    margin: auto
    margin-top: 30px
  &__primary-info
    margin-bottom: 5px
  &__link
    display: flex
    align-items: center
    justify-content: center
    text-decoration: none
    color: blue
    &:hover
      text-decoration: underline
    &:active
      color: red
  &__avatar
    max-width: 70px
    max-height: 70px
    border-radius: 50%
  &__fullname
    margin-left: 10px
    text-align: left
  &__secondary-info
    &-list
      text-align: left
</style>
