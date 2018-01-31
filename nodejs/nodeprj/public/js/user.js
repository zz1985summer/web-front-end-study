$(document).ready(()=>{
    $('#logbtn').on('click',()=>{
        //获取用户数据
        let username=$('[name="uname"]').val();
        let password=$('[name="password"]').val();
        if(""===username || ""===password){
            alert("用户名密码不能为空");
            return;
        }else{
            $.ajax({
                type:"post",
                url:"/login.do",
                data:{"uname":username,"password":password},
                async:true,
                success:function(data){

                }
            });
        }
    })
});