<script>
	import Vue from 'vue'
	import storage from '@/store/storage.js'
	export default {
		globalData: {
			bannerUrl: '', //轮播图跳页面不能带参传值，用全局变量中转
			token: '123456',
			userInfo: {},
			wxOpenid: '',
			userId: '',
			phone: '',
			emmeniaCyc : 30 ,
			emmeniaUnitCyc : 5,
			emmeniaList  : [],
			emmeniaCancel : '',//记录提醒的取消操作
			validTermList : [],
			timingReminder :'',
			latlgitude: {
				// longitude: 113.9261566840278,
				// latitude: 22.54893717447917,
				//不是当前位置，容易看出授权后的效果
				latitude: 22.5427624046,
				longitude: 114.0579724734,
			},
		},
		onLaunch: function() {
			console.log('App Launch')
			let that = this;
			uni.getSystemInfo({
				success: function(e) {
					console.log('getSystemInfo',e)
					// #ifdef H5
					var u = navigator.userAgent;
					var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器 
					var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
					if (isAndroid) {
						Vue.prototype.isAndroid = true;
					} else {
						Vue.prototype.isAndroid = false;
					}
					// #endif
					// #ifndef MP
					Vue.prototype.StatusBar = e.statusBarHeight;
					if (e.platform == 'android') {
						Vue.prototype.CustomBar = e.statusBarHeight + 50;

					} else {
						//alert(e.statusBarHeight + 45)
						Vue.prototype.CustomBar = e.statusBarHeight + 45;
					};
					// #endif
					// #ifdef MP-WEIXIN
					Vue.prototype.StatusBar = e.statusBarHeight;
					let custom = wx.getMenuButtonBoundingClientRect();
					Vue.prototype.Custom = custom;
					Vue.prototype.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
					Vue.prototype.vScreenWidth = e.screenWidth;
					// #endif       
					// #ifdef MP-ALIPAY
					Vue.prototype.StatusBar = e.statusBarHeight;
					Vue.prototype.CustomBar = e.statusBarHeight + e.titleBarHeight;
					// #endif


					if (e.platform == 'android') {
						Vue.prototype.isAndroidOs = true;
					} else {
						Vue.prototype.isAndroidOs = false;
					}
					
					Vue.prototype.vWindowHeight = e.windowHeight;
					Vue.prototype.vScreenHeight = e.screenHeight;
				}
			})
			// #ifdef MP-WEIXIN
			// 打开调试
			// uni.setEnableDebug({
			// 	enableDebug: true
			// })
			// #endif 
			
			
		},
		onShow: function() {
			console.log('App Show')
			let that = this;
			that.getsetStorage();
		},
		onHide: function() {
			console.log('App Hide')
		},
		methods:{
			getsetStorage (){
				let that = this;
				uni.getStorage({
					key: storage.storageKeyType.userInfo,
					success: function(res) {
						let data = res.data;
						console.log('Show 读到登录缓存')
						that.$store.dispatch("loginFun", data);
						that.globalData.userInfo = data;
						that.globalData.phone = data.phone;
					}
				});
				
				uni.getStorage({
					key: storage.storageKeyType.emmeniaCyc,
					success: function(res) {
						let data = res.data;
						console.log('Show 读到周期缓存')
						that.globalData.emmeniaCyc = data;
					},
					fail:function(){
						storage.setEmmeniaCyc(storage.def_Data.emmeniaCyc)
					}
				});
				
				uni.getStorage({
					key: storage.storageKeyType.emmeniaUnitCyc,
					success: function(res) {
						let data = res.data;
						console.log('Show 读到周期时长缓存')
						that.globalData.emmeniaUnitCyc = data ;
					},
					fail:function(){
						storage.setEmmeniaUnitCyc(storage.def_Data.emmeniaUnitCyc)
					}
				});
				
				uni.getStorage({
					key: storage.storageKeyType.emmeniaList,
					success: function(res) {
						let data = res.data;
						console.log('Show 读到emmeniaList缓存')
						that.globalData.emmeniaList = data ;
					},
					fail:function(){
						
					}
				});
				
				uni.getStorage({
					key: storage.storageKeyType.validTermList,
					success: function(res) {
						let data = res.data;
						console.log('Show 读到validTermList缓存')
						that.globalData.validTermList = data ;
					},
					fail:function(){
						
					}
				});
				
				uni.getStorage({
					key: storage.storageKeyType.timingReminder,
					success: function(res) {
						let data = res.data;
						console.log('Show 读到timingReminder缓存')
						that.globalData.timingReminder = data ;
					},
					fail:function(){
						
					}
				});
			}
		}
	}
</script>

<style lang='scss'>
	@import './colorui/main.css';
	@import './colorui/icon.css';
	@import './style/iconfont.css';
	@import './style/charts.css';
	@import './style/comm.css';
	/*每个页面公共css */
	/*
		全局公共样式和字体图标
	*/



	view,
	scroll-view,
	swiper,
	swiper-item,
	cover-view,
	cover-image,
	icon,
	text,
	rich-text,
	progress,
	button,
	checkbox,
	form,
	input,
	label,
	radio,
	slider,
	switch,
	textarea,
	navigator,
	audio,
	camera,
	image,
	video {
		box-sizing: border-box;
	}

	/* 骨架屏替代方案 */
	.Skeleton {
		background: #f3f3f3;
		padding: 20upx 0;
		border-radius: 8upx;
	}

	/* 图片载入替代方案 */
	.image-wrapper {
		font-size: 0;
		background: #f3f3f3;
		border-radius: 4px;

		image {
			width: 100%;
			height: 100%;
			transition: .6s;
			opacity: 0;

			&.loaded {
				opacity: 1;
			}
		}
	}

	.clamp {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		display: block;
	}

	.common-hover {
		background: #f5f5f5;
	}

	/*边框*/
	.b-b:after,
	.b-t:after {
		position: absolute;
		z-index: 3;
		left: 0;
		right: 0;
		height: 0;
		content: '';
		transform: scaleY(.5);
		border-bottom: 1px solid $border-color-base;
	}

	.b-b:after {
		bottom: 0;
	}

	.b-t:after {
		top: 0;
	}

	/* button样式改写 */
	uni-button,
	button {
		height: 80upx;
		line-height: 80upx;
		font-size: $font-lg + 2upx;
		font-weight: normal;

		&.no-border:before,
		&.no-border:after {
			border: 0;
		}
	}

	uni-button[type=default],
	button[type=default] {
		color: $font-color-dark;
	}

	/* input 样式 */
	.input-placeholder {
		color: #999999;
	}

	.placeholder {
		color: #999999;
	}
</style>
