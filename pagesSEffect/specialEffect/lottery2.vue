<template>
	<view>
		<view class="scratch" :style="style_wh">
			<view class="box" :style="{background: themeColor }">
				<!-- 刮结果-->
				<view class="result" :style="[{'font-size':txtFontSize+'rpx'},{color: txtColor }]">
					<text>{{result}}</text>
				</view>
				<!-- 刮canvas容器 -->
				<canvas class="cs-box" :canvas-id="canvasId" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd"></canvas>
			</view>
			
		</view>
		
	</view>
</template>

<script>
	import menu from '../js/menu.js';
	import scratch from '../components/ay-lottery/scratch.js'
	export default {
		data() {
			return {
				canvasId :'blow',
				result:'结果',
				txtColor: '#FFFFFF',
				txtFontSize: 50,
				themeColor:'#33CCCC',
				width: 350, // 绘制刮奖范围宽
				height: 150, // 绘制刮奖范围高
				scratchSize: 10, // 触手大小
				scratchScale: 0.30, // 需刮开百分比
			}
		},
		computed: {
			style_wh() {
				let that = this;
				var height = parseInt(that.height);
				var width = parseInt(that.width);
				var style = '';
				if (height > 0) {
					style = `height:${height*1.5}rpx;`;
				}
				if (width > 0) {
					style += `width:${width*1.5}rpx;`;
				}
		
				return style;
			},
		},
		onReady() {
			this.initBlow();
			this.loadData();
		},
		methods: {
			initBlow() {
				// 刮奖初始化信息必须在onReady后，不然h5不支持（小程序可在onLoad执行）
				new scratch(this, {
					canvasId: this.canvasId,
					width: this.scratchWidth,
					height: this.scratchHeight,
					size: this.scratchSize,
					scale: this.scratchScale
				})
			},
			getShowTxt(list){
				let that = this;
				//随机获取list的值
				let num = Math.floor(Math.random()*10);//可均衡获取0到9的随机整数
				let legth = list.length || 0 ;
				let index = num<legth ? num : (legth-1) ;
				return list[index].name ||'哈哈'
			},
			async loadData() {
				let that = this;
			
				uni.showLoading({
					title: '加载中',
					mask: true,
				})
			
				let res_home = await menu.res_home;
				//console.log(res_home)
				let data = res_home.data;
			
				let list = data.lottery_list.data;
				
				that.result = that.getShowTxt(list);
				
				uni.hideLoading();
			
				that.isLoaded = true;
			
			},
		}
	}
</script>

<style lang="scss">
	.scratch {
		background-size: contain;
		margin: 20rpx auto;
		box-sizing: border-box;
		position: relative;
		overflow: hidden;

		.box {
			width: 100%;
			height: 100%;
			// background: #aaaa7f;
			border-radius: 10rpx;
			position: relative;
			overflow: hidden;

			.result {
				height: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				// font-size: 50rpx;
				// color: #FFFFFF;
			}

			.cs-box {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				border-radius: 10rpx;
				overflow: hidden;
			}
		}
	}
</style>
