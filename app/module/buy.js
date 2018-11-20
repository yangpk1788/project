define(function(){
	function shopcar(){};
	shopcar.prototype.init=function(){
		var a=document.getElementById("quan");
		var aa=document.getElementsByTagName("input");
		var n=0;
		var check=false;
		a.onclick=function(){
			if(a.checked=="")
			{
				for(var i=1;i<aa.length;i++){
					aa[i].checked="";
					aa[i].onclick();
				}
				check=false;
				$(".charge .sum").html("0.0");
			}
			else{
				for(var i=1;i<aa.length;i++){
					aa[i].checked="checked";
					aa[i].onclick();
				}
				check=true;
				sum();
			}
		}
		for(var i=1;i<aa.length;i++){
			aa[i].onclick=function(){
				var s_pri=0;
				var m=0;
				for(var j=1;j<aa.length;j++){
					if(aa[j].checked!=""){
						n++;
						aa[j].parentNode.parentNode.children[4].children[0].innerHTML=aa[j].parentNode.parentNode.children[2].children[0].innerHTML;
						var zz=parseFloat(aa[j].parentNode.parentNode.children[4].children[0].innerHTML.slice(1));
						s_pri+=zz;
						$(".charge .sum").html(s_pri+".0");
					}else{
						m++;
						aa[j].parentNode.parentNode.children[4].children[0].innerHTML="￥0.0";
					}
				}
				if(m==aa.length-1)
				{
					$(".charge .sum").html("0.0");
				}
				if(n==aa.length-1)
				{
					a.checked="checked";
					check=true;
					sum();
				}
				else{
					a.checked="";
					check=false;
				}
			n=0;
			}
		} 
		
		$("td").on("click",".sp3:eq(0)",function(){
			var num=parseInt($(this).next().html());
			var pri=$(this).parent().prev().children().html().slice(1);
			pri=parseFloat(pri);
			num--;
			if(num<=1)
			{
				num=1;
			}
			$(this).next().html(num);
			$(this).parent().next().children().html("￥"+num*pri+".0");
			
			if ($(this).parent().parent().children().get(0).children[0].checked) {
				sum();	
			}
			console.log($(this).parent().parent().children().get(0).children[0].checked);
			
		});
		$("td").on("click",".sp3:eq(2)",function(){
			var num=parseInt($(this).prev().html());
			var pri=$(this).parent().prev().children().html().slice(1);
			pri=parseFloat(pri);
			num++;
			$(this).prev().html(num);
			$(this).parent().next().children().html("￥"+num*pri+".0");
			if ($(this).parent().parent().children().get(0).children[0].checked) {
				sum();	
			}
		});
		var sum_pri=0;
		$("td").on("click",".sp5",function(){
			$(this).parent().parent().remove();
			sum();
		});
		function sum(){
			sum_pri=0;
			$.each($(".sp4"),function(){
				var pri_str=parseFloat($(this).html().slice(1));
				sum_pri+=pri_str;
			});
			$(".charge .sum").html(sum_pri+".0");
		};
		new shopcar().car();
	};
	shopcar.prototype.car=function(){
		var str1="";
		if(document.cookie)
		{
			var str=document.cookie;
			var arr=str.split("; ");
			
			for(var i=0;i<arr.length;i++)
			{
				var item=arr[i].split("=");
				if(item[0]=="goods")
				{
					str1= item[1];
					console.log(str1);
					document.cookie="goods=0; expires=" + new Date(0).toUTCString();
				}	
			}
			
			function fn(){
				for(var i=0;i<arr.length;i++)
				{
					var item=arr[i].split("=");
					if(item[0]=="brr")
					{
						return document.cookie;
					}else{
						return document.cookie="brr="+str1;
					}
				}	
			};
			fn();
			console.log(str1);
			for(var i=0;i<arr.length;i++)
			{
				var item=arr[i].split("=");
				if(item[0]=="brr")
				{
					var b=JSON.parse(item[1]);
					console.log(str1);
//					b.push(JSON.parse(str1));
//					document.cookie="brr="+JSON.stringify(b);
					
//					for(var j=0;j<b.length;j++)
//					{
//						var tr=document.getElementsByTagName("tr")[1].cloneNode(true);
//						document.getElementsByTagName("tbody")[0].appendChild(tr);
//						tr.childNodes[1].childNodes[0].childNodes[0].src="../images/goods/"+b[j].path;
//						
//					}
				}
			}
			
			console.log(document.cookie);
			console.log(b);
		}
	};
	return new shopcar();
});