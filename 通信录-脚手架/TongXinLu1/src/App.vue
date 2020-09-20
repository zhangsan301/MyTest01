<template>
  <div id="app">
    <myheader :data-vue="dataVue"></myheader>
    <mylist :persons="persons"></mylist>
  </div>
</template>

<script>
  var dataOut = {
    titleName:"通信录"
  }
  var persons = [{index:"A",group1:[
    {name:"A张三1",phone:"18911111111",sex:"male"},
    {name:"A张三2",phone:"18922222222",sex:"female"},
    {name:"A张三3",phone:"18933333333",sex:"male"}]},
    {index:"B",group1:[
      {name:"B张三1",phone:"13911111111",sex:"male"},
      {name:"B张三2",phone:"13922222222",sex:"female"},
      {name:"B张三3",phone:"13933333333",sex:"female"}]},
    {index:"C",group1:[
      {name:"C张三1",phone:"17911111111",sex:"female"},
      {name:"C张三2",phone:"17922222222",sex:"female"},
      {name:"C张三3",phone:"17933333333",sex:"male"}]},
    {index:"D",group1:[
      {name:"D张三1",phone:"12911111111",sex:"male"},
      {name:"D张三2",phone:"12922222222",sex:"male"},
      {name:"D张三3",phone:"12933333333",sex:"female"}]},
  ]
export default {
  name: 'App',
  data: function () {
    return {
      dataVue:dataOut,
      persons:persons
    }
  },
}
</script>

<style>
  * {
    margin: 0px;
    padding: 0px;
  }
  ul{
    list-style: none;
  }
  #app{
    position: relative;
  }
</style>
