import Vue from 'vue'
import App from './App'

import store from './store'

import Json from './Json' //测试用数据

/** 引入封装的js*/
import {
	myRequest
} from './api/api.js'
Vue.prototype.$myRequest = myRequest


const msg = (title, duration = 1500, mask = false, icon = 'none') => {
	//统一提示方便全局修改
	if (Boolean(title) === false) {
		return;
	}
	uni.showToast({
		title,
		duration,
		mask,
		icon
	});
}
const msg_modal = (content) => {
	//统一提示方便全局修改
	if (Boolean(content) === false) {
		return;
	}
	uni.showModal({
		title: '温馨提示',
		content: content,
		confirmText: '确定',
		showCancel: false,
		confirmColor: '#33CCCC',
		success(res) {
			if (res.confirm) {
				
			}
		}
	})
	
}
const json = type => {
	//模拟异步请求数据
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(Json[type]);
		}, 500)
	})
}

const prePage = () => {
	let pages = getCurrentPages();
	let prePage = pages[pages.length - 2];
	// #ifdef H5
	return prePage;
	// #endif
	return prePage.$vm;
}




Vue.config.productionTip = false;
Vue.prototype.$store = store;
Vue.prototype.$api = {
	msg,
	json,
	prePage,
	msg_modal,
};

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
