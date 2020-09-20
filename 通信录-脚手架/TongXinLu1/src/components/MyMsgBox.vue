<template>
  <div id="mymsgbox" ref="mymsgbox">
    <div class="content">
      <div>通话</div>
      <div>
        <div :class="sex='male'?'msghead male':'msghead female'"></div>
        <div>
          姓名：{{name}} <br/>
          号码：{{phone}}
        </div>
      </div>
      <div>
        <button @click="callClick">呼叫</button>
        <button @click="cancelClick">取消</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'mymsgbox',
  }
</script>

<style>
  /* 消息框的样式=================================================*/
  #mymsgbox{
    width:100%;
    height:2000px;
    position: fixed;
    top:0px;
    left:0px;
    background-color: rgba(0,0,0,0.5);
    z-index:20;
  }
  .content{
    width:80%;
    height:400px;
    background-color: white;
    border-radius: 10px;
    margin: 80px auto;
  }
  .content>div:nth-of-type(1){
    height: 15%;
    line-height: 62px;
    width: 100%;
    border: 1px solid gray;
    text-align: center;
    font-size: 26px;
  }
  .content>div:nth-of-type(2){
    height: 68%;
    width: 100%;
    border: 1px solid gray;
    text-align: center;
    font-size: 20px;
  }
  .content>div:nth-of-type(3){
    height: 15%;
    line-height: 62px;
    width: 100%;
    text-align: center;
    font-size: 20px;
  }
  .content>div button{
    font-size: 20px;
    padding: 5px 15px 5px 15px;
  }
  .msghead{
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 5px solid gray;
    margin:10px auto;
    animation: rotHead 5s linear infinite;
  }
  @keyframes rotHead {
    0%{
      transform: rotate(0deg);
    }
    100%{
      transform: rotate(360deg);
    }
  }
</style>
