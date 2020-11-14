console.log("datali 加载成功");

require.config({
    paths:{
        jquery:"jquery-1.10.1.min",
        // "jquery-cookie": "jquery.cookie",
        // index: "index",
        // startMove:"startMove"
        magnify:"magnify"

    },

    // shim:{
    //     "jquery-cookie": ["jquery"],
    // }
});


require(["magnify",], function(magnify){
    // index.dxx();
    magnify.mag();
    magnify.changepic();
    
    
  })