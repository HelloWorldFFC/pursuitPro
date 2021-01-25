const getList = (data) => {

	//console.log(data)
	let list = [];
	// {"city":{"text":"城市","data":"南山区"},"weather":{"text":"天气","data":"晴"},"temperature":{"text":"温度","data":"23"},"winddirection":{"text":"风向","data":"东南风"},"windpower":{"text":"风力","data":"≤3级"},"humidity":{"text":"湿度","data":"56%"},"liveData":{"province":"广东","city":"南山区","adcode":"440305","weather":"晴","temperature":"23","winddirection":"东南","windpower":"≤3","humidity":"56","reporttime":"2021-01-25 13:22:29"}}
	let obj = {};
	obj = {
		text : data.city.text ,
		data : data.city.data ,
	};
	list.push(obj);
	
	obj = {
		text : data.weather.text ,
		data : data.weather.data ,
	};
	list.push(obj);
	
	obj = {
		text : data.temperature.text ,
		data : data.temperature.data ,
	};
	list.push(obj);
	
	obj = {
		text : data.winddirection.text ,
		data : data.winddirection.data ,
	};
	list.push(obj);
	
	obj = {
		text : data.windpower.text ,
		data : data.windpower.data ,
	};
	list.push(obj);
	
	obj = {
		text : data.humidity.text ,
		data : data.humidity.data ,
	};
	list.push(obj);
	
	obj = {
		text : '当前时间' ,
		data : data.liveData.reporttime ,
	};
	list.push(obj);

	//console.log(list)
	return list || [];
}

module.exports = {
	getList,
	

}