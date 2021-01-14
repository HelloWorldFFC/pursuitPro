<template>
	<view>
		<ay-image-upload  :list="uploadTipList" @imgAdd="imgAddFun"></ay-image-upload>
		<view style="text-align: center;margin-top: 100upx;"  @tap="toConfirm">
			<view class="btnBox_Remark" :style="{'background-color': themeColor }">完成</view>
		</view>
	</view>
</template>

<script>
	import ayImageUpload from '../components/ay-img-upload/ay-img-upload.vue'
	export default {
		data() {
			return {
				themeColor: '#33CCCC',
				uploadTipList: [{
						name: '凭证1',
						img: '',
						remove: true,
					},
					{
						name: '凭证2',
						img: '',
						remove: true,
					},
					{
						name: '凭证3',
						img: '',
						remove: true,
					},
				],
			}
		},
		onLoad(options) {
			let that = this;
			//decodeURIComponent
		},
		// #ifdef MP-WEIXIN
		//微信小程序的分享
		onShareAppMessage: function(options) {
		
		},
		// #endif
		components: {
			ayImageUpload,
		},
		methods: {
			toConfirm() {
				let that = this;
				let isHaveNull = false;
				let uploadTipList = that.uploadTipList;
				if (uploadTipList.length < 3) {
					isHaveNull = true;
				} else {

					for (let i = 0; i < uploadTipList.length; i++) {
						let img = uploadTipList[i].img;
						if (img.length < 1) {
							isHaveNull = true;
							break;
						}
					}

				}
				if (isHaveNull) {
					that.$api.msg('资料上传不完善！请补充。');
					return;
				}

				that.$api.msg('上传成功！');

				let navBack = setTimeout(function() {
					uni.navigateBack({});
					clearTimeout(navBack);
				}, 800)

			},
			imgAddFun(e) {
				let that = this;
				console.log(e)
				that.uploadTipList = e;
			},
			authSetFun() {
				let authSetting = 'scope.camera';
				// #ifdef MP-WEIXIN
				uni.getSetting({
					success(res) {
						if (!res.authSetting[authSetting]) {
							uni.authorize({
								scope: authSetting,
								success() {
									that.startLocation();
								},
								fail(res) {
									uni.showModal({
										title: '您未授权摄像头功能',
										content: '暂时不能使用拍照功能',
										confirmText: '去设置',
										success: res => {
											if (res.confirm) {
												uni.openSetting({
													success: res => {
														if (res.authSetting[authSetting]) {

														}
													}
												});
											}
										}
									});
								}
							})
						} else {
							//that.startLocation();
						}
					}
				})

				// #endif
			},
		}
	}
</script>

<style lang="scss">
	.btnBox_Remark {
		color: #FFFFFF;
		width: 80%;
		border-radius: 68upx;
		margin: 20upx auto;
		padding: 20upx;
		font-size: 40upx;
	}
</style>
