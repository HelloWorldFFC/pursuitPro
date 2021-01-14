<template>
	<view >
		<loginPassword :themeColor="themeColor" :logoUrl="logoUrl"  @loginFun="loginFun"
		:username_init="username"
		:password_init="password"
		:isRemeber_init="isRemeber"
		></loginPassword>
		
	</view>
</template>

<script>
	import loginPassword from '../components/ay-login/login-password.vue';
	export default {
		components: {
			loginPassword,

		},
		data() {
			return {
				themeColor : '#33CCCC',
				logoUrl:'https://cdn.pixabay.com/photo/2016/11/23/17/55/beach-1854072__340.jpg',
				isRemeber: true,
				username: '',
				password: '',	
				loginInfo_pwd : 'loginInfo_pwd',
			}
		},
		onLoad() {
			let that = this;
			try {
			    const value = uni.getStorageSync(that.loginInfo_pwd);
			    if (value) {
			        let loginInfo = value;
			        if(loginInfo.username.length>0){
			        	if(loginInfo.isRemeber){
			        		that.username = loginInfo.username ;
			        		that.password = loginInfo.password ;
			        	}
			        	that.isRemeber = loginInfo.isRemeber ;
			        }
			    }
			} catch (e) {
			    // error
			}
			
		},
		// #ifdef MP-WEIXIN
		//微信小程序的分享
		onShareAppMessage: function(options) {
		
		},
		// #endif
		methods: {
			loginFun(e){
				let that = this;
				console.log('登录' + JSON.stringify(e))
				let username = e.username.trim() ;
				let password =  e.password.trim() ;
				let isRemeber =  e.isRemeber ;
				
				if(username.length==0){
					that.$api.msg('请输入用户！');
					return;
				}
				
				if(password.length==0){
					that.$api.msg('请输入密码！');
					return;
				}
				
				that.username = username ;
				that.password =  password ;
				that.isRemeber =  isRemeber ;
				that.loginSuc(username,password,isRemeber);
				
			},
			loginSuc(username,password,isRemeber){
				let that = this;
				that.$api.msg('登录成功！');
				let loginInfo = {
					isRemeber: isRemeber,
					username: username,
					password: password,
				}
				
				try {
				    uni.setStorageSync(that.loginInfo_pwd, loginInfo);
				} catch (e) {
				    // error
				}
				try {
				    uni.setStorageSync('isLogin', true);
				} catch (e) {
				    // error
				}
				let toPage = setTimeout(function() {
					uni.switchTab({
						url: `/pages/index/index`
					})
					clearTimeout(toPage);
				}, 500)
			},
		}
	}
</script>

<style lang="scss">
</style>
