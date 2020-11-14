console.log("cart 加载成功");

require.config({
    paths:{
        jquery:"jquery-1.10.1.min",
        "jquery-cookie": "jquery.cookie",
        // startMove:"startMove"
        cartli:"cartli"

    },

    shim:{
        "jquery-cookie": ["jquery"],
    }
});


require(["cartli",], function(cartli){
    // index.dxx();
    cartli.carjptj();
    cartli.cartnum();
    cartli.carjzsp();
    cartli.cardel();
    cartli.carjj();
    cartli.carqk();
    cartli.dltc();
    
    
  })