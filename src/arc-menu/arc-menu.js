// (function(){
//   var ul=$("#navs"),li=$("#navs li"),i=li.length,n=i-1,r=120;

//   ul.click(function(){
//     $(this).toggleClass('active');
//     if($(this).hasClass('active')){
//       for(var a=0;a<i;a++){
//         li.eq(a).css({
//           'transition-delay':""+(50*a)+"ms",
//           '-webkit-transition-delay':""+(50*a)+"ms",
//           'left':(r*Math.cos(90/n*a*(Math.PI/180))),
//           'top':(-r*Math.sin(90/n*a*(Math.PI/180)))  
//         });
//       }
//     }else{
//       li.removeAttr('style');
//     }
//   });
// })($);

(function(){
    var params = {
        menuItemColor: '#4ECDC4',  //菜单项颜色列表
        duration: 0.6,              //动画持续时间
        delay: 50,                  //动画延迟时间
        startAngle: 0,              //起始角度
        endAngle: 90,
        radius: 120
    }

    function arcMenu(options) {
        if(!(this instanceof arcMenu)) {
            return new arcMenu(opt);
        }

        this.opt = $.extend({}, params, options);
        this.init();
    }

    var ul   = $("#navs"),
        li   = $("#navs li");

    arcMenu.prototype.init = function () {
        var opt    = this.opt,
            r      = opt.radius,
            len    = li.length;

        ul.css({'transform': 'rotate(' + opt.startAngle + 'deg)'})
          .append('<style>#navs:after{transform:rotate(-' + opt.startAngle + 'deg)}</style>');
        li.css({'transform': 'rotate(-' + opt.startAngle + 'deg)'})

        ul.click(function(){
            $(this).toggleClass('active');
            if($(this).hasClass('active')){
                for(var i = 0; i < len; i++){
                    var radian = (opt.endAngle - opt.startAngle) / (len - 1) * i * (Math.PI / 180);

                    li.eq(i).css({
                        'transition-delay':"" + (opt.delay * i) + "ms",
                        '-webkit-transition-delay':"" + (opt.delay * i) + "ms",
                        'left': r * Math.cos(radian),
                        'top': -r * Math.sin(radian)
                    });
                }
            }else{
                li.removeAttr('style');
            }
        });
    }

    arcMenu.prototype.contract = function () {
        
    }

    if(typeof module === 'object' && module && typeof module.exports === 'object'){
        module.exports = Count;
    }
    else{
        window.arcMenu = arcMenu;
    }
})();