$(document).ready(function(){
	
	
	
	$(document).ready(function () {
 $('input,textarea').focus(function(){
   $(this).data('placeholder',$(this).attr('placeholder'))
   $(this).attr('placeholder','');
 });
 $('input,textarea').blur(function(){
   $(this).attr('placeholder',$(this).data('placeholder'));
 });
 });


    $("body").on('click', 'form[name^=FORM_] button', function (e) {
        e.preventDefault();
        var form = $(this).parents("form[name^=FORM_]");

            var form_value = form.serialize();
            $.ajax({
                url: '/ajax/ajax.php',
                dataType: 'text',
                type: 'POST',
                data: form_value,
                success: function (data) {
                    form[0].reset();
                   window.location.href = "/spasibo/";
           //         jQuery.fancybox.open('#anyQuestionModal');
                    // $.fancybox.open({type: 'div', id: '#anyQuestionModal'});
                    // $("#anyQuestionModal").fadeOut("fast", function(){
                    //     $(this).before("<p><strong>Ваше сообщение отправлено!</strong></p>");
         //               setTimeout("$.fancybox.close()", 3000);
                    // });
                    // $('#anyQuestionModal').show();

                }
            });

    });

    /*header nav*/
   $('.js-nav-btn').on('click',function(e){
        e.preventDefault();
        $(this).toggleClass('active')
        $('.js-nav-content').slideToggle(300);
    });

   $('.js-dropdown-btn').on('click',function(e){
        e.preventDefault();
		$(this).closest('.dropdown').toggleClass('active');
        $(this).siblings('.js-dropdown-content').slideToggle(300);
    });
//
$(document).on("touchstart", function(e) {
    var container = $(".js-nav-content");
    if ((container.has(e.target).length === 0)&&(e.target.getAttribute("class") != 'icon-bar') &&(e.target.getAttribute("class") != 'btn-nav js-nav-btn active')){
      console.log(e.target.getAttribute("class"));
		$('.js-nav-btn').removeClass('active');
        $('.js-nav-content').hide();
      }
});

//$(document).touchstart(function (e) {
//    var container = $(".js-nav-content");
//    if (container.has(e.target).length === 0){
//      $('.js-nav-btn').removeClass('active');
//        container.hide();
//    }
//});
  
    ////tabs
    $(function () {
        $('[data-container="tabs"]').each(function () {
            var $this = $(this);

            $this.find('[data-section="tabs"]').eq(0).addClass('is-active');
            $this.find('[data-action="tabs"]').eq(0).addClass('is-active');
        });

        $(document).on('click', '.js-tab-slider .slider-nav-btn', function () {

            var $action = $(".js-tab-slider .slick-current"),
                $container = $action.closest('[data-container="tabs"]'),
                $section = $('[data-section="tabs"]', $container);

            $action.addClass('is-active').siblings('[data-action="tabs"]').removeClass('is-active');
            $section.removeClass('is-active').siblings('[data-id="' + $action.data('type') + '"]').addClass('is-active');
        });



        $(document).on('click', '[data-action="tabs"]', function () {

            var $action = $(this),
                $container = $action.closest('[data-container="tabs"]'),
                $section = $('[data-section="tabs"]', $container);

            $action.addClass('is-active').siblings('[data-action="tabs"]').removeClass('is-active');
            $section.removeClass('is-active').siblings('[data-id="' + $action.data('type') + '"]').addClass('is-active');
        });
    });

    //custom form
    $('select, input[type="number"], input[type="radio"]').styler();



    $(".js-popup").fancybox({
        padding:0
    });




    ///*toogle*/
    //$('.js-toggle').on('click',function(e){
    //    e.preventDefault();
    //    $(this).siblings('.js-toggle-content').slideToggle(300);
    //});
    //

    //if ($(".sidebar li").hasClass("active")) {
    //    $(".sidebar li.active").find(".js-toggle-content").show();
    //}



    //function windowSize(){
    //    if (window.outerWidth < 1050){
    //        $('.catalog-nav__name').on('click',function(){
    //            $(this).siblings('.catalog-nav__menu').slideToggle(300);
    //        });
    //
    //        $('.catalog-nav__menu > li i').on('click',function(){
    //            $(this).siblings('.catalog-nav__menu > li ul').slideToggle(300);
    //            $(this).toggleClass("active");
    //        });
    //
    //        $('.basket-prev i').on('click',function(){
    //            $(".basket-prev__hidden").slideToggle(300);
    //            //$(this).toggleClass("active");
    //        });
    //
    //
    //    }
    //}
    //$(window).on('load resize',windowSize);




    if (window.outerWidth < 768){
        /*main-slider*/
        $('.js-team-slider').slick({
            autoplay: false,
            autoplaySpeed: 3000,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<button class="slider-nav-btn  slider-nav-btn--left" type="button"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
            nextArrow: '<button class="slider-nav-btn slider-nav-btn--right" type="button"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
            arrows: true,
            dots: false
        });

        $('.js-attack-vector').slick({
            autoplay: false,
            autoplaySpeed: 3000,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<button class="slider-nav-btn  slider-nav-btn--left" type="button"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
            nextArrow: '<button class="slider-nav-btn slider-nav-btn--right" type="button"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
            arrows: true,
            dots: false
        });
        /*main-slider*/
        $('.js-service-case').slick({
            autoplay: false,
            autoplaySpeed: 3000,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<button class="slider-nav-btn  slider-nav-btn--left" type="button"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
            nextArrow: '<button class="slider-nav-btn slider-nav-btn--right" type="button"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
            arrows: true,
            dots: false
        });
    }



    //if (window.outerWidth < 768){
    // if($('.catalog-nav').length > 0){
    //    //fixed-block
    //    (function(){  // анонимная функция (function(){ })(), чтобы переменные "a" и "b" не стали глобальными
    //        var a = document.querySelector('.catalog-nav'), b = null;  // селектор блока, который нужно закрепить
    //        window.addEventListener('scroll', Ascroll, false);
    //        document.body.addEventListener('scroll', Ascroll, false);  // если у html и body высота равна 100%
    //        function Ascroll() {
    //            if (b == null) {  // добавить потомка-обёртку, чтобы убрать зависимость с соседями
    //                var Sa = getComputedStyle(a, ''), s = '';
    //                for (var i = 0; i < Sa.length; i++) {  // перечислить стили CSS, которые нужно скопировать с родителя
    //                    if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
    //                        s += Sa[i] + ': ' +Sa.getPropertyValue(Sa[i]) + '; '
    //                    }
    //                }
    //                b = document.createElement('div');  // создать потомка
    //                b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
    //                a.insertBefore(b, a.firstChild);  // поместить потомка в цепляющийся блок первым
    //                var l = a.childNodes.length;
    //                for (var i = 1; i < l; i++) {  // переместить во вновь созданного потомка всех остальных потомков (итого: создан потомок-обёртка, внутри которого по прежнему работают скрипты)
    //                    b.appendChild(a.childNodes[1]);
    //                }
    //                a.style.height = b.getBoundingClientRect().height + 'px';  // если под скользящим элементом есть другие блоки, можно своё значение
    //                a.style.padding = '0';
    //                a.style.border = '0';  // если элементу присвоен padding или border
    //            }
    //            if (a.getBoundingClientRect().top <= 0) { // elem.getBoundingClientRect() возвращает в px координаты элемента относительно верхнего левого угла области просмотра окна браузера
    //                b.className = 'sticky';
    //            } else {
    //                b.className = '';
    //            }
    //            window.addEventListener('resize', function() {
    //                a.children[0].style.width = getComputedStyle(a, '').width
    //            }, false);  // если изменить размер окна браузера, измениться ширина элемента
    //        }
    //    })();
    //}
    //}









    /*slider-gallery*/
    // $('.js-gallery').fancybox({
    //    padding:10
    //});



	// var scrollTo = function() {
     //   var anchor = $(this).attr("href");
     //   var hAnchor = $(anchor).offset().top;
        //скролим
   //     $('html,body').animate( { scrollTop: hAnchor }, 700 );
  //      return false;
 //   };
 //   $(function(){
 //       $('.navigation a').on('click', scrollTo);
  //  });
	
	
	

    //считаем слайды
    //var $status = $('.pagingInfo');
    //var $slickElement = $('.slideshow');
    //
    //$slickElement.on('init reInit afterChange', function (event, slick, currentSlide) {
    //    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    //    var i = (currentSlide ? currentSlide : 0) + 1;
    //    $status.text(i + '/' + slick.slideCount);
    //});
    //
    //$slickElement.slick({
    //    autoplay: false,
    //    dots: false
    //});




    ///*main-slider*/
    //$('.js-main-slider').slick({
    //  //  autoplay: true,
    //  //  autoplaySpeed: 3000,
    //  //  slidesToShow: 6,
    //   //     slidesToScroll: 1,
    //   //     responsive: [
    //    //    {
    //    //        breakpoint: 1200,
    //     //       settings: {
    //     //           slidesToShow: 4,
    //    //            slidesToScroll: 1
    //    //        }
    //    //    },
    //     //   {
    //     //       breakpoint: 991,
    //     //       settings: {
    //      //          slidesToShow: 3,
    //      //          slidesToScroll: 1
    //     //       }
    //     //   },
    //     //   {
    //      //      breakpoint: 768,
    //      //      settings: {
    //      //          slidesToShow: 1,
    //      //          slidesToScroll: 1
    //     //       }
    //    //    }
    //    //],
    //       // focusOnSelect :  true
//	 prevArrow: '<button class="slider-nav-btn  slider-nav-btn--left" type="button"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
  //      nextArrow: '<button class="slider-nav-btn slider-nav-btn--right" type="button"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',,
    //    //fade: false,
    //    arrows:true,
    //    dots:true
    //});


    /*main-slider*/
    $('.js-review-slider').slick({
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
        prevArrow: '<button class="slider-nav-btn  slider-nav-btn--left" type="button"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
        nextArrow: '<button class="slider-nav-btn slider-nav-btn--right" type="button"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
        arrows: true,
        dots: false
    });


    /*main-slider*/
    $('.js-tab-slider').slick({
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
        focusOnSelect :  true,
        prevArrow: '<button class="slider-nav-btn  slider-nav-btn--left" type="button"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
        nextArrow: '<button class="slider-nav-btn slider-nav-btn--right" type="button"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
        arrows: true,
        dots: false
    });


    /*main-slider*/
    $('.js-brands-slider').slick({
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ],
        prevArrow: '<button class="slider-nav-btn  slider-nav-btn--left" type="button"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
        nextArrow: '<button class="slider-nav-btn slider-nav-btn--right" type="button"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
        arrows: true,
        dots: false
    });


    ///*main-slider*/
    $('.js-main-slider').slick({
        autoplay: true,
        autoplaySpeed: 7000,
        prevArrow: '<button class="slider-nav-btn  slider-nav-btn--left" type="button"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
        nextArrow: '<button class="slider-nav-btn slider-nav-btn--right" type="button"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
        arrows: true,
        accessibility:false,
        dots: true
    });



    ///   scroll   /
    //var scrollTo = function() {
    //    var anchor = $(this).attr("href");
    //    var hAnchor = $(anchor).offset().top;
    //    //скролим
    //    $('html,body').animate( { scrollTop: hAnchor }, 700 );
    //    return false;
    //};
    //$(function(){
    //    $('.navigation a').on('click', scrollTo);
    //});
    //
    //
    //$('.navigation-menu').on('click',function(){
    //    $('.navigation').slideToggle();
    //});
    //$('.navigation li a').on('click',function(){
    //    $('.navigation').slideUp();
    //});


    //$('.catalog-section__content-col:gt(3)').css('display' , 'none');
    //$('.js-show-more').on('click' , function(e){
    //    e.preventDefault();
    //    $('.catalog-section__content-col:gt(3)').slideToggle(300);
    //    $(this).toggleClass('active');
    //    if($(this).hasClass('active')){
    //        $(this).html('свернуть');
    //    }else{
    //        $(this).html('Показать все');
    //    }
    //});
    if ($('.js-mask-phone').length > 0) {
        $(".js-mask-phone").inputmask("8(999) 999-99-99");
    }

    var heightHeader = $('.header').outerHeight();
    var heightFooter = $('.footer').outerHeight();
    var sumHeightFooterHeader = heightHeader+heightFooter
    $('.page-box-content').css({
        'min-height' : 'calc(100vh - ' + sumHeightFooterHeader+'px',
        'padding-top' : heightHeader+'px'
    });



    var $topNav = $('.top-nav>ul');
    var $li = $('.top-nav > ul > li');
    var $headerNav = $('.header-navigation>ul');
    $(window).on('resize', function(){
        if (window.outerWidth < 768){

            $($li).prependTo($headerNav);
        }else{
            $($li).prependTo($topNav);
        }
    });



    function getCoords(elem) { // кроме IE8-
        var box = elem.getBoundingClientRect();
        return {
            top: box.top + pageYOffset,
            left: box.left + pageXOffset
        };
    }



    function AnimateNum(elem) {
        var $div = document.querySelector(elem.div);

        var hasScrolling = false;
		
		


        var changeNumEvent = function(){
            if (hasScrolling) {
                return;
            }
            var $divMinNum = Number($div.dataset[elem.dataMin]);
            var $divMaxNum = Number($div.dataset[elem.dataMax]);

            var heightWindow = window.innerHeight;
            var currentCoordItem = getCoords($div).top;
            var totalPositionItem = currentCoordItem - heightWindow;
            var currentScrollPos = window.scrollY - 150;
     //       console.log(currentScrollPos)

            if(totalPositionItem < currentScrollPos){
                // console.log('заработало');
                var interval = setInterval(change ,elem.animateSpeed);
                hasScrolling = true;
                function change() {
					
					if (($divMinNum + elem.step) > $divMaxNum) elem.step =1;
                    if($divMinNum < $divMaxNum){
                        $divMinNum = $divMinNum + elem.step;
                        $div.innerHTML = $divMinNum;
                    }else{
                        clearInterval(interval);
                    }
                }
            }else{

            }
        };
        // window.onscroll = ;
        window.addEventListener('scroll', changeNumEvent)
    }



    new AnimateNum({
        div : '.js-number1',
        dataMin : 'minnumber',
        dataMax : 'maxnumber',
        animateSpeed : 1,
		step:1
    });

    new AnimateNum({
        div : '.js-number2',
        dataMin : 'minnumber',
        dataMax : 'maxnumber',
        animateSpeed : 1,
		step:100
    });

    new AnimateNum({
        div : '.js-number3',
        dataMin : 'minnumber',
        dataMax : 'maxnumber',
        animateSpeed : 1,
		step:1
    });

    new AnimateNum({
        div : '.js-number4',
        dataMin : 'minnumber',
        dataMax : 'maxnumber',
        animateSpeed : 250,
		step:1
    });
	
	
	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$(".subscribe__form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "/local/templates/main/layout/mail.php", //Change
			data: th.serialize()
		}).done(function() {
          window.location.href = "/spasibo/";
			$(".done-w").fadeIn();
//			setTimeout(function() {
//				// Done Functions
//				$(".done-w").fadeOut();
//				$.magnificPopup.close();
//				th.trigger("reset");
//			}, 3000);
		});
		return false;
	});
	
	
	

});