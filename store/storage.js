const storageKeyType = {
  userInfo : 'userInfo',
	emmeniaList : 'emmeniaList',
	emmeniaCyc : 'emmeniaCyc',
	emmeniaUnitCyc : 'emmeniaUnitCyc',
	validTermList : 'validTermList',
	timingReminder : 'timingReminder',
	s_pl_list : 's_pl_list',
}
const def_Data = {
    emmeniaCyc : 30,
	emmeniaUnitCyc : 5,
}

const setTimingReminder =(info)=>{
	//全局变量和缓存同时存，防止缓存有问题
	getApp().globalData.timingReminder = info;
	uni.setStorage({
	    key: storageKeyType.timingReminder,
	    data: info,
	    success: function () {
	        //console.log('success');
	    }
	});
}

const setValidTermList =(info)=>{
	//全局变量和缓存同时存，防止缓存有问题
	getApp().globalData.validTermList = info;
	uni.setStorage({
	    key: storageKeyType.validTermList,
	    data: info,
	    success: function () {
	        //console.log('success');
	    }
	});
}
const setEmmeniaCyc =(info)=>{
	//全局变量和缓存同时存，防止缓存有问题
	getApp().globalData.emmeniaCyc = info;
	uni.setStorage({
	    key: storageKeyType.emmeniaCyc,
	    data: info,
	    success: function () {
	        //console.log('success');
	    }
	});
}
const setEmmeniaUnitCyc =(info)=>{
	//全局变量和缓存同时存，防止缓存有问题
	getApp().globalData.emmeniaUnitCyc = info;
	uni.setStorage({
	    key: storageKeyType.emmeniaUnitCyc,
	    data: info,
	    success: function () {
	        //console.log('success');
	    }
	});
}
const setEmmeniaList =(list)=>{
	//全局变量和缓存同时存，防止缓存有问题
	getApp().globalData.emmeniaList = list;
	uni.setStorage({
	    key: storageKeyType.emmeniaList,
	    data: list,
	    success: function () {
	        //console.log('success');
	    }
	});
}

const setUserInfo =(userInfo)=>{
	//全局变量和缓存同时存，防止缓存有问题
	getApp().globalData.userInfo = userInfo ;
	getApp().globalData.phone = userInfo.phone;
	uni.setStorage({
	    key: storageKeyType.userInfo,
	    data: userInfo,
	    success: function () {
	        //console.log('success');
	    }
	});
}


const getUserInfo =()=>{
	//有缓存就把缓存赋给全局变量
	let ret ;
	if(getApp().globalData.userInfo){
		ret = getApp().globalData.userInfo ;
	}
	return ret || '';
}

const getUserInfoPhone =()=>{
	//有缓存就把缓存赋给全局变量
	let ret ='';
	if(getApp().globalData.userInfo.phone){
		ret = getApp().globalData.userInfo.phone ;
	}else{
		ret = getApp().globalData.phone ;
	}
	return ret || '';
}

const getUserInfoId =()=>{
	//有缓存就把缓存赋给全局变量
	let ret ='';
	if(getApp().globalData.userInfo.id){
		ret = getApp().globalData.userInfo.id ;
	}
	return ret || '';
}

const getTokenInfo = (isToLogin = true) => 
{	
	return 	getUserInfo('token',isToLogin) ;		
}

const getEmmeniaCyc =()=>{
	//有缓存就把缓存赋给全局变量
	let ret = 30;
	if(getApp().globalData.emmeniaCyc){
		ret = getApp().globalData.emmeniaCyc ;
	}
	return parseInt(ret) || 30;
}
const getEmmeniaUnitCyc =()=>{
	//有缓存就把缓存赋给全局变量
	let ret = 5;
	if(getApp().globalData.emmeniaUnitCyc){
		ret = getApp().globalData.emmeniaUnitCyc ;
	}
	return parseInt(ret) || 5;
}
const getEmmeniaList =()=>{
	//有缓存就把缓存赋给全局变量
	let ret = [];
	if(getApp().globalData.emmeniaList){
		ret = getApp().globalData.emmeniaList ;
	}
	return ret || [];
}
const getValidTermList =()=>{
	//有缓存就把缓存赋给全局变量
	let ret = [];
	if(getApp().globalData.validTermList){
		ret = getApp().globalData.validTermList ;
	}
	return ret || [];
}
const getTimingReminder =()=>{
	//有缓存就把缓存赋给全局变量
	let ret = '';
	if(getApp().globalData.timingReminder){
		ret = getApp().globalData.timingReminder ;
	}
	return ret || '';
}

const clearTimingReminder =()=>{
	//有缓存就把缓存赋给全局变量
	getApp().globalData.timingReminder = '';
	uni.removeStorage({
	    key: storageKeyType.timingReminder,
	    success: function (res) {
	    }
	});
}
module.exports = {
	def_Data : def_Data,
	storageKeyType : storageKeyType ,
	setUserInfo : setUserInfo ,
	getUserInfoPhone :getUserInfoPhone ,
	getUserInfoId : getUserInfoId ,
	getUserInfo : getUserInfo,
	getTokenInfo : getTokenInfo,
	setEmmeniaList :setEmmeniaList,
	setEmmeniaCyc : setEmmeniaCyc ,
	setEmmeniaUnitCyc : setEmmeniaUnitCyc ,
	getEmmeniaUnitCyc : getEmmeniaUnitCyc ,
	getEmmeniaCyc : getEmmeniaCyc ,
	getEmmeniaList : getEmmeniaList ,
	setValidTermList : setValidTermList ,
	getValidTermList : getValidTermList ,
	setTimingReminder ,
	getTimingReminder ,
	clearTimingReminder ,
}