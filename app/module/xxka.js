define(function(){
	function xxka(){};
	xxka.prototype.init=function(){
		$(".shop-title-ul ul li").hover(function(){
			$(this).addClass("li-ac").siblings().removeClass("li-ac");
			if($(this).index()==0){
				$(".shop-goods .condom").css("display","block");
				$(".shop-goods .charging").css("display","none");
				$(".shop-goods .headset").css("display","none");
			}else if($(this).index()==1){
				$(".shop-goods .condom").css("display","none");
				$(".shop-goods .charging").css("display","block");
				$(".shop-goods .headset").css("display","none");
			}else if($(this).index()==2||3){
				$(".shop-goods .condom").css("display","none");
				$(".shop-goods .charging").css("display","none");
				$(".shop-goods .headset").css("display","block");
				$(".shop-title-ul ul li").eq(2).addClass("li-ac").siblings().removeClass("li-ac");
			}		
		},function(){
			
		});
	};
	return new xxka();
})