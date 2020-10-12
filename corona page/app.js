       (function ($) {
           $.fn.timeline = function () {
               var selectors = {
                   id: $(this),
                   item: $(this).find(".timeline-item"),
                   activeClass: "timeline-item--active",
                   img: ".timeline__img"
               };
               selectors.item.eq(0).addClass(selectors.activeClass);
               selectors.id.css(
                   "background-image",
                   "url(" +
                   selectors.item
                   .first()
                   .find(selectors.img)
                   .attr("src") +
                   ")"
               );
               var itemLength = selectors.item.length;
               $(window).scroll(function () {
                   var max, min;
                   var pos = $(this).scrollTop();
                   selectors.item.each(function (i) {
                       min = $(this).offset().top;
                       max = $(this).height() + $(this).offset().top;
                       var that = $(this);
                       if (i == itemLength - 2 && pos > min + $(this).height() / 2) {
                           selectors.item.removeClass(selectors.activeClass);
                           selectors.id.css(
                               "background-image",
                               "url(" +
                               selectors.item
                               .last()
                               .find(selectors.img)
                               .attr("src") +
                               ")"
                           );
                           selectors.item.last().addClass(selectors.activeClass);
                       } else if (pos <= max - 40 && pos >= min) {
                           selectors.id.css(
                               "background-image",
                               "url(" +
                               $(this)
                               .find(selectors.img)
                               .attr("src") +
                               ")"
                           );
                           selectors.item.removeClass(selectors.activeClass);
                           $(this).addClass(selectors.activeClass);
                       }
                   });
               });
           };
       })(jQuery);

       $("#timeline-1").timeline();


       $(document).ready(function () {

           $(".button-1").hide();
           $(".button-1").fadeOut('0', function () {
               $(this).delay(2000).fadeIn('200');
           });
           $(".title").hide();
           $(".title").fadeOut('0', function () {
               $(this).delay(1000).fadeIn('100');
           });
           $("#scrollIcon").click(function () {
               $(".intro").fadeOut();
               $(".button-1").fadeOut();
               $(".main").css("overflow", "hidden");

           });


       });


       document.getElementById('scrollIcon').addEventListener('click', function () {

           TweenMax.to('.panel', 1.5, {
               scaleY: 1,
               height: '100vh',
               ease: Circ.easeOut
           });
           TweenMax.to('p', 1, {
               opacity: 1,
               y: 20,
               delay: 1.4
           });

       })
