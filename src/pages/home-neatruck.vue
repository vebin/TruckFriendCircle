<template>
  <div class="wrapper">
    <div><app-header></app-header></div>
    <div class="slide">
      <div class="tab-nav">
        <div class="nav-li" @click="tabNear(1)">
          <image class="nav-icon" src="https://frontendsvn.360che.com/icon-project/wap/app/TruckFriendCircle/images/trends-btn.png"></image>
        </div>
        <div class="nav-li" @click="tabNear(2)">
          <image class="nav-icon" src="https://frontendsvn.360che.com/icon-project/wap/app/TruckFriendCircle/images/truck-select.png"></image>
        </div>
      </div>
      <list class="list" @loadmore="morefel" loadmoreoffset="50">
        <refresh class="refresh" @refresh="onrefresh" @pullingdown="onpullingdown" :display="refreshing ? 'show' : 'hide'">
           <image style="width:160px;height:60px;" src="https://frontendsvn.360che.com/icon-project/wap/app/TruckFriendCircle/images/tau.gif"></image>
        </refresh>
        <cell keep-scroll-position="true" v-for="(item, index) in felTab.DATA">
          <nearby-truck :truck="item"></nearby-truck>
        </cell>
        <cell>
            <div class="loading-wrap" v-if="!listend"><text class="loading">正在加载中...</text></div>
            <div class="list-end" v-if="listend"><text>已经到底了</text></div>
        </cell>  
      </list>
    </div>
    <div class="flow-btn" @click="jump('/postfm')">
      <image class="flow-icon" src="https://frontendsvn.360che.com/icon-project/wap/app/TruckFriendCircle/images/post-btn.png"></image>
    </div>
    <div><my-manage v-if="showManage=='me'"></my-manage></div>
    <div><other-manage v-if="showManage=='ather'"></other-manage ></div>
    <div><super-manage v-if="showManage=='super'"></super-manage></div>
    <div><confirm v-if="showconfirm"></confirm></div>
  </div>
</template>
<script>
  import AppHeader from '../components/app-header.vue'
  import ListCentent from '../components/list-centent.vue'
  import Confirm from '../components/confirm.vue'
  import MyManage from '../components/my-manage.vue'
  import OtherManage from '../components/other-manage.vue'
  import SuperManage from '../components/super-manage.vue'
  import NearbyTruck from '../components/nearby-truck.vue'
  import XHR from '../api'
  const storage = weex.requireModule('storage')
  const animation = weex.requireModule('animation')
  export default {
    components: { AppHeader,ListCentent,Confirm,MyManage,OtherManage,SuperManage,NearbyTruck},
    computed: {
      // 附近－卡友
      felTab () {return this.$store.state.felTab},
      user () {return this.$store.state.user},
      showManage () {return this.$store.state.changeManage},
      showconfirm () {return this.$store.state.confirm}
    },
    data () {
      return {
        source:'home',
        Page:2,        //热门页码  
        loading:true,
        listend:false,
        showConfirm:false,
        refreshing: false,
      }
    },
    created(){
            var domModule = weex.requireModule('dom');
            domModule.addRule('fontFace',{
                'fontFamily':'iconfont',
                'src':"url(\'http://at.alicdn.com/t/font_qv5etitfumtb7qfr.ttf\')"
            })
            if(this.felTab.DATA.length==0){
                var json={uid:this.user.uid,lng:"116.322987",lat:"39.983424",page:this.truckPage}
                 this.$store.dispatch('GET_NEAR_TRUCK',json)
            }
    },
    methods: {
      onrefresh (event) {
        this.refreshing = true
        var json={uid:this.user.uid,lng:"116.322987",lat:"39.983424"},
            _this=this;
        XHR.getNearTruck(json).then( function (res) {
              // modal.alert({message: 'This is a alert'})
               _this.felTab.DATA= res.data.log;
               _this.refreshing = false

            })
      },
      onpullingdown (event) {
        console.log('is onpulling down')
      },
      tabNear(n){
          if (n=="1") {
            this.jump('/HomeNeanav')
          }else {
            this.jump('/HomeNeatruck')
          }
      },
      morefel(){                                      //滚动加载附近卡友
          var json={uid:this.user.uid,lng:"116.322987",lat:"39.983424",page:this.Page}
          var _this=this;
          if (this.loading) {
            this.loading=false
            XHR.getNearTruck(json).then( function (res) {
                var data= res.data.data;
                for (var i = 0; i < data.contents.length; i++) {
                  _this.felTab.DATA.push(data.contents[i])
                }
                if (data.size!="30") {
                  _this.loading=false
                  _this.listend=true
                }else{
                  _this.loading=true
                  _this.Page++
                }
            })
          }
      },
    }
  }
</script>

<style scoped>
.wrapper{background-color: #f7f9fa;flex:1;}
.slide{flex:1;}
.list{flex:1;}
.flow-btn{position: absolute;right: 36px;bottom: 126px; z-index: 5;}
.flow-icon{width: 108px;height: 112px;}
.tab-nav{background-color: #f7f9fa;height: 88px;padding-left: 30px;padding-right: 30px;flex-direction:row;justify-content: center;align-items: center;padding-left: 140px;padding-right: 140px;}
.nav-li{flex:1; flex-direction:row;justify-content: center;align-items: center;}
.nav-icon{width: 120px;height: 44px;}
.row{padding-bottom: 20px;background-color:#FAFBFC;}
.loading-wrap{justify-content: center;align-items: center;height: 88px;padding-top: 0}
.list-end{justify-content: center;align-items: center;height: 88px;padding-top: 0}
.refresh{justify-content: center;align-items: center;padding-top: 20px;padding-bottom: 20px;}
</style>
