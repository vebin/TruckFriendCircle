<template>
  <div class="commont-view">
    <app-header></app-header>
    <!-- <text class="text" @click="isck">.</text>
    <text class="app">{{DATA}}</text> -->
<!--     <more :show="isShow"></more> -->
    <div class="flow-btn" @click="jump('/postfm')">
      <text></text>
      <text>发布</text>
    </div>
  </div>
</template>


<script>
  var domModule = weex.requireModule('dom')
  import AppHeader from '../components/app-header.vue'
  // import More from '../components/more.vue'
  import XHR from '../api'

  export default {
    components: { AppHeader },
    computed: {
      DATA () {
        return this.$store.state.DATA
      }
    },
    data () {
      return {
        isShow: true,
      }
    },
    created () {
        domModule.addRule('font-face', {
          'font-family': "iconfont",
          'src' : "url('http://at.alicdn.com/t/font_amfmr26e6l9jm7vi.ttf')"
        })
    },
    methods: {
      isck(){
        XHR.isCK().then( function (res) {
          console.log(res,2323)
        })

        this.$store.dispatch('IS_CK')

      }
    }
  }




</script>


<style scoped>
.commont-view {
    background-color: #FAFBFC;
}
.ffm{
  font-family: iconfont;
}
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
</style>
