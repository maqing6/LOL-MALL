console.log("list加载成功");
/*
    配置要引入的模块路径 juqery也要遵循ADM规范 
*/
require.config({
    paths:{
        jquery:"jquery-1.10.1.min",
        // "jquery-cookie": "jquery.cookie",
        // index: "index",
        // startMove:"startMove"
        listcs:"listcs",
        lisrjson:"listjson"
    },

    // shim:{
    //     "jquery-cookie": ["jquery"],
    // }
});


require(["listcs","listjson"], function(listcs,listjson){
    // index.dxx();

    listcs.list();
    listcs.hoversli();

    listjson.listjson();
    
  })