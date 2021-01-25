<template>
	<view class="content">
		
		<view class="cf-shuCenter" v-for="(item, index) in list" :key="index">
			<view class="cf-hengSpace-B box">
				<view class="txt">{{item.text}}:</view>
				<view class="data">{{item.data}}</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	import weather from '../js/weather.js'
	//#ifdef MP-WEIXIN
	var amapFile = require('../js/gaodemap/amap.js');
	let amapPlugin = new amapFile.AMapWX({
		key: 'a7e7b86f7dc34107f495f8ea797aeb3b',
	})
	// #endif

	export default {
		data() {
			return {
				list:[],
				
			}
		},
		onLoad(options) {
			let that = this;
			//#ifdef MP-WEIXIN
			that.setDataByGD_wx();
			// #endif
		},
		methods: {
			
			setDataByGD_wx() {
				let that = this;
				let list = [] ;
				amapPlugin.getWeather({
					success: function(data) {
						console.log(JSON.stringify(data));
						//成功回调
						list = weather.getList(data);
						that.list = list ;
					},
					fail: function(info) {
						//失败回调
						console.log(info)
					}
				})
			},

		}
	}
</script>
<style lang="scss">
	.content {
		background-color: #FFFFFF;
		padding-top: 200upx;
		
		.box{
			padding: 30upx 40upx;
			.txt {
				font-size: $font-lg;
			}
			.data{
				font-size: $font-lgg;
			}
		}
		
	}

	
</style>
