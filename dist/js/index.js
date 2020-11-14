console.log("这是indexjs")

define(['jquery'], function($){
   $('.paging a:first').addClass('active');//第一个索引显示
   $('.carousel .window a:gt(0)').hide();//第一个图片显示
		var i_num=0;//计数器
		var num=$('.carousel .window a').length;//图片个数
		//轮播开始函数
		rotateSwitch=function(){
			//定时器play，5000ms换一次
			play=setInterval(function(){
				if (i_num == num-1) {
					i_num=-1;
				}
				//图片轮播
				$('.carousel .window a').eq(i_num+1).fadeIn(500).siblings('a').fadeOut(500);
				//索引小球
				$('.paging div a').eq(i_num+1).addClass('active').parent().siblings('div').children().removeClass('active');
				i_num++;
				// document.title=i_num;
         },3000)
         

         // $('.paging div').click(function(){
         //    var triggerID = parseInt($(this).children().attr('index'));//获取点击小球的index属性值
         //    clearInterval(play);//清除定时器 play
         //    //图片轮播
         //    $('.carousel .window a').eq(triggerID).fadeIn(500).siblings('a').fadeOut(500);
         //    //索引小球
         //    $('.paging div a').eq(triggerID).addClass('active').parent().siblings('div').children().removeClass('active');
         //    i_num=triggerID;//把当前位置传给rotateSwitch
         //    rotateSwitch();
         // })
		};
      // rotateSwitch();
      
      // 点击小球时的事件
     function djj(){
      $('.carousel .paging div').click(function(){
         var triggerID = parseInt($(this).children().attr('index'));//获取点击小球的index属性值
         clearInterval(play);//清除定时器 play
         //图片轮播
         $('.carousel .window a').eq(triggerID).fadeIn(500).siblings('a').fadeOut(500);
         //索引小球
         $('.paging div a').eq(triggerID).addClass('active').parent().siblings('div').children().removeClass('active');
         i_num=triggerID;//把当前位置传给rotateSwitch
         rotateSwitch();
      })
     };
 
   
   return {
      rotateSwitch,
      djj
  }
  })