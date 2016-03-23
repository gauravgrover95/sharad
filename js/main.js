
// device height;
	var h = window.innerHeight
	|| document.documentElement.clientHeight
	|| document.body.clientHeight;

// device width;
	var w = window.innerWidth
	|| document.documentElement.clientWidth
	|| document.body.clientWidth;

var transitNavUp = function() {

	if(h > 800) {
		$(".icons").transition({y:'-2vh'}, 500, 'ease');
		$("#lgt").css("position", "absolute");
		$("#lgt").css("left", "0px");
		$("#lgt").transition({y:'-2vh'}, 500, 'ease');
		// setTimeout(function(){ $("#name").fadeIn();}, 1200);
	} else if(w < 420) {
		$(".icons").transition({y:'-1vh'}, 500, 'ease');
		$("#lgt").css("position", "absolute");
		$("#lgt").css("left", "0px");
		$("#lgt").transition({y:'-1vh'}, 500, 'ease');
	} else {
		$(".icons").transition({y:'-4vh'}, 500, 'ease');
		$("#lgt").css("position", "absolute");
		$("#lgt").css("left", "0px");
		$("#lgt").transition({y:'-4vh'}, 500, 'ease');
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
    $(".logo #logo-lg-op").show();
    $(".logo #logo-lg-op").css("display","block");
});
$(".logo").mouseleave(function(){
    $(".logo h1").fadeIn(220);
    $(".logo p, .logo h3").hide();
    $(".logo #logo-lg").show();
    // $("#logo-lg").attr("src","img/logo-lg.svg");
    $(".logo #logo-lg-op").hide();
});



$(".iclose, .btn-close, .navbar").click(function() {
	$(".about, .work, .contact").css("animation-duration", "0.8s").removeClass("animated bounceInUp").addClass("animated slideOutDown");
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
