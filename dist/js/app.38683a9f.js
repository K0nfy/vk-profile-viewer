(function(e){function t(t){for(var r,s,a=t[0],u=t[1],c=t[2],l=0,d=[];l<a.length;l++)s=a[l],o[s]&&d.push(o[s][0]),o[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,s=1;s<n.length;s++){var a=n[s];0!==o[a]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},s={app:0},o={app:0},i=[];function a(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-27baecbe":"bf9cd51b","chunk-5deccf32":"d59d45a7"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-27baecbe":1};s[e]?t.push(s[e]):0!==s[e]&&n[e]&&t.push(s[e]=new Promise(function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-27baecbe":"98ec97e2","chunk-5deccf32":"31d6cfe0"}[e]+".css",o=u.p+r,i=document.getElementsByTagName("link"),a=0;a<i.length;a++){var c=i[a],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===o))return t()}var d=document.getElementsByTagName("style");for(a=0;a<d.length;a++){c=d[a],l=c.getAttribute("data-href");if(l===r||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete s[e],f.parentNode.removeChild(f),n(i)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)}).then(function(){s[e]=0}));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise(function(t,n){r=o[e]=[t,n]});t.push(r[2]=i);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=a(e),c=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+r+": "+s+")");i.type=r,i.request=s,n[1](i)}o[e]=void 0}};var d=setTimeout(function(){c({type:"timeout",target:l})},12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/vk-profile-viewer/dist/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0cfb":function(e,t,n){},"2a24":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.parsedUserInfoObj?n("div",{staticClass:"user__info-container"},[n("el-row",[e._t("default",[n("el-row",{staticClass:"user__primary-info",attrs:{type:"flex",align:"middle",justify:"center"}},[e._t("fav-btn-slot"),n("el-col",{attrs:{span:12}},[n("a",{staticClass:"user__link",attrs:{href:"https://vk.com/id"+e.parsedUserInfoObj.primary.id(),target:"_blank",rel:"noopener noreferrer"}},[n("img",{staticClass:"user__avatar",attrs:{src:e.parsedUserInfoObj.primary.avatarLink()}}),n("span",{staticClass:"user__fullname"},[e._v(e._s(e.parsedUserInfoObj.primary.fullName()))])])]),e._t("expand-btn-slot")],2),e.expanded?n("el-row",{staticClass:"user__secondary-info"},e._l(e.parsedUserInfoObj.secondary,function(t,r){return n("ul",{key:t.id,staticClass:"user__secondary-info-list"},[n("li",[e._v(e._s(r+": "+t()))])])}),0):e._e()])],2)],1):e._e()},s=[],o={name:"UserInfoParser",props:{qUserId:String,qUserName:String,expanded:Boolean},data(){return{parsedUserInfoObj:null}},methods:{VKgetUserInfo(e,t){return new Promise((n,r)=>{const s="sex,bdate,city,country,home_town,photo_100,online,lists,domain,has_mobile,contacts,site,education,status,last_seen,followers_count,common_count,occupation,relation,connections,exports,wall_comments,activities,interests,music,movies,tv,books,games,about,quotes,can_post,can_see_audio,can_write_private_message,can_send_friend_request,timezone,maiden_name";if(e){switch(e){case"0":return alert("Please, enter correct user ID")}VK.Api.call("users.get",{user_ids:e,fields:s,v:"5.101"},e=>{return e.response?n(this.prettifyUserInfo(e.response[0])):(alert("User with such ID was not found"),r())})}t&&VK.Api.call("users.search",{q:t,count:1,fields:s,v:"5.101"},e=>{return e.response.items.length?n(this.prettifyUserInfo(e.response.items[0])):(alert("User with such name was not found"),r())})})},prettifyUserInfo(e){return{primary:{fullName:function(){return`${e.first_name} ${e.last_name}`},avatarLink:function(){return e.photo_100},id:function(){return Number(e.id)}},secondary:{"Profile type":function(){return e.is_closed?"closed":"opened"},Sex:function(){switch(e.sex){case 1:return"female";case 2:return"male";default:return"not specified"}},Birthday:function(){return e.bdate?e.bdate:"unknown"},Timezone:function(){return void 0!==e.timezone?`+${e.timezone}`:"unknown"},"VK has the user phone number":function(){return e.has_mobile?"true":"false"},"Last seen online":function(){if(e.online)return"online right now";if(e.last_seen){let t=()=>{switch(e.last_seen.platform){case 1:return"web mobile version";case 2:return"iPhone app";case 3:return"iPad app";case 4:return"Android app";case 5:return"Windows Phone app";case 6:return"Windows 10 app";case 7:return"web desktop version";default:return"unknown client"}};return`${new Date(1e3*e.last_seen.time).toLocaleDateString("en",{hour:"numeric",minute:"numeric",second:"numeric"})}, ${t()}`}return"unknown"},"Wall commenting":function(){return e.wall_comments?"allowed":"not allowed"},"Post on the wall":function(){return e.can_post?"allowed":"not allowed"},"Private messages":function(){return e.can_write_private_message?"opened":"closed"},"Send friend request":function(){return e.can_send_friend_request?"allowed":"not allowed"},Status:function(){return e.status},Website:function(){return e.site?e.site:"not specified"},"Home phone":function(){return e.home_phone?e.home_phone:"not specified"},"Mobile phone":function(){return e.mobile_phone?e.mobile_phone:"not specified"},"Followers count":function(){return e.followers_count}}}},updateUserInfoObj(){this.VKgetUserInfo(this.qUserId,this.qUserName).then(e=>{this.parsedUserInfoObj=e})}},created(){(this.qUserId||this.qUserName)&&this.updateUserInfoObj()},watch:{qUserId(){this.updateUserInfoObj()},qUserName(){this.updateUserInfoObj()},parsedUserInfoObj(){this.$emit("rUserIdReceived",this.parsedUserInfoObj.primary.id())}}},i=o,a=(n("f394"),n("2877")),u=Object(a["a"])(i,r,s,!1,null,"46317b67",null);t["a"]=u.exports},"45a0":function(e,t,n){},"4f2f":function(e,t,n){"use strict";var r=n("45a0"),s=n.n(r);s.a},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("2b0e"),s=n("2f62"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("header",[e._v("VK profile viewer")]),this.$store.state.isUserAuthorized?e._e():n("Authorization"),this.$store.state.isUserAuthorized?n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("About you")]),e._v(" |\n    "),n("router-link",{attrs:{to:"/search"}},[e._v("Search")]),e._v(" |\n    "),n("router-link",{attrs:{to:"/favourites"}},[e._v("Favourites")])],1):e._e(),n("keep-alive",{attrs:{include:"Search"}},[this.$store.state.isUserAuthorized?n("router-view"):e._e()],1)],1)},i=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{attrs:{id:"vk_api_transport"}}),n("p",[e._v("This app can show you all public info of any VK profile, but first you need to make authorization in our VK app")]),n("el-button",{attrs:{loading:e.isAuthorizating||!e.isVKloaded,type:"primary",round:""},on:{click:e.vkAuthInit}},[e._v("Authorize")])],1)},u=[],c=(n("6b54"),{name:"Authorization",data:function(){return{isVKloaded:!1,isAuthorizating:!1}},methods:{vkOpenApiInit:function(){window.vkAsyncInit=()=>{VK.init({apiId:7047870}),this.isVKloaded=!0},setTimeout(function(){const e=document.createElement("script");e.type="text/javascript",e.src="https://vk.com/js/api/openapi.js?161",e.async=!0,document.getElementById("vk_api_transport").appendChild(e)},0)},vkAuthInit:function(){this.isAuthorizating=!0,VK.Auth.login(e=>{this.isAuthorizating=!1,e.session&&(this.$store.commit("changeAuthState",!0),this.$store.commit("setCurrentUserId",e.session.user.id.toString()))})}},mounted(){this.vkOpenApiInit()}}),l=c,d=n("2877"),f=Object(d["a"])(l,a,u,!1,null,"1b2b9792",null),p=f.exports,h={components:{Authorization:p}},m=h,v=(n("cf25"),Object(d["a"])(m,o,i,!1,null,null,null)),_=v.exports,b=n("8c4f"),y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-row",{attrs:{type:"flex",justify:"center"}},[n("el-col",{attrs:{span:8}},[n("UserInfoParser",{attrs:{expanded:!0,"q-user-id":e.currentUserId},scopedSlots:e._u([{key:"fav-btn-slot",fn:function(){return[n("div",{staticStyle:{display:"none"}})]},proxy:!0},{key:"expand-btn-slot",fn:function(){return[n("div",{staticStyle:{display:"none"}})]},proxy:!0}])})],1)],1)],1)},g=[],w=(n("ac6a"),n("ade3")),I=n("65cc"),k=n("2a24");function U(e){for(var t=1;t<arguments.length;t++)if(t%2){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){Object(w["a"])(e,t,n[t])})}else Object.defineProperties(e,Object.getOwnPropertyDescriptors(arguments[t]));return e}var O={name:"AboutUser",components:{InputById:I["a"],UserInfoParser:k["a"]},computed:U({},Object(s["b"])({currentUserId:"getCurrentUserId"}))},j=O,A=Object(d["a"])(j,y,g,!1,null,"7ab49516",null),S=A.exports;r["default"].use(b["a"]);var x=new b["a"]({mode:"hash",base:"/vk-profile-viewer/dist/",routes:[{path:"/",name:"AboutUser",component:S},{path:"/search",name:"Search",props:e=>({routeId:e.query.id,routeName:e.query.name}),component:()=>n.e("chunk-5deccf32").then(n.bind(null,"2d3b"))},{path:"/favourites",name:"Favourites",component:()=>n.e("chunk-27baecbe").then(n.bind(null,"0e0d"))}]});r["default"].use(s["a"]);var C=new s["a"].Store({state:{isUserAuthorized:!1,currentUserId:null,favourites:{}},mutations:{changeAuthState(e,t){e.isUserAuthorized=t},setCurrentUserId(e,t){e.currentUserId=t},addFavUser(e,t){e.favourites[t]=!0},removeFavUser(e,t){delete e.favourites[t]}},getters:{getCurrentUserId(e){return e.currentUserId},getFavsObj(e){return e.favourites}}}),P=n("5c96"),z=n.n(P);n("0fae");r["default"].use(s["a"]),r["default"].use(z.a),r["default"].config.productionTip=!1,new r["default"]({router:x,store:C,render:e=>e(_)}).$mount("#app")},"5f5b":function(e,t,n){},"65cc":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-row",[e._t("input-slot",[n("el-row",[n("el-autocomplete",{attrs:{"popper-class":"suggestions","fetch-suggestions":e.inputGetSuggestions,size:"medium",placeholder:"Some id",clearable:""},on:{select:e.handleInput},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleInput(!1,e.inputUserId)}},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.item;return[n("div",{staticClass:"suggestions__value"},[e._v(e._s(r.value))]),n("span",{staticClass:"suggestions__link"},[e._v(e._s(r.link))])]}}]),model:{value:e.inputUserId,callback:function(t){e.inputUserId=t},expression:"inputUserId"}})],1),n("el-row",[n("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"medium"},on:{click:function(t){return e.handleInput(!1,e.inputUserId)}}},[e._v("Search by ID\r\n        ")])],1)])],2)],1)},s=[],o={name:"InputById",data(){return{sugsLinks:[],inputUserId:null}},methods:{inputGetSuggestions(e,t){var n=this.sugsLinks,r=e?n.filter(this.sugsCreateFilter(e)):n;t(r)},sugsCreateFilter(e){return t=>{return 0===t.value.toLowerCase().indexOf(e.toLowerCase())}},sugsLoadAll(){return[{value:"1"},{value:"id1"},{value:"durov"}]},handleInput(e,t){return e?this.$emit("inputReceived",e.value):this.$emit("inputReceived",t)}},mounted(){this.sugsLinks=this.sugsLoadAll()}},i=o,a=(n("4f2f"),n("2877")),u=Object(a["a"])(i,r,s,!1,null,"2671dde7",null);t["a"]=u.exports},cf25:function(e,t,n){"use strict";var r=n("0cfb"),s=n.n(r);s.a},f394:function(e,t,n){"use strict";var r=n("5f5b"),s=n.n(r);s.a}});
//# sourceMappingURL=app.38683a9f.js.map