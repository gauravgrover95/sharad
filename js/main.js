
// Logo

$(".logo").mouseenter(function(){
    $(".logo h1").fadeOut();
    $(".logo p").fadeIn();
});
$(".logo").mouseleave(function(){
    $(".logo h1").fadeIn();
    $(".logo p").fadeOut();
});



$(".iclose").click(function() {
	$(".about, .work, .contact").css("animation-duration", "0.8s").removeClass("animated bounceInUp").addClass("animated slideOutDown");
});

$("#about").click(function() {
	$(".about").css("animation-duration", "1.5s").show().removeClass("animated bounceInUp").addClass("animated bounceInUp");
});

$("#work").click(function() {
	$(".work").css("animation-duration", "1.5s").show().removeClass("animated bounceInUp").addClass("animated bounceInUp");
});

$("#contact").click(function() {
	$(".contact").css("animation-duration", "1.5s").show().removeClass("animated bounceInUp").addClass("animated bounceInUp");
});
