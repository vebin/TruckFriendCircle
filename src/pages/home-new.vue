<template>
  <div class="wrapper">
      <div>
        <app-header></app-header>
        <div class="tab-nav">
          <div class="nav-li" @click="tabAllNav(1)">
            <image class="nav-icon" src="https://frontendsvn.360che.com/icon-project/wap/app/TruckFriendCircle/images/new-select.png"></image>
          </div>
          <div class="nav-li" @click="tabAllNav(2)">
            <image class="nav-icon" src="https://frontendsvn.360che.com/icon-project/wap/app/TruckFriendCircle/images/video-btn.png"></image>
          </div>
          <div class="nav-li" @click="tabAllNav(3)">
            <image class="nav-icon" src="https://frontendsvn.360che.com/icon-project/wap/app/TruckFriendCircle/images/follow-btn.png"></image>
          </div>
        </div>
      </div>
      <list @loadmore="morenew" loadmoreoffset="50" class="slide">
        <refresh class="refresh" @refresh="onrefresh" @pullingdown="onpullingdown" :display="refreshing ? 'show' : 'hide'">
           <image style="width:160px;height:60px;" src="https://frontendsvn.360che.com/icon-project/wap/app/TruckFriendCircle/images/tau.gif"></image>
        </refresh>
        <cell v-for="(item,index) in newTab.DATA" class="row" keep-scroll-position="true">
          <list-centent :wrapcenter="item" :source="source" :index="index" :discuss="newTab.DATA"></list-centent>
        </cell>
        <cell>
            <div class="loading-wrap" v-if="!listend"><text class="loading">正在加载中...</text></div>
            <div class="list-end" v-if="listend"><text>已经到底了</text></div>
        </cell>  
      </list>
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

  import XHR from '../api'
  export default {
    components: { AppHeader, ListCentent,Confirm,MyManage,OtherManage,SuperManage},
    computed: {
      newTab () {return this.$store.state.newTab},
      user () {return this.$store.state.user},
      showManage () {return this.$store.state.changeManage},
      showconfirm () {return this.$store.state.confirm}
    },
    data () {
      return {
        refreshing: false,
        source:'home',     
        clientHeight:'',  
        loading:true,
        listend:false,
        showConfirm:false
      }
    },
    created(){
            var domModule = weex.requireModule('dom');
            domModule.addRule('fontFace',{
                'fontFamily':'iconfont',
                'src':"url(\'http://at.alicdn.com/t/font_qv5etitfumtb7qfr.ttf\')"
            })
            var newData=this.$store.state.newTab
            if(newData.DATA.length==0){
              var json={type:"ajax"} 
                this.$store.dispatch('GET_ALL_NEW',json)
            }
            this.clientHeight=weex.config.deviceHeight;
    },
    methods: {
      onrefresh (event) {
        this.refreshing = true
        var _this=this, json={type:"ajax"}
        XHR.getAllNew(json).then( function (res) {
          _this.newTab.DATA=res.data.log  
          _this.refreshing = false
        })
      },
      onpullingdown (event) {
        console.log('is onpulling down')
      },
      tabAllNav (nb) {
        this.$store.dispatch('ALL_NAV',nb)
        if (nb=="1") {
           this.jump(`/HomeNew`)
        }else if(nb=="2"){
           this.jump(`/HomeVideo`)
        }else if(nb=="3"){
           this.jump(`/HomeFollow`)
        }
      },
      morenew(){                                      //滚动加载更多最新
        var json={type:"ajax",startid:this.newTab.startid}
          var _this=this;
          if (this.loading) {
            this.loading=false
            XHR.getAllNew(json).then( function (res) {
                var data= res.data.log;
                for (var i = 0; i < data.length; i++) {
                  _this.newTab.DATA.push(data[i])
                }
                if (res.data.startid==undefined||res.data.startid=="" ) {
                  _this.loading=false
                  _this.listend=true
                }else{
                   _this.loading=true
                }
                _this.newTab.startid=res.data.startid
            })
          }
      },
    }
  }
</script>


<style scoped>
.wrapper{background-color: #f7f9fa;flex:1;}
.refresh-text{color: #888888;font-size: 24px;text-align: center;}
.slide{flex:1;}
.flow-btn{position: absolute;right: 36px;bottom: 126px; z-index: 5;}
.flow-icon{width: 108px;height: 112px;}
.tab-nav{background-color: #f7f9fa;height: 88px;padding-left: 30px;padding-right: 30px;flex-direction:row;justify-content: center;align-items: center;}
.nav-li{flex:1; flex-direction:row;justify-content: center;align-items: center;}
.nav-icon{width: 120px;height: 44px;}
.row{padding-bottom: 20px;background-color:#FAFBFC;}
.loading-wrap{justify-content: center;align-items: center;height: 88px;padding-top: 0}
.list-end{justify-content: center;align-items: center;height: 88px;padding-top: 0}
.refresh{justify-content: center;align-items: center;padding-top: 20px;padding-bottom: 20px;}
</style>
