<template>
	<view class="cf-content" style="background-color: #F0F0F0" v-if="isLoaded">
		<!-- <scroll-view scroll-y class="cf-scrollBox " :style="{ 'max-height': scrollMaxheight + 'px'}"> -->
			<!-- <banner :list="bannerList" :themeColor="themeColor"></banner>
			
			<shortcutNav :list="shortcutNavList" :hengNumber="4"></shortcutNav> -->

			<view class="topBox">
				<banner :list="bannerList" :themeColor="themeColor" @toDetailPage="toDetailPage"></banner>
				<view class="topNavBox NavBox">
					<shortcutNav :list="shortcutNavList" :hengNumber="4" :backgroundColor="navbackgroundColor" @toDetailPage="toDetailPage_shortcut"></shortcutNav>
				</view>

			</view>

			<!-- <view style="background-color: #FFFFFF;width: 100%;" class="shortcutNav_t">
				<view class="NavBox marginBottom-Theme" >
					<shortcutNav style="padding: 0upx 20upx 20upx 20upx;" :list="shortcutNavList_two" :hengNumber="4" :backgroundColor="navbackgroundColor" :boxshadow="false" :borderRadius="false"></shortcutNav>
				</view>
			</view> -->


			<view class="paddingHeng-Theme marginBottom-Theme" style="margin-top: 90upx;">
				<goUpNotice :list="goUpNoticeList" :themeColor="themeColor"></goUpNotice>
			</view>

			<banner class="marginBottom-Theme" :list="bannerList_two" @toDetailPage="toDetailPage" :height="200" :padding="20"
			 :borderRadius="20" :themeColor="themeColor"></banner>


			<view class="paddingHeng-Theme marginBottom-Theme listOne">
				<subNavTitle :list="shuImgTxtSubNav" @toDetailPage="toDetailPage_subT(2)"></subNavTitle>
				<shuImgTxt :list="shuImgTxtList" :themeColor="themeColor" @toDetailPage="toDetailPage"></shuImgTxt>
			</view>
			<!-- #ifdef MP-WEIXIN -->
			<view class="cf-ad">
				<ad unit-id="adunit-857f5c9dbc28f928" ad-type="grid" grid-opacity="0.8" grid-count="5" ad-theme="white"></ad>
			</view>
			<!-- #endif -->
			<view class="paddingHeng-Theme marginBottom-Theme">
				<subNavTitle :list="hengTxtImgSubNav" @toDetailPage="toDetailPage_subT(1)"></subNavTitle>
				<hengTxtImg :list="hengTxtImgList" :themeColor="themeColor" @toDetailPage="toDetailPage"></hengTxtImg>
			</view>

			<view class="paddingHeng-Theme marginBottom-Theme">
				<subNavTitle :list="shuImgTxtSubNav" @toDetailPage="toDetailPage_subT(1)"></subNavTitle>
				<shuImgTxt :list="shuImgTxtList" :themeColor="themeColor" @toDetailPage="toDetailPage"></shuImgTxt>
			</view>
	
			<view class="paddingHeng-Theme marginBottom-Theme">
				<subNavTitle :list="hengImgTxtSubNav" @toDetailPage="toDetailPage_subT(1)"></subNavTitle>
				<hengImgTxt :list="hengImgTxtList" :themeColor="themeColor" @toDetailPage="toDetailPage"></hengImgTxt>
			</view>
			
			<view class="paddingHeng-Theme marginBottom-Theme">
				<subNavTitle :list="shuImgTxtSubNav_two" @toDetailPage="toDetailPage_subT(1)"></subNavTitle>
				<shuImgTxt :list="shuImgTxtList_two" :themeColor="themeColor" @toDetailPage="toDetailPage"></shuImgTxt>
			</view>
			
			<!-- #ifdef MP-WEIXIN -->
			<view class="cf-ad">
				<ad unit-id="adunit-8f6c4b5b2cfbf8de" ad-type="video" ad-theme="white"></ad>
			</view>
			<!-- #endif -->
			<view class="paddingHeng-Theme marginBottom-Theme">
				<subNavTitle :list="hengTxtImgTSubNav" @toDetailPage="toDetailPage_subT(1)"></subNavTitle>
				<hengTxtImgT :list="hengTxtImgTList" :themeColor="themeColor" @toDetailPage="toDetailPage"></hengTxtImgT>
			</view>

			<view class="paddingHeng-Theme marginBottom-Theme">
				<subNavTitle :list="shuImgTxtSubNav_three" @toDetailPage="toDetailPage_subT(1)"></subNavTitle>
				<shuImgTxt :list="shuImgTxtList_three" :themeColor="themeColor" @toDetailPage="toDetailPage"></shuImgTxt>
			</view>
			<view class="paddingHeng-Theme marginBottom-Theme">
				<subNavTitle :list="hengImgTxtTSubNav" @toDetailPage="toDetailPage_subT(1)"></subNavTitle>
				<hengImgTxtT :list="hengImgTxtTList" :themeColor="themeColor" @toDetailPage="toDetailPage"></hengImgTxtT>
			</view>
			<!-- #ifdef MP-WEIXIN -->
			<view class="cf-ad">
				<ad unit-id="adunit-da9ca613908f616c" ad-intervals="30"></ad>
			</view>
			<!-- #endif -->
			<underscore></underscore>
		<!-- </scroll-view> -->
	</view>
</template>

<script>
	import timeConvert from '@/api/timeConvert.js'
	import storage from '@/store/storage.js'
	import banner from '@/components/ay-banner/banner.vue';
	import hengImgTxt from '@/components/ay-compose/hengImgTxt.vue';
	import hengImgTxtT from '@/components/ay-compose/hengImgTxtT.vue';
	import hengTxtImg from '@/components/ay-compose/hengTxtImg.vue';

	import hengTxtImgT from '@/components/ay-compose/hengTxtImgT.vue';
	import shuImgTxt from '@/components/ay-compose/shuImgTxt.vue';

	import subNavTitle from '@/components/ay-nav/subNavTitle.vue';
	import shortcutNav from '@/components/ay-shortcutNav/shortcutNav.vue';


	import goUpNotice from '@/components/ay-notice-goUp/notice-goUp.vue';

	import underscore from '@/components/ay-nav/underscore.vue';

	export default {
		components: {
			banner,
			hengImgTxt,
			hengTxtImg,
			hengImgTxtT,
			hengTxtImgT,
			shuImgTxt,

			subNavTitle,
			shortcutNav,

			goUpNotice,

			underscore,
		},
		data() {

			return {
				isLoaded: false, //防止加载数据时的不友好
				bannerList: [],
				bannerList_two: [],

				shortcutNavList: [],
				shortcutNavList_two: [],

				goUpNoticeList: [],

				shuImgTxtSubNav: [],
				shuImgTxtList: [],


				hengTxtImgSubNav: [],
				hengTxtImgList: [],

				hengImgTxtSubNav: [],
				hengImgTxtList: [],

				shuImgTxtSubNav_two: [],
				shuImgTxtList_two: [],

				hengTxtImgTSubNav: [],
				hengTxtImgTList: [],

				shuImgTxtSubNav_three: [],
				shuImgTxtList_three: [],

				hengImgTxtTSubNav: [],
				hengImgTxtTList: [],

				themeColor: '#33CCCC',
				navbackgroundColor: '#fff',
				scrollMaxheight: this.vWindowHeight,
			}

		},
		async onLoad() {
			let that = this;
			that.loadData();
		},
		onShow: function() {
			let that = this;

			//that.getLocation();
			that.get_p_t_range();
		},
		// #ifdef MP-WEIXIN
		//微信小程序的分享
		onShareAppMessage: function(options) {

		},
		//分享到朋友圈
		onShareTimeline: function() {

		},
		// #endif

		methods: {
			toDetailPage_shortcut(e) {
				let that = this;
				let page = '';
				
				let item = e.item;
				let index = parseInt(item.key);
				switch (index) {
					case 1:
						page = `/pagesSEffect/index/index`;
						break;
					case 2:
						page = `/pagesScan/scenicspot/scenicspot_5A`;
						break;
					case 3:
						//pagesSEffect/specialEffect/lottery2
						page = `/pagesSEffect/specialEffect/lottery`;
						break;
					case 4:
						page = `/pagesShow/index/index`;
						break;
					default:
						break;
				}
				if (page !== '') {
					uni.navigateTo({
						url: page
					})
				}
			},
			getLocation() {
				let that = this;
				// #ifdef MP-WEIXIN
				//微信小程序的后台监控位置
				// uni.authorize({
				//     scope: 'scope.userLocationBackground',
				//     success() {

				//     }
				// })
				let authSetting = 'scope.userLocationBackground';
				wx.getSetting({
					success(res) {
						if (!res.authSetting[authSetting]) {
							wx.authorize({
								scope: authSetting,
								success() {
									that.startLocation();
								},
								fail(res) {
									// 授权失败
									// wx.showToast({
									// 	title: '授权失败，点击右上角设置位置为"使用时和离开后!"',
									// 	icon: 'none',
									// 	duration: 5000,
									// 	mask: true,
									// 	success: () => {

									// 	}
									// })
									wx.showModal({
									    title: '您未授权位置功能：使用时和离开后',
									    content: '暂时不能使用实时位置',
									    confirmText: '去设置',
									    success: res => {
									        if (res.confirm) {
									            wx.openSetting({
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
							that.startLocation();
						}
					}
				})

				// #endif
			},
			startLocation() {
				wx.startLocationUpdateBackground({
					success(res) {
						console.log('开启后台定位', res)
						wx.onLocationChange(function(res) {
							console.log('location change', res)
						})
					},
					fail(res) {
						console.log('开启后台定位失败', res)
					}
				})
			},
			toDetailPage_subT(index_p){
				let that = this;
				let page = '';
				switch (index_p) {
					case 1:
						page = `/pagesScan/scenicspot/scenicspot_5A`;
						break;
					case 2:
						page = `/pagesFore/plan/set_plan`;
						break;
					case 3:
						page = `/pagesSEffect/index/index`;
						break;
					default:
						break;
				}
				if (page !== '') {
					uni.navigateTo({
						url: page
					})
				}
			},
			toDetailPage(e) {
				//console.log('22222222222'+ JSON.stringify(e))
				let list = e.list;
				let idx = e.curIndex;
				let list_img = [];
				let item = e.item;
				if(item.txt_url){
					uni.navigateTo({
						url: item.txt_url,
					})
					return ;
				}
				list.forEach(item => {
					list_img.push(item.img)
				})
				// console.log(list)
				// console.log(list_img)
				if (list_img && list_img.length > 0) {
					uni.previewImage({
						current: list_img[idx], //  传 Number H5端出现不兼容
						urls: list_img,
						indicator: "number",
						loop: true,
					});
				}
			},
			async loadData() {
				let that = this;

				uni.showLoading({
					title: '加载中',
					mask: true,
				})

				let res_home = await that.$api.json('res_home');
				//console.log(res)
				let data = res_home.data;

				that.bannerList = data.bannerList.data;
				that.bannerList_two = data.bannerList_two.data;
				that.shortcutNavList = data.shortcutNavList.data;
				that.shortcutNavList_two = data.shortcutNavList_two.data;

				that.getgoUpNoticeList(data.goUpNoticeList.data);

				that.shuImgTxtSubNav = data.shuImgTxtSubNav.data;
				that.shuImgTxtList = data.shuImgTxtList.data;

				that.shuImgTxtSubNav_two = data.shuImgTxtSubNav_two.data;
				that.shuImgTxtList_two = data.shuImgTxtList_two.data;

				that.shuImgTxtSubNav_three = data.shuImgTxtSubNav_three.data;
				that.shuImgTxtList_three = data.shuImgTxtList_three.data;

				that.hengTxtImgSubNav = data.hengTxtImgSubNav.data;
				that.hengTxtImgList = data.hengTxtImgList.data;

				that.hengImgTxtSubNav = data.hengImgTxtSubNav.data;
				that.hengImgTxtList = data.hengImgTxtList.data;

				that.hengTxtImgTSubNav = data.hengTxtImgTSubNav.data;
				that.hengTxtImgTList = data.hengTxtImgTList.data;

				that.hengImgTxtTSubNav = data.hengImgTxtTSubNav.data;
				that.hengImgTxtTList = data.hengImgTxtTList.data;


				uni.hideLoading();

				that.isLoaded = true;
				that.get_p_t_range();
			},
			//设置提醒
			get_p_t_range(){
				let that = this ;
				try {
				    const p_t_range = uni.getStorageSync(storage.storageKeyType.p_t_range);
				    if (p_t_range) {
				        if(p_t_range.name){
				        	let nowStr = timeConvert.getTime();
				        	let time = timeConvert.getDays_ByTwoTimeStr(nowStr,p_t_range.time); 
				        	that.bannerList_two[0].txt_tips = '距离' + p_t_range.name+'仅剩'  ;
				        	that.bannerList_two[0].txt_txt = time  ;
							that.bannerList_two[0].txt_url = '/pagesFore/plan/countdown';
				        }
				    }
				} catch (e) {
				    // error
				}
				
			},
			getgoUpNoticeList(goUpNoticeList) {
				let that = this;

				var goUpNoticeList = goUpNoticeList;
				//因为每次只轮播5条，所以此处除以5，决定显示个数，总数配了25个
				let goUpNoticeListNum = goUpNoticeList.length;
				let bei = goUpNoticeListNum / 5;
				var str = "";
				var week = new Date().getDay(); //0-6  0星期日 6星期六

				let duan = week > (bei - 1) ? bei : week;
				if(week==0){
					duan = 1 ;
				}
				if (bei == 0) {
					that.goUpNoticeList = goUpNoticeList;
				} else {
					let start = ((duan - 1) * bei);
					goUpNoticeList = goUpNoticeList.slice(start, start + 5)
					that.goUpNoticeList = goUpNoticeList;
				}
			},
		}
	}
</script>

<style lang="scss">
	page,
	.cf-content {
		background-color: #F0F0F0;
	}

	.cf-scrollBox {
		background-color: #F0F0F0;
	}

	.topBox {
		position: relative;

		.topNavBox {
			text-align: center;
			position: absolute;
			top: 240upx;
			left: 0;
		}

		.NavBox {
			width: 94%;
			margin: 0upx 20upx;
		}

	}

	.paddingHeng-Theme {
		padding: 0upx 20upx;
	}

	.marginBottom-Theme {
		margin-bottom: 20upx;
	}


	/* #ifdef H5 */
	.shortcutNav_t {
		padding-top: 78upx;
	}

	.listOne {}

	/* #endif */
	/* #ifdef MP-WEIXIN */
	.shortcutNav_t {
		padding-top: 38upx;
	}

	.listOne {
		padding-top: 20upx;
	}

	/* #endif */
	/* #ifdef APP-PLUS */
	.shortcutNav_t {
		padding-top: 38upx;
	}

	.listOne {
		padding-top: 20upx;
	}

	/* #endif */
</style>
