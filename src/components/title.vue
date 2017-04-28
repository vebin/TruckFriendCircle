<template>
  <div class="header">
      <div class="back" @click="back"><text class="back-text">&#xe6d6;</text></div>
      <div class="title"><text class="text">{{title}}</text></div>
  </div>
</template>

<style scoped>
  .header{height: 88px;flex-direction: row;justify-content: center;align-items: center;border-bottom-color: #e5e5e5;border-bottom-style: solid;border-bottom-width: 1px;}
  .back{height: 88px;width: 88px;justify-content: center;align-items: center;}
  .back-text{color: #1571E5;font-family: iconfont;font-size: 36px;}
  .title{flex:1;justify-content: center;align-items: center;margin-right: 88px;}
  .text{font-size: 36px;}
</style>

<script>
  var navigator = weex.requireModule('navigator')
  export default {
    props:['title','url'],
    data () {
      return {
      }
    },
    methods: {
      back(){
          navigator.pop({
            url: this.url,
            animated: "true"
          }, event => {
              console.log(1)
          })
      },
    }
  }
</script>
