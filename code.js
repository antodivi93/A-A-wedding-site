$(document).ready(function() {
    $("header").scroll(function(){
        let content = $(".background-container");
        let scrollTop = $("header").scrollTop();
        let elementHeight = $(this).height();
        content.css("opacity", (1 - (scrollTop / elementHeight)) + 0.5);
    })
});