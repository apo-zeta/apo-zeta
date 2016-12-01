$(document).ready(function() {

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
 
        if (scroll >= 10) {
            $("#myNavbar img").addClass("smaller");
            $("#myNavbar .right").addClass("smaller");
        } else {
            $("#myNavbar img").removeClass("smaller");
            $("#myNavbar .right").removeClass("smaller");
        };
    });
});