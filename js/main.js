
// device height;
	var h = window.innerHeight
	|| document.documentElement.clientHeight
	|| document.body.clientHeight;

if(h > 800) {
	$(".info-page").css("top","10vh");
}

var transitNavUp = function() {

	if(h > 800) {
		$(".icons").transition({y:'-2vh'}, 500, 'ease');
		$("#lgt").css("position", "absolute");
		$("#lgt").css("left", "0px");
		$("#lgt").transition({y:'-2vh'}, 500, 'ease');
		// setTimeout(function(){ $("#name").fadeIn();}, 1200);
	} else {
		$(".icons").transition({y:'-5vh'}, 500, 'ease');
		$("#lgt").css("position", "absolute");
		$("#lgt").css("left", "0px");
		$("#lgt").transition({y:'-5vh'}, 500, 'ease');
		// setTimeout(function(){ $("#name").fadeIn();}, 1200);
	}
};

var transitNavDown = function() {

	$(".icons").transition({y:'0'}, 500, 'ease');
	$(".icons").css("position", "absolute");
	$("#lgt").transition({y:'0'}, 500, 'ease');

	// setTimeout(function(){ $("#name").fadeOut();}, 1200);
};

$(".logo").mouseenter(function(){
    $(".logo h1").hide();
    $(".logo p, .logo h3").fadeIn(220);
    $(".logo #logo-lg").hide();
    // $(".logo #logo-lg").attr("src","second.jpg");
});
$(".logo").mouseleave(function(){
    $(".logo h1").fadeIn(220);
    $(".logo p, .logo h3").hide();
    $(".logo #logo-lg").show();
    $("#logo-lg").attr("src","img/logo-lg.svg");
});



$(".iclose, .btn-close, .navbar").click(function() {
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
