$(document).ready(function() {
  // Close nav modal when you click a menuitem
  $('#qcSiteNav a').click(function() {
    $('#qcSiteNav').fadeOut();
  });

// Enable events on map once you click map
  $('.venue-info-map').click(function () {
    $('.venue-info-map iframe').css("pointer-events", "auto");
  });

  $( ".venue-info-map" ).mouseleave(function() {
    $('.venue-info-map iframe').css("pointer-events", "none");
  });

  // Toggle Speaker Bios
    $(".gridder").gridderExpander({
      scroll: true,
      scrollTo: "listitem", // "panel" or "listitem"
      scrollOffset: 68,
      animationSpeed: 500,
      animationEasing: "easeInOutExpo",
      showNav: false
    });

});

//sticky desktop nav bar
$(function() {
    //sticky nav located under coutdown, sticks to top on scroll
    var navBar = $('.middleHeader');
    var pageIntroHeight = $('.page-intro').height();
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= pageIntroHeight + 48) {
            navBar.removeClass('middleHeader').addClass('stickyHeader');
        } else {
            navBar.removeClass('stickyHeader').addClass('middleHeader');
        }
    });
});
