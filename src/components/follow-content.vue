<template>
<div>
  <scroller class="scroller follow-wrap" >
    <div class="follow-content">
        <image src="https://img2.kcimg.cn/help360che/3b94145c624b4a7f8566ea0a2f1355ec.jpg_180xx.jpg" class="follow-avatar"></image>
        <div class="follow-name"><text>幸福时光</text></div>
        <div><image class="follow-btn" src="https://frontendsvn.360che.com/icon-project/wap/app/TruckFriendCircle/images/add-follow.png"></image></div>
        <!-- <div><text class="follow-add follow-btn">加关注</text></div> -->
    </div>
    <div class="follow-content">
        <image src="https://img2.kcimg.cn/help360che/3b94145c624b4a7f8566ea0a2f1355ec.jpg_180xx.jpg" class="follow-avatar"></image>
        <div class="follow-name"><text>幸福时光</text></div>
        <div><image class="follow-btn" src="https://frontendsvn.360che.com/icon-project/wap/app/TruckFriendCircle/images/follow-ok.png"></image></div>
        <!-- <div><text class="follow-success follow-btn">已关注</text></div> -->
    </div>
    <div class="follow-content">
        <image src="https://img2.kcimg.cn/help360che/3b94145c624b4a7f8566ea0a2f1355ec.jpg_180xx.jpg" class="follow-avatar"></image>
        <div class="follow-name"><text>幸福时光</text></div>
        <div><image class="follow-btn" src="https://frontendsvn.360che.com/icon-project/wap/app/TruckFriendCircle/images/follow.png"></image></div>
        <!-- <div><text class="follow-mutual follow-btn">互相关注</text></div> -->
    </div>
  </scroller>
</div>
</template>

<style scoped>
    .follow-wrap{
      padding-left: 30px;
      background-color: #fff;
    }
    .follow-content{
      flex-direction: row;
      padding-top: 30px;
      padding-bottom: 30px;
      padding-right: 30px;
      border-bottom-width: 1px;
      border-bottom-style: solid;
      border-bottom-color: #f5f5f5;
      align-items:center;
    }
    .follow-avatar{
      width: 72px;
      height: 72px;
      border-radius: 50%;
      margin-right: 20px;
    }
    .follow-name{
      flex: 1;
    }
    .follow-btn{
      width: 130px;
      height: 60px;
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
