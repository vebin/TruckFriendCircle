<template>
<div>
  <div class="wrapper" v-if="loadend"> 
    <list class="pro-box" @loadmore="loadmore" loadmoreoffset="100">
      <cell>
        <user-header :fans="fans" :Nowuser="Nowuser" :avatar="avatar"></user-header>
      </cell>
      <cell class="row" keep-scroll-position="true" v-for="(item,index) in discuss">
          <list-centent :wrapcenter="item" :source="source" :index="index" :discuss="discuss"></list-centent>
      </cell>
      <cell v-if="!discuss.length=='0'" style="background-color:#f7f9fa">
        <div class="loading-wrap" v-if="!listend">
          <text class="loading">正在加载中</text>
        </div>
        <div class="list-end" v-if="listend">
          <text>已经到底了</text>
        </div>
      </cell> 
      <cell>
        <div v-if="discuss.length=='0'"><user-no-discuss :me="me"></user-no-discuss></div>
      </cell> 
    </list>
    <div class="follow-wrap" v-if="!me">
        <div class="follow-btn" v-if="Nowuser.concern=='no'||user.uid=='0'">
            <div class="follow-btn" @click="addfollow"><text class="follow-add">&#xe6d4;&nbsp&nbsp加关注</text></div>
            <div class="follow-btn to-news"><text class="news-icon">&#xe6d3;</text><text class="news-text">发消息</text></div>
        </div>
        <div class="follow-btn" v-if="Nowuser.concern=='yes'&&Nowuser.concernReverse=='no'">
            <div class="follow-btn" @click="cancelfollow(Nowuser)"><text class="follow-success">&#xe6d5;&nbsp&nbsp已关注</text></div>
            <div class="follow-btn to-news"><text class="news-icon">&#xe6d3;</text><text class="news-text">发消息</text></div>
        </div>
        <div class="follow-btn" v-if="Nowuser.concern=='yes'&&Nowuser.concernReverse=='yes'">
            <div class="follow-btn"><text class="follow-mutual">&#xe6dc;&nbsp&nbsp互相关注</text></div>
            <div class="follow-btn to-news"><text class="news-icon">&#xe6d3;</text><text class="news-text">发消息</text></div>
        </div>
    </div>
    <div><my-manage v-if="showManage=='me'"></my-manage></div>
    <div><other-manage v-if="showManage=='ather'"></other-manage></div>
    <div><super-manage v-if="showManage=='super'"></super-manage></div>
    <div><confirm v-if="showconfirm"></confirm></div>
  </div>
</div>
</template>

<script>
  import UserHeader from '../components/user-header.vue'
  import ListCentent from '../components/list-centent.vue'
  import Confirm from '../components/confirm.vue'
  import UserNoDiscuss from '../components/user-no-discuss.vue'
  import MyManage from '../components/my-manage.vue'
  import OtherManage from '../components/other-manage.vue'
  import SuperManage from '../components/super-manage.vue'
  const storage = weex.requireModule('storage')
  const modal = weex.requireModule('modal')
  const navigator = weex.requireModule('navigator')
  import XHR from '../api'
  export default {
    components: {UserHeader, ListCentent ,UserNoDiscuss ,Confirm ,MyManage,OtherManage,SuperManage},
    computed: {
      showManage () {return this.$store.state.changeManage},
      showconfirm () {return this.$store.state.confirm},
      user () {return this.$store.state.user},
    },
    data () {
      return {
        Nowuser:{},
        discuss:[],
        fans:{},
        source:'',
        avatar:'',
        loadend:false,        
        uid:'',             
        me:true,            //判断是不是自己
        loading:true,       //滚动加载
        page:2,             //页码
        listend:false,
        url:''
      }
    },
    created() {
       var domModule = weex.requireModule('dom'),
           _this=this;
          domModule.addRule('fontFace',{
              'fontFamily':'iconfont',
              'src':"url(\'http://at.alicdn.com/t/font_qv5etitfumtb7qfr.ttf\')"
          })
           // modal.alert({message: this.Nowuser.concern})
          this.uid=weex.config.bundleUrl.match(/uid=(\w+)/)[1]
          this.url=weex.config.bundleUrl
          if (this.uid!=this.user.uid) {
                  _this.me=false
              }
          XHR.getHis({"uid":this.uid}).then( function (res) {
            _this.Nowuser=res.data.user
            _this.discuss=res.data.log
            _this.fans=res.data.fans
            _this.avatar= _this.Nowuser.avatar
            _this.loadend=true
            if (_this.discuss.length<15) {
              _this.listend=true
            }
          })
    },
    methods: {
      loadmore(){
        let _this=this
          if (this.loading) {
            this.loading=false
            XHR.getHis({"uid":this.uid,"page":this.page}).then( function (res) {
               let data=res.data.log
               if (data.length==0||data.length<15) {
                 _this.loading=false
                 _this.listend=true
               }else{
                 _this.loading=true
               }
               for (var i = 0; i < data.length; i++) {
                 _this.discuss.push(data[i])
               }
               _this.page++
            })
          }
      },
      addfollow(){
         var _this=this
         if (this.uid=='0') {
              console.log("去登陆")
         }else{
            XHR.addfollow({"aid":this.Nowuser.aid}).then(function(res){
                if (res.data.status=="1") {
                  _this.Nowuser.concern="yes"
                }
              })
         }
      },
      cancelfollow(object,content,index){
        this.$store.dispatch('confirm',true)
        var NowData={object:object,index:index,Array:content}
            this.$store.dispatch('Nowlog',NowData)
      },
    }
  }
</script>

<style scoped>
  .wrapper{background-color: #f7f9fa;flex: 1; }
  
  .row{padding-bottom: 20px;background-color:#FAFBFC;}
  .follow-wrap{height: 100px;background-color: #fff;box-shadow: 0 -4px 10px 0 rgba(0,0,0,0.2);}
  .follow-btn{flex: 1;align-items: center;justify-content: center;flex-direction: row;}
  .follow-add{color: #1571e5;font-family: iconfont;font-size: 36px;}
  .follow-mutual{color: #F8B64E;font-family: iconfont;font-size: 36px;}
  .follow-success{color: #F86A4E;font-family: iconfont;font-size: 36px;}
  .pro-box{flex: 1;}
  .to-news{border-left-color: #e5e5e5;border-left-width: 1px;border-left-style: solid;}
  .news-text{color: #000;font-size: 36px;}
  .news-icon{margin-right: 20px;color: #000;font-family: iconfont;font-size: 36px;}
  .user-btn{padding-left: 10px;padding-right: 10px;padding-top: 10px;padding-bottom: 10px;font-size: 36px;color: #fff;}

.loading-wrap{justify-content: center;align-items: center;height: 88px;padding-top: 0}
.list-end{justify-content: center;align-items: center;height: 88px;padding-top: 0}
</style>
