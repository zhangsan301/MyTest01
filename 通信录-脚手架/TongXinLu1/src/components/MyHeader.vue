<template>
  <div id="myheader">
    <button @click="backClick">返回</button>
    {{dataVue.titleName}}
    <button @click="homeClick">主页</button>
  </div>
</template>

<script>
  export default {
    name: 'myheader',
    props:["dataVue"],
    methods:{
      backClick: function (ev) {
        alert("返回按钮被点击");
      },
      homeClick: function (ev) {
        alert("主页按钮被点击");
      },
    }
  }
</script>

<style>
  /* 头部组件的样式=================================================*/
  #myheader{
    width:100%;
    height:50px;
    line-height:50px;
    color:white;
    background-color: grey;
    font-size: 20px;
    text-align: center;
    position: fixed;
    left: 0px;
    top:0px;
    z-index:10;
  }
  #myheader>button:nth-of-type(1){
    height:100%;
    padding: 5px 15px 5px 15px;
    font-size: 20px;
    float:left;
  }
  #myheader>button:nth-of-type(2){
    height:100%;
    padding: 5px 15px 5px 15px;
    font-size: 20px;
    float:right;
  }
</style>
