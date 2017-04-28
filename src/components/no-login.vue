<template>
  <div>
      <image style="" src="https://frontendsvn.360che.com/icon-project/wap/app/TruckFriendCircle/images/no-login.png" class="no-login-bg"></image>
      <text class="login-text">登陆后</text>
      <text class="login-text-remind">才能看到您关注的卡友动态哦</text>
      <text class="login-button">立即登录</text>
  </div>
</template>

<style scoped>
    .no-login-bg{
      width: 400px;
      height: 280px;
      margin:140px auto 0;
    }
    .login-text{
      font-size: 36px;
      color: #666666;
      line-height: 56px;
      text-align: center;
    }
    .login-text-remind{
      font-size: 28px;
      color: #999;
      line-height: 44px;
      text-align: center;
    }
    .login-button{
      background-color: #1571E5;
      border-top-left-radius:5px;
      border-top-right-radius:5px;
      border-bottom-left-radius:5px;
      border-bottom-right-radius:5px;
      margin-top: 100px;
      margin-right: auto;
      margin-left: auto;
      width: 300px;height: 90px;
      text-align: center;
      color: #fff;
      line-height: 90px;
    }
</style>

<script>
  export default {
    data () {
      return {
      }
    },
    methods: {
    }
  }
</script>
