<template>
  <div class="follow-wrap" >
    <div class="follow-content">
        <image :src="people.avatar" class="follow-avatar"></image>
        <div class="follow-name"><text>{{people.username}}</text></div>
        <div v-if="people.uid!=uid">
            <div v-if="people.concern=='no'||uid=='0'" @click="addfollow(people,peoplelist,index)">
              <image class="follow-btn" src="https://frontendsvn.360che.com/icon-project/wap/app/TruckFriendCircle/images/add-follow.png"></image>
            </div>
            <div v-if="people.concern=='yes'&&people.concernReverse=='no'" @click="cancelfollow(people,peoplelist,index)">
              <image class="follow-btn" src="https://frontendsvn.360che.com/icon-project/wap/app/TruckFriendCircle/images/follow-ok.png"></image>
            </div>
            <div v-if="people.concern=='yes'&&people.concernReverse=='yes'">
              <image class="follow-btn" src="https://frontendsvn.360che.com/icon-project/wap/app/TruckFriendCircle/images/follow.png"></image>
            </div>
        </div>
    </div>
  </div>
</template>

<style scoped>
    .follow-wrap{
      padding-left: 30px;
      background-color: #fff;
    }
    .follow-content{
      flex-direction: row;
      padding-top: 30px;
      padding-bottom: 30px;
      padding-right: 30px;
      border-bottom-width: 1px;
      border-bottom-style: solid;
      border-bottom-color: #f5f5f5;
      align-items:center;
    }
    .follow-avatar{
      width: 72px;
      height: 72px;
      border-top-left-radius:36px;
      border-top-right-radius:36px;
      border-bottom-left-radius:36px;
      border-bottom-right-radius:36px;
      margin-right: 20px;
    }
    .follow-name{
      flex: 1;
    }
    .follow-btn{
      width: 130px;
      height: 60px;
    }
</style>
<script>
  import XHR from '../api'
  const storage = weex.requireModule('storage')
  const modal = weex.requireModule('modal')
  export default {
    props:["people","peoplelist","aid"],
    computed: {
      showconfirm () {return this.$store.state.confirm},
    },
    data () {
      return {
        uid:'0',
      }
    },
    created(){
      // modal.alert({message: this.people})
      storage.getItem('uid', event => {
          this.uid = event.data
        })
    },
    methods: {
      addfollow(object,content,index){
         var _this=this
         if (this.uid=='0') {
            modal.alert({message: '未登录'})
         }else{
            XHR.addfollow({"aid":object.aid}).then(function(res){
                if (res.data.status=="1") {
                    object.concern="yes"
                }
            })
         }
      },
      cancelfollow(object,content,index){
        this.$store.dispatch('confirm',true)
        var NowData={object:object,Array:content}
            this.$store.dispatch('Nowlog',NowData)
      },
    }
  }
</script>
