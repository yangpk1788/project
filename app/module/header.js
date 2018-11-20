define(function(){
	function Header(){}

	Header.prototype.init = function(){
		//1、把header的html内容加载到对应的页面上
		//2、header的交互
		$("header").load("/html/component/header.html",function(){
			//header的功能代码
			if(document.cookie)
			{
				var str=document.cookie;
				var arr=str.split("; ");
				for(var i=0;i<arr.length;i++)
				{
					var item=arr[i].split("=");
					if(item[0]=="name")
					{
						$("header .nav-right li a").eq(0).html(item[1]);
						$("header .nav-right li a").eq(0).attr("href","javascript:;")
						$("header .nav-right li a").eq(1).html("退出");
						$("header .nav-right li a").eq(1).attr("href","javascript:;")
					}
				}
			}
			$("header .nav-right li a").eq(1).click(function(e){
				if($("header .nav-right li a").eq(0).html()!="登录")
				{
					clearAllCookie();
					window.location.href='http://localhost:2333/';
				}
			});
			//清除所有cookie函数
			function clearAllCookie() {
				var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
				if(keys) {
					for(var i = keys.length; i--;)
						document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()
				}
			}

		});

	}

	return new Header();
})