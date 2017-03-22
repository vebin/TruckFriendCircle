<template>
    <div class="pic-wrap">
        <image :src="item" class="pic-wrap-pic" v-for="item in PicWrap"></image>
    </div>
</template>
<style scoped>
.pic-wrap{
  flex-direction:row;
  display:flex;
  flex-wrap:wrap;
  justify-content:space-between;
  align-items:center;
  padding-top: 24px;
  padding-bottom: 14px;
}
.pic-wrap-pic{
  height: 224px;
  width: 224px;
  margin-bottom: 10px;
}
</style>
<script>
  export default {
    data () {
      return {
        PicWrap: [
            "https://img6.kcimg.cn/bbs/month_1703/1703201529dadd81f3b5558f15.jpg!200",
            "https://img6.kcimg.cn/bbs/month_1703/1703201529dadd81f3b5558f15.jpg!200",
            "https://img6.kcimg.cn/bbs/month_1703/1703201529dadd81f3b5558f15.jpg!200",
            "https://img6.kcimg.cn/bbs/month_1703/1703201529dadd81f3b5558f15.jpg!200",
            "https://img6.kcimg.cn/bbs/month_1703/1703201529dadd81f3b5558f15.jpg!200",
            "https://img6.kcimg.cn/bbs/month_1703/1703201529dadd81f3b5558f15.jpg!200"
        ]
      }
    },
    methods: {
    }
  }
</script>
