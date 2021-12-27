$(".btn-about-me").click(function() {
    $(".about-me").css("display", "block");
    $(".education").css("display", "none");
    $(".skills").css("display", "none");
});

$(".btn-education").click(function() {
    $(".about-me").css("display", "none");
    $(".education").css("display", "block");
    $(".skills").css("display", "none");
});

$(".btn-skills").click(function() {
    $(".about-me").css("display", "none");
    $(".education").css("display", "none");
    $(".skills").css("display", "block");
});