
  (function () {
    var documentEl = $(ducument),
    parallaxBg = $('.parallax-bg');
    documentEl.on('scroll', function () {
      var currScrollPos = documentEl.scrollTop ();
      parallaxBg.css('background-position', '0 ' + -currScrollPos / 4 + 'px');
    });
    
  })



  $(document).ready(function(){

    let options = {
        strings: ['husanboy assalomyu aleykum', 'vaaleykum assalom dostim'],
        typeSpeed: 60,
        startDelay: 500,
        backSpeed: 40,
        loop: true,
        loopCount: Infinity,
      };
      
      let typed = new Typed('.element', options);
    
    $(".slick-wrapper").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      dots:true,
      infinite: true,
      speed: 300,
      autoplay: true,
      autoplaySpeed: 2000,
    });
    AOS.init();
       
      });