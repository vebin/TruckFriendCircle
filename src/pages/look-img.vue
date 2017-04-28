<template>
<div class="look-img-wrap">
  <div class="header">
      <div class="close" @click="close"><text class="text back">&#xe6d6;</text></div>
      <div class="centent">
        <div><text class="text">{{index}}/</text></div>
        <div><text class="text">{{num}}</text></div>
      </div>
      <div class="down"><text class="text">保存</text></div>
    </div>
  <div class="wrapper">
       <slider class="slider" @change="change">
        <div class="frame" v-for="img in imageList">
          <image class="image" resize="cover" :src="img"></image>
        </div>
      </slider>
  </div>
</div>
</template>

<style scoped>
  .look-img-wrap{position: fixed;top: 0;left: 0;right: 0;bottom: 0;background-color: #000;}
  .wrapper{flex: 1;justify-content: center;align-items: center;}
  .back{font-family: iconfont;}
  .img{width: 700px;height: 300px;}
  .header{height: 88px;justify-content: center;align-items: center;flex-direction: row;padding-right:30px;}
  .close{width: 88px;align-items: center;justify-content: center;height: 88px;}
  .text{color:#fff;font-size: 36px;}
  .centent{flex: 1;align-items: center;flex-direction: row;justify-content: center;}
  .down{height: 88px;align-items: center;justify-content: center;}
   .image {
    width: 750px;
    height: 600px;
  }
  .slider {
    width: 750px;
    height: 600px;
  }
  .frame {
    width: 750px;
    height: 600px;
    position: relative;
  }
</style>
<script>
  const storage = weex.requireModule('storage')
  const modal = weex.requireModule('modal')
  var navigator = weex.requireModule('navigator')
  export default {
    data () {
      return {
        index:1,
        num:'',
        imageList:[],
        now:"",
        url:''
      }
    },
    created(){
      storage.getItem('imgs', event => {
          this.imageList = event.data.split(',')
          this.num=this.imageList.length
          // modal.alert({message: this.imageList})
        })
      // modal.alert({message: this.imageList})
      this.now=weex.config.bundleUrl.match(/index=(\w+)/)[1]
      this.url=weex.config.bundleUrl
    },
    methods: {
      change(event){
        // event.index=weex.config.bundleUrl.match(/index=(\w+)/)[1]
        this.index =event.index+ 1
        // event.index= event.index+ 1
      },
      close(){
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
