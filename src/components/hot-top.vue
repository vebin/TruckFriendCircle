<template>
  <div>
      <list class="top-list">
        <cell class="top-cell" v-for="(item, index) in lists">
          <div class="top-panel">
            <text :class="[tuiguang? 'extend to-top' : 'to-top']">置顶</text> 
            <text class="text">{{item}}</text>
          </div>
        </cell>
      </list>
  </div>
</template>

<style scoped>
.top-list{
          padding-left: 30px;
          padding-right: 30px;
          padding-top: 12px;
          padding-bottom: 12px;
          background: #fff
        }
.top-panel{
          flex-direction: column;
          justify-content: center;
          padding-left: 80px;
          padding-top: 12px;
          padding-bottom: 12px;
          line-height: 42px;
          position:relative;
        }
.to-top{
      position: absolute;
      left: 0px;
      top:12px;
      line-height: 42px;
      background-color: #FF9C37;
      font-size: 24px;
      color: #fff;
      width: 60px;
      text-align: center;
      border-bottom-left-radius:5px;
      border-bottom-right-radius:5px;
      border-top-left-radius:5px;
      border-top-right-radius:5px;
    }
  .extend{
    background: #1571E5;
  }
</style>
<script>
  export default {
    data () {
      return {
        lists: [1, 2, 3],
        tuiguang:false
      }
    },
    methods: {
    }
  }
</script>
