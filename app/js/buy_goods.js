require(["config"],function(){
	require(["header","footer","buy_choose","fangda"],function(header,footer,buy_choose,fangda){
		header.init();
		footer.init();
		buy_choose.init();
		fangda.init();
	});
    require(["jquery","template"],function($,template){
        var str = location.search.slice(1);//id=1;
        var arr = str.split("="); // ["id","3"];
        console.log(arr)
        $.ajax("http://rap2api.taobao.org/app/mock/117465/example/1542171573728").done(function(data){
            var brr = data.list;
            console.log(brr[arr[1]-1])
            $(".buy-goods-img img").attr("src",brr[arr[1]-1].img)
        })
    });

})