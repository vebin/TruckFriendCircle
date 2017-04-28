<template>
  <div class="set-wrap">
     <div><title :title="title" :url="url"></title></div>
      <div class="title-wrap"><text class="title">系统设置</text></div>
      <div class="set-content">
        <div class="set-list">
          <div style="flex:1"><text class="text">图片缓存</text></div>
          <text class="delete">清除</text>
        </div>  
        <div class="set-list" @click="skip(`feedback.weex.js?uid=${uid}&version=${version}`)">
          <div style="flex:1"><text class="text">意见反馈</text></div> 
          <text class="right">&#xe6e6;</text>
        </div>
        <div class="set-list" @click="skip('about.weex.js')">
          <div style="flex:1"><text class="text">关于我们</text></div>
          <text class="right">&#xe6e6;</text>
        </div> 
        <div class="set-list">
          <div style="flex:1"><text class="text">当前版本 {{version}}</text></div> 
        </div>
      </div>
      <div class="quit">
        <text class="quit-text">退出登录</text>
      </div>
  </div>
</template>

<style scoped>
    .set-wrap{background-color: #f7f9fa;}
    .title-wrap{justify-content: center; height: 60px;padding-left: 30px;}
    .title{color: #1571E5;font-size: 24px;}
    .set-content{padding-left: 30px;background-color: #fff;}
    .set-list{height: 88px;border-bottom-style: solid;border-bottom-width: 1px;border-bottom-color: #eee;padding-right: 30px;flex-direction: row;align-items: center;}
    .text{font-size: 32px;}
    .right{font-family: iconfont}
    .delete{color: #1571E5;font-size: 28px;}
    .quit{align-items: center;justify-content: center;margin-top: 60px;}
    .quit-text{font-size: 32px;color: #fff;width: 630px;height: 88px;background-color: #F7411C;text-align: center;line-height: 88px;}
</style>

<script>
  import Title from '../components/title.vue'
  export default {
    components: {Title},
    data () {
      return {
        version:'',
        uid:'0',
        title:'更多设置',
        url:''
      }
    },
    created (e) {
       this.uid=weex.config.bundleUrl.match(/uid=(\w+)/)[1]
       this.url=weex.config.bundleUrl
       // this.version=this.user.version
    },
    methods: {

    }
  }
</script>
