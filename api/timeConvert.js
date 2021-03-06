const getRangeByTwoTimeStr = (startTimeStr, endTimeStr) => {
	let startTime = new Date(startTimeStr); // 开始时间
	let endTime = new Date(endTimeStr); // 结束时间
	let usedTime = endTime - startTime; // 相差的毫秒数
	let days = Math.floor(usedTime / (24 * 3600 * 1000)); // 计算出天数
	let leavel = usedTime % (24 * 3600 * 1000); // 计算天数后剩余的时间
	let hours = Math.floor(leavel / (3600 * 1000)); // 计算剩余的小时数
	let leavel2 = leavel % (3600 * 1000); // 计算剩余小时后剩余的毫秒数
	let minutes = Math.floor(leavel2 / (60 * 1000)); // 计算剩余的分钟数
	hours = isSubTen(hours);
	minutes = isSubTen(minutes);
	return days + '天' + hours + '时' + minutes + '分';
}
const get_mm_ByTwoTimeStr = (startTimeStr, endTimeStr) => {

	let startTime = new Date(startTimeStr); // 开始时间
	let endTime = new Date(endTimeStr); // 结束时间
	let usedTime = endTime - startTime; // 相差的毫秒数
	let days = Math.floor(usedTime / (24 * 3600 * 1000)); // 计算出天数
	let leavel = usedTime % (24 * 3600 * 1000); // 计算天数后剩余的时间
	let hours = Math.floor(leavel / (3600 * 1000)); // 计算剩余的小时数
	let leavel2 = leavel % (3600 * 1000); // 计算剩余小时后剩余的毫秒数
	let minutes = Math.floor(leavel2 / (60 * 1000)); // 计算剩余的分钟数
	let leavel3 = leavel2 % (60 * 1000); // 计算剩余分钟后剩余的毫秒数
	let second = Math.floor(leavel3 / (1 * 1000)); // 计算剩余的秒数
	
	hours = isSubTen(hours);
	minutes = isSubTen(minutes);
	second = isSubTen(second);
	return days + '天' + hours + '时' + minutes + '分' + second + '秒';

}
const getDays_ByTwoTimeStr = (startTimeStr, endTimeStr) => {
	let startTime = new Date(startTimeStr); // 开始时间
	let endTime = new Date(endTimeStr); // 结束时间
	let usedTime = endTime - startTime; // 相差的毫秒数
	let days = Math.floor(usedTime / (24 * 3600 * 1000)); // 计算出天数
	return days + '天';
}
const dateToString = date => {
	var year = date.getFullYear();
	var month = (date.getMonth() + 1).toString();
	var day = (date.getDate()).toString();
	if (month.length == 1) {
		month = "0" + month;
	}
	if (day.length == 1) {
		day = "0" + day;
	}
	var dateTime = year + "-" + month + "-" + day;
	console.log('dateToString', dateTime);
	return dateTime;
}
/* 
 *   功能:实现VBScript的DateAdd功能. 
 *   参数:interval,字符串表达式，表示要添加的时间间隔. 
 *   参数:number,数值表达式，表示要添加的时间间隔的个数. 
 *   参数:date,时间对象. 
 *   返回:新的时间对象. 
 *   var   now   =   new   Date(); 
 *   var   newDate   =   DateAdd( "d ",5,now); 
 *---------------   DateAdd(interval,number,date)   ----------------- 
 */
const secondsToHMs = (value) => {
	var secondTime = parseInt(value); // 秒
	var minuteTime = 0; // 分
	var hourTime = 0; // 小时
	if (secondTime > 60) { //如果秒数大于60，将秒数转换成整数
		//获取分钟，除以60取整数，得到整数分钟
		minuteTime = parseInt(secondTime / 60);
		//获取秒数，秒数取佘，得到整数秒数
		secondTime = parseInt(secondTime % 60);
		//如果分钟大于60，将分钟转换成小时
		if (minuteTime > 60) {
			//获取小时，获取分钟除以60，得到整数小时
			hourTime = parseInt(minuteTime / 60);
			//获取小时后取佘的分，获取分钟除以60取佘的分
			minuteTime = parseInt(minuteTime % 60);
		}
	}
	var result = "" + parseInt(secondTime) + "秒";

	if (minuteTime > 0) {
		result = "" + parseInt(minuteTime) + "分" + result;
	}
	if (hourTime > 0) {
		result = "" + parseInt(hourTime) + "小时" + result;
	}
	return result;
}
const dateAdd = (interval, number, date) => {
	switch (interval) {
		case "y":
			{
				date.setFullYear(date.getFullYear() + number);
				return date;
				break;
			}
		case "q":
			{
				date.setMonth(date.getMonth() + number * 3);
				return date;
				break;
			}
		case "m":
			{
				date.setMonth(date.getMonth() + number);
				return date;
				break;
			}
		case "w":
			{
				date.setDate(date.getDate() + number * 7);
				return date;
				break;
			}
		case "d":
			{
				date.setDate(date.getDate() + number);
				return date;
				break;
			}
		case "h":
			{
				date.setHours(date.getHours() + number);
				return date;
				break;
			}
		case "m":
			{
				date.setMinutes(date.getMinutes() + number);
				return date;
				break;
			}
		case "s":
			{
				date.setSeconds(date.getSeconds() + number);
				return date;
				break;
			}
		default:
			{
				date.setDate(d.getDate() + number);
				return date;
				break;
			}
	}
	return date;
}
const dateAddToString = (interval, number, date) => {
	var _date = dateAdd(interval, number, date);
	return dateToString(_date);
}
const dateAddToTime = (interval, number, date) => {
	var _date = dateAdd(interval, number, date);
	return getTime(_date);
}
//两个时间相差天数 兼容firefox chrome
//sDate1和sDate2是2006-12-18格式 
const getDatedifference = (sDate1, sDate2) => {
	var dateSpan,
		tempDate,
		iDays;
	sDate1 = Date.parse(sDate1);
	sDate2 = Date.parse(sDate2);
	dateSpan = sDate2 - sDate1;
	dateSpan = Math.abs(dateSpan);
	iDays = Math.floor(dateSpan / (24 * 3600 * 1000));
	return iDays
}
//相差的秒数
const getDatedifferenceS = (sDate1, sDate2) => {
	var dateSpan,
		tempDate,
		iDays;
	sDate1 = Date.parse(sDate1.replace(/-/g, "/"));
	sDate2 = Date.parse(sDate2.replace(/-/g, "/"));
	dateSpan = sDate2 - sDate1;
	dateSpan = Math.abs(dateSpan);
	iDays = Math.floor(dateSpan / (1000));
	return iDays
}
const getTime = (date = new Date()) => {
	//var date = new Date();//获取时间
	console.log(date);
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	var day = date.getDate();

	var hour = date.getHours();
	var minute = date.getMinutes();
	var second = date.getSeconds();

	month = isSubTen(month);
	day = isSubTen(day);
	//这样写显示时间在1~9会挤占空间；所以要在1~9的数字前补零;
	if (hour < 10) {
		hour = '0' + hour;
	}
	if (minute < 10) {
		minute = '0' + minute;
	}
	if (second < 10) {
		second = '0' + second;
	}
	//var x=date.getDay();//获取星期			
	var time = year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second
	return time;
}
const getTimeM = (date = new Date()) => {
	//var date = new Date();//获取时间
	//console.log(date);
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	var day = date.getDate();

	var hour = date.getHours();
	var minute = date.getMinutes();
	var second = date.getSeconds();

	var milliseconds = date.getMilliseconds();


	month = isSubTen(month);
	day = isSubTen(day);
	//这样写显示时间在1~9会挤占空间；所以要在1~9的数字前补零;
	if (hour < 10) {
		hour = '0' + hour;
	}
	if (minute < 10) {
		minute = '0' + minute;
	}
	if (second < 10) {
		second = '0' + second;
	}
	//var x=date.getDay();//获取星期			
	var time = year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second + '.' + milliseconds;
	return time;
}
const isSubTen = num => {
	if (num < 10) {
		num = '0' + num;
	}
	return num;
}

//timestamp时间戳
const getTimestamp = (date = '') => {
	var timestamp = new Date().getTime(); //精确到毫秒
	if (date.length > 0) {
		timestamp = new Date(date).getTime();
	}

	return timestamp
}

//时间戳转化成时间
const getTimesByTamp = (timestamp) => {
	var ttamp = timestamp;
	if (ttamp.length == 10) {
		ttamp = ttamp * 1000;
	}
	var date = new Date(ttamp); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
	var Y = date.getFullYear() + '-';
	var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
	var D = date.getDate();
	var h = date.getHours();
	var m = date.getMinutes();
	var s = date.getSeconds();
	if (D < 10) {
		D = '0' + D;
	}
	if (h < 10) {
		h = '0' + h;
	}
	if (m < 10) {
		m = '0' + m;
	}
	if (s < 10) {
		s = '0' + s;
	}

	return Y + M + D + ' ' + h + ':' + m + ':' + s; ////2014-06-18 10:33:24
}

module.exports = {
	getDatedifference: getDatedifference,
	dateToString: dateToString,
	getTime: getTime,
	isSubTen: isSubTen,
	getTimeM: getTimeM,
	dateAddToString: dateAddToString,
	dateAdd: dateAdd,
	secondsToHMs,
	dateAddToTime,
	getDatedifferenceS,
	getRangeByTwoTimeStr,
	getTimestamp,
	getTimesByTamp,
	getDays_ByTwoTimeStr,
	get_mm_ByTwoTimeStr,
}
