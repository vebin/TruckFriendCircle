<template>
  <div class="commont-view">
    <div class="header">
      <div class="backs" @click="jump('/home')">
        <text class="blu">取消</text>
      </div>

      <div class="nav">
        <text class="nav">发布动态</text>
      </div>

      <div class="sub-btn" @click="jump('/')">
        <text class="blu">发送</text>
      </div>
    </div>
    <div>
      <textarea class="textarea" v-model="text" placeholder="分享新鲜事…" ></textarea>
    </div>
    
    <div class="addr">
      <div class="backs">
        <text class="ffm ico">&#xe6d8;</text>
      </div>

      <div class="add-ico" @click="jump('/home')">
        <text class="add-tit">当前位置</text>
        <text class="add-txt">中国中南海</text>
      </div>

      <div class="sub-btn">
        <text class="ffm">&#xe6d6;</text>
      </div>
    </div>

  </div>
</template>

<script>
  const domModule = weex.requireModule('dom')
  const modal = weex.requireModule('modal')
  export default {
    data () {
      return {
        text: '',
      }
    },
    created () {
        domModule.addRule('font-face', {
          'font-family': "iconfont",
          'src' : "url('http://at.alicdn.com/t/font_amfmr26e6l9jm7vi.ttf')"
        })
    },
    methods: {
      onchange (e) {
        modal.toast({
          message: 'oninput',
          duration: 0.8
        })
      },
      onfocus (e) {

      },
      onblur (e) {

      }
    }
  }
</script>
<style scoped>
  .ffm{ font-family: iconfont; }
  .commont-view {background-color: #FAFBFC;}
  .header {
    height: 88px;
    background-color: #FAFBFC;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .blu{ font-size: 36px; color: #1571e5; line-height: 88px;}
  .backs {
    height: 72px;
    padding-left: 30px;
    align-items:center;
    justify-content:center;
  }
  .sub-btn{

    height: 72px;
    padding-right: 30px;
    align-items:center;
    justify-content:center;
  }
  .nav {
    height: 88px;
    line-height: 88px;
    font-size: 36px; color: #333;
  }
  .textarea {
    height: 400px;
    font-size: 32px;
    background: #fff;
    padding-top: 30px;
    padding-bottom: 30px;
    padding-left: 30px;
    padding-right: 30px;
    color: #666666;
  }
  .ico{color: #66D020;}
  .addr{
    min-height: 100px;
    margin-top: 20px;
    background-color: #fff;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .add-ico{flex:1; padding-left: 20px;}
  .add-tit{font-size: 30px; color: #666;line-height: 30px;margin-bottom: 10px;}
  .add-txt{font-size: 24px; color: #999; line-height: 25px;}
</style>
