<template>
	<view class="content">
		<view class="search-box">
			<mSearch class="mSearch-input-box" :mode="2" button="inside" :placeholder="defaultKw" @input="inputChange"
			 v-model="kw" @searchCancal="searchCancalFun"></mSearch>

		</view>
		<view class="search-kw">
			<scroll-view class="kw-list-box" v-show="isShowKwList" scroll-y>
				<block v-for="(row,index) in kwList" :key="index">
					<view class="kw-entry" hover-class="kw-entry-tap">
						<view class="kw-text" @tap.stop="doSearch(row)">
							<view>{{row.kw}}</view>
						</view>
						<view class="kw-img">

						</view>
					</view>
				</block>
				<block v-if="kwList.length==0">
					<view class="kw-entry" hover-class="kw-entry-tap">
						<view class="kw-text">
							<view>暂无匹配结果</view>
						</view>

					</view>
				</block>
			</scroll-view>

			<scroll-view class="kw-box" v-show="!isShowKwList" scroll-y>
				<view class="kw-block" v-if="oldKwList.length>0">
					<view class="kw-list-header">
						<view>历史搜索</view>
						<view>
							<view class="iconfont icon-shanchu" @tap="oldDelete"></view>
						</view>
					</view>
					<view class="kw">
						<view v-for="(item,index) in oldKwList" @tap="doSearch(item)" :key="index">{{item.kw}}</view>
					</view>
				</view>

				<view class="kw-block">
					<view class="kw-list-header">
						<view>热门搜索</view>
						<view>
							<view class="iconfont icon-shanchu" :class="forbid?'icon-icon-eye-close':'icon-icon-eye-open'" @tap="hotToggle"></view>

						</view>
					</view>
					<view class="kw" v-if="forbid==''">
						<view v-for="(item,index) in hotKwList" @tap="doSearch(item)" :key="index">{{item.kw}}</view>
					</view>
					<view class="hide-hot-tis" v-else>
						<view>当前搜热门搜索已隐藏</view>
					</view>
				</view>

			</scroll-view>

			<!--  #ifdef H5  -->
			<view class="map">
				<baidu-map class="map-contain" @ready="mapReady">

				</baidu-map>
			</view>
			<!-- #endif -->
		</view>
	</view>
</template>

<script>
	//#ifdef MP-WEIXIN
	var amapFile = require('../js/gaodemap/amap.js');
	let amapPlugin = new amapFile.AMapWX({
		key: 'a7e7b86f7dc34107f495f8ea797aeb3b',
	})
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

	import mSearch from '../components/ay-search/ay-search.vue';
	export default {
		data() {
			return {
				map_search_radius: 40000, //单位米
				searchType: 1,
				BMap: null,
				map: null,
				defaultKw: '搜索关键字',
				searchKw: '',
				kw: "",
				oldKwList: [],
				kwList: [],
				hotKwList: [],
				forbid: '',
				isShowKwList: false
			}
		},
		onLoad(options) {
			let that = this;

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
			//引用mSearch组件，如不需要删除即可
			mSearch
		},
		mounted() {

		},
		methods: {
			//热门搜索开关
			hotToggle() {
				this.forbid = this.forbid ? '' : '_forbid';
			},
			//加载热门搜索
			loadHotKw() {
				//定义热门搜索关键字，可以自己实现ajax请求数据再赋值
				this.hotKwList = [{
						kw: '例子',
						lat: '',
						lng: '',
					},
					{
						kw: '例子',
						lat: '',
						lng: '',
					},
					{
						kw: '例子',
						lat: '',
						lng: '',
					},
				];
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
				//根据地名获取经纬度  参数addres：例信阳市平桥区岱庙村

				amapPlugin.getInputtips({
					keywords: keyw,
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
					console.log('searchResult')
					console.log(searchResult)
					console.log(searchResult.Hr.length)
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
					console.log(sList)
					that.kwList = sList;
				});

				localSearch.search(keyw);

			},

			init() {
				this.loadOldKw();
				this.loadHotKw();
			},
			blur() {
				uni.hideKeyboard()
			},

			//加载历史搜索,自动读取本地Storage
			loadOldKw() {
				uni.getStorage({
					key: 'OldKeys',
					success: (res) => {
						var OldKeys = JSON.parse(res.data);
						this.oldKwList = OldKeys;
					}
				});
			},

			//监听输入
			inputChange(event) {
				//兼容引入组件时传入参数情况
				var kw = event.detail ? event.detail.value : event;
				if (!kw) {
					this.kwList = [];
					this.isShowKwList = false;
					return;
				}
				this.isShowKwList = true;

				this.setListByMap(kw);
			},

			//顶置关键字
			setKw(index) {
				//this.kw = this.kwList[index].kw;
			},
			//清除历史搜索
			oldDelete() {
				uni.showModal({
					content: '确定清除历史搜索记录？',
					success: (res) => {
						if (res.confirm) {
							console.log('用户点击确定');
							this.oldKwList = [];
							uni.removeStorage({
								key: 'OldKeys'
							});
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			},
			//热门搜索开关
			hotToggle() {
				this.forbid = this.forbid ? '' : '_forbid';
			},
			//执行搜索
			doSearch(item) {
				let kw = item.kw;
				this.kw = item.kw;
				this.saveKw(item); //保存为历史 

				//选中后跳转
				let data = {
					searchType: this.searchType, //1 停车场 2洗车站 3 加油站
					item: item, //kw 、lat、lng
				};
				
			},
			searchCancalFun() {
				uni.navigateBack({});
			},

			//保存关键字到历史记录
			saveKw(kw) {
				uni.getStorage({
					key: 'OldKeys',
					success: (res) => {
						var OldKeys = JSON.parse(res.data);
						
						//看是否有相同项，有相同项则不保存
						let oldHave = false;
						let findIndex = 0;
						OldKeys.forEach(item => {
							if (item.kw == kw.kw) {
								oldHave = true;
								findIndex = OldKeys.indexOf(item);
							}
						})
						if (!oldHave) {
							OldKeys.unshift(kw);
						} else {
							OldKeys.splice(findIndex, 1);
							OldKeys.unshift(kw);
						}
						//最多10个纪录
						OldKeys.length > 10 && OldKeys.pop();
						uni.setStorage({
							key: 'OldKeys',
							data: JSON.stringify(OldKeys)
						});
						this.oldKwList = OldKeys; //更新历史搜索
					},
					fail: (e) => {
						var OldKeys = [kw];
						uni.setStorage({
							key: 'OldKeys',
							data: JSON.stringify(OldKeys)
						});
						this.oldKwList = OldKeys; //更新历史搜索
					}
				});
			}
		}
	}
</script>
<style>
	view {
		display: block;
	}

	.search-box {
		width: 95%;
		background-color: rgb(242, 242, 242);
		padding: 15upx 2.5%;
		display: flex;
		justify-content: space-between;
		position: sticky;
		top: 0;
	}

	.search-box .mSearch-input-box {
		width: 100%;
	}

	.search-box .input-box {
		width: 85%;
		flex-shrink: 1;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.search-box .search-btn {
		width: 15%;
		margin: 0 0 0 2%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-shrink: 0;
		font-size: 28upx;
		color: #fff;
		background: linear-gradient(to right, #ff9801, #ff570a);
		border-radius: 60upx;
	}

	.search-box .input-box>input {
		width: 100%;
		height: 60upx;
		font-size: 32upx;
		border: 0;
		border-radius: 60upx;
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		padding: 0 3%;
		margin: 0;
		background-color: #ffffff;
	}

	.placeholder-class {
		color: #9e9e9e;
	}

	.search-kw {
		width: 100%;
		background-color: rgb(242, 242, 242);
	}

	.kw-list-box {
		height: calc(100vh - 110upx);
		padding-top: 10upx;
		border-radius: 20upx 20upx 0 0;
		background-color: #fff;
	}

	.kw-entry-tap {
		background-color: #eee;
	}

	.kw-entry {
		width: 94%;
		height: 80upx;
		margin: 0 3%;
		font-size: 30upx;
		color: #333;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: solid 1upx #e7e7e7;
	}

	.kw-entry image {
		width: 60upx;
		height: 60upx;
	}

	.kw-entry .kw-text,
	.kw-entry .kw-img {
		height: 80upx;
		display: flex;
		align-items: center;
	}

	.kw-entry .kw-text {
		width: 90%;
	}

	.kw-entry .kw-img {
		width: 10%;
		justify-content: center;
	}

	.kw-box {
		height: calc(100vh - 110upx);
		border-radius: 20upx 20upx 0 0;
		background-color: #fff;
	}

	.kw-box .kw-block {
		padding: 10upx 0;
	}

	.kw-box .kw-block .kw-list-header {
		width: 94%;
		padding: 10upx 3%;
		font-size: 27upx;
		color: #333;
		display: flex;
		justify-content: space-between;
	}

	.kw-box .kw-block .kw-list-header image {
		width: 40upx;
		height: 40upx;
	}

	.kw-box .kw-block .kw {
		width: 94%;
		padding: 3px 3%;
		display: flex;
		flex-flow: wrap;
		justify-content: flex-start;
	}

	.kw-box .kw-block .hide-hot-tis {
		display: flex;
		justify-content: center;
		font-size: 28upx;
		color: #6b6b6b;
	}

	.kw-box .kw-block .kw>view {
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 60upx;
		padding: 0 20upx;
		margin: 10upx 20upx 10upx 0;
		height: 60upx;
		font-size: 28upx;
		background-color: rgb(242, 242, 242);
		color: #6b6b6b;
	}
</style>
