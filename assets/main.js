$(function(){
  $('.hambaga-btn').on('click', function(){
    if($(this).hasClass('close-btn')){
      $(this).removeClass('close-btn');
      $('.mbl-menu').hide();
    }
    else{
      $(this).addClass('close-btn');
      $('.mbl-menu').show();
    }
  })
  window.onload = function() {stickyHeader()};
  window.onscroll = function() {stickyHeader()};

  // Get the header
  const header = document.querySelector(".header-wrp");

  // Get the offset position of the navbar
  const sticky = header.offsetTop;

  // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function stickyHeader() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }

  $('.sctn-wrp.categories .list-view li').on('click', function(){
    $('.sctn-wrp.categories .list-view li').removeClass('active');
    $(this).addClass('active');
    const color_category = $(this).attr('data-color');
    function changeImage(className){
      $(`.exploding-view.${className}.${$(window).width() < 800 ?'mobile': 'desktop'}`)
        .addClass(`${$(window).width() < 800 ? '': 'animate__fadeInLeft'}`);
    }
    $('.sctn-wrp.categories .content').attr('class', `content`).addClass(color_category);
    // $('.exploding-view').css('display', 'none');
    $('.exploding-view').removeClass('.animate__animated.animate__fadeInLeft');
    switch(color_category) {
      case 'green':
        changeImage('supplements')
        break;
      case 'peach':
        changeImage('topicals')
        break;
      case 'lavender':
        changeImage('fashion')
        break;
      case 'lightblue':
        changeImage('electronics')
        break;
      case 'yellow':
        changeImage('accessories')
        break;
      default:
        changeImage('supplements')
    }
  });

  $('.tab-label').on('click', function(){
    $('.tab .tab-content').css('display','none');
    $('.tab').removeClass('active');
    $(this).parent('.tab').addClass('active');
    $(this).siblings('.tab-content').slideToggle();
  });
  $('.tab-list-item').on('click', function(){
    const category = $(this).attr('data-tab');
    $('.tab-list-item .tab-content').css('display','none');
    $('.tab-list-item, .tab').removeClass('active');
    $(this).addClass('active');
    $(`.tab-${category}`).addClass('active');
  });

  $('.sctn-wrp.faq .question-wrp').on('click', function(){
    $('.sctn-wrp.faq .question-wrp').removeClass('active');
    $(this).addClass('active');
  })

  $('.contact-form-btn').on('click', function(){
    $('.popup-contact-wrp').addClass('show');
  })
  $('.close-contact').on('click', function(){
    $('.popup-contact-wrp').removeClass('show');
  })
  function showVideo(className){
    if($(className)[0]){$(className)[0].play();};
  }
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    console.log('mobile device');
    showVideo('.bg-video-player');
    showVideo('.orbit-video-player');
    showVideo('.lft-sd .bg-amazon-player');
    showVideo('.rght-sd .bg-amazon-player');
  }
  console.log('loaded');
})