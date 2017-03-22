<template>
  <div class="video-share">
      <image src="https://img6.kcimg.cn/bbs/month_1703/1703210950cf697d7866962844.jpg!200" class="share-video-pic"></image> 
      <div class="share-text-wrap">
         <text class="share-video-text">狂野绅士依维柯全新Dai狂野绅士依维柯全新Dail狂野绅士依维柯全新Dail狂野绅士依维柯全新Dail狂野绅士依维柯全新Daill</text>  
      </div>
  </div>
</template>
<style scoped>
.video-share{
  flex-direction:row;
  background-color: #F7F7F7;
  margin-top: 24px;
}
.share-video-pic{
  width: 110px;
  height: 110px;
}
.share-text-wrap{
  padding-left: 20px;
  padding-right: 20px;
  flex: 1;
  justify-content:center;
}
.share-video-text{
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  overflow: hidden;
  lines: 2;
  line-height: 42px;
  font-size: 28px;
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
