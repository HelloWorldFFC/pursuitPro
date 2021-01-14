import Vue from 'vue'
import Vuex from 'vuex'
import storage from  '../store/storage.js'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		hasLogin: false,
		userInfo: {},
	},
	mutations: {
		login(state, provider) {
			state.hasLogin = true;
			state.userInfo = provider;
			storage.setUserInfo(provider);
		},
		logout(state) {
			state.hasLogin = false;
			state.userInfo = {};
			
			getApp().globalData.userInfo ={} ;
			uni.removeStorage({  
                key: storage.storageKeyType.userInfo  
            })
		},
		
		
	},
	getters:{
		getUserInfo : state =>{
			return   state.userInfo || {};
		},
	},
	actions: {
		loginFun(content,provider){			
			content.commit("login",provider);
		},
		logoutFun(content){
			content.commit("logout");
		},
		
	}
})

export default store
