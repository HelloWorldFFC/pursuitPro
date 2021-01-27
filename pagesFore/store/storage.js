
import storage from '@/store/storage.js'

const def_Data = {
	maxnum : 36,
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


module.exports = {
	def_Data,
	
	set_p_t_range,
}