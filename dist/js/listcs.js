console.log("这是listcs js")


define(['jquery'], function($){
    function list(){
     // var aBtns = $(".topr").find("a");
 
     $(".sbox").click(function() {
        $(".ullist").toggle();
       
    });

    }

    function hoversli (){
        $(".goodlist_ul").on('mouseover','li',function(){
            // console.log($(this).index())
            $(this).find(".gl-hoverimg").css("display","block");
        })

        $(".goodlist_ul").on('mouseout','li',function(){
            // console.log($(this).index())
            $(this).find(".gl-hoverimg").css("display","none");
        })
    }
 
    return {
    list,
    hoversli
   }
   })