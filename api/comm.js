var ordinateTransf = require('./ordinateTransf.js');

const imgPre = '';

 const imgHander = ''; 
 
const imgHanderDetail = '';

const base_url_html = '';

const amapPlugin_key_wx = '';

const versionNumber = '1.1.4';

const checkStrLen = (str) => {
 	let isok = false;
 	if (str.length <= 15) {
 		isok = true;
 	}
 	return isok;
}
 //判断云端是否返回成功
 const isResSuccess = (res) => {
 	let isSuccess = false;
 	if (res.data.flag === 1) {
 		isSuccess = true;
 	}
 	return isSuccess;
 }

 //判断手机号是否正确
 const checkPhone = (phone) => {
 	let isok = false;
 	if ((/^1(3|4|5|6|7|8|9)\d{9}$/.test(phone))) {
 		isok = true;
 	}
 	return isok;
 }
 
 //判断验证码位数是否正确
 const checkCode = (code) => {
 	let isok = false;
 	if ((/^\d{4}$/.test(code))) {
 		isok = true;
 	}
 	return isok;
 }
 
//坐标转换
//WGS84：为一种大地坐标系，也是目前广泛使用的GPS全球卫星定位系统使用的坐标系。
//GCJ02：又称火星坐标系，是由中国国家测绘局制订的地理信息系统的坐标系统。由WGS84坐标系经加密后的坐标系
//BD09：为百度坐标系，在GCJ02坐标系基础上再次加密。其中bd09ll表示百度经纬度坐标，bd09mc表示百度墨卡托米制坐标。
//h5在微信浏览器里、uniapp是使用 gcj02 国测局坐标系
//WGS84  GCJ02  BD09
// const changeAdress_bd_To_gcj = (adress) => {
//  	let ret = adress;
	
// 	let bdLat = ret.latitude ;
// 	let bdLon = ret.longitude ;
	
// 	let gcjLatLon = ordinateTransf.bd_decrypt_To_gcj(bdLat,bdLon);
	
// 	ret.longitude = gcjLatLon.lon;
// 	ret.latitude = gcjLatLon.lat;
	
// 	// #ifdef H5
// 	//H5苹果不展示，要parseFloat一下
// 	ret.longitude = parseFloat(gcjLatLon.lon);
// 	ret.latitude = parseFloat(gcjLatLon.lat);
// 	// #endif
	
// 	console.log('ret.latitude',ret.latitude);
// 	console.log('ret.longitude',ret.longitude);
//  	return ret;
//  }
 
 const changeAdress_bd_To_gcj = (latitude,longitude) => {
  	let ret = {};
 	
 	let bdLat = latitude ;
 	let bdLon = longitude ;
 	
 	let gcjLatLon = ordinateTransf.bd_decrypt_To_gcj(bdLat,bdLon);
	
 	ret = {
		latitude : parseFloat(gcjLatLon.lat),
		longitude : parseFloat(gcjLatLon.lon)	
	}
 	
 	//console.log('ret.latitude',ret.latitude);
 	//console.log('ret.longitude',ret.longitude);
  	return ret;
  }
 
 const changeAdress_bd_To_wgs = (adress) => {
  	let ret = adress;
 	
 	let bdLat = ret.latitude ;
 	let bdLon = ret.longitude ;
 	
 	let gcjLatLon = ordinateTransf.bd_decrypt_To_gcj(bdLat,bdLon);
	let wgsLatLon = ordinateTransf.gcj_decrypt_To_wgs(gcjLatLon.lat,gcjLatLon.lon);
 	
 	ret.longitude = wgsLatLon.lon;
 	ret.latitude = wgsLatLon.lat;
 	//console.log('ret.latitude',ret.latitude);
 	//console.log('ret.longitude',ret.longitude);
  	return ret;
  }

 module.exports = {
 	imgPre: imgPre,
	imgHander : imgHander ,
	imgHanderDetail : imgHanderDetail ,
	base_url_html : base_url_html ,
	versionNumber : versionNumber ,
 	isResSuccess: isResSuccess,
	checkPhone : checkPhone ,
	checkCode : checkCode ,
	changeAdress_bd_To_gcj : changeAdress_bd_To_gcj,
	changeAdress_bd_To_wgs : changeAdress_bd_To_wgs ,
	checkStrLen,
	amapPlugin_key_wx,
 }
