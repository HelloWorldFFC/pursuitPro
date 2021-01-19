var ordinateTransf = require('@/api/ordinateTransf.js');
var comm = require('@/api/comm.js');
const getList = (list_data, lat_local, lng_local) => {

	//console.log(res)
	let list = [];

	list_data.forEach(item => {
		let scenicspotList = [];

		item.scenicspotList.forEach(item2 => {
			//前端自己，据当前位置经纬度，和返回停车场的经纬度，算距离
			let latitude = item2.address.latitude;
			let longitude = item2.address.longitude;

			let gcj_latlng = comm.changeAdress_bd_To_gcj(latitude, longitude);

			let distance = getdistance(lat_local, lng_local, latitude, longitude);
			let distanceNum = distance;

			//distance = distance > 1 ? (distance + 'km') : (distance * 1000) + 'm';
			distance = distance > 1000 ? ((distance / 1000).toFixed(2) + 'kkm') : (distance > 1 ? (distance + 'km') : (
				distance * 1000) + 'm');
			scenicspotList.push({
				groupId : item2.id.substr(0, 2)||'',
				id: item2.id,
				title: item2.title,
				subtitle: item2.subtitle,
				city: item2.city,
				area: item2.area,
				grade: item2.grade,
				address: {
					name: item2.address.name,
					longitude: item2.address.longitude,
					latitude: item2.address.latitude,
					address: item2.address.address,
				},
				phone: item2.phone,

				latitude: gcj_latlng.latitude,
				longitude: gcj_latlng.longitude,
				distanceNum: distanceNum,
				distance: distance,
				year: item2.subtitle,
				yearNum: parseInt(item2.subtitle),
			});
		})

		scenicspotList.sort(function(a, b) {
			return a.distanceNum - b.distanceNum;
		})

		let obj = {
			
			distanceNum: scenicspotList[0].distanceNum,
			province: item.province,
			scenicspotList: scenicspotList,
		};
		list.push(obj);
	});

	list.sort(function(a, b) {
		return a.distanceNum - b.distanceNum;
	})

	//console.log(list)
	return list || [];
}


//距离排序
const getList_st_dis = (list_data) => {
	//console.log(res)
	let list = [];
	let scenicspotList = [];
	list_data.forEach(item => {
		
		item.scenicspotList.sort(function(a, b) {
			return a.distanceNum - b.distanceNum;
		})
	
		list.push(item);
	});
	
	return list || [];

}

//年份排序
const getList_st_year = (list_data) => {
	//console.log(res)
	let list = [];
	let scenicspotList = [];
	list_data.forEach(item => {
		
		item.scenicspotList.sort(function(a, b) {
			return a.yearNum - b.yearNum;
		})

		list.push(item);
	});

	return list || [];
}

//过滤年份
const getList_fr_year = (list, year) => {
	//console.log(res)
	let yearArr = year.split('-');
	let start = yearArr[0] ;
	let end = yearArr[1] || '';
	console.log(year)
	let scenicspotList = 
	list.forEach(item => {
		item.scenicspotList = item.scenicspotList.filter(item2 => item2.yearNum >= start)
		if(end.length>0){
			item.scenicspotList = item.scenicspotList.filter(item2 => item2.yearNum <= end)
		}
	});
	//list.sort((a, b) => b.isEnter - a.isEnter);
	//过滤不需要的
	//list.filter(item => item.isEnter == true)

	return list || [];
}

//过滤省份
const getList_fr_pvie = (list,pvie) => {
	//console.log(res)
	
	list = list.filter(item => item.province == pvie)
	
	return list || [];
}

const getdistance = (lat1, lng1, lat2, lng2) => {
	let distance = 1000;

	let latlng1 = ordinateTransf.gcj_encrypt_To_bd(lat1, lng1);

	distance = ordinateTransf.getDistance(latlng1.lat, latlng1.lon, lat2, lng2);

	//distance = (distance/1000).toFixed(2);

	return distance.toFixed(2);
}
const get_list_now = (list) => {
	let latlg = getApp().globalData.latlgitude;
	let lat_local = latlg.latitude;
	let lng_local = latlg.longitude;
	return getList(list, lat_local, lng_local);
}
module.exports = {
	getList,
	getdistance,
	get_list_now,
	getList_st_dis,
	getList_st_year,
	getList_fr_year,
	getList_fr_pvie,
	
}
