define(function(){
	function choose_goods(){};
	
	choose_goods.prototype.init=function(){
		
		$(".zx-shop .shop .shop-goods ul li a").on("click",function(e){
			var goods_id=$(this).attr("index");
			document.cookie="goods_id="+goods_id+";path=/";
		});
	};
	return new choose_goods();
});