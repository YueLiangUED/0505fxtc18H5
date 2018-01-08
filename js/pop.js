$(function () {
     var winWidth=$(window).width();
    $('html').css({
        fontSize:winWidth/750*100+'px'
    });
    // 遮罩层
    var $close = $('.close'),
        $modal = $('.modal');
    $close.on('click', function () {
        $modal.hide();
    });
});