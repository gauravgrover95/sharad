
// Logo

var transitNavUp = function() {


	$(".icons").transition({y:'-6vh'}, 500, 'ease');
	$("#lgt").css("position", "absolute");
	$("#lgt").css("left", "0px");
	$("#lgt").transition({y:'-6vh'}, 500, 'ease');
	// setTimeout(function(){ $("#name").fadeIn();}, 1200);

};

var transitNavDown = function() {

	$(".icons").transition({y:'0'}, 500, 'ease');
	$(".icons").css("position", "absolute");
	$("#lgt").transition({y:'0'}, 500, 'ease');

	// setTimeout(function(){ $("#name").fadeOut();}, 1200);
};

$(".logo").mouseenter(function(){
    $(".logo h1").fadeOut();
    $(".logo p").fadeIn();
});
$(".logo").mouseleave(function(){
    $(".logo h1").fadeIn();
    $(".logo p").fadeOut();
});



$(".iclose, .btn-close").click(function() {
	$(".about, .work, .contact").css("animation-duration", "0.8s").removeClass("animated bounceInUp").addClass("animated slideOutDown");
	console.log("iclose clicked");
	transitNavDown();
});

$("#about").click(function() {
	$(".about").css("animation-duration", "1.5s").show().removeClass("animated slideOutDown").addClass("animated bounceInUp");
	transitNavUp();
});

$("#work").click(function() {
	$(".work").css("animation-duration", "1.5s").show().removeClass("animated slideOutDown").addClass("animated bounceInUp");
	transitNavUp();
});

$("#contact").click(function() {
	$(".contact").css("animation-duration", "1.5s").show().removeClass("animated slideOutDown").addClass("animated bounceInUp");
	transitNavUp();
});
