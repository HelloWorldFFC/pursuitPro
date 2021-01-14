var timeConvert = require('./timeConvert.js');
const dataIscan = (startdate, enddate ,emmeniaUnitCyc, emmeniaCyc,emmeniaList,emmeniaindex = -1) => {
	let ret = {
		iscan : false,
		msg : '',
	};
	if (enddate < startdate) {
		ret.msg = '结束时间过早！';
		return ret;
	}
	let days = timeConvert.getDatedifference(startdate, enddate);
	
	if (days < 1) {
		ret.msg = '时间相隔过短！';
		return ret;
	}
	if (days > (emmeniaUnitCyc+3)) {
		ret.msg = '时间相隔过长！';
		return ret;
	}
	// console.log('ret',ret);
	// console.log('emmeniaList',emmeniaList);
	for(let i=0;i<emmeniaList.length;i++){
		let need = true ;
		let item = emmeniaList[i];
		
		if(emmeniaindex !== -1){//修改不与同项的做检查
			if(emmeniaindex == i){
				need = false ;
			}
		}
		
		if(need){
			let juabs = timeConvert.getDatedifference(item.startdate,startdate);
			let min = emmeniaCyc - emmeniaUnitCyc ;
			let max = emmeniaCyc + emmeniaUnitCyc ;
			if(juabs<min){
				ret.msg = '与之前开始时间相隔过短！';
				break ;
			}
		}
	}
	if(ret.msg.length == 0){
		ret.iscan = true ;
	}
	return ret;
}

const getsetemmeniaList = (emmeniaList) =>{
	emmeniaList.sort(function(a, b) {
		return a.startdate < b.startdate ? 1 : -1
	});
	//console.log('emmeniaList1', emmeniaList)
	emmeniaList = emmeniaList.slice(0, 12);
	//console.log('emmeniaList2', emmeniaList)
	
	return emmeniaList ;
}

const getCalcuEmmeniaList = (emmeniaList) =>{
	let list = [] ;
	emmeniaList.sort(function(a, b) {
		return a.startdate > b.startdate ? 1 : -1
	});
	let emmeniaCyc = 0 ;
	emmeniaList.forEach(item=>{
		let _emmeniaCyc = emmeniaCyc>0 ? timeConvert.getDatedifference(emmeniaList[emmeniaCyc-1].startdate,item.startdate) : '';
		list.push({
			startdate : item.startdate ,
			enddate : item.enddate,
			days : timeConvert.getDatedifference(item.startdate,item.enddate),
			emmeniaCyc :  _emmeniaCyc,
		})
		emmeniaCyc ++ ;
	})
	
	list.sort(function(a, b) {
		return a.startdate < b.startdate ? 1 : -1
	});
	
	return list || [] ;
}
const getChartEmmeniaList = (emmeniaList,type=0) =>{
	let list = [] ;
	// "ColumnB": {
	//   "categories": ["2013", "2014", "2015", "2016", "2017", "2018"],
	//   "series": [{
	//     "name": "新成交量3",
	//     "data": [35, 36, 31, 33, 13, 34]
	//   }
	//   , {
	//     "name": "新成交量4",
	//     "data": [18, 27, 21, 24, 6, 28]
	//   },
	//   ]
	// },
	let categories = [];
	let series = [] ;
	let daysList = [] ;
	let emmeniaCycList = [] ;
	let emmeniaCyc = 0 ;
	
	emmeniaList.sort(function(a, b) {
		return a.startdate > b.startdate ? 1 : -1
	});
	emmeniaList.forEach(item=>{
		let _emmeniaCyc = emmeniaCyc >0 ? timeConvert.getDatedifference(emmeniaList[emmeniaCyc-1].startdate,item.startdate) : '';
		
		let dataTime = item.startdate.substring(2,7).replace('-','年') + '月' ;
		
		let days = timeConvert.getDatedifference(item.startdate,item.enddate);
		
		// if(emmeniaCyc%2==0){
		// 	days =  5 ;
		// 	_emmeniaCyc = 30 ;
		// }else{
		// 	days =  4 ;
		// 	_emmeniaCyc = 31 ;
		// }
		
		
		categories.push(dataTime) ;
		daysList.push(days);
		emmeniaCycList.push(_emmeniaCyc);
		emmeniaCyc ++ ;
	})
	
	
		if(type == 1){
			categories.shift();
			daysList.shift();
			emmeniaCycList.shift();
		}

	switch(type){
		case 0 : 
		{
			series.push({
				name : "次间隔",
				data : daysList
			})
			series.push({
				name : "月间隔",
				data : emmeniaCycList
			})
			break ;
		}
		case 1 :
		{
			series.push({
				name : "月间隔",
				data : emmeniaCycList
			})
			break ;
		}
		case 2 :
		{
			series.push({
				name : "次间隔",
				data : daysList
			})
			break ;
		}
	}
	
	let ColumnB = {
		categories : categories ,
		series : series ,
	}
	return ColumnB || {} ;
}

module.exports = {
	dataIscan: dataIscan,
	getsetemmeniaList : getsetemmeniaList ,
	getCalcuEmmeniaList : getCalcuEmmeniaList ,
	getChartEmmeniaList : getChartEmmeniaList ,
}
