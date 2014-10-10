/*  Author Details
    ==============
    Author: Ranjith Pandi

    Author URL: http://ranjithpandi.com

    Attribution is must on every page, where this work is used.

    For Attribution removal request. please consider contacting us through http://ranjithpandi.com/#contact
*/

;(function ($) {
    $.fn.scrollToContent = function (options) {
        var defaults = {
                text: 'Top',
                scrollTopClass: 'scrollToTop',
                contentClass: 'content-section',
                min: 200,
                inDelay: 600,
                outDelay: 400
            },
            settings = $.extend(defaults, options);

        $('body').append('<div class="'+settings.scrollTopClass+'">'+settings.text+'</div>');
        $('.'+settings.scrollTopClass).on('click', function(){
                $('html, body').animate( {
                    scrollTop: '0px'
                }, 1000, 'linear');
            });

        $(window).scroll(function() {
            var scrollTop = $(this).scrollTop() + 100;
            if (scrollTop > 200) {
                $('.'+settings.scrollTopClass).fadeIn(settings.inDelay);
            } else {
                $('.'+settings.scrollTopClass).fadeOut(settings.outDelay);
            }

            $("."+settings.contentClass).each(function () {
                var content_top = $(this).offset().top;
                var content_bot = content_top + $(this).height();
                var hash = $(this).attr("id");

                var curele = $('li a[href$="' + hash + '"]').parent();
                if((scrollTop > content_top) && (scrollTop < content_bot)) {
                    if(curele.hasClass("active")) {
                        return false;
                    } else {
                        curele.siblings().andSelf().removeClass("active");
                        curele.addClass("active");
                    }
                }
            });
        });
    }
}(jQuery));