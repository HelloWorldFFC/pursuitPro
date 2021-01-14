
const getColorClass = (name) => {
	let colorClass = 'cf-hushen300';
	switch(name) 
	{
	     case '黄金':
	        colorClass='cf-huangjin';
	        break;
	     case '原油':
	        colorClass='cf-yuanyou';
	        break;
		case '企债指数':
		   colorClass='cf-qizhaiIndex';
		   break;
		case 'CPI':
		   colorClass='cf-cpi';
		   break;
		case '标普500':
		    colorClass='cf-biaopu500';
		    break;
		 case '定期存款':
		    colorClass='cf-timedeposit';
		    break;
		case '房价':
		   colorClass='cf-homePrice';
		   break;
		case '沪深300':
		   colorClass='cf-hushen300';
		   break;
	     default:
	         colorClass='';
	} 
	return colorClass;
}
const getListByObj = (obj) => {
	let list = [] ;
	let categories = obj.categories ;
	let series = obj.series ;
	
	for(let i=0;i<categories.length;i++){
		let item = categories[i];
		let addData = [] ;
		let addData_m = [] ;
		let addObj_m ={};
		
		for(let j=0;j < series.length;j++){
			let item_m = series[j]; 
			let name = item_m.name ;
			addObj_m = {
				name: name,
				colorClass: getColorClass(name),
				lucre: item_m.data[i],
			}
			addData_m.push(addObj_m);
			
		}
		addData_m.sort(function(a, b) {
			return a.lucre < b.lucre ? 1 : -1
		});
		addData_m.forEach(item=>{
			addData.push({
				name: item.name,
				colorClass: item.colorClass,
				lucre: item.lucre + '%',
			})
			
		})
		let addObj ={
			time: item,
			data: addData,
		};
		list.push(addObj);
	}
	
	return list || [] ;
}
module.exports = {
	getColorClass : getColorClass ,
	getListByObj : getListByObj,
	
}