

$(".iclose").click(function() {
	// $(".about").addClass("animated fadeOutDownBig");
	$(".about").css("animation-duration", "0.8s").removeClass("animated bounceInUp").addClass("animated slideOutDown");
    // setTimeout(function(){ 
    // 	alert("Hello"); 
    // 	$(".about").hide();
    // }, 1000);
});

$(".link").click(function() {
	$(".about").css("animation-duration", "1.5s").show().removeClass("animated bounceInUp").addClass("animated bounceInUp");
});

$(".logo").mouseenter(function(){
    $(".logo h1").fadeOut();
    $(".logo p").fadeIn();
});
$(".logo").mouseleave(function(){
    $(".logo h1").fadeIn();
    $(".logo p").fadeOut();
});