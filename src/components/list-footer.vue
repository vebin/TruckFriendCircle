<template>
  <div class="list-footer">
  <div class="list-footer-flex"><text class="icon">&#xe6cf;</text><text class="footer-text">点赞</text><text class="line">|</text></div>
      <div class="list-footer-flex"><text class="icon">&#xe6ce;</text><text class="footer-text">回复</text><text class="line">|</text></div>
      <div class="list-footer-flex"><text class="icon">&#xe6d1;</text><text class="footer-text">转发</text></div>
  </div>
</template>
<style scoped>
.list-footer{
  flex-direction:row;
  height: 100px;
  box-shadow: inset 0 0 0 0 rgba(229,229,229,0.50); 
  border-top-color:#E5E5E5;
  border-top-style:solid ;
  border-top-width: 1px;
}
.list-footer-flex{
  flex: 1;
  justify-content:center;
  align-items:center;
  flex-direction:row;
  position: relative;
}
.line{
  color: #e5e5e5;
  position: absolute;
  right: 0;
  top:38px;
  font-size: 24px;
}
.footer-text{
  font-size: 28px;
  color: #999;
}
.icon{
  font-family: iconfont;
  margin-right: 10px;
  font-size: 28px;
  color: #D4D7DD;
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
