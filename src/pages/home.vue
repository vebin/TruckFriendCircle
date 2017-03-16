<template>
  <div>
    <text class="text app">图标测试 &#xe643;</text>
    <text class="app">框架依附样式测试22</text>
    <more show="true" top="true"></more>
  </div>
</template>



<script>
  var domModule = weex.requireModule('dom')
  import More from '../components/more.vue'

  export default {
    components: { More },
    data () {
      return {
        sliders: []
      }
    },
    created () {
        domModule.addRule('font-face', {
          'font-family': "iconfont",
          'src' : "url('//at.alicdn.com/t/font_laj6s1or6t2r19k9.ttf')"
        })
    },
    methods: {

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
