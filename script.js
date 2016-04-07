$(document).ready(function() {
    var contentHeight = $('#main-content').height();

    $('nav a').each(function() {
        var sectionId = $(this).attr('href');
        var sectionHeight = $(sectionId).height();
        var sectionPercentHeight = sectionHeight/contentHeight;

        $(this).css('margin-bottom', sectionPercentHeight * $(window).height() * .5);

    });

    $('nav a').last().css('margin-bottom', '');


    $(window).scroll(function(){
        var scrollPos = $(window).scrollTop();

        var scrollPercent = scrollPos/contentHeight;

        console.log('Windows Scroll %:'+(scrollPercent * 100));

        var navHeight = $('nav').height();
        var navOffset = 0 - navHeight * scrollPercent;

        console.log('Nav Scroll Offset:' + navOffset);
        $('nav').css({top: navOffset});

    });
});



