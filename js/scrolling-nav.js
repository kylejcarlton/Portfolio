//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

//jQuery for folder open on hover over intro page click here
$("a.folder").hover(
  function() {
    $(this).replaceWith('<a class="btn btn-primary page-scroll folder" href="#projects">Click Here For My Projects <i class="fa fa-folder-open-o fa-lg" aria-hidden="true"></i></a>');
  }, function(){
    $(this).replaceWith('<a class="btn btn-primary page-scroll folder" href="#projects">Click Here For My Projects <i class="fa fa-folder fa-lg" aria-hidden="true"></i></a>');
  });
