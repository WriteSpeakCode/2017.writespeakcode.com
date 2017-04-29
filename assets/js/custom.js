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
  // Toggles speaker bios individually
  $('.speaker-profile').click(function(){
    $(this).toggleClass('is-expanded');
    $(this.lastElementChild).slideToggle();
  });

  // Toggles ALL speaker bios
  $('.js-toggle-bios').click(function(){
    if (this.textContent == "Expand All Bios") {
      $('.speaker-profile').addClass('is-expanded');
      $('.js-bio').slideDown();
    } else {
      $('.speaker-profile').removeClass('is-expanded');
      $('.js-bio').slideUp();
    }
    $(this).text(function(i, text){
        return text === "Expand All Bios" ? "Collapse All Bios" : "Expand All Bios";
    })
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
