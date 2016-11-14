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
            color  = opt.menuItemColor,
            len    = li.length;

        function setBgColor() {
            if(typeof color === 'string') {
                li.css('background-color', color);
            } else if(Array.isArray(color)) {
                for(var i = 0; i < len; i++) { 
                    li.eq(i).css('background-color', color[i] || '#4ECDC4');
                }
            }
        }

        function correctDirection() {
            ul.css({'transform': 'rotate(' + opt.startAngle + 'deg)'})
              .append('<style>#navs:after{transform:rotate(-' + opt.startAngle + 'deg)}</style>');
            li.css({'transform': 'rotate(-' + opt.startAngle + 'deg)'});
        }

        correctDirection();
        setBgColor();
        
        ul.click(function(){
            $(this).toggleClass('active');
            for(var i = 0; i < len; i++){
                var radian = (opt.endAngle - opt.startAngle) / (len - 1) * i * (Math.PI / 180);

                if($(this).hasClass('active')){
                    li.eq(i).css({
                        'transition-delay':"" + (opt.delay * i) + "ms",
                        '-webkit-transition-delay':"" + (opt.delay * i) + "ms",
                        'left': r * Math.cos(radian),
                        'top': -r * Math.sin(radian)
                    });
                } else {
                    li.eq(i).css({
                        'left': 0,
                        'top': 0
                    });
                }
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