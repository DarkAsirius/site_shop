$(".open-popup").click(function (e) {
e.preventDefault();
$(".popup-box").fadeIn(800);
$("html").addClass("no-scroll");
});

$(".close-popup").click(function () {
$(".popup-box").fadeOut(800);
$("html").removeClass("no-scroll");
}); 