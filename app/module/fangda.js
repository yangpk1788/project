define(function(){
	function fangda(){};
	fangda.prototype.init=function(){
		$(".buy-goods-img").on("mouseenter",function(e){
			$("#lens").css("display","block");
			var left=e.pageX-$(".buy-goods-img").offset().left-$("#lens").outerWidth()/2;
			var top=e.pageY-$(".buy-goods-img").offset().top-$("#lens").outerHeight()/2;
			$("#lens").css("left",left+"px");
			$("#lens").css("top",top+"px");
			$(".buy-big-img").css("display","block");
			$("#lens").on("mousemove",function(e){
				var left=e.pageX-$(".buy-goods-img").offset().left-$(this).outerWidth()/2;
				var top=e.pageY-$(".buy-goods-img").offset().top-$(this).outerHeight()/2;
				if(left<0) left=0;
				if(top<0) top=0;
				if(left>$(".buy-goods-img").outerWidth()-$(this).outerWidth()) left=$(".buy-goods-img").outerWidth()-$(this).outerWidth();
				if(top>$(".buy-goods-img").outerHeight()-$(this).outerHeight()) top=$(".buy-goods-img").outerHeight()-$(this).outerHeight();
				$(this).css("left",left+"px");
				$(this).css("top",top+"px");
				$(".buy-big-img img").css("left",-left*2);
				$(".buy-big-img img").css("top",-top*2);
			});
		})
		
		$(".buy-goods-img").on("mouseleave",function(){
			$("#lens").css("display","none");
			$(".buy-big-img").css("display","none");
		})
	};
	return new fangda();
})