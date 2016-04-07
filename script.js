$(window).scroll(function(){
    var scrollPos = $(window).scrollTop();
    var contentHeight = $('#main-content').height();

    var scrollPercent = scrollPos/contentHeight;

    console.log('Windows Scroll %:'+(scrollPercent * 100));

    var navHeight = $('nav').height();
    var navOffset = 0 - navHeight * scrollPercent;

    console.log('Nav Scroll Offset:' + navOffset);
    $('nav').css({top: navOffset});



});
