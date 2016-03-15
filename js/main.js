

$(".something").click(function() {
	$(".about").toggle().addClass("animated bounceInUp");
});

$(".logo").mouseenter(function(){
    $(".logo h1").fadeOut();
    $(".logo p").fadeIn();
});
$(".logo").mouseleave(function(){
    $(".logo h1").fadeIn();
    $(".logo p").fadeOut();
});