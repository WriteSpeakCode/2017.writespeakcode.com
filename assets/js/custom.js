$(document).ready(function() {
  // Redirect to https. Hacky, but we shouldn't be using Heroku for a static site
  if (window.location.protocol == "http:") {
    window.location.replace("https://2017.writespeakcode.com/");
  }

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

  // Rotate through tweets when click the feel the love button
  $('.js-tweet-wrap').slice(0, 2).show();
  $('#loadTweets').click(function(event) {
    event.preventDefault();
    // Hides visible tweets & selects last visible one
    var lastVisibleTweet = $('.js-tweet-wrap:visible').hide().last();
    // Grabs next tweets based on last visible tweet
    var nextTweets = lastVisibleTweet.nextAll().slice(0, 2);
    // If there are no more tweets, start from the beginning
    if (nextTweets.length === 0) {
      nextTweets = $(".js-tweet-wrap").slice(0, 2);
    }
    nextTweets.fadeIn(1500);
  })

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

///Mailing list subscription form

$(document).ready(function () {
    $('input[type="text"], input[type="email"]').focusin(function(){
        $(this).prev('label').addClass('label-floated');
        $(this).parent().addClass('solid-border');
    });
    $('input[type="text"], input[type="email"]').focusout(function(){
        if ($(this).val().length > 0) {
            $(this).prev('label').addClass('label-floated');
            $(this).parent().addClass('solid-border');
        } else {
            $(this).prev('label').removeClass('label-floated');
            $(this).parent().removeClass('solid-border');
        }
    });
});
