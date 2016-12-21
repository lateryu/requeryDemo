

requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'js/lib',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        app: '../app',
        underscore: '../../underscore'
    }
});

// Start the main app logic.
requirejs(['jquery', 'canvas', 'app/sub'],
function   ($,canvas,   sub) {
  layui.define(['layer', 'form', 'element'], function(exports) {
      var element = layui.element();
      var layer = layui.layer,
          form = layui.form();
      form.on('submit(submit)', function(data) {
          console.log(data.elem) //被执行事件的元素DOM对象，一般为button对象
          console.log(data.form) //被执行提交的form对象，一般在存在form标签时才会返回
          console.log(data.field) //当前容器的全部表单字段，名值对形式：{name: value}
          return false; //阻止表单跳转。如果需要表单跳转，去掉这段即可。
      });

      //layer.msg('Hello World');

      exports('app', {}); //注意，这里是模块输出的核心，模块名必须和use时的模块名一致
  });
    //jQuery, canvas and the app/sub module are all
    //loaded and can be used here now.
});
