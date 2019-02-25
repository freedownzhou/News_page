var num=0;
$('.callapce .collapse-item').on('click',function () {
    var index = $(this).index()

    if (num == 0) {
    	num=1;
        $('.callapce .collapse-item').eq(index).find($('.downImg')).addClass('rotate');
	}else {
    	num=0;
        $('.callapce .collapse-item').eq(index).find($('.downImg')).removeClass('rotate');
	}
    $('.callapce .collapse-item').eq(index).find($('.item-mn')).toggle(
    	function(){}, function(){});
});
