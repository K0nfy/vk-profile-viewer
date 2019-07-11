import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isUserAuthorized: false,
    currentUserId: null,
    usersInfos: {
      // prop names = userTypes
      "currentUser": {},
      "userFoundById": {},
      "userFoundByName": {}
    }
  },
  props: {
    reqInfoQuery: [String,Number]
  },
  mutations: {
    changeAuthState(state, isAuthed) {
      state.isUserAuthorized = isAuthed;
    },
    setCurrentUserId(state, id) {
      state.currentUserId = id;
    },
    // user types listed as state.userInfos prop names
    parseUserInfo(state, { userType, infoObj }) {
      state.usersInfos[userType] = {
        primary: {
          fullName: function() { return `${infoObj.first_name} ${infoObj.last_name}` },
          avatarLink: function() { return infoObj.photo_100 },
          id: function() { return infoObj.id }
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
    }
  },
  actions: {
    // reqInfoQuery can be as user ID, as user name
    // searchType can be "byId" or "byName"
    VKparseUpdateUserInfo({ commit }, { reqInfoQuery, searchType, isCurrentUser }) {

      const desiredInfoFields = 'sex,bdate,city,country,home_town,photo_100,online,lists,domain,has_mobile,contacts,site,education,status,last_seen,followers_count,common_count,occupation,relation,connections,exports,wall_comments,activities,interests,music,movies,tv,books,games,about,quotes,can_post,can_see_audio,can_write_private_message,can_send_friend_request,timezone,maiden_name';

      if (searchType === 'byId') {
        switch(reqInfoQuery) {
          case "0":
            return alert('Please, enter correct user ID')
            break;
        }
        
        VK.Api.call('users.get', 
          {
            user_ids: reqInfoQuery,
            fields: desiredInfoFields,
            v: '5.101'
          }, (r) => {
            if(r.response) {
              return commit('parseUserInfo',
                { userType: isCurrentUser ? 'currentUser' : 'userFoundById',
                infoObj: r.response[0] }
              )
            }
            
            alert("User with such ID was not found")
          }
        )
      }

      if (searchType === "byName") {
        VK.Api.call('users.search', 
          {
            q: reqInfoQuery,
            count: 1,
            fields: desiredInfoFields,
            v: '5.101'
          }, (r) => {
            if(r.response.items.length) {
              return commit('parseUserInfo',
                { userType: 'userFoundByName', infoObj: r.response.items[0] }
              )
            }
            
            alert("User with such name was not found")
          }
        )
      }

    }
  },
  getters: {
    getCurrentUserInfo(state) {
      return state.usersInfos["currentUser"];
    },
    getUserFoundByIdInfo(state) {
      return state.usersInfos["userFoundById"];
    },
    getUserFoundByNameInfo(state) {
      return state.usersInfos["userFoundByName"];
    }
  }
})
