takeaway
========

-------------登录----------------
url:'/login'//为接口地址
type:"post"//提交类型
output:{
    success : "true" // 成功返回true, 失败返回false
    state   : 200  // HTTP 状态码
    nextSrc : ""  // 登录成功后的跳转地址
    errMsg  : ""  // 如果出现错误, 错误信息就出现在这, 如果没有, 那内容为空.
    no      : 0  // 错误号 ,错误号就出现在这, 如果没有, 那内容为空.
}//后端返回数据
input:{
    user_email : "" // 用户名或者密码
    user_psw   : "" // 用户秘密
    user_auth  : "" // 用户验证码
    user_remember : "true" // // 用户记住我
}//前端提交数据
