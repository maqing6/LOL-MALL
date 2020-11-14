console.log("加载成功");
/*
    配置要引入的模块路径 juqery也要遵循ADM规范 
*/
require.config({
    paths:{
        jquery:"jquery-1.10.1.min",
        "jquery-cookie": "jquery.cookie",
        index: "index",
        startMove:"startMove"
    },

    shim:{
        "jquery-cookie": ["jquery"],
    },
});


require(["index"], function(index){
    // index.dxx();
  })