


$(function(){

    (function($,win){

        var Top = function(elem,options){
            this.elem = $(elem);
            this.options = options;
            this.htmlBody = $('body,html');
        };


        Top.prototype = {
            default:{
                dist:$(window).height(),
                speed:1000
            },

            addEvent:function(){

                var self = this;

                $(document).scroll(function(){

                    var scrollTop = $(window).scrollTop();

                    if(scrollTop > self.options.dist) self.elem.fadeIn(30);
                    else self.elem.fadeOut(30);

                });

                self.elem.on('click',function() {
                    self.htmlBody.animate({scrollTop:0},self.default.speed);
                    return false;
                });
            },

            init:function(){
                this.options = $.extend(this.default,this.options);
                this.addEvent();
            }
        };

        $.fn.toTop = function(options){
            return this.each(function(){
                new Top(this,options).init();
            })
        };

        $('#backtop').toTop({speed:800});

    })(jQuery,window);


});