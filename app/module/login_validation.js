define(function(){
	function login_validation(){};
	login_validation.prototype.init=function(){
		var flag=[false,false,false];
		$("#sub_login").submit(function(e){
			if($("#sub_login #name").val()==""||$("#sub_login #password").val()=="")
			{
				alert("用户名或密码有误");
				return false;
			}
			if($("#yzm").val().toLocaleUpperCase()!=$(".login-yzm").html().toLocaleUpperCase())
			{
				alert("验证码不一致");
				return false;
				
			}
			new login_validation().ajax();
			e.preventDefault();
		});
	};
	login_validation.prototype.ajax=function(){
		var p_name=$("#name").val();
		var p_password=$("#password").val();
		$.ajax({
			type:"POST",
			url:"http://localhost/project_mysql/login.php",
			data:{
				name:p_name,
				Password:p_password
			},
			success:function(data){
				data=parseInt(data);
				if(data)
				{
					document.cookie="name="+p_name+";path=/";
					
					console.log(document.cookie);
					window.location.href='http://localhost:2333/';
				}else{
					alert("用户名或密码有误");
				}
			}
		});
	};
	return new login_validation();
})