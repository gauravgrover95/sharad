
// Logo

var transitNav = function() {


	$(".icons").transition({y:'-7vh'}, 500, 'ease');
	$(".icons").transition({x:'50px'});

	$("#lgt").transition({y:'-7vh'}, 500, 'ease');
	$("#lgt").transition({x:'-268px'});

	// $("#name").addClas("animated fadeIn").show();
	setTimeout(function(){ $("#name").fadeIn();}, 1200);

};

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
	console.log("iclose clicked");

});

$("#about").click(function() {
	$(".about").css("animation-duration", "1.5s").show().removeClass("animated bounceInUp").addClass("animated bounceInUp");
	transitNav();
});

$("#work").click(function() {
	$(".work").css("animation-duration", "1.5s").show().removeClass("animated bounceInUp").addClass("animated bounceInUp");
	transitNav();
});

$("#contact").click(function() {
	$(".contact").css("animation-duration", "1.5s").show().removeClass("animated bounceInUp").addClass("animated bounceInUp");
	transitNav();
});
