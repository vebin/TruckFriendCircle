<template>
    <div class="main-header">
        <div class="avatar-wrap">
          <image src="https://i.kcimg.cn/data/avatar/new/82/11d7af1c2b2b16c34c27fcc270357653_big.jpg-50x50.jpg" class="avatar"></image>
          <image v-if="!blueV" src="https://frontendsvn.360che.com/icon-project/wap/app/TruckFriendCircle/images/blue-grade.png" class="addV"></image>
          <image v-if="blueV" src="https://frontendsvn.360che.com/icon-project/wap/app/TruckFriendCircle/images/orange-grade.png" class="addV"></image>
        </div>
        <div class="user-information">
            <text class="name">大连卡车司机车司...</text>
            <image class="grade" src="https://frontendsvn.360che.com/icon-project/wap/app/TruckFriendCircle/images/greade10.png"></image>
            <image class="rich" src="https://s.kcimg.cn/m/images/bbs/wechat/user/rich.png"></image>
            <image class="first-rich" src="https://s.kcimg.cn/m/images/bbs/wechat/user/rich-first.png"></image>
            <div class="old-driver">
              <image src="https://i.kcimg.cn/data/avatar/new/82/11d7af1c2b2b16c34c27fcc270357653_big.jpg-50x50.jpg" class="old-driver-avatar"></image>
              <image src="https://s.kcimg.cn/m/images/bbs/wechat/user/driver.png" class="old-driver-bg"></image>
            </div>
        </div>
        <text class="time">1分钟前</text>
        <text class="manage">&#xe6d2;</text>
    </div>
</template>
<style scoped>
  .main-header{
    position: relative;
    padding-left: 90px;
    height: 72px;
  }
  .user-information{
    height: 48px;
    font-size: 32px;
    flex-direction:row;
  }
  .name{
    color: #2062A9;
    line-height: 48px;
  }
  .avatar-wrap{
    position: absolute;
    left: 0;top:0;
  }
  .avatar{
    width: 72px;
    height: 72px;
    border-radius: 50%;
  }
  .addV{
    position: absolute;
    bottom: 0;
    right: 0;
    width: 24px;
    height: 24px;
  }
  .grade{width:60px;height:30px;margin-top: 9px;margin-left: 10px;}
  .rich{
    width: 30px;
    height: 30px;
    margin-top: 9px;margin-left: 10px;
  }
  .first-rich{
    width: 36px;
    height: 30px;
    margin-top: 9px;margin-left: 10px;
  }
  .old-driver{
    width: 44px;
    height: 30px;
    margin-top: 9px;margin-left: 10px;
    position: relative;
  }
  .old-driver-avatar{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    position: absolute;left: 7px;
  }
  .old-driver-bg{
    position: absolute;
    z-index: 2;
    bottom: -4px;
    left:0;
    width: 44px;
    height: 12px;
  }
  .time{
    font-size: 24px;
    color: #999999;
    line-height: 24px;
  }
  .manage{
    font-family: iconfont;
    position: absolute;
    right: 0px;
    bottom:20px;
    font-size: 32px;
    color: #D4D7DD;
  }
</style>
<script>
  export default {
    data () {
      return {
        blueV:false
      }
    },
    methods: {
    }
  }
</script>
