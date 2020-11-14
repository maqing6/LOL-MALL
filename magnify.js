console.log("magnify 已经加载");

define(['jquery'], function($){
   function mag(){
    // console.log("111");
    
    $(".log2")
          . mouseenter(function () {
            $(".log3yc").show();
          })
          .mouseleave(function () {
            $(".log3yc").hide();
          })
          .mousemove(function(ev){
            var l = ev.clientX - $(this).offset().left - 100;
            l = Math.max(0, l);
            l = Math.min(l, 220);
            var t = ev.clientY - $(this).offset().top - 100;
            t = Math.max(0, t);
            t = Math.min(t, 210);
            // $("#mark").css({
            //   left: l,
            //   top: t
            // })
            $(".log3yc img").css({
              left: -2 * l,
              top: -2 * t
            })
          })

   }

   function changepic(){
        $(".lilt1 ul li a img").click(function(){
            $(".log2 img").attr('src',this.src)
            // console.log(this)
            // $(".bagtu").attr('src',$(".log2 img")[0].src);
            $(".bagtu").attr('src',this.src);
            
        })
   }
 
    return {
        mag,
        changepic
   }
   })