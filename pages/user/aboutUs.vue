<template>
	<view class="box">
		<view class="box-logo">
			<image :src="logoImg" class="logoImg"></image>
		</view>
		<view style="text-align: center;margin-bottom: 80upx;">慢慢向好</view>
		<view class="itemBox">
			<view class="name">账号密码</view>
			<view >{{user_password}}</view>
		</view>
		<view class="itemBox">
			<view class="name">手机验证码</view>
			<view >{{phone_code}}</view>
		</view>
		<!-- #ifdef MP-WEIXIN -->
		<view class="cf-ad">
			<ad unit-id="adunit-857f5c9dbc28f928" ad-type="grid" grid-opacity="0.8" grid-count="5" ad-theme="white"></ad>
		</view>
		<!-- #endif -->
		<view class="cf-btmC-fixed-box">
			<view class="cf-btmC-fixed cf-colorHui" >如有侵权或疑问请联系客服</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				user_password: '随意输入不为空即可',
				phone_code: '正常手机号，任意四位数字验证码',
				logoImg: 'https://cdn.pixabay.com/photo/2016/11/23/17/55/beach-1854072__340.jpg',

			};
		},
		onLoad: function() {
			let that = this;
			
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.box {
		background-color: #FFFFFF;
		height: 100%;

		.box-logo {
			padding: 100upx 100upx 20upx 100upx;
			text-align: center;

			.logoImg {
				width: 150upx;
				height: 150upx;
				border-radius: 50%;
			}
		}

		.itemBox {
			display: flex;
			padding: 18upx 10upx 18upx 0;
			border-bottom: 2upx solid #EEEEEE;
			align-items: center;
			justify-content: space-between;

			.name {
				font-size: 34upx;
				line-height: 60upx;
				margin-left: 20upx;
				color: #323232;
				font-family: PingFang SC;
			}

			.toright {
				width: 35upx;
				height: 35upx;
				margin-left: 30upx;
			}
		}
	}
</style>
