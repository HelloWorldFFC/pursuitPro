<template>
	<view class="content">
		<search preholder="请输入关键字"  :themeColor="themeColor" @toSearch="toSearchFun" ></search>
		<view style="position: fixed;top: 96upx;left: 0;z-index: 99999;">
			<view style="position: relative;">
				<dropdownFilter :filterData='filterData' :defaultIndex='defaultIndex' :composeList="composeList" @onSelected='onSelected'
				 :themeColor="themeColor"></dropdownFilter>
			</view>
		</view>
		<!-- #ifdef MP-WEIXIN -->
		<kefu></kefu>
		<!-- #endif -->
		<scroll-view scroll-y class="cf-scrollBox scrollBox" :style="{ height: vHeight + 'px'}" :scroll-top="scrollTop" :lower-threshold="800" @scrolltolower="scrolltolowerFun">
			<!-- <ayitemone :list="list" @toAddress="toAddress" @toPhone="toPhone"></ayitemone> -->
			<ayitemtwo @switchFun="switch_goed_Fun" :list="list" @toAddress="toAddress" @toPhone="toPhone"></ayitemtwo>
			<uniloadmore v-if="list.length>0" :status="loadingType"></uniloadmore>
			<view v-if="list.length>0" class="cf-bottomCenter cf-origin-m" >信息来源于：中华人民共和国文化和旅游部（截止2021年）</view>
			
		</scroll-view>
		<view class="cf-btmC-fixed-box">
			<view class="cf-btmC-fixed cf-colorHui" v-if="list.length>0">如有错误请联系客服</view>
		</view>
		
	</view>
</template>

<script>
	import preDupliClick from '@/api/preDupliClick.js'
	import search from '../components/ay-search/search.vue';
	import storage from '../store/storage.js'
	import uniloadmore from '../components/uni-load-more/uni-load-more.vue'
	import dropdownFilter from '../components/ay-dropdown-filter/ay-dropdown-filter.vue'
	import scenicspot from '../js/scenicspot.js'
	import ayitemone from '../components/ay-item/ay-item-one.vue';
	import ayitemtwo from '../components/ay-item/ay-item-two.vue';
	import kefu from '@/components/kefu.vue';
	import comm from '@/api/comm.js'
	import jsondata from '../js/jsondata.js'
	export default {
		components: {
			kefu,
			ayitemone,
			ayitemtwo,
			dropdownFilter,
			uniloadmore,
			search,
		},
		data() {
			return {
				vHeight : this.vScreenHeight - 128,
				//切换选项
				scrollTop : 0 ,
				//分页相关
				sum_Yun: 0,
				page: 1,
				pageSize: 10,
				isHaveNextPage: true, //记录是否还有下一页
				loadingType: 'more', //加载更多状态

				//筛选相关
				themeColor: '#33CCCC',
				filterData: [
					[{
							text: '全部',
							value: ''
						},
						{
							text: '北京',
							value: '01'
						}, {
							text: '天津',
							value: '02'
						}, {
							text: '河北',
							value: '03'
						}, {
							text: '山西',
							value: '04'
						},
						{
							text: '内蒙古',
							value: '05'
						}, {
							text: '辽宁',
							value: '06'
						}, {
							text: '吉林',
							value: '07'
						}, {
							text: '黑龙江',
							value: '08'
						},
						{
							text: '上海',
							value: '09'
						}, {
							text: '江苏',
							value: '10'
						}, {
							text: '浙江',
							value: '11'
						}, {
							text: '安徽',
							value: '12'
						},
						{
							text: '福建',
							value: '13'
						}, {
							text: '江西',
							value: '14'
						}, {
							text: '山东',
							value: '15'
						}, {
							text: '河南',
							value: '16'
						},
						{
							text: '湖北',
							value: '17'
						},
						{
							text: '湖南',
							value: '18'
						}, {
							text: '广东',
							value: '19'
						}, {
							text: '广西',
							value: '20'
						}, {
							text: '海南',
							value: '21'
						},
						{
							text: '重庆',
							value: '22'
						}, {
							text: '四川',
							value: '23'
						}, {
							text: '贵州',
							value: '24'
						}, {
							text: '云南',
							value: '25'
						},
						{
							text: '西藏',
							value: '26'
						}, {
							text: '陕西',
							value: '27'
						}, {
							text: '甘肃',
							value: '28'
						}, {
							text: '青海',
							value: '29'
						},
						{
							text: '宁夏',
							value: '30'
						}, {
							text: '新疆',
							value: '31'
						}
					],
					[{
							text: '全部',
							value: ''
						},
						{
							text: '2007年-2010年',
							value: '2007-2010'
						},
						{
							text: '2011年-2014年',
							value: '2011-2014'
						},
						{
							text: '2015年-2019年',
							value: '2015-2019'
						},
						{
							text: '2020年-至今',
							value: '2020-'
						},
					],

					[{
						text: '距离优先',
						value: '0'
					}, {
						text: '年份优先',
						value: '1'
					}]
				],
				defaultIndex: [0, 0, 0],
				composeList: [{
					name: '省份',
					isHen: true,
				}],
				list: [],
				list_all: [],

			}
		},
		async onLoad() {
			let that = this;
			//let list = jsondata.scenicspotList;
			// #ifndef MP-WEIXIN
			that.loadData_init()
			// #endif
			// #ifdef MP-WEIXIN
			this.getLocation_wx();
			// #endif
		},
		onReady: function() {
			let that = this;



		},
		onShow() {
			let that = this;
			
		},
		// #ifdef MP-WEIXIN
		//微信小程序的分享
		onShareAppMessage: function(options) {

		},
		// #endif
		methods: {
			toSearchFun(){
				let isonce = preDupliClick.setpreDupliClickVal(preDupliClick.preDupli.one);
				if (!isonce) return;
				
				uni.navigateTo({
					url: '/pagesScan/scenicspot/seach'
				})
			},
			switch_goed_Fun(e){
				let that = this;
				let item = e.item;
				let index = e.index;
				let isSwitch = item.notPlaned;
				
				let tip = '' ;
				if(isSwitch){
					tip = '确认计划不去吗？';
				}else{
					tip = '确认计划去吗？';
					let s_pl_list = storage.get_s_pl_list() ;
					let s_pl_maxnum = storage.def_Data.s_pl_maxnum ;
					if(s_pl_list.length >= s_pl_maxnum){
						that.$api.msg_modal('最多只有' + s_pl_maxnum + '个计划，请确认其他！！');
						return ;
					}
				}
				uni.showModal({
					title: '提醒',
					content:  tip ,
					success(res) {
						if (res.confirm) {
							
							let id = item.id ;
							let index1 = -1;
							
							that.list.forEach(item1=>{
								item1.scenicspotList.forEach(item2=>{
									if(id == item2.id){
										index1 = that.list.indexOf(item1);
										return true ;
									}
								})
							})
							let nowPlan = !isSwitch ;
							that.list[index1].scenicspotList[index].notPlaned = nowPlan;
							
							let type = 1 ;
							if(isSwitch){
								type = 2 ;
							}
							
							storage.set_s_pl_list(id,type);
							
						} else if (res.cancel) {
							
						}
					}
				})
			},
			loadData_init() {
				let that = this;
				that.initFenYe();
				
				uni.showLoading({
					title: '加载中',
					mask: true,
				})
				
				let list = scenicspot.get_list_now(jsondata.scenicspotList_5A.data);
				that.list_all = list;
				that.loadData();
			},
			onSelected(res) {
				//console.log('res  ' + JSON.stringify(res))
				// console.log('res  ' + JSON.stringify(res[0]))
				// console.log('res  ' + JSON.stringify(res[0][0].value))
				let that = this;
				let one = res[0][0].value;
				let two = res[1][0].value;
				let thr = res[2][0].value;
				//console.log(' one ' + one + ' two ' + two + ' thr ' + thr);
				
				uni.showLoading({
					title: '加载中',
					mask: true,
				})
				
				var list_all = scenicspot.get_list_now(jsondata.scenicspotList_5A.data);
				console.log(list_all)
				if (one.length > 0) {
					list_all = scenicspot.getList_fr_pvie(list_all, res[0][0].text)
				}
				if (two.length > 0) {
					list_all = scenicspot.getList_fr_year(list_all, two)
				} else {

				}
				if (thr == 1) {
					list_all = scenicspot.getList_st_year(list_all);
				}

				console.log(list_all)
				that.initFenYe();
				//console.log(that.list)
				that.list_all = list_all;
				that.loadData();
			},
			scrolltolowerFun() {
				let that = this;
				that.page++;
				that.loadData('more');
			},
			initFenYe() {
				let that = this;
				that.sum_Yun = 0;
				that.page = 1;
				that.pageSize = 10;
				that.isHaveNextPage = true; //记录是否还有下一页
				that.loadingType = 'more'; //加载更多状态
				that.list = [];
				
				that.scrollTop = 0.01;
				that.$nextTick(function() {
					that.scrollTop = 0;
				})
			},
			//请求数据
			async loadData(type = 'load') {
				let that = this;
				if (type === 'more') {
					if (that.loadingType === 'nomore') {

						return; //没有更多直接返回
					}
					that.loadingType = 'loading';
				} else {
					that.loadingType = 'more'
				}
				that.getlist(type);
			},
			// //前端分页
			async getlist(type = 'load') {
				let that = this;
				let list = [];

				that.sum_Yun = that.list_all.length;

				//防止第一页就没有填满数据
				let shao = true;
				let gou = true;
				while ((shao) && (gou)) {
					//console.log('shao  ------'+shao+'gou  ------'+gou)

					list = await that.getlist_FenYe(that.list_all);
					shao = list.scenicspotList.length < that.pageSize ? true : false;


					that.isHaveNextPage = that.isHaveNextPageFun(that.sum_Yun);

					list = that.list.concat(list); //concat用于连接两个或多个数组

					that.loadingType = (!that.isHaveNextPage) ? 'nomore' : 'more';
					//console.log(list)
					that.list = list;


					gou = that.page < that.sum_Yun ? true : false;
					if (shao) {
						that.page++;
					}
					//console.log('shao  ------'+shao+'gou  ------'+gou)
				}

				uni.hideLoading();
			},
			getlist_FenYe(list_all) {
				let that = this;
				let list = [];
				let lastpage = that.page;
				let pageSize = that.pageSize;
				// let lastCount = (lastpage - 1) * pageSize;
				// console.log('lastCount' + lastCount);
				//list = list_all.slice(lastCount, lastCount + pageSize);
				list = list_all[that.page - 1];
				return list;
			},
			isHaveNextPageFun(sum) {
				let that = this;
				let isHaveNext = false;
				// let lastpage = that.page;
				// let page = lastpage;
				// let pageSize = that.pageSize;

				// if (sum % pageSize == 0) {
				// 	page = parseInt(sum / pageSize)
				// } else {
				// 	page = parseInt(sum / pageSize) + 1;
				// }

				//console.log('page ' + page + ' lastpage ' + lastpage)
				// if (page > lastpage) {
				// 	isHaveNext = true;
				// }
				if (that.page < sum) {
					isHaveNext = true;
				}
				return isHaveNext;
			},

			toAddress(item) {
				let that = this;
				let latitude = item.address.latitude;
				let longitude = item.address.longitude;
				let changeAddress = comm.changeAdress_bd_To_gcj(latitude, longitude);
				console.log('changeAddress', changeAddress)
				uni.openLocation({
					latitude: changeAddress.latitude, //要去的纬度-地址       
					longitude: changeAddress.longitude, //要去的经度-地址
					name: item.address.name, //地址名称
					address: item.address.address, //详细地址名称
					success: function() {
						console.log('导航成功');
					},
					fail: function(error) {
						console.log(error)
					}
				});
			},
			toPhone(item) {
				uni.makePhoneCall({
					phoneNumber: item.phone
				});
			},
			//#ifdef MP-WEIXIN
			//1. uniapp弹窗弹出获取授权（地理，个人微信信息等授权信息）弹窗
			getAuthorizeInfo_wx(a = "scope.userLocation") {
				var that = this;
				uni.authorize({
					scope: a,
					success() { //1.1 允许授权
						that.getLocationInfo_wx();
					},
					fail() { //1.2 拒绝授权
						//没有获取当前位置，就取默认的位置
						that.loadData_init();

						console.log("你拒绝了授权，无法获得周边信息")
						uni.showModal({
							title: '您未授权位置功能',
							content: '暂时不能实时更新数据',
							confirmText: '去设置',
							success: res => {
								if (res.confirm) {
									//打开设置页面
									uni.openSetting({
										success: res => {
											if (res.authSetting[a]) {

											}
										}
									});
								}
							}
						});
					}
				})
			},
			getLocationInfo_wx() { //2. 获取地理位置
				var that = this;
				console.log('getLocationInfo_wx：');
				uni.getLocation({
					type: 'gcj02',
					success: function(res) {
						let longitude = res.longitude;
						let latitude = res.latitude;
						console.log('当前位置的经度：' + res.longitude);
						console.log('当前位置的纬度：' + res.latitude);
						getApp().globalData.latlgitude = {
							latitude: latitude,
							longitude: longitude,
						};
						that.loadData_init();

					},
					fail: function(err) {

					}
				});
				// var _this = this;
				// uni.getLocation({
				// 	type: 'wgs84',
				// 	success(res) {
				// 		console.log("你当前经纬度是：")
				// 		console.log(res)
				// 		let latitude, longitude;
				// 		latitude = res.latitude.toString();
				// 		longitude = res.longitude.toString();
				// 		uni.request({
				// 			header: {
				// 				"Content-Type": "application/text"
				// 			},
				// 			url: 'http://apis.map.qq.com/ws/geocoder/v1/?location=' + latitude + ',' + longitude +
				// 				'&key=MVGBZ-R2U3U-W5CVY-2PQID-AT4VZ-PDF35',
				// 			success(re) {
				// 				console.log("中文位置")
				// 				console.log(re)
				// 				if (re.statusCode === 200) {
				// 					console.log("获取中文街道地理位置成功")
				// 				} else {
				// 					console.log("获取信息失败，请重试！")
				// 				}
				// 			}
				// 		});
				// 	}
				// });
			},
			getLocation_wx(a = "scope.userLocation") { // 3. 检查当前是否已经授权访问scope属性，参考下截图
				var that = this;
				uni.getSetting({
					success(res) {
						if (!res.authSetting[a]) { //3.1 每次进入程序判断当前是否获得授权，如果没有就去获得授权，如果获得授权，就直接获取当前地理位置
							that.getAuthorizeInfo_wx()
						} else {
							that.getLocationInfo_wx()
						}
					}
				});
			},
			// #endif
		}

	}
</script>

<style lang="scss">
	page,
	.content {
		width: 100%;
		height: 100%;
		background-color: $uni-color-white;
	}

	.scrollBox {
		padding-top: 90upx;
		padding-bottom: 80upx;
		
	}
</style>
