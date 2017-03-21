<template>
  <div class="header">
    <div class="logo" @click="jump('/Proc')">
      <image class="image" src="http://usr.im/36x36"></image>
    </div>

    <div class="nav">
      <div class="link" @click="hotAc(1)">
        <text class="title" :class="{active: tabAll == '1'}">热门</text>
      </div>
      <div class="link" @click="hotAc(2)">
        <text class="title" :class="{active: tabAll == '2'}">全部</text>
      </div>
      <div class="link" @click="hotAc(3)">
        <text class="title" :class="{active: tabAll == '3'}">附近</text>
      </div>
    </div>

    <div class="add-btn" @click="jump('/')">
      <text class="ffm">&#xe6d4;</text>
    </div>
  </div>
</template>
<script>
  const modal = weex.requireModule('modal')
  const dom = weex.requireModule('dom')
  export default {
    data () {
      return {
        rows: []
      }
    },
    computed: {
      tabAll () {return this.$store.state.tabAll}
    },
    created () {
      for (let i = 0; i < 30; i++) {
        this.rows.push('row ' + i)
      }
    },
    methods: {
      hotAc (nb) {
        this.$store.dispatch('TAB_ALL',nb)
      },
    }
  }
</script>
<style scoped>
  .ffm{
    font-family: iconfont;
    font-size: 36px; color: #1571e5; line-height: 88px;
  }
  .header {
    position: relative;
    height: 88px;
    background-color: #FAFBFC;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .logo {
    width: 72px;
    height: 72px;
    padding-left: 30px;
  }
  .add-btn{
    width: 72px;
    height: 72px;
    padding-right: 30px;
    align-items:center;
    justify-content:center;
  }
  .image {
    width: 72px;
    height: 72px;
    border-radius: 72px;
  }
  .nav {
    height: 88px;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
  }
  .link {
    margin-left: 30px;
    margin-right: 30px;
    height: 84px;
  }
  .title {
    font-size: 30px;
    line-height: 84px;
    color: #333;
  }
  .active{
    font-size: 36px;
    color: #1571E5;
    border-bottom: 4px solid #1571E5;
  }

  
</style>
