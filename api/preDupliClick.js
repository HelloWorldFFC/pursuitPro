var uiOperat = require('./uiOperat.js');
const preDupliClickVal = {
	arr : new Array(1000),
}
//防止连续点击
const preDupli = {
	one : 1,
	two : 2 ,
	
}
//防止在规定时间内再次点击执行函数
const setpreDupliClickVal = (val) => {
	let preDupli=preDupliClickVal.arr[val];
	if(typeof(preDupli) === 'undefined'){
		preDupliClickVal.arr[val] = true;//初始化为true
	}
	let isonce = preDupliClickVal.arr[val];
	if(!isonce){
		uiOperat.showMsg(getClickFrequencyTip());//点击过快提示语
	}else{
		preDupliClickVal.arr[val] = false;
		let timeOutId = setTimeout(() => {
		    preDupliClickVal.arr[val] = true;				
		},getClickFrequencyTime())
		console.log('timeOutId',timeOutId);
	}
	return isonce ;
}

//点击事件控制点击频次
const getClickFrequency = (type='time') => {
	var res ;
	switch(type){
		case 'time':
			res = 1000 ;
			break;
		case 'tip':
			res = '你点击过快,请1秒后再操作!' ;
			break;		
	}
	return res || '';
}

//点击事件控制点击频次
const getClickFrequencyTime = () => {
	
	return getClickFrequency();
}
//点击事件控制点击频次
const getClickFrequencyTip = () => {	
	return getClickFrequency('tip');
}

//函数节流(throttle)：函数在一段时间内多次触发只会执行第一次，
//在这段时间结束前，不管触发多少次也不会执行函数
//适用有参数,没有用this的函数
 const throttle = (fn,gapTime) =>{
	console.log('throttleindex')
    if (gapTime == null || gapTime == undefined) {
		gapTime = getClickFrequencyTime() ;
    }
    let _lastTime = null ;
    return function ()  {
      let _nowTime = + new Date()
        if (_nowTime - _lastTime > gapTime || !_lastTime) {
            // 将this和参数传给原函数
			//fn();
            fn.apply(this,arguments)
            _lastTime = _nowTime ;
        }else{
			uiOperat.showMsg(getClickFrequencyTip());//点击过快提示语
		}
    }
}


/**
 * @desc 函数防抖
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param immediate true 表立即执行，false 表非立即执行
 */
//暂时发现也调不了页面的this
const  debounce = (func,wait,immediate) => {
    let timeout;
	console.log('debounce')
    return function () {
        let context = this;
        let args = arguments;
 
        if (timeout) clearTimeout(timeout);
        if (immediate) {
            var callNow = !timeout;
            timeout = setTimeout(() => {
                timeout = null;
            }, wait)
            if (callNow) func.apply(context, args)
        }
        else {
            timeout = setTimeout(function(){
                func.apply(context, args)
            }, wait);
        }
    }
}

module.exports = {
	preDupli :  preDupli,
	getClickFrequencyTime : getClickFrequencyTime ,
	getClickFrequencyTip : getClickFrequencyTip ,
	throttle : throttle ,
	debounce : debounce ,
	setpreDupliClickVal : setpreDupliClickVal ,
}