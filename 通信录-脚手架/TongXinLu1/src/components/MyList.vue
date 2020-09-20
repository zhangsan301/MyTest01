<template>
  <div id="mylist">
    <div>
      <ul>
        <li v-for="item in persons">
          <div class="indexChar">{{item.index}}</div>
          <ul>
            <li @click="nameClick(it)" v-for="it in item.group1">
              <div :class="it.sex=='male'?'divHead male':'divHead female'"></div>
              <div>{{it.name}}</div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="allChars" ref="allChars">
      <ul>
        <li v-for="item in allIndex" @click="clickIdx(item)">{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import mymsgbox from './MyMsgBox.js'
  export default {
    name: 'mylist',
    props:{
      persons:{
        type:Array,
        default:[]
      }
    },
    computed:{
      allIndex : function () {
        var list = [];
        for(var i = 0; i < this.persons.length; i++){
          list.push(this.persons[i].index);
        }
        return list;
      }
    },
    methods:{
      clickIdx:function(item){
        var divs = document.getElementsByClassName("indexChar");
        for(var i = 0; i < divs.length; i++){
          if(divs[i].innerText == item){
            var topvalue = divs[i].offsetTop;
            document.body.scrollTop = topvalue;
            // 兼容浏览器
            if(document.body.scrollTop == 0){
              document.documentElement.scrollTop = topvalue;
            }
            break;
          }
        }
      },
      nameClick:function(it){
        mymsgbox({
          name:it.name,
          phone:it.phone,
          sex:it.sex,
          callClick: function (ev) {
            alert("打电话给" + it.name
              + "\r\n号码是：" + it.phone);
          },
          cancelClick: function (ev) {
            var div = document.getElementById("mymsgbox")
            document.body.removeChild(div)
          },
        });
      }
    },
    mounted: function () {
      var winHeight = window.innerHeight;
      var divHeight = this.$refs.allChars.offsetHeight;
      var half = (winHeight - 50 - divHeight) / 2;
      this.$refs.allChars.style.marginTop = (half + 50) + 'px';
    }
  }
</script>

<style>
  /* 列表的样式=================================================*/
  #mylist{
    width:100%;
    position: absolute;
    left: 0px;
    top:50px;
  }
  /*每一组索引的样式*/
  .indexChar{
    height: 50px;
    line-height: 50px;
    width: 100%;
    background-color: #cccccc;
    font-size: 20px;
    text-indent: 10px;
    border-bottom: 1px solid grey;
  }
  /*每一个联系人的样式*/
  .indexChar+ul>li{
    height: 80px;
    line-height: 80px;
    width: 100%;
    background-color: white;
    font-size: 20px;
    border-bottom: 1px solid grey;
  }
  .divHead{
    width:50px;
    height: 50px;
    border-radius:50% ;
    border: 5px solid gray;
    float: left;
    margin: 9px 10px 5px 10px;
  }
  /*男生头像*/
  .male{
    background: url("../assets/male.jpg") 0 0 no-repeat;
    background-size: contain;
  }
  /*女生头像*/
  .female{
    background: url("../assets/female.jpg") 0 0 no-repeat;
    background-size: contain;
  }

  .allChars{
    width:40px;
    /*background-color: pink;*/
    position: fixed;
    font-size: 24px;
    right:5px;
    top:0px;
  }
</style>
