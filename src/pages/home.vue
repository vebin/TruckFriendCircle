<template>
  <div>
    <text class="text" @click="isck">图标测试 &#xe643;</text>
    <text class="app">{{DATA}}</text>
    <more :show="isShow"></more>
  </div>
</template>


<script>
  var domModule = weex.requireModule('dom')
  const stream = weex.requireModule('stream')
  import More from '../components/more.vue'
  import XHR from '../api'

  export default {
    components: { More },
    computed: {
      DATA () {
        return this.$store.state.DATA
      }
    },
    data () {
      return {
        isShow: false,
      }
    },
    created () {
        domModule.addRule('font-face', {
          'font-family': "iconfont",
          'src' : "url('//at.alicdn.com/t/font_laj6s1or6t2r19k9.ttf')"
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


<style>
.text{
  font-family: iconfont;
  color: #333;
  font-size: 30px;

}
</style>
