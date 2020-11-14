console.log("cartli 已经加载");

define(['jquery','jquery-cookie'], function($){
    
    
    function carjptj(){
        $(function(){
            //数据下载到页面
        $.ajax({
            type:'get',
            url:'../json/cart_li_json.json',

            success:function(arr){
                for(var i = 0; i < arr.length; i++){
                    var node = $(`<li>
                    <a href="" class="imga"><img src="${arr[i].img}" alt=""></a>
                    <div class="wen">
                        <a href="" class="ms">${arr[i].p}</a>
                        <span class="jgjg">¥${arr[i].jg}</span>
                        <a href="javascript:;" class="jrgwc" id="${arr[i].id}">加入购物车</a>
                    </div>
                </li>
                    `)
                    node.appendTo($(".ullb ul"));
                }
            },
            error: function(msg){
                console.log(msg);
            }
        })

        // 给后添加的节点，添加点击事件
        /*cookie 只能存储字符串 
        把[{id:id,num:1},{id:id,num:1}]  转成json格式字符串 */

        $(".ullb ul").on("click",".jrgwc",function(){
            //获取当前点击按钮的ID
            var id = this.id;
            console.log(id)
            var first = $.cookie("lolcar") === null ? true : false;
            if(first){
                //是第一次
                var cookieArr = [{id:id,num:1}];
                $.cookie("lolcar",JSON.stringify(cookieArr),{
                    expires:7
                })
            }else{
                //查找之前是否添加过
                var cookieArr = JSON.parse($.cookie("lolcar"));
                var same = false;//假装每天加过
                for(var i = 0; i < cookieArr.length; i++){
                    if(cookieArr[i].id == id){
                        same = true;
                        break;
                    }
                }

                if(same){
                    //数量加一
                    cookieArr[i].num++;
                }else{
                    //没有添加过
                    let obj = {id:id,num:1};
                    cookieArr.push(obj);
                }
                //存回cookie中
                $.cookie("lolcar",JSON.stringify(cookieArr),{
                    expires:7
                })
            }

            console.log($.cookie("lolcar"));   
            cartnum() 
            carjzsp()
        })
        })
        

    }

        //给删除按钮添加点击
        function cardel(){
            // console.log("aaaaa")
            $(".buyshop").on("click",".delexx",function(){
                //删除节点 删除页面上的内容 cookie也删掉
                var id = $(this).closest(".spbg").remove().attr("id");
                var cookieArr = JSON.parse($.cookie("lolcar"));
                var index = cookieArr.findIndex(item => item.id == id);
                cookieArr.splice(index, 1);
                //判断cookieArr是否为空
                cookieArr.length === 0 ? $.cookie("lolcar",null) : $.cookie("lolcar",JSON.stringify(cookieArr),{
                    expires: 7
                })
                cartnum();
            })
        }


        // 给加减按钮添加点击
        function carjj(){
            $(".buyshop").on("click",".buysl a",function(){
                var id = $(this).closest(".spbg").attr("id");
                //找到idcooki的数据
                var cookieArr = JSON.parse($.cookie("lolcar"));
                var index = cookieArr.findIndex(item => item.id == id);
                if( $(this).attr("class") == "jjjia"){
                    cookieArr[index].num++;
                  }else{
                    cookieArr[index].num == 1 ? alert("数量为1，不减少") : cookieArr[index].num--;
                  }
                  //页面显示的数量
                  $(this).parents("ul").find(".cartNum").attr('value',cookieArr[index].num);
                  var value = $(this).parents("ul").find(".cartNum").val();
                  console.log(value)
                  $(this).parents("ul").find("#xiaojijg").html(`${value*subtotalSum(id)}`)
                  console.log($(this).parents("ul").find("#xiaojijg").text());
                  $.cookie("lolcar", JSON.stringify(cookieArr), {
                    expires: 7
                  })
                  cartnum();

            })
        }
        
        //获得当前的小计
            function subtotalSum(id) {
                var result = 0;
                $.ajax({
                type: 'get',
                url: '../json/cart_li_json.json',
                async: false,
                success: function (arr) {
                    let obj = {};
                    for (var i = 0; i < arr.length; i++) {
                    if (id == arr[i].id) {
                        frag = true;
                        result = arr[i].jg;
                    }
                    }
                }
                })
                return result;
            }



        //显示购物车数量
        function cartnum(){
            console.log("000");
            var sum = 0 ;
            var total = 0;
            var cookieStr = $.cookie("lolcar");
    
            if(cookieStr){
                var cookieArr = JSON.parse(cookieStr);
                for(var i = 0; i < cookieArr.length;i++){
                    sum += cookieArr[i].num;
                    total += cookieArr[i].num * subtotalSum(cookieArr[i].id)
                }
            }
            $(".topr .cart .cartnum,.numcount").html(sum);
            $("#tota").html(total);
        }
        
          //加载购物车商品
          function carjzsp(){
            $(".buyshop .spbg").empty();
            $.ajax({
                type:"get",
                url:"../json/cart_li_json.json",
    
                success:function(arr){
                    //将在aar中已经加入购物车的数据拿出来
                    var cookieStr = $.cookie("lolcar");
                    var newArr = [];
                    if(cookieStr){
                        var cookieArr = JSON.parse(cookieStr);
                        for(var i = 0;i<arr.length;i++){
                            for(var j = 0;j < cookieArr.length;j++){
                                if(arr[i].id == cookieArr[j].id){
                                    //将数据添加上述
                                    arr[i].num = cookieArr[j].num;
                                    newArr.push(arr[i]);
                                    break;
                                }
                            }
                        }
                        // console.log(newArr);
    
                        //将找出来的数据在购物车中显示
                        for(var i = 0; i < newArr.length; i++){
                            var node = $(`<ul class="spbg" id="${newArr[i].id}">
                            <li class="li_inp">
                                <div class="dian"></div>
                            </li>
                            <li class="li_sp">
                                <div class="buysp">
                                    <a href="" class="bsp1">
                                        <img src="${newArr[i].img}" alt="">
                                    </a>
                                    <div class="buyspwen">
                                        <a href="">
                                            <span>${newArr[i].p}</span>
                                        </a>
                                        <div class="jjgg">
                                            <span class="jgspan">
                                                <span class="jj1">
                                                    规格
                                                </span>
                                                <span class="jj2">
                                                    单一规格
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="li_dj">
                                <span>
                                    ￥
                                    <span class="djspan">${newArr[i].jg}.00 元</span>
                                </span>
                            </li>
                            <li class="li_sl">
                                <div class="buysl">
                                    <a href="javascript:;" class="jjjian">
                                        <img src="../index/images/jianhao.jpg" alt="">
                                    </a>
                                    <input type="text" name="cartNum" old_value="1" class="cartNum" value="1">
                                    <a href="javascript:;" class="jjjia">
                                        <img src="../index/images/jiahao.jpg" alt="">
                                    </a>
                                    <input type="hidden" id="goodsNo_18331" value="18331">
                                    <input type="hidden" id="canSaleNum_18331" value="952">
                                </div>
                            </li>
                            <li class="li_jg">
                                <span>￥</span>
                                <span id="xiaojijg">${newArr[i].num*newArr[i].jg}</span>
                            </li>
                            <li class="li_zz">
                                <a href="javascript:;" class="delexx">删除</a>
                                &nbsp;&nbsp;
                                <a href="">收藏</a>
                            </li>
                        </ul>
                            `)
                            node.appendTo($(".buyshop"));
                        }
                    }
                },
                error: function(msg){
                    console.log(msg);
                  }
            })
        }

        //实现清空购物车
        function carqk(){
            $(".buybom1 .qkgwc").click(function(){
                $.cookie("lolcar", null);
                carjzsp();
                cartnum();
            })
        }
        
        // 登录弹出
        function dltc(){
            $("#unlogin").click(function(){
                $("#dljm").css("display","block");
            })
            $(".dla").click(function(){
                $("#dljm").css("display","none");
                $(".mtxt1").html("欢迎您，IS.Q");
            })
        }
    
 
    return {
        carjptj,
        cartnum,
        cardel,
        carjzsp,
        carjj,
        carqk,
        dltc,
   }

})