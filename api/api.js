var uiOperat = require('./uiOperat.js');
var timeConvert = require('./timeConvert.js');
 export const base_url = 'http://49.235.125.175:9090';
 //export const base_url='https://www.happydayday.website:8080';

export const myRequest = (options)=>{	
	return new Promise((resolve,reject)=>{
		
		let notShowLoading = options.notShowLoading || false ;
		//console.log('请求前：'+timeConvert.getTimeM())
		if(!notShowLoading)uiOperat.showLoading('加载中...');
		let header = {
                            'Access-Control-Allow-Origin': '*', //跨域加上头云端也做了跨域的处理
                            'Content-Type': 'application/json'
                        };
		uni.request({
			url: base_url + options.url,
			method: options.method ||'GET',
			header:header ||{
						"Accept": "*/*"
					},
			data:options.data||{},
			success:(res)=>{
				//console.log('请求成功：'+timeConvert.getTimeM())
				if(!notShowLoading)uiOperat.hideLoading();
				//console.log('请求成功展示隐藏加载：'+timeConvert.getTimeM())
				let title = '网络繁忙请重试';
				let code = res.data.flag ;
				
				if(code !== 1){
					//FAILED(500, "操作失败"),VALIDATE_FAILED(404, "参数检验失败"),UNAUTHORIZED(401, "暂未登录或token已经过期"),
					if(code === 401){ //Unauthorized说明要重新登录
						console.log('header', options.header);
						uni.navigateTo({
							url: `/pages/user/login`
						})
					}
					title = res.data.msg ;//以云端返回的显示
					if(title !== ''){
						return uni.showToast({
							title : title ,
							duration:2000,
							icon:'none'
						})
					}
				}
				resolve(res)
			},
			fail:(err)=>{
				console.log('err',err)
				if(!notShowLoading)uiOperat.hideLoading();
				return uni.showToast({
					title:'网络繁忙请刷新',
					duration:2000,
					icon:'none'
				})	
				reject(err)
			}
		})
		
	})
}
