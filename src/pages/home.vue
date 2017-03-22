<template>
  <div class="commont-view">
    <app-header></app-header>

    <div class="scroller" v-if="tabAll == '1' ? true : false">
      <list class="hot-scroller">
        <cell
          v-for="(name, index) in hotTab.DATA"
          append="tree"
          class="row"
          :ref="'item'+index"
          :index="index"
          @disappear="ondisappear"
          keep-scroll-position="true">
          <list-centent></list-centent>
        </cell>
      </list>
    </div>
    
    <div class="scroller" v-if="tabAll == '2' ? true : false">

      <div class="tab-nav">
        <div class="nav-li" @click="navAc(1)">
          <text class="ffm nav-ico" :class="{blue: allNav == '1'}">&#xe6d4;</text>
          <text class="nav-txt" :class="{blue: allNav == '1'}">最新</text>
        </div>
        <div class="nav-li" @click="navAc(2)">
          <text class="ffm nav-ico" :class="{blue: allNav == '2'}">&#xe6d4;</text>
          <text class="nav-txt" :class="{blue: allNav == '2'}">视频</text>
        </div>
        <div class="nav-li" @click="navAc(3)">
          <text class="ffm nav-ico" :class="{blue: allNav == '3'}">&#xe6d4;</text>
          <text class="nav-txt" :class="{blue: allNav == '3'}">关注</text>
        </div>
      </div>

      <list v-if="allNav == '1' ? true : false" class="nav-scroller">
        <cell
          v-for="(name, index) in newTab.DATA"
          append="tree"
          class="row"
          :index="index"
          keep-scroll-position="true">
          <list-centent></list-centent>
        </cell>
      </list>

      <list v-if="allNav == '2' ? true : false" class="nav-scroller">
        <cell
          v-for="(name, index) in vidTab.DATA"
          append="tree" 
          class="row"
          :index="index"
          keep-scroll-position="true">
          <list-centent></list-centent>
        </cell>
      </list>

      <list v-if="allNav == '3' ? true : false" class="nav-scroller">
        <cell
          v-for="(name, index) in folTab.DATA"
          append="tree"
          class="row"
          :index="index"
          keep-scroll-position="true">
          <list-centent></list-centent>
        </cell>
      </list>
    </div>


    <div class="scroller" v-if="tabAll == '3' ? true : false">

      <div class="tab-nav pd30">
        <div class="nav-li" @click="neaAc(1)">
          <text class="ffm nav-ico" :class="{blue: neaNav == '1'}">&#xe6d4;</text>
          <text class="nav-txt" :class="{blue: neaNav == '1'}">动态</text>
        </div>
        <div class="nav-li" @click="neaAc(2)">
          <text class="ffm nav-ico" :class="{blue: neaNav == '2'}">&#xe6d4;</text>
          <text class="nav-txt" :class="{blue: neaNav == '2'}">卡友</text>
        </div>
      </div>

      <list v-if="neaNav == '1' ? true : false" class="nav-scroller">
        <cell
          v-for="(name, index) in actTab.DATA"
          append="tree"
          class="row"
          :index="index"
          keep-scroll-position="true">
          <list-centent></list-centent>
        </cell>
      </list>

      <list v-if="neaNav == '2' ? true : false" class="nav-scroller">
        <cell
          v-for="(name, index) in felTab.DATA"
          append="tree"
          class="row"
          :index="index"
          keep-scroll-position="true">
          <list-centent></list-centent>
        </cell>
      </list>
    </div>

    <div class="flow-btn" @click="jump('/postfm')">
      <text></text>
      <text>发布</text>
    </div>

  </div>
</template>


<script>
  const dom = weex.requireModule('dom')
  import AppHeader from '../components/app-header.vue'
  import ListCentent from '../components/list-centent.vue'
  import XHR from '../api'

  export default {
    components: { AppHeader, ListCentent },
    computed: {
      // 热门新闻
      hotTab () {return this.$store.state.hotTab},
      // 全部－最新
      newTab () {return this.$store.state.newTab},
      // 全部－视频
      vidTab () {return this.$store.state.vidTab},
      // 全部－关注
      folTab () {return this.$store.state.folTab},
      // 附近－动态
      actTab () {return this.$store.state.actTab},
      // 附近－卡友
      felTab () {return this.$store.state.felTab},
      // 动态－卡友－状态
      neaNav () {return this.$store.state.neaNav},
      // 最新－视频－关注－状态
      allNav () {return this.$store.state.allNav},
      // 热门－全部－附近－状态
      tabAll () {return this.$store.state.tabAll}
    },
    data () {
      return {
        isShow: true,
        appearMin:1,
      }
    },
    created () {
        dom.addRule('font-face', {
          'font-family': "iconfont",
          'src' : "url('http://at.alicdn.com/t/font_amfmr26e6l9jm7vi.ttf')"
        })
    },
    methods: {
      neaAc (nb) {
        this.$store.dispatch('TAB_NEA',nb)
      },
      navAc (nb) {
        this.$store.dispatch('ALL_NAV',nb)
      },
      ondisappear(e) {
        console.log(e.target)
      },

      isck(){
        XHR.isCK().then( function (res) {
          console.log(res,2323)
        })
        this.$store.dispatch('IS_CK')
      },

      goto10 (count) {
        const el = this.$refs.item10[0]
        dom.scrollToElement(el, {})
      },
    }
  }
</script>


<style scoped>
.commont-view {
    background-color: #FAFBFC;
}
.ffm{font-family: iconfont;}
.flow-btn{
  position: fixed;
  right: 36px;
  bottom: 126px;
  width: 94px;
  height: 94px;
  border-radius: 94px;
  border: 2px solid #4798FF;
  background: #fff;
  justify-content: center;
  align-items: center;
}

.tab-nav{
  background-color: #FAFBFC;
  height: 88px;
  padding-left: 30px;
  padding-right: 30px;
  flex-direction:row;
  justify-content: center;
  align-items: center;
}
.pd30{  padding-left: 140px;
  padding-right: 140px;}
.nav-li{
  flex:1;
  flex-direction:row;
  justify-content: center;
  align-items: center;
}

.nav-txt{font-size: 28px; color: #666; padding-left: 16px;}
.nav-ico{font-size: 28px; color: #999;}

.blue{color: #1571E5;}
.nav-scroller{width: 750px; height: 1158px;}
.scroller {width: 750px; height: 1246px; background-color: #FAFBFC;}
.row{padding-bottom: 20px;background-color:#FAFBFC;}
.text {
  font-size: 45px;
  color: #666666;
}
  .indicator {
    width: 700px;
    height: 700px;
    item-color: green;
    item-selected-color: red;
    item-size: 50px;
    position: absolute;
    top: 200px;
    left: 200px;
  }
</style>
