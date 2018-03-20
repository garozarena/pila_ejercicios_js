$("a").mouseenter(function (e) {
    var posMouse = e.pageX - this.offsetLeft;
    var textoTooltip = $(this).attr("title");

    if (textoTooltip.length > 0) {
        $(this).append('<div class="tooltip">' + textoTooltip + '</div>');
        $("a > div.tooltip").css("left", "" + posMouse - 103 + "px");
        $("a > div.tooltip").fadeIn(300);
    }
});

$("a").mouseleave(function () {
    $("a > div.tooltip").fadeOut(300).delay(300).queue(function () {
        $(this).remove();
        $(this).dequeue();
    });
});
