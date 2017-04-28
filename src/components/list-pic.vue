<template>
    <div class="pic-wrap" v-if="show">
        <image :src="item" :class="[index==2||index==5||index==8 ? 'pic-wrap-list' : 'pic-wrap-pic']" v-for="(item, index) in picWrap.img" resize="cover" @click="showImg(index,picWrap.img)"></image>
    </div>
</template>
<style scoped>
.pic-wrap{
  flex-direction:row;
  display:flex;
  flex-wrap:wrap;
  /*justify-content:space-between;*/
  align-items:center;
  padding-bottom: 14px;
}
.pic-wrap-pic{
  height: 224px;
  width: 224px;
  margin-bottom: 10px;
  margin-right: 8px;
}
.pic-wrap-list{
  height: 224px;
  width: 224px;
  margin-bottom: 10px;
  margin-right: 0;
}
</style>
<script>
  const modal = weex.requireModule('modal')
  const storage = weex.requireModule('storage')
  export default {
    props: ['picWrap'],
    data () {
      return {
        show:true,
        Right:8
      }
    },
    created(){
      if (this.picWrap.length=="0") {
        this.show=false
      }
    },
    methods:{
      showImg(index,imgs){
         var imgslist=imgs.join(',')
         storage.setItem('imgs',imgslist)
         this.skip(`LookImg.weex.js?index=${index}`)
      },
    }
  }
</script>
