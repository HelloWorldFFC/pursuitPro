<template>
	<view class="cf-shuCenter">
		<view class="boxTop">
			<qrcode v-if="ifShow" cid="qrcode1" ref="qrcode" :val="val" :size="size" :unit="unit" :background="background"
			 :foreground="foreground" :pdground="pdground" :icon="icon" :iconSize="iconsize" :lv="lv" :onval="onval" :loadMake="loadMake"
			 :usingComponents="true" @result="qrR" />
		</view>

	</view>


</template>

<script>
	
	import qrcode from "../components/ay-qrcode/ay-qrcode.vue"
	export default {
		components: {
			qrcode,
		},
		data() {
			return {
				//二维码相关参数
				ifShow: true,
				val: '', // 要生成的二维码值
				size: 600, // 二维码大小
				unit: 'upx', // 单位
				background: '#000000', // 背景色
				foreground: '#ffffff', // 前景色
				pdground: '#33CCCC', // 角标色
				icon: '', // 二维码图标
				iconsize: 40, // 二维码图标大小
				lv: 3, // 二维码容错级别 ， 一般不用设置，默认就行
				onval: false, // val值变化时自动重新生成二维码
				loadMake: true, // 组件加载完成后自动生成二维码
				src: '' // 二维码生成后的图片地址或base64
			}
		},
		onLoad(options) {
			let that = this;
			that.val = 'https://pixabay.com/images/search/?order=ec' ;
		},
		onUnload() {
			let that = this;
			
		},
		// #ifdef MP-WEIXIN
		//微信小程序的分享
		onShareAppMessage: function(options) {
		
		},
		// #endif
		methods: {
			
			//生成二维码函数
			qrR(res) {
				this.src = res;
			},
			creatQrcode() {
				this.$refs.qrcode._makeCode()
			},
		}
	}
</script>

<style>
	page {
		background-color: #FFFFFF;
	}
	.boxTop{
		margin-top: 200upx;
	}
</style>
