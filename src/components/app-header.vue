<template>
<div class="header">
    <div @click="tologin"><text class="blue-text" v-if="!login">登录</text></div>
    <div @click="skip(`user.weex.js?uid=${this.uid}`)" v-if="login">
      <image class="avater" src="https://i.kcimg.cn/data/avatar/new/15/7fc5db3daaa1c040bda5423d52c8b7c2_big.jpg"></image>
    </div>
    <!-- <div class="ceshi" @click="jump('/ceshi')">
      <text>路由</text>
    </div> -->
    <div class="content">
        <div v-bind:class="[tabAll == '1' ? 'active' : 'nav']" @click="totab(1)">
            <div><text v-bind:class="[tabAll == '1' ? 'active-text' : 'nav-text']">热门</text></div>
        </div>
        <div v-bind:class="[tabAll == '2' ? 'active' : 'nav']" @click="totab(2)">
           <div><text v-bind:class="[tabAll == '2' ? 'active-text' : 'nav-text']">全部</text></div>
        </div>
        <div v-bind:class="[tabAll == '3' ? 'active' : 'nav']" @click="totab(3)">
            <div><text v-bind:class="[tabAll == '3' ? 'active-text' : 'nav-text']">附近</text></div>
        </div>
    </div>
    <div @click="tosearch"><text class="blue-text">&#xe6d4;</text></div>
</div>
</template>
<script>
  const storage = weex.requireModule('storage')
  var navigator = weex.requireModule('navigator')
  const modal = weex.requireModule('modal')
  export default {
    data () {
      return {
        login:false
      }
    },
    created(){
        // storage.setItem('uid',this.user.uid)
         storage.getItem('uid', event => {
              if (event.data=='undefined') {
                // modal.alert({message: '1'})
                storage.setItem('uid','550643')
              }
              // modal.alert({message: event.data})
          })

    },
    computed: {
      // 最新－视频－关注－状态
      allNav () {return this.$store.state.allNav},
      // 热门－全部－附近－状态
      tabAll () {return this.$store.state.tabAll},
       // 用户信息
      user () {return this.$store.state.user},
    },
    methods: {
      tologin(){
         weex.requireModule('THAW').onGoLogin();
      },
      totab(nb){
        this.$store.dispatch('TAB_ALL',nb)
        if (nb=='1') {
          this.jump(`/home`)
        }else if(nb=='2'){
          switch (this.allNav) {
            case 1:
              this.jump(`/HomeNew`)
              break;
            case 2:
              this.jump(`/HomeVideo`)
              break;
            case 3:
              this.jump(`/HomeFollow`)
              break;
          }
        }else if(nb=='3'){
          this.jump(`/HomeNeanav`)
        }
      },
      tosearch(){
          navigator.push({
            url: 'http://192.168.1.30:1776/dist/addtruck.weex.js',
            animated: "true"
          }, event => {
            console.log(1)
          })
      }
    }
  }
</script>
<style scoped>
  .header{padding-left: 30px;padding-right: 30px;justify-content: center;align-items: center;flex-direction: row;height: 88px;border-bottom-width: 1px;border-bottom-color: #E5E5E5;border-bottom-style: solid;}
  .blue-text{font-size: 32px;color: #1571E5;font-family: iconfont}
  .content{flex: 1;flex-direction: row;justify-content: center;align-items: center;}
  .nav{margin-right: 30px;width: 80px;height: 88px;justify-content: center;align-items: center;margin-left: 30px;}
  .active{border-bottom-width: 4px;border-bottom-color: #1571E5;border-bottom-style: solid;margin-right: 30px;width: 80px;height: 88px;justify-content: center;align-items: center;margin-left: 30px;}
  .active-text{color:#1571E5;font-size: 36px;}
  .nav-text{font-size: 32px;}
  .avater{width: 72px;height: 72px;border-radius: 36px;}
</style>
