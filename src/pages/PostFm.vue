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
      <textarea class="textarea" @input="oninput" @change="onchange" @focus="onfocus" @blur="onblur" placeholder="分享新鲜事……"></textarea>
    </div>
  </div>
</template>

<script>
  const modal = weex.requireModule('modal')
  export default {
    data () {
      return {
        isShow: true,
      }
    },
    methods: {
      oninput (event) {
        console.log('oninput:', event.value)
        modal.toast({
          message: `oninput: ${event.value}`,
          duration: 0.8
        })
      },
      onchange (event) {
        console.log('onchange:', event.value)
        modal.toast({
          message: `onchange: ${event.value}`,
          duration: 0.8
        })
      },
      onfocus (event) {
        console.log('onfocus:', event.value)
        modal.toast({
          message: `onfocus: ${event.value}`,
          duration: 0.8
        })
      },
      onblur (event) {
        console.log('onblur:', event.value)
        modal.toast({
          message: `input blur: ${event.value}`,
          duration: 0.8
        })
      }
    }
  }
</script>
<style scoped>
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
</style>
