<template>
  <div class="main-list">
      <list-header></list-header>
      <div class="describe-wrap">
          <a href=""><text class="describe-tag">＃母亲节的礼物＃</text></a>
          <text class="describe">长途跋涉、风餐露宿的卡友在谨慎驾驶的同时还要时刻留意，因“被追尾”而造成重人员伤亡意外事。</text>
          <a href=""><text class="describe-tag">网页链接</text></a>
      </div>
      <list-share></list-share>
      <list-pic></list-pic>
      <div class="video-wrap">
        <video class="video" src="http://flv2.bn.netease.com/videolib3/1611/01/XGqSL5981/SD/XGqSL5981-mobile.mp4"></video>
      </div>
      <text class="address">苏州市·中国江苏省苏州市吴中区星杭街</text>
      <list-footer></list-footer>
  </div>
</template>

<style scoped>
.main-list{
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 30px;
  background-color: #fff;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,0.10);
}
.describe{
  font-size: 32px;
  color: #333333;
  margin-top: 24px;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  lines: 2;
  flex: 1;
}
.address{
  font-size: 24px;
  color: #999;
  line-height: 36px; 
  margin-bottom: 24px;
}
.video-wrap{
   margin-bottom: 24px;
   height: 516px;
   overflow: hidden;
   position: relative;
}
.describe-wrap{
  flex-direction: row;
  flex-wrap:wrap;
}
.video{
     height: 516px;
  } 
.describe-tag{
  font-size: 32px;
  color: #5086C2;
}
</style>
<script>
  import listHeader from './list-header.vue'
  import listShare from './list-share.vue'
  import listPic from './list-pic.vue'
  import listFooter from './list-footer.vue'
  export default {
    components: {listHeader,listShare,listPic,listFooter},
    data () {
      return {
      }
    },
    methods: {

    }
  }
</script>
