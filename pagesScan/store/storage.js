
import storage from '@/store/storage.js'

const def_Data = {
	s_pl_maxnum : 10,
}
//type 1 添加 2删除
const set_s_pl_list =(id,type=1)=>{
	//全局变量和缓存同时存，防止缓存有问题
	let planlist = getApp().globalData.s_pl_list ;
	
	if(type==1){
		//看是否有相同项，有相同项则不保存
		let oldHave = false ;
		planlist.forEach(item=>{
			if(id == item){
				oldHave = true ;
			}
		})
		if(!oldHave){
			planlist.push(id);
		}
	}else{
		//看是否有相同项，有相同项则删除
		let oldHave = false ;
		let index_del = 0 ;
		planlist.forEach(item=>{
			if(id == item){
				index_del = planlist.indexOf(item);
				oldHave = true ;
			}
		})
		if(oldHave){
			planlist.splice(index_del, 1);
		}
	}
	
	
	
	getApp().globalData.s_pl_list = planlist;
	uni.setStorage({
	    key: storage.storageKeyType.s_pl_list,
	    data: planlist,
	    success: function () {
	        //console.log('success');
	    }
	});
}

const get_s_pl_list =()=>{
	//有缓存就把缓存赋给全局变量
	
	return getApp().globalData.s_pl_list || '';
}

module.exports = {
	def_Data,
	
	set_s_pl_list,
	get_s_pl_list,
}