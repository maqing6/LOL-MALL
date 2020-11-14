console.log("json加载成功");

define(['jquery'],function($){
    function ajaxli(){
        $.ajax({
            type:"get",
            url:"../json/index_li_json.json",

            success:function(arr){
                for(var i = 0; i < arr.length; i++){
                    var node = $(`
                    <li>
                        <a href="">
                            <img src="${arr[i].img}" alt="">
                        </a>
                        <p>${arr[i].p}</p>
                    </li>`);

                    node.appendTo($(".tjw"));
                }
            },

            error:function(msg){
                console.log(msg);
            }
        })
    }

    return {
        ajaxli
    }
})


