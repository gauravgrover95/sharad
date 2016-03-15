

$(".iclose").click(function() {
	$(".about").addClass("animated fadeOutDownBig");

});

$(".link").click(function() {
	$(".about").show().addClass("animated bounceInUp");
});

$(".logo").mouseenter(function(){
    $(".logo h1").fadeOut();
    $(".logo p").fadeIn();
});
$(".logo").mouseleave(function(){
    $(".logo h1").fadeIn();
    $(".logo p").fadeOut();
});