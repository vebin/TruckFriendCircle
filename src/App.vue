<template>
  <div @androidback="back">
    <router-view style="flex:1"></router-view>
  </div>
</template>

<script>
  var domModule = weex.requireModule('dom')
  export default {
    methods: {
      created: function() {
        domModule.addRule('font-face', {
          'font-family': "iconfont",
          'src' : "url('//at.alicdn.com/t/font_laj6s1or6t2r19k9.ttf')"
        })
      },
      back: function () {
        this.$router.back()
      }
    }
  }
</script>

<style scoped>
 /* import './css/common.css'*/
</style>
