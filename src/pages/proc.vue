<template>
  <div>
    <div class="head-box">
      <text class="ffm">&#xe6d6;</text>
      <div class="head-item">
        <div class="msg">
          <text class="head-msg">关注</text><text class="head-msg">0</text>
        </div>
        <div>
          <image class="image" src="http://usr.im/55x55"></image>
          <text class="name">某某某</text>
        </div>
        <div class="msg">
          <text class="head-msg">粉丝</text><text class="head-msg">0</text>
        </div>
      </div>
      <text class="ffm">&#xe6d6;</text>
    </div>


    <div>
    
    </div>


    <div>
      <div>
        <text></text>
        <text>加关注</text>
      </div>
      <div>
        <text></text>
        <text>发消息</text>
      </div>
    </div>
  </div>
</template>

<script>
  const dom = weex.requireModule('dom')
  export default {
    created () {
        dom.addRule('font-face', {
          'font-family': "iconfont",
          'src' : "url('http://at.alicdn.com/t/font_amfmr26e6l9jm7vi.ttf')"
        })
    },
    methods: {
      back: function () {
        this.$router.back()
      }
    }
  }
</script>

<style scoped>
.ffm{font-family: iconfont;}
.image{width: 110px;height: 110px;border-radius: 110px;border-width: 4px;border-color: #fff;}
.head-box{
  height: 300px;
  background-color: #2062A9;
  flex-direction:row;
  justify-content: space-between;
  align-items: flex-start;
}
.head-item{
  padding-top: 60px;

  flex:1;
  flex-direction:row;
  justify-content: space-around;
  align-items: flex-start;
}
.msg{justify-content: center;align-items: center;}
.head-msg{
  color: #fff;
  font-size: 28px;
  line-height: 44px;
}
.name{color: #fff;
  font-size: 32px; margin-top: 24px;}
</style>
