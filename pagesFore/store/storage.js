
import storage from '@/store/storage.js'

const def_Data = {
	maxnum : 10,
}

const set_p_t_range =(info)=>{
	//全局变量和缓存同时存，防止缓存有问题
	getApp().globalData.p_t_range = info;
	uni.setStorage({
	    key: storage.storageKeyType.p_t_range,
	    data: info,
	    success: function () {
	        //console.log('success');
	    }
	});
}

const get_p_t_range =()=>{
	//有缓存就把缓存赋给全局变量
	return getApp().globalData.p_t_range || '';
}

module.exports = {
	def_Data,
	
	set_p_t_range,
	get_p_t_range,
}