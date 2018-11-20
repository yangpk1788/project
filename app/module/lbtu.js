define(function(){
	function lunbotu(){};
	lunbotu.prototype.init=function(){
		var bwidth=$(document.body).outerWidth();
		$(".lb-box li").eq(0).clone(true).appendTo(".lb-box");
		var num=$(".lb-box li").length;
		var index=0;
		var flag=false;
		$(".banner-box").css("width",bwidth);
		$(".lb-box img").css("width",bwidth);
		$(".lb-box").css("width",num*bwidth);
		for(var i=0;i<num-1;i++)
		{
		 	$("<li></li>").appendTo($("#ol"));
		}
		$("#ol li").eq(0).addClass("libtn");
		$("#ol li").on("click",function(){
			if(!flag)
			{
				flag=true;
				var _this=$(this);
				_this.addClass("libtn").siblings().removeClass("libtn");
				$(".lb-box").animate({left:-_this.index()*bwidth},1000,function(){
					flag=false;
				});
			}		
		});
		
		var timer=null;
		function auto(){
			timer=setInterval(function(){
				if(!flag)
				{
					flag=true;
					index++;
					if(index>=num-1)
					{
						$("#ol li").eq(0).addClass("libtn").siblings().removeClass("libtn");
						$(".lb-box").animate({left:-(num-1)*bwidth},1000,function(){
							$(".lb-box").css("left",0);
							index=0;
							flag=false;
						});			
					}else{
						$("#ol li").eq(index).addClass("libtn").siblings().removeClass("libtn");
						$(".lb-box").animate({left:-index*bwidth},1000,function(){
							flag=false;
						});
					}
				}				
			},3000);
		}
		auto();
		$(".lb-box").hover(function(){
			clearInterval(timer);
		},function(){
			auto();
		})
	};
	return new lunbotu();
})
