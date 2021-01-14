var comm = require('./comm.js');

//首页
const getProductBannerData = (res) => {
	console.log(res)
	let data = res.data.data ? res.data.data : [];
	//console.log("####"+JSON.stringify(data))
	let list = [] ;
	data.forEach(item=>{
		list.push({
			id : item.id ,
			pic: comm .imgPre  + item.pic ,
			url:item.url 
		})
	})
	var object = {
		bannerList: data,

	}
	console.log(object)
	return list || [];
}



module.exports = {
	
}
