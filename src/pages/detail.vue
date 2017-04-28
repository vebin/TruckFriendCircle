<template>
<div class="wrapper">
  <div><title :title="title" :url="url"></title></div>
  <scroller class="wraper">
      <div v-for="(item, index) in detail">
        <list-centent :wrapcenter="item" :source="source" :index="index" :discuss="detail"></list-centent>
      </div>
     <div class="prise">
        <prise-people :zan="zanlist" :bbsaid="aid"></prise-people>
     </div>
     <div v-if="datanull"><no-reply v-if="commentList.length=='0'"></no-reply></div>
     <div class="comment">
         <div v-for="(item,index) in commentList" >
              <reply :comment="item" :comentName="comentName" :index="index" :commentList="commentList"></reply>
         </div>
         <div ref="newpull"></div>
     </div> 
  </scroller>
  <div class="comment-wrap">
       <input type="text" class="input" :placeholder="commentuser" ref="input" @input="oninput"/>
        <div class="comment-btn" @click="answer"><text class="coment-text">评论</text></div>
  </div>
</div>
</template>
<script>
  import Title from '../components/title.vue'
  import ListCentent from '../components/list-centent.vue'
  import PrisePeople from '../components/prise-people.vue'
  import NoReply from '../components/no-reply.vue'
  import Reply from '../components/reply.vue'
  import XHR from '../api'
  const storage = weex.requireModule('storage')
  const modal = weex.requireModule('modal')
  const dom = weex.requireModule('dom')
  export default {
    components: {ListCentent,PrisePeople,NoReply,Reply ,Title},
    data () {
      return {
        isShow: true,
        detail:[],
        zanlist:[],
        commentList:[],
        source:'detail',
        input:'',
        comentName:{},
        commentuser:'添加评论',
        json:{},
        datanull:false,
        aid:'',
        listend:false,
        title:'动态详情',
        url:''
      }
    },
    created (){
              var domModule = weex.requireModule('dom');
                  domModule.addRule('fontFace',{
                      'fontFamily':'iconfont',
                      'src':"url(\'http://at.alicdn.com/t/font_qv5etitfumtb7qfr.ttf\')"
                  })
                this.json.content=''
                this.url=weex.config.bundleUrl
                this.aid=weex.config.bundleUrl.match(/aid=(\w+)/)[1]
                this.json.aid=this.aid
                this.json.dx_aid=this.aid
              var _this=this;
              XHR.detail({"aid":this.aid}).then(function(res){
                var data=res.data.log
                _this.detail=res.data.log
               for (var i=0;i<data.length;i++){
                    _this.zanlist=data[i].zan_memberconcern
                    _this.commentList=data[i].comment_content
                }
                if (_this.commentList.length==0) {
                  _this.datanull=true
                }
              })
           
            this.comentName.reply=function(name,aid){
                _this.commentuser="回复："+name
                _this.json.aid=aid
            }
    },
    methods: {
      answer(){
          var _this=this
          var input = this.$refs.input;
          modal.toast({ message: '发表中', duration: 1 })
          XHR.answer(this.json).then(function(res){
            _this.commentList.push(res.data.result)
            input.blur()
            input.value=''
            _this.gonewPull()
            modal.toast({ message: '发表成功', duration: 1 })
          })
      },
      gonewPull (count) {
        const el = this.$refs.newpull
        dom.scrollToElement(el, {})
      },
      oninput(e){
        this.json.content=e.value
      },
    }
  }
</script>
<style scoped>
.wraper{background-color: #f7f9fa;position: relative;flex: 1}
.prise{margin-top: 20px;}
.comment{margin-top: 20px;}
.comment-wrap{background-color: #fff; height: 100px;padding-top: 20px; padding-left: 30px;padding-right: 30px; padding-bottom: 20px;flex-direction: row;box-shadow: 0 -2px 5px 0 rgba(0,0,0,0.05);}
.input{flex: 1;height: 60px;
    border-top-left-radius:5px;
      border-top-right-radius:5px;
      border-bottom-left-radius:5px;
      border-bottom-right-radius:5px;
  margin-right: 30px;border-style: solid;border-width: 1px;border-color: #e5e5e5;padding-left: 20px;padding-right: 20px;}
.comment-btn{border-style: solid;border-width: 1px;border-color: #2062A9;width: 120px;align-items: center;justify-content: center;border-top-left-radius:5px;
      border-top-right-radius:5px;
      border-bottom-left-radius:5px;
      border-bottom-right-radius:5px;}
.coment-text{color: #2062A9;}
.loading-wrap{justify-content: center;align-items: center;height: 88px;padding-top: 0;flex-direction: row;}
.list-end{justify-content: center;align-items: center;height: 88px;padding-top: 0}
</style>
