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

});

//sticky desktop nav bar
$(function() {
    //sticky nav located under coutdown, sticks to top on scroll
    var navBar = $('.middleHeader');
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 850) {
            navBar.removeClass('middleHeader').addClass('stickyHeader');
            $('#schedule').addClass('addSpace')
        } else {
            navBar.removeClass('stickyHeader').addClass('middleHeader');
            $('#schedule').removeClass('addSpace')
        }
    });
});
