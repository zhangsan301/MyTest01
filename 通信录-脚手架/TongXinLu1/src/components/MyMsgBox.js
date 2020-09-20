import Vue from 'vue'
import MyMsgBox from './MyMsgBox.vue'

// 编写一个js组件
var mymsgbox = (function () {
  var MyVue = Vue.extend(MyMsgBox);
  return function (params) {
    // 创建新div
    var divNew = document.createElement("div");
    // 把新div加入到文档的最后
    document.body.appendChild(divNew);
    var msgVue = new MyVue({
      el:divNew,
      data: function () {
        return {
          name:params.name,
          phone:params.phone,
          sex:params.sex,
          callClick:params.callClick,
          cancelClick:params.cancelClick
        }
      }
    });
  }
})();

export default mymsgbox
