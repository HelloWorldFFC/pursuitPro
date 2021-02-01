<template>
	<view>
		<view style="background-color: #FFFFFF;color:#bcbcbc;">
			<view class="cf-hengSpace-B one-box">
				<view style="padding-top: 20upx;" v-if="!isLogin" @tap="toLoginFun">
					<view class="cf-hengSpace-B">
						<view>
							<image lazy-load="true" :src="imageUrl" style="width: 126upx;height: 126upx;border-radius: 50%;"></image>
						</view>
						<view class="logindTips">登录</view>
					</view>
				</view>
				<view v-else style="padding-top: 40upx;" @tap="toExitFun">
					<!-- #ifndef MP-WEIXIN -->
					<view class="cf-hengSpace-B">
						<view>
							<image lazy-load="true" :src="imageUrl" style="width: 126upx;height: 126upx;border-radius: 50%;"></image>
						</view>
						<view class="logindTips">退出</view>
					</view>
					<!-- #endif -->
					<!-- #ifdef MP-WEIXIN -->
					<view class="cf-hengSpace-B">
						<view class="userinfo-avatar">
							<open-data type="userAvatarUrl"></open-data>
						</view>
				
						<view class="logindTips">
							<open-data type="userNickName"></open-data>
				
						</view>
					</view>
				
					<!-- #endif -->
				</view>
				<view class="settingBox" @tap="toSite">
					<view class="iconfont icon-shezhi setting"></view>
				</view>
			</view>
			
		</view>

		<view style="margin-top: 26upx;">
			<hengItem :list="tipList" @toDetailPage="toDetailPage_tip"></hengItem>
		</view>

	</view>
</template>

<script>
	import preDupliClick from '../../api/preDupliClick.js'
	import hengItem from '@/components/ay-hengItem/hengItem.vue';
	export default {
		components: {
			hengItem
		},
		data() {
			return {

				isLogin: false,
				imageUrl: 'https://cdn.pixabay.com/photo/2016/11/23/17/55/beach-1854072__340.jpg',
				tipList: [{
						img: 'https://cdn.pixabay.com/photo/2021/01/01/19/33/marshmallows-5879707__340.jpg',
						name: '上传凭证',
						toPageUrl: '/pagesShow/upload/upload_img'
					},
					{
							img: 'https://cdn.pixabay.com/photo/2020/12/20/10/53/apple-5846664__340.jpg',
							name: '生成二维码',
							toPageUrl: '/pagesShow/qrcode/qrcode'
						},
					{
						img: 'https://cdn.pixabay.com/photo/2021/01/01/14/07/chapel-5878656__340.jpg',
						name: '客服',
						isKefu: true,
					},
					
					{
						img: 'https://cdn.pixabay.com/photo/2017/12/10/17/07/dachstein-3010323__340.jpg',
						name: '今日天气',
						toPageUrl: '/pagesScan/weather/weather',
						
					},
					{
						img: 'https://cdn.pixabay.com/photo/2015/05/15/14/38/telephone-booth-768610__340.jpg',
						name: '说明',
						toPageUrl: '/pages/user/aboutUs'
					},
					

				],
			}
		},
		onShow: function() {
			let that = this;
			that.loadData();
		},
		onLoad() {

		},
		// #ifdef MP-WEIXIN
		//微信小程序的分享
		onShareAppMessage: function(options) {

		},
		// #endif
		watch: {

		},
		methods: {
			toSite(){
				let isonce = preDupliClick.setpreDupliClickVal(preDupliClick.preDupli.th);
				if (!isonce) return;
				
				uni.navigateTo({
					url: `/pagesScan/setup/setup`
				})
			},
			testclear() {
				try {
					uni.clearStorageSync();
					this.$api.msg(`删除成功`);
				} catch (e) {
					// error
				}
			},
			async loadData() {
				let that = this;

				try {
					const value = uni.getStorageSync('isLogin');
					that.isLogin = value;

				} catch (e) {
					// error
				}
			},
			toDetailPage_tip(e) {
				let that = this;
				let list = e.list;
				
				let item = e.item;

				if (item.toPageUrl) {
					uni.navigateTo({
						url: item.toPageUrl
					})
					return;
				}
				// #ifdef MP-WEIXIN
				if(item.isKefu){
					return;
				}
				// #endif
				let list_img = [];
				list.forEach(item => {
					list_img.push(item.img)
				});
				let idx = e.curIndex;
				if (list_img && list_img.length > 0) {
					uni.previewImage({
						current: list_img[idx],
						urls: list_img,
						indicator: "number",
						loop: true,
					});
				}
			},
			toLoginFun() {
				let isonce = preDupliClick.setpreDupliClickVal(preDupliClick.preDupli.one);
				if (!isonce) return;

				uni.navigateTo({
					url: `/pagesShow/login/login`
				})
			},
			toExitFun() {
				let isonce = preDupliClick.setpreDupliClickVal(preDupliClick.preDupli.two);
				if (!isonce) return;

				let that = this;
				uni.showModal({
					content: '确认退出？',
					success: (e) => {
						if (e.confirm) {
							try {
								uni.setStorageSync('isLogin', false);
							} catch (e) {
								// error
							}
							let toPage = setTimeout(function() {
								uni.switchTab({
									url: `/pages/index/index`
								})
								clearTimeout(toPage);
							}, 500)
						}
					}
				})
			},

		}
	}
</script>

<style lang="scss">
	page {
		background-color: $uni-color-base;
	}
	.one-box{
		margin-left: 40upx;
		padding-bottom: 10upx;
	}
	.userinfo-avatar {
		overflow: hidden;
		display: block;
		width: 126upx;
		height: 126upx;
		/* margin: 20rpx;  */
		border-radius: 50%;
		border: 2px solid #fff;
		box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
	}

	.logindTips {
		font-size: $font-lg;
		color: #323232;
		font-weight: 400;
		padding: 10upx 0upx;
		padding-left: 20upx;
	}
	
	.settingBox {
		width: 20%;
	
		.setting {
			color: #999999;
			font-size: 60upx;
		}
	
	}
</style>
