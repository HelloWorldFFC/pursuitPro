
//判断手机号是否正确
const checkPhone = (phone) => {
	var isok = false;
	if (/^1(3|4|5|6|7|8|9)\d{9}$/.test(phone)) {
		isok = true;
	}
	return isok;
}
// 判断邮箱号码是否正确
 const checkEmail = (str) => {
	 var isok = false;
      if(/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/.test(str)){
		  isok = true;
	  }
	  return isok;
 }

//验证6-16位字母与数字组合
const checkPwd = (pwd) => {
	//var reg =/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/
	var reg=/^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{6,16}$/;
	var re = new RegExp(reg)
	if (re.test(pwd)) { 
	    return true;
	}else{ 
	    return false; 
	}
}

//判断验证码位数是否正确
const checkCode = (code) => {
	let isok = false;
	if ((/^\d{4}$/.test(code))) {
		isok = true;
	}
	return isok;
}

module.exports = {
	checkPhone,
	checkPwd,
	checkCode,
}