<template>
  <div class="add-wrap">
    <div><title :title="title" :url="url"></title></div>
    <div class="search" @click="skip(`search.weex.js`)">
        <text class="search-icon">&#xe6d7;</text><text class="search-btn">搜索</text>
    </div>
    <div class="truck-master">
        <div class="master-title">
            <image src="https://frontendsvn.360che.com/icon-project/wap/app/TruckFriendCircle/images/Praise.png" class="master-title-bg"></image>
            <text class="master-name">集赞达人</text>
        </div>
        <div class="master-list">
            <div class="master-people" v-for="item in setLike.topThree">
                <image class="master-avater" :src="item.avatar" @click="skip(`user.weex.js?uid=${item.uid}`)"></image>
                <text style="font-size:24px;line-height:36px;">{{item.username}}</text>
                <text style="font-size:24px;line-height:36px;color:#999">集赞：{{item.countZan}}</text>
            </div>
            <div class="master-people">
                <text class="more-master master-avater" style="border-color: #FF9D3A;color:#FF9D3A" @click="skip(`MoreTruckList.weex.js?type=1`)">更多</text>
            </div>
        </div>
    </div>
    <div class="truck-master">
        <div class="master-title">
            <image src="https://frontendsvn.360che.com/icon-project/wap/app/TruckFriendCircle/images/popularity.png" class="master-title-bg"></image>
            <text class="master-name">人气王子</text>
        </div>
        <div class="master-list">
            <div class="master-people" v-for="item in buzz.topThree">
                <image class="master-avater" :src="item.avatar" @click="skip(`user.weex.js?uid=${item.uid}`)"></image>
                <text style="font-size:24px;line-height:36px;">{{item.username}}</text>
                <text style="font-size:24px;line-height:36px;color:#999">粉丝：{{item.countFans}}</text>
            </div>
            <div class="master-people">
                <text class="more-master master-avater" style="border-color:#FFC20D;color:#FFC20D" @click="skip(`MoreTruckList.weex.js?type=2`)">更多</text>
            </div>
        </div>
    </div>
    <div class="truck-master">
        <div class="master-title">
            <image src="https://frontendsvn.360che.com/icon-project/wap/app/TruckFriendCircle/images/trends.png" class="master-title-bg"></image>
            <text class="master-name">动态狂魔</text>
        </div>
        <div class="master-list">
            <div class="master-people" v-for="item in dynamic.topThree">
                <image class="master-avater" :src="item.avatar" @click="skip(`user.weex.js?uid=${item.uid}`)"></image>
                <text style="font-size:24px;line-height:36px;">{{item.username}}</text>
                <text style="font-size:24px;line-height:36px;color:#999">动态：{{item.countdt}}</text>
            </div>
            <div class="master-people">
                <text class="more-master master-avater" style="border-color:#41C863;color:#41C863" @click="skip(`MoreTruckList.weex.js?type=3`)">更多</text>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
  import Title from '../components/title.vue'
  export default {
    components: {Title},
    computed: {
      // 集赞达人
      setLike () {return this.$store.state.setLike},
      // 人气王子
      buzz () {return this.$store.state.buzz},
      // 动态狂魔
      dynamic () {return this.$store.state.dynamic},
    },
    data () {
      return {
        title:'添加卡友',
        url:''
      }
    },
    created(){
        this.$store.dispatch('SET_LIKE')
        this.$store.dispatch('BUZZ')
        this.$store.dispatch('DYNAMIC')
        this.url=weex.config.bundleUrl
    },
    methods: {}
  }
</script>

<style scoped>
    .add-wrap{ min-height: 100%;background-color: #f7f9fa;}
    .search{margin-left: 30px;margin-top: 30px;margin-right: 30px;margin-bottom: 30px;position: relative;height: 70px;
        justify-content: center;align-items: center;background-color: #fff;
            border-top-left-radius:5px;
          border-top-right-radius:5px;
          border-bottom-left-radius:5px;
          border-bottom-right-radius:5px;
        flex-direction: row;}
    .search-btn{font-size: 28px; color: #B8B8B8;}
    .search-icon{font-family: iconfont; font-size: 28px;color: #B8B8B8;margin-right: 10px;}
    .truck-master{background-color: #fff;margin-bottom: 20px;}
    .master-title{position: relative; justify-content: center;align-items: center;padding-top: 20px;padding-bottom: 20px;}
    .master-title-bg{width: 240px;height: 60px;}
    .master-name{position: absolute;color: #fff;font-size: 24px;z-index: 5;text-align: center;top:35px;left: 0;right: 0;}
    .master-list{flex-direction: row;padding-bottom: 28px;box-shadow: 0 2px 4px 0 rgba(0,0,0,0.20);}
    .master-people{flex: 1;align-items: center;}
    .master-avater{width: 80px;height: 80px;border-radius: 40px;margin-top: 10px;margin-bottom: 10px;}
    .more-master{border-width: 1px;border-style: solid;text-align: center;line-height: 80px;font-size: 24px;}
</style>
