<template>
	<view>
		<view class="user-box">
			<aybgimg :isNav="true" themeImg="https://cdn.pixabay.com/photo/2019/11/26/03/35/maple-4653495__340.jpg">

				<view class="img-box">
					<view class="box-item">
						<!-- #ifndef MP-WEIXIN -->
						<image lazy-load="true" :src="imageUrl"></image>
						<view v-if="!isLogin" class="txt" @tap="toLoginFun">登录</view>
						<view v-else @tap="toExitFun">
							<view class="txt">退出</view>
						</view>
						<!-- #endif -->
						<!-- #ifdef MP-WEIXIN -->
						<image v-if="!isLogin" lazy-load="true" :src="imageUrl"></image>
						<view v-if="!isLogin" class="txt" @tap="toLoginFun">登录</view>
						<view v-else @tap="toExitFun">
							<view>
								<view class="userinfo-avatar">
									<open-data type="userAvatarUrl"></open-data>
								</view>

								<view class="txt">
									<open-data type="userNickName"></open-data>

								</view>
							</view>
						</view>


						<!-- #endif -->

					</view>

				</view>

				<view class="settingBox" @tap="toSite">
					<view class="iconfont icon-shezhi setting"></view>
				</view>

				<view class="nav-box">
					<shortcutNav :list="shortcutNavList" :hengNumber="3" :backgroundColor="navbackgroundColor" @toDetailPage="toDetailPage_shortcut"></shortcutNav>
				</view>
			</aybgimg>

		</view>

		<view>
			<hengItem :list="tipList" @toDetailPage="toDetailPage_tip"></hengItem>
		</view>

	</view>
</template>

<script>
	import aybgimg from '@/components/ay-bg/ay-bg-img.vue';
	import shortcutNav from "@/components/ay-shortcutNav/shortcutNav.vue"
	import preDupliClick from '../../api/preDupliClick.js'
	import hengItem from '@/components/ay-hengItem/hengItem.vue';
	export default {
		components: {
			hengItem,
			aybgimg,
			shortcutNav,
		},
		data() {
			return {
				shortcutNavList: [{
						img: 'https://cdn.pixabay.com/photo/2016/11/22/19/15/bee-1850116__340.jpg',
						name: '答案', 
						toPageUrl: '/pagesSEffect/specialEffect/lottery'
					},
					{
						img: 'https://cdn.pixabay.com/photo/2016/11/29/06/28/bay-1867798__340.jpg',
						name: '礼物', 
						toPageUrl: '/pagesSEffect/specialEffect/gift'
					},
					{
						img: 'https://cdn.pixabay.com/photo/2021/01/01/14/07/chapel-5878656__340.jpg',
						name: '答案', 
						toPageUrl: '/pagesShow/upload/upload_img'
					},
				],
				navbackgroundColor: '#fff',
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
					// {
					// 	img: 'https://cdn.pixabay.com/photo/2015/05/15/14/38/telephone-booth-768610__340.jpg',
					// 	name: '语音识别',
					// 	toPageUrl: '/pagesFore/know_voice/know_voice',
					// },
					{
						img: 'https://cdn.pixabay.com/photo/2016/11/23/17/56/decor-1854075__340.jpg',
						name: '客服',
						isKefu: true,
					},

					// {
					// 	img: 'https://cdn.pixabay.com/photo/2017/12/10/17/07/dachstein-3010323__340.jpg',
					// 	name: '今日天气',
					// 	toPageUrl: '/pagesScan/weather/weather',

					// },
					{
						img: 'https://cdn.pixabay.com/photo/2015/05/15/14/38/telephone-booth-768610__340.jpg',
						name: '说明',
						toPageUrl: '/pages/user/aboutUs'
					},
					{
						img: 'https://cdn.pixabay.com/photo/2020/11/23/15/00/butterfly-5770034__340.jpg',
						name: '版本记录',
						toPageUrl: '/pagesShow/record/colophon'
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
			toDetailPage_shortcut(e) {
				let that = this;
				let page = '';
				
				let item = e.item;
				
				let list = e.list;
				
				if (item.toPageUrl) {
					uni.navigateTo({
						url: item.toPageUrl
					})
					return;
				}
			},
			
			toSite() {
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
				if (item.isKefu) {
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

	.one-box {
		margin-left: 40upx;
		padding-bottom: 10upx;
	}

	.user-box {

		.img-box {
			position: absolute;
			top: 60upx;
			left: 0upx;
			width: 100%;
			z-index: 2;
			width: 100%;

			.box-item {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				width: 100%;

				.txt {
					color: #FFFFFF;
					font-size: 32upx;
					margin-top: 20upx;
					font-weight: bold;
				}
			}

		}

		.settingBox {
			position: absolute;
			top: 20upx;
			right: 0upx;
			z-index: 2;
			width: 14%;

			.setting {
				// color: #999999;
				color: #FFFFFF;
				font-size: 60upx;
			}

		}

		.img-box image {
			width: 126upx;
			height: 126upx;
			border-radius: 50%;
			border: 2px solid #FFFFFF;
		}

		.nav-box {
			position: absolute;
			bottom: 20upx;
			left: 0upx;
			width: 100%;
			z-index: 2;
			width: 100%;
			margin: 0upx auto;
			padding: 0upx 40upx;
		}

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

	
</style>
