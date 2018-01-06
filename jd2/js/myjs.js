/*banner 区弹出框*/
$('#cate-box>li').on('mouseenter',function(){
    $('#sub-cate-box').css('display','block');
});

$('#cate-box>li').on('mouseleave',function(){
    $('#sub-cate-box').css('display','none');
});