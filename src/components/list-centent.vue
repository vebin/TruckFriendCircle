<template>
  <div class="main-list" @click="todetail">
      <list-header :header="wrapcenter" :source="source" :index="index" :discuss="discuss"></list-header>
      <div class="describe-wrap">
          <text class="describe-tag" v-if="Hot!=''" @click="skip(`DiscussDetail.weex.js?aid=${wrapcenter.topic_aid}`)">{{Hot}}</text>
          <text :class="[source=='detail' ? 'all-describe' :'describe']">{{title}}</text>
          <div v-for="(item,index) in link"><a :href="item"><text class="describe-tag">网页链接</text></a></div>
      </div>
      <list-share :share="wrapcenter"></list-share>
      <list-pic :picWrap="wrapcenter"></list-pic>
      <div class="video-wrap" v-if="wrapcenter.videoUrl" @disappear="stopVideo">
        <video :play-status="palyStatus" autoplay controls @start="onstart" class="video" :src="wrapcenter.videoUrl" @click="endPlay"></video>
        <div class="video-prew" v-if="palyStatus=='pause'" @click="startPlay">
          <image class="video-img" :src="wrapcenter.previewUrl"></image>
          <image class="video-play" src="https://frontendsvn.360che.com/icon-project/wap/app/TruckFriendCircle/images/video-play.png"></image>
        </div>
      </div>
      <text class="address">{{wrapcenter.address}}</text>
      <list-footer :footer="wrapcenter"></list-footer>
  </div>
</template>

<style scoped>
.main-list{padding-left:30px;padding-right:30px;padding-top:30px;background-color:#fff;box-shadow:0 1px 2px 0 rgba(0,0,0,0.10);}
.describe{font-size:32px;color:#333333;display:-webkit-box;text-overflow:ellipsis;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;lines:3;flex:1;}
.all-describe{font-size:32px;color:#333333;}
.address{font-size:24px;color:#999;line-height:36px;margin-bottom:24px;}
.video-wrap{margin-bottom:24px;height:515px;overflow:hidden;position:relative;width: 690px;}
.describe-wrap{margin-top:24px;margin-bottom: 24px;}
.video{flex: 1;}
.describe-tag{font-size:32px;color:#5086C2;}
.video-prew{position: absolute;left: 0;top:0;right: 0;bottom: 0;}
.video-img{width: 690px;height: 515px;}
.video-play{width: 120px;height: 120px;position: absolute;left:285px;top:192px; }
</style>
<script>
  import listHeader from './list-header.vue'
  import listShare from './list-share.vue'
  import listPic from './list-pic.vue'
  import listFooter from './list-footer.vue'
  var navigator = weex.requireModule('navigator')
  const storage = weex.requireModule('storage')
  const modal = weex.requireModule('modal')
  export default {
    props: {
      wrapcenter: {
        type: Object,
        required: true,
      },
      source:{
        type: String,
        required: true,
      },
      index:{
        type: Number,
        required: true
      },
      discuss:{
        type: Array,
        required: true,
      }
    },
    components: { listHeader,listShare,listPic,listFooter},
    created (){
        var Content= this.wrapcenter.content,
            reg = /(http:\/\/|https:\/\/)((\w|=|\?|\.|\/|&|-)+)/g;
            this.link=Content.match(reg)
          if (Content.indexOf("#",0)=="0" && Content.indexOf("#",1) > "1" ) {
            this.Hot="#"+Content.substring(1,Content.indexOf("#",1))+"#"
            this.title=Content.substring(Content.indexOf("#",1)+1).replace(reg,'')
          }else{
            this.title=Content.replace(reg,'')
          }
    },
    beforeUpdate (){
        var Content= this.wrapcenter.content,
            reg = /(http:\/\/|https:\/\/)((\w|=|\?|\.|\/|&|-)+)/g;
            this.link=Content.match(reg)
          if (Content.indexOf("#",0)=="0" && Content.indexOf("#",1) > "1" ) {
            this.Hot="#"+Content.substring(1,Content.indexOf("#",1))+"#"
            this.title=Content.substring(Content.indexOf("#",1)+1).replace(reg,'')
          }else{
            this.title=Content.replace(reg,'')
          }
    },
    data () {
      return {
        Hot:'',
        title:'',
        link:[],
        palyStatus:"pause"
      }
    },
    methods: {
      todetail(){
        if (this.source=='detail') {
          console.log(1)
        }else{
          this.skip(`detail.weex.js?aid=${this.wrapcenter.aid}`)
        }
      },
      startPlay(){
          this.palyStatus="play"
      },
      endPlay(){
        this.palyStatus="pause"
      },
      onstart(){
        modal.alert({message: "1"})
      },
      stopVideo(){
        this.palyStatus="pause"
      }
    }
  }
</script>
