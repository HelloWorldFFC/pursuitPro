<template>
	<view>
		<view class="scratch" :style="style_wh">
			<view class="box" :style="{background: themeColor }">
				<!-- 刮奖结果-->
				<view class="result" :style="[{'font-size':txtFontSize+'rpx'},{color: txtColor }]">
					<text>{{result}}</text>
				</view>
				<!-- 刮奖canvas容器 -->
				<canvas class="canvas-box" :canvas-id="canvasId" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd"></canvas>
			</view>

		</view>

	</view>
</template>

<script>
	import scratch from './scratch.js'
	export default {
		props: {
			result: {
				type: String,
				default: '刮奖结果',
			},
			// 绘制刮奖范围高
			height: {
				type: Number,
				default: 150
			},
			// 绘制刮奖范围宽
			width: {
				type: Number,
				default: 350
			},

			themeColor: {
				type: String,
				default: '#33CCCC',
			},
			txtColor: {
				type: String,
				default: '#FFFFFF',
			},
			txtFontSize: {
				type: Number,
				default: 50,
			},
			canvasId: {
				type: String,
				default: 'blow',
			},
		},

		data() {
			return {
				// canvasId: 'blow',
				// result: '刮奖结果',
				// txtColor: '#FFFFFF',
				// txtFontSize: 50,
				// themeColor: '#33CCCC',
				// width: 350, // 绘制刮奖范围宽
				// height: 150, // 绘制刮奖范围高
				scratchSize: 10, // 触手大小
				scratchScale: 0.30, // 需刮开百分比
			}
		},
		// onReady:function(){
		// 	let that = this;
		// 	that.initCanvas();
		// },
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
		
		methods: {
			initCanvas() {
				// 刮奖初始化信息必须在onReady后，不然h5不支持（小程序可在onLoad执行）
				new scratch(this, {
					canvasId: this.canvasId,
					width: this.scratchWidth,
					height: this.scratchHeight,
					size: this.scratchSize,
					scale: this.scratchScale
				})
			}
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

			.canvas-box {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				border-radius: 10rpx;
				overflow: hidden;
			}
		}

		.tip {
			position: fixed;
			text-align: center;
			top: 300rpx;
			left: 300rpx;
			width: 150rpx;
			font-size: 40rpx;
			font-weight: bold;
			z-index: 999;
		}
	}
</style>
