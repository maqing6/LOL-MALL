console.log("这是listjson js");

define(['jquery'],function($){
    function listjson(){
        $.ajax({
            type:"get",
            url:"../json/list_li_json.json",

            success:function(arr){
                for(var i = 0; i < arr.length;i++){
                    var node = $(`<li>
                    <!-- 点赞添加gl-liked -->
                     <i class="ico-menu gl-like"></i>
                     <a href="./datali.html" target="_blank" class="gl-link">
                         <div class="ico-mark i-new">
                             <img src="${arr[i].imgbq}" width="117" height="108" >
                         </div>
                         <div class="xiajia">
                            <img src="${arr[i].imgxj}" width="117" height="108" >
                        </div>
                         <div class="gl-img">
                             <img src="${arr[i].imgxs}" width="527" height="506" alt="K/DA 萨勒芬妮 手办">
                         </div>
                         <div class="gl-hoverimg">
                             <img src="${arr[i].imgyc}" width="527" height="506" alt="K/DA 萨勒芬妮 手办">
                         </div> 
                     </a> 
                     <p class="gl-name">${arr[i].p1}</p>   
                         <p class="gl-pri">${arr[i].p2}</p>      
                 </li>
                    `)
                    node.appendTo($(".goodlist_ul"));
                }
            },
            
            error:function(msg){
                console.log(msg);
            }
        })
    }

    return{
        listjson
    }
})