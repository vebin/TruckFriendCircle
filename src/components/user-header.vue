<template>
<div>
  <div class="user-header">
      <image class="header-bg" src="https://frontendsvn.360che.com/icon-project/wap/app/TruckFriendCircle/images/user-bg.png"></image> 
      <div class="top">
          <div style="flex:1" @click="back()"><text class="back">&#xe6d6;</text></div>
          <div style="flex:1" @click="skip(`set.weex.js?uid=${Nowuser.uid}`)"><text class="set">&#xe6ea;&nbsp&nbsp设置</text></div>
      </div>
      <div class="user">
          <div class="follow">
            <div @click="skip(`PeopleList.weex.js?aid=${Nowuser.aid}&source=2`)">
              <text class="text">关注</text>
              <text class="text">{{fans.count_ownconcern}}</text>
            </div>
            <div v-if="me">
              <text class="user-btn">签到</text>
            </div>
          </div>
          <div class="me">
              <image class="user-avater" :src="avatar"></image>
              <text class="text">{{Nowuser.username}}</text>  
          </div>
          <div class="fans">
              <div @click="skip(`PeopleList.weex.js?aid=${Nowuser.aid}&source=3`)">
                  <text class="text">粉丝</text>
                   <text class="text">{{fans.count_othconcern}}</text>
              </div>
              <div v-if="me">
                  <text class="user-btn">新消息</text>
              </div>
          </div>
      </div>
  </div>
</div>
</template>

<style scoped>
  .top{flex-direction: row;margin-top: 40px;margin-bottom: 12px;}
  .back{font-family: iconfont;color: #fff;font-size: 30px;}
  .set{text-align: right;font-family: iconfont;color: #fff;font-size: 30px;}
  .user-header{height: 300px;position: relative;padding-left: 30px;padding-right: 30px;z-index: 1}
  .header-bg{position: absolute;top:0;right: 0;left: 0;bottom: 0;z-index: -1;}
  .text{color: #fff;font-size: 28px;line-height: 44px;display:-webkit-box;text-overflow:ellipsis;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden;}
  .user{flex-direction: row;}
  .user-avater{width: 110px;height: 110px;border-top-left-radius:55px;
      border-top-right-radius:55px;
      border-bottom-left-radius:55px;
      border-bottom-right-radius:55px;margin-bottom: 24px;}

  .follow{flex: 1;align-items: center;}
  .fans{flex: 1;align-items: center;}
  .me{flex: 1;align-items: center;justify-content: center;}
</style>
<script>
  const modal = weex.requireModule('modal')
  const navigator = weex.requireModule('navigator')
  export default {
    props:['fans','Nowuser','avatar'],
    data () {
      return {
        uid:'0',
      }
    },
    created(){
      
    },
    methods: {
      back: function () {
        navigator.pop({
            url: this.url,
            animated: "true"
          }, event => {
              console.log(1)
          })
      },
    }
  }
</script>
