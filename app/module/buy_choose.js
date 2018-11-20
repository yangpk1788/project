define(function(){
	function buy_choose(){};
	
	buy_choose.prototype.init=function(){
		var goods_id=null;
		if(document.cookie)
		{
			var str=document.cookie;
			var arr=str.split("; ");
			for(var i=0;i<arr.length;i++)
			{
				var item=arr[i].split("=");
				if(item[0]=="goods_id")
				{
					goods_id=item[1];
				}
			}
		}

		$.ajax({
			type:"POST",
			url:"http://localhost/project_mysql/goods.php",
			data:{
				id:goods_id
			},
			dataType:"json",
			success:function(data){
				$(".buy-container .buy-goods img").attr("src","../images/goods/"+data[6]);
				$(".buy-container .buy-goods .buy-goods-right h1").html(data[1]);
				$("<br />").appendTo($(".buy-container .buy-goods .buy-goods-right h1"));	
				$("<small></small>").appendTo($(".buy-container .buy-goods .buy-goods-right h1"));
				$(".buy-container .buy-goods .buy-goods-right h1 small").html(data[2]);
				$(".buy-container .buy-goods .buy-goods-right .text-miaoshu p").html(data[3]);
				$(".buy-container .buy-goods .buy-goods-right .goods-price span").html("￥"+data[4]);
				var str="0";
				if(data[5]!=null)
				{
					str="￥"+data[5];
				}else{
					str=data[5];
				}
				$(".buy-container .buy-goods .buy-goods-right .goods-price del").html(str);
				var obj={
					goods_id:goods_id,
					path:data[6],
					miaoshu:data[1],
					price:data[4],
					num:1			
				}
				var str=JSON.stringify(obj);
				document.cookie="goods="+str;
			}
		});
	};
	return new buy_choose();
});