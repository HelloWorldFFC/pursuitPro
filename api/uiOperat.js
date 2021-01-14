const setTabBarBadge = (index,count) => 
{
	if(count>0){
		uni.setTabBarBadge({
		  index: index,
		  text: String(count)
		})
	}else{
		uni.removeTabBarBadge({
			index: index
		})
	}		
}

const showLoading = (message='') => 
{
	let showtitle = '请稍后' ;
	if(message !== ''){
		showtitle = message ;
	}
	uni.showLoading({
		title: showtitle,
		mask : true,
	})		
}

const hideLoading = () => 
{
	
	uni.hideLoading()		
}
//同mainjs的Msg
const showMsg = (title, duration=1500, mask=false, icon='none')=>{
	//统一提示方便全局修改
	if(Boolean(title) === false){
		return;
	}
	uni.showToast({
		title,
		duration,
		mask,
		icon
	});
}

module.exports = {
	setTabBarBadge : setTabBarBadge,
	showLoading : showLoading ,
	hideLoading : hideLoading,
	showMsg : showMsg ,
}