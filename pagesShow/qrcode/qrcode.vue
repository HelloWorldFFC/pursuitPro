<template>
	<view class="cf-shuCenter">
		<view style="margin: 40upx;">
			<ayQrcode ref="qrcode" :modal="modal_qr" :url="url" @hideQrcode="hideQrcode" :height="260" :width="300" qrcode_id="qrcode"
			 :themeColor="codeColor" :is_themeImg="true" :themeImg="themeImg" :height_img="40" :width_img="40" />
		</view>

		<view class="cf-hengStart box">
			<view style="padding-right: 20upx;padding-left: 20upx;">网址:</view>
			<view style="background-color: #FFFFFF;max-height: 700upx;padding-top: 50upx;">
				<textarea placeholder-style="color:#cccccc" :maxlength="url_maxlength" v-model="url" placeholder="url" style="width: 500upx;height: 100upx;max-height: 500upx;border: 2upx solid #CCCCCC;margin: 0 auto;padding: 10upx;" />
				</view>
		   
		</view>
		
		<view class="cf-hengStart box">
		    <view style="padding-right: 20upx;padding-left: 20upx;">颜色:</view>
			
		   <input name='codeColor' v-model="codeColor" type="text" :maxlength="url_maxlength" :placeholder="codeColor" />
		</view>
		
		<view class="cf-hengStart box">
		    <view style="padding-right: 20upx;padding-left: 20upx;">图片:</view>
			<view style="background-color: #FFFFFF;max-height: 700upx;">
				<textarea placeholder-style="color:#cccccc" :maxlength="url_maxlength" v-model="themeImg" placeholder="themeImg" style="width: 500upx;height: 100upx;max-height: 500upx;border: 2upx solid #CCCCCC;margin: 0 auto;padding: 10upx;" />
				</view>
		   
		</view>
		
		<view class="cf-btn-m-box"  @tap="toCrtQrCode">
			<view class="cf-btn-m" :style="{'background-color': themeColor }">生成二维码</view>
		</view>
		
		<!-- #ifdef MP-WEIXIN -->
		<view class="cf-ad">
			<ad unit-id="adunit-da9ca613908f616c" ad-intervals="30"></ad>
		</view>
		<!-- #endif -->
	</view>
</template>

<script>
	import ayQrcode from "../components/ay-qrcode/ay-qrcode.vue"
	export default {
		components: {
			ayQrcode,

		},
		data() {
			return {
				themeImg:'https://cdn.pixabay.com/photo/2016/11/29/13/24/balloons-1869816__340.jpg',
				codeColor: '#33CCCC',
				themeColor: '#33CCCC',
				url_maxlength :1000,
				//二维码相关参数
				modal_qr: false,
				url: 'https://ext.dcloud.net.cn/plugin?id=3870', // 要生成的二维码值
			}
		},

		onLoad() {
			let that = this;
			that.showQrcode();//一加载生成二维码
		},
		methods: {
			// 展示二维码
			showQrcode() {
				let _this = this;
				this.modal_qr = true;
				// uni.showLoading()
				setTimeout(function() {
					// uni.hideLoading()
					_this.$refs.qrcode.crtQrCode()
				}, 50)
			},

			//传入组件的方法
			hideQrcode() {
				this.modal_qr = false;
			},
			toCrtQrCode(){
				let _this = this;
				let url = _this.url.trim() ;
				let url_maxlength = _this.url_maxlength ;
				
				if (url === "") {
					_this.$api.msg('请输入网址')
				  return;
				}
				
				if(url.length > url_maxlength){
					_this.$api.msg('网址过长，超过'+url_maxlength)
					return;
				}
				
				
				uni.showToast({
				  title: '生成中...',
				  icon: 'loading',
				  duration: 2000
				});
				var st = setTimeout(function () {
				  uni.hideToast()
				  //绘制二维码
				  _this.$refs.qrcode.crtQrCode()
				  clearTimeout(st);
				}, 2000)
				
			},
		}

	}
</script>

<style lang="scss">
	.box{
		margin: 20upx;
	}
</style>
