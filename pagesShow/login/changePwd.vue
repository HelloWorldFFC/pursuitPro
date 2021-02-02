<template>
	<view style="overflow: hidden;">
		<view v-if="!isHaveCode">
			<loginCode :themeColor="themeColor" :logoUrl="logoImg" loginTip="下一步" @getAuthCode="getAuthCode" @loginFun="loginFun"
			 :isSendCode_init="isSendCode" :phone_init="phone" @canGetCodeEnvet="canGetCodeEnvet"></loginCode>
		</view>
		<view v-else class="setNewPwdBox">
			<aySetPwd :themeColor="themeColor" pwd_tip="设置密码(6-16位字母与数字组合)" @inputFun="inputFun_one"></aySetPwd>
			<aySetPwd :themeColor="themeColor" pwd_tip="重复密码" @inputFun="inputFun_reone"></aySetPwd>
			<view class="cf-btn-m-box">
				<view class="cf-btn-m" :style="{'background-color': themeColor }" @tap="change">完成</view>
			</view>
		</view>
	</view>

</template>

<script>
	
	import loginCode from '../components/ay-login/ay-login-code.vue';
	import aySetPwd from '../components/ay-login/ay-setPwd.vue';
	import changePwd from '../js/changePwd.js'
	export default {
		components: {
			loginCode,
			aySetPwd,
		},
		data() {
			return {
				themeColor: '#33CCCC',
				logoImg: 'https://cdn.pixabay.com/photo/2016/11/23/17/55/beach-1854072__340.jpg',
				isHaveCode: false,
				code: '',
				phone: '',
				
				isSendCode: false,
				pwd_one: '',
				pwd_reone: '',
				
				
			};
		},
		// #ifdef MP-WEIXIN
		//微信小程序的分享
		onShareAppMessage: function(options) {

		},
		// #endif
		onLoad: function(options) {
			let that = this;
			that.phone = '';

		},
		onShow: function() {
			let that = this;

		},
		methods: {
			change() {
				let that = this;
				let pwd_one = that.pwd_one;
				let pwd_reone = that.pwd_reone;
				
				if (pwd_one.trim().length==0) {
					that.$api.msg('请输入设置密码');
					return;
				}
				
				if(!changePwd.checkPwd(pwd_one)){
					that.$api.msg('密码输入格式错误！');
					return;
				}
				
				if (pwd_reone.trim().length==0) {
					that.$api.msg('请输入重复密码');
					return;
				}
				
				
				
				if (pwd_one !== pwd_reone) {
					that.$api.msg('2次密码输入不一致！');
					return;
				}
				
				
				that.$api.msg_modal('修改成功！');
				
				let toPage = setTimeout(function() {
					uni.navigateBack()
					clearTimeout(toPage);
				}, 500)

			},
			inputFun_one(e) {
				let that = this;
				//console.log('e.val'+e.val)
				that.pwd_one = e.val.trim();
			},
			inputFun_reone(e) {
				let that = this;
				//console.log('e.val'+e.val)
				that.pwd_reone = e.val.trim();
			},
			canGetCodeEnvet(e) {
				let that = this;
				that.isSendCode = e.isSendCode;
			},
			getAuthCode(e) {
				let that = this;
				let phone = e.phone.trim();
				
				that.phone = phone;
				if (phone == '') {
					that.$api.msg('请输入手机号！');
					return;
				}
				if (!changePwd.checkPhone(phone)) {
					that.$api.msg('手机号错误！');
					return;
				}

				that.$api.msg('验证码发送成功！');
				that.isSendCode = true;
				
			},
			loginFun(e) {
				let that = this;
				let phone = e.phone.trim();
				let code = e.code.trim();

				that.phone = phone;
				that.code = code;
				
				if (phone == '') {
					that.$api.msg('请输入手机号！');
					return;
				}
				if (!changePwd.checkPhone(phone)) {
					that.$api.msg('手机号错误！');
					return;
				}
				
				if(!that.isSendCode){
					
					that.$api.msg('请先获取验证码！');
					return;
				}
				if (code == '') {
					that.$api.msg('请输入验证码！');
					return;
				}
				if (!changePwd.checkCode(code)) {
					that.$api.msg('验证码错误！');
					return;
				}
				
				that.isHaveCode = true;
			},
			

		}

	}
</script>

<style lang="scss">
	page {
		background-color: #FFFFFF;
	}

	.setNewPwdBox {
		background-color: #FFFFFF;
		text-align: center;
		padding-top: 200upx;
	}
</style>
