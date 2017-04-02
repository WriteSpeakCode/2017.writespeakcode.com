$(document).ready(function() {
  // Close nav modal when you click a menuitem
  $('#qcSiteNav a').click(function() {
    $('#qcSiteNav').fadeOut();
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
