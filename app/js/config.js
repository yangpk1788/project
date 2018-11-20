require.config({
	baseUrl: "/",
	paths: {
		"jquery": "libs/jquery-1.12.4",
		"tab": "module/tab",
		"toast": "module/toast",
		"template": "libs/template-web",
		"url": "module/url",
		"header": "module/header",
		"footer":"module/footer",
		"lunbotu":"module/lbtu",
		"xxka":"module/xxka",
		"validation":"module/validation",
		"login_validation":"module/login_validation",
		"buy_goods":"module/buy",
		"fangda":"module/fangda",
		"choose_goods":"module/choose_goods",
		"buy_choose":"module/buy_choose"
	},
	shim: {
		toast:{
			deps:["jquery"]
		},
		header:{
			deps:["jquery"]
		},
		footer:{
			deps:["jquery"]
		},
		lunbotu:{
			deps:["jquery"]
		},
		xxka:{
			deps:["jquery"]
		},
		validation:{
			deps:["jquery"]
		},
		login_validation:{
			deps:["jquery"]
		},
		buy_goods:{
			deps:["jquery"]
		},
		fangda:{
			deps:["jquery"]
		},
		choose_goods:{
			deps:["jquery"]
		},
		buy_choose:{
			deps:["jquery"]
		}
	}
})