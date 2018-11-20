define(function(){
	function validation(){};
	validation.prototype.init=function(){
		new validation().yzm();
		var phone_Exg=/^[1-9]\d{10}$/;
		var ps_Exg=/^\w{6,}$/;
		var flag=[false,false,false,false];
		var f=false;
		$("#sub_zc").submit(function(e){
			var flag1=phone_Exg.test($("#name").val());
			var flag2=ps_Exg.test($("#password").val());
			if(!flag1){
				alert("请输入11位电话号码");	
				return false;
			}else{
				flag[0]=true;
			}	
			if(!flag2){
				alert("请输入至少6位数字，字母，下划线的密码");	
				return false;
			}else{
				flag[1]=true;
			}
			if(!($("#password").val()===$("#s-password").val())){
				alert("两次密码不一致");
				return false;
			}else{
				flag[2]=true;
			}
			if(!($("#yzm").val().toLocaleUpperCase()===$("#login_yzm").html().toLocaleUpperCase())){
				alert("验证码不一致");
				return false;
			}else{
				flag[3]=true;
			}
			var j=0;
			for (var i=0;i<flag.length;i++) {		
				if(flag[i]){
					j++;
				}
				if(j==flag.length)
				{
					f=true;
				}
			}
			if(!f){
				return false;
			}	
			new validation().ajax();
			e.preventDefault();
		});
		$("#change-yzm").on("click",function(){
			new validation().yzm();
		});
	};
	validation.prototype.yzm=function(){
		var str="3qwe012rtyui5opl6kjhgfd78saz49xcvbnm";
		var str1="";
		for (var i=0;i<4;i++) {
			var n=Math.floor(Math.random()*str.length);
			str1+=str[n];	
		}
		$(".login-yzm").html(str1);
	};
	validation.prototype.ajax=function(){
		var p_name=$("#name").val();
		var p_password=$("#password").val();
		$.ajax({
			type:"POST",
			url:"http://localhost/project_mysql/register.php",
			data:{
				name:p_name,
				Password:p_password
			},
			dataType:"json",
			success:function(data){
				if(data.code)
				{
					alert("注册成功");
					window.location.href='http://localhost:2333/html/login.html';
				}else{
					alert("手机号已注册");
				}
			}
		});
	};
	return new validation();
})