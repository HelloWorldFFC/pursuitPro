
var timeConvert = require('./timeConvert.js');
const iscan = (name,list) => {
	let ret = {
		iscan : false,
		msg : '',
	};
	
	for(let i=0;i<list.length;i++){
		
		let item = list[i];
		if(item.name == name){
			ret.msg = '已添加相同项！';
			break;
		}
	}
	if(ret.msg.length == 0){
		ret.iscan = true ;
	}
	return ret;
}

const getCalcuList = (_list) =>{
	let list = [] ;
	
	_list.forEach(item=>{
		let enddate = timeConvert.dateAddToString('m',parseInt(item.validMonth) , new Date(item.manufactureDate)) ;
		let now = timeConvert.dateToString(new Date());
		let days = timeConvert.getDatedifference(now,enddate) ;
		list.push({
			name : item.name,
			manufactureDate : item.manufactureDate,
			enddate : enddate ,
			validMonth : item.validMonth,
			days : days,
			isRed : days<30?true:false,
		})
	})
	
	list.sort(function(a, b) {
		return a.days > b.days ? 1 : -1
	});
	
	return list || [] ;
}

const getsetList = (list) =>{
	list.sort(function(a, b) {
		// let adate = timeConvert.dateAddToString('m',parseInt(a.validMonth) , new Date(a.manufactureDate)) ;
		// let bdate = timeConvert.dateAddToString('m',parseInt(b.validMonth) , new Date(b.manufactureDate)) ;
		return a.days > b.days ? 1 : -1
	});
	//console.log('emmeniaList1', emmeniaList)
	list = list.slice(0, 50);
	//console.log('emmeniaList2', emmeniaList)
	
	return list ;
}


module.exports = {
	iscan : iscan ,
	getCalcuList : getCalcuList ,
	getsetList : getsetList ,
}