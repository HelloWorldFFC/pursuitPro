<template>
	<view >
		
		<aSearchList 
		:placeholder="defaultKw"
		:kwList="kwList" 
		:hotKwList="hotKwList" 
		@clearkwList="clearkwList"
		@setListByKw="setListByMap"
		@doSearch="doSearch"></aSearchList>
		<!--  #ifdef H5  -->
		<view class="map">
			<baidu-map class="map-contain" @ready="mapReady">
			
			</baidu-map>
		</view>
		<!-- #endif -->
		
		<!-- #ifdef MP-WEIXIN -->
		<view class="cf-ad">
			<ad unit-id="adunit-8f6c4b5b2cfbf8de" ad-type="video" ad-theme="white"></ad>
		</view>
		<!-- #endif -->
	</view>
</template>

<script>

	import aSearchList from '../components/ay-search/ay-search-list.vue';
	import jsondata from '../js/jsondata.js'
	import comm from '@/api/comm.js'
	//#ifdef MP-WEIXIN
	var amapFile = require('../js/gaodemap/amap.js');
	// key 是在高德地图开发者平台申请的小程序密钥 详见 https://lbs.amap.com/api/wx/guide/create-project/config-project */
	let amapPlugin = new amapFile.AMapWX({
		key: comm.amapPlugin_key_wx , 
	})
	// 在页面中定义插屏广告
	let interstitialAd = null
	// #endif

	//#ifdef APP-PLUS
	let mapSearch = weex.requireModule('mapSearch')
	// #endif

	// 百度地图
	//#ifdef H5
	//H5引用百度地图需执行命令 npm install vue-baidu-map --save
	import Vue from 'vue'
	import BaiduMap from 'vue-baidu-map'
	Vue.use(BaiduMap, {
		// ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
		ak: '*****'
	})
	// #endif

	
	export default {
		data() {
			return {
				map_search_radius: 40000, //单位米
				BMap: null,
				map: null,
				defaultKw: '搜索关键字',
				searchKw: '',
				kw: "",
				kwList: [],
				hotKwList: [],
				
			}
		},
		onLoad(options) {
			let that = this;
			
			// #ifdef MP-WEIXIN
			// 在页面onLoad回调事件中创建插屏广告实例
			if (wx.createInterstitialAd) {
				interstitialAd = wx.createInterstitialAd({
					adUnitId: 'adunit-63fb46fd246c62b1'
				})
				interstitialAd.onLoad(() => {})
				interstitialAd.onError((err) => {})
				interstitialAd.onClose(() => {})
			}
			
			// 在适合的场景显示插屏广告
			if (interstitialAd) {
				interstitialAd.show().catch((err) => {
					console.error(err)
				})
			}
			
			// #endif
			
			//console.log(options.searchType)
			//let data = options.data ? JSON.parse(decodeURIComponent(options.data)) : false;
			let data = options.searchType ? options.searchType : 1;
			if (data) {
				that.searchType = parseInt(data);
				//console.log(that.searchType)
			}
			this.init();
		},
		onReady: function() {

		},
		components: {
			//引用组件
			aSearchList
		},
		mounted() {

		},
		methods: {
			
			//加载热门搜索
			loadHotKw() {
				//定义热门搜索关键字
				let list = jsondata.hotKwList.data;
				this.hotKwList = list;
			},

			setListByMap_wx(kw) {
				let that = this;

				let latlg = getApp().globalData.latlgitude;
				let lat_local = latlg.latitude;
				let lng_local = latlg.longitude;

				let keyw = kw.trim();
				if (keyw.length > 0) {
					//keyw += that.searchKeyword ;
				} else {
					that.kwList = [];
					return;
				}
				let kwList = [];
				//console.log('**************');
				let city = '';
				let lonlat = {
					latitude: lat_local,
					longitude: lng_local,
				};
				//console.log(lonlat)
				amapPlugin.getInputtips({
					keywords: keyw,
					city: city,
					location: lonlat,
					success: (ret) => {
						console.log(JSON.stringify(ret));
						kwList = that.getListBymap_wx(ret);
						that.kwList = kwList;
					}
				})

				
			},

			setListByMap_app(kw) {
				let that = this;

				let latlg = getApp().globalData.latlgitude;
				let lat_local = latlg.latitude;
				let lng_local = latlg.longitude;

				let keyw = kw.trim();
				if (keyw.length > 0) {
					//keyw += that.searchKeyword ;
				} else {
					that.kwList = [];
					return;
				}
				let kwList = [];

				mapSearch.poiSearchNearBy({
					point: {
						latitude: lat_local,
						longitude: lng_local
					},
					key: keyw,
					radius: that.map_search_radius,
					index: 1,
				}, ret => {
					// console.log('--------');
					// console.log(JSON.stringify(ret));
					// console.log(JSON.stringify(ret.poiList));
					// console.log(JSON.stringify(ret.poiList.length));
					// console.log(JSON.stringify(ret.poiList[0]));
					// console.log(JSON.stringify(ret.currentNumber));
					// console.log(JSON.stringify(ret.pageIndex));
					// console.log(JSON.stringify(ret.pageNumber));


					// uni.showModal({
					//     content: JSON.stringify(ret)
					// })
					kwList = that.getListBymap(ret);
					that.kwList = kwList;
					//var poi = searchResult.getPoi(0);

				})

			},
			clearkwList(){
				this.kwList = [];
			},
			setListByMap(kw) {
				//#ifdef H5
				this.setListByMap_H5(kw);
				// #endif

				//#ifdef APP-PLUS
				this.setListByMap_app(kw);
				// #endif

				//#ifdef MP-WEIXIN
				this.setListByMap_wx(kw);
				// #endif
			},
			getListBymap_wx(ret) {
				let that = this;
				let sList = [];
				var sHr = ret.tips;
				for (let i = 0; i < sHr.length; i++) {
					let item = sHr[i];
					//console.log(item)
					let location = item.location ;//"location":"120.303578,31.486577" 
					//console.log(location.length)
					if(location.length>0){
						let latlngArr = location.split(',')
						let obj = {
							kw: item.name,
							lat: latlngArr[1]||'',
							lng: latlngArr[0],
							address: item.address,
						}
						//看是否有相同项，有相同项则不保存
						let oldHave = false;
						sList.forEach(item => {
							if (item.kw == obj.kw) {
								oldHave = true;
							}
						})
						if (!oldHave) {
							sList.push(obj);
						}
					}
					

				}
				//console.log(sList)
				return sList;
			},

			getListBymap(ret) {
				let that = this;
				let sList = [];
				var sHr = ret.poiList;
				for (let i = 0; i < sHr.length; i++) {
					let item = sHr[i];
					let obj = {
						kw: item.name,
						lat: item.location.latitude,
						lng: item.location.longitude,
					}
					//看是否有相同项，有相同项则不保存
					let oldHave = false;
					sList.forEach(item => {
						if (item.kw == obj.kw) {
							oldHave = true;
						}
					})
					if (!oldHave) {
						sList.push(obj);
					}

				}
				//console.log(sList)
				return sList;
			},

			mapReady({
				BMap,
				map
			}) {
				this.BMap = BMap;
				this.map = map;

			},

			async setListByMap_H5(kw) {
				console.log('searchResult')
				let that = this;

				let keyw = kw.trim();
				if (keyw.length > 0) {
					//keyw += that.searchKw ;
				} else {
					that.kwList = [];
					return;
				}

				var localSearch = new this.BMap.LocalSearch(this.map);
				let sList = [];
				localSearch.setSearchCompleteCallback(function(searchResult) {
					// console.log('searchResult')
					// console.log(searchResult)
					// console.log(searchResult.Hr.length)
					var sHr = searchResult.Hr;
					for (let i = 0; i < sHr.length; i++) {
						let item = sHr[i];
						let obj = {
							kw: item.title,
							lat: item.point.lat,
							lng: item.point.lng,
						}
						//看是否有相同项，有相同项则不保存
						let oldHave = false;
						sList.forEach(item => {
							if (item.kw == obj.kw) {
								oldHave = true;
							}
						})
						if (!oldHave) {
							sList.push(obj);
						}


					}
					//var poi = searchResult.getPoi(0);
					//console.log(sList)
					that.kwList = sList;
				});

				localSearch.search(keyw);

			},

			init() {
				this.loadHotKw();
			},
			
			//执行搜索
			doSearch(item) {
				let kw = item.kw;
				this.kw = item.kw;
				
				//高德地图：gcj02坐标，也称为火星坐标
				//console.log(item)
				uni.openLocation({
					latitude: parseFloat(item.lat), //要去的纬度-地址       
					longitude: parseFloat(item.lng), //要去的经度-地址
					name: item.kw, //地址名称
					address: item.address || '', //详细地址名称
					// scale: 10,
					success: function() {
						console.log('导航成功');
					},
					fail: function(error) {
						console.log(error)
					}
				});

			},
		}
	}
</script>
<style>
	view {
		display: block;
	}

	
</style>
