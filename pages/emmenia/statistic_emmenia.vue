<template>
	<view class="qiun-columns">
		<view class="qiun-bg-white qiun-title-bar qiun-common-mt">
			<view class="qiun-title-dot-light">总体情况对比图</view>
		</view>
		<view class="qiun-charts">
			<!--#ifdef MP-ALIPAY -->
			<canvas canvas-id="canvasColumn" id="canvasColumn" class="charts" :width="cWidth*pixelRatio" :height="cHeight*pixelRatio"
			 :style="{'width':cWidth+'px','height':cHeight+'px'}" @touchstart="touchColumn"></canvas>
			<!--#endif-->
			<!--#ifndef MP-ALIPAY -->
			<canvas canvas-id="canvasColumn" id="canvasColumn" class="charts" @touchstart="touchColumn"></canvas>
			<!--#endif-->
		</view>
		<view class="qiun-charts cf-ptop-l">
			<!--#ifdef MP-ALIPAY -->
			<canvas canvas-id="canvasColumn2" id="canvasColumn2" class="charts" :width="cWidth*pixelRatio" :height="cHeight*pixelRatio"
			 :style="{'width':cWidth+'px','height':cHeight+'px'}" @touchstart="touchColumn2"></canvas>
			<!--#endif-->
			<!--#ifndef MP-ALIPAY -->
			<canvas canvas-id="canvasColumn2" id="canvasColumn2" class="charts" @touchstart="touchColumn2"></canvas>
			<!--#endif-->
		</view>
	</view>
</template>

<script>
	import emmenia from '../../api/emmenia.js'
	import storage from '../../store/storage.js'
	import timeConvert from '../../api/timeConvert.js'

	import uCharts from '@/components/u-charts/u-charts.js';
	//import  { isJSON } from '@/common/checker.js';
	var _self;
	var canvaColumn = null;
	var canvaColumn2 = null;
	export default {
		data() {
			return {
				cWidth: '',
				cHeight: '',
				pixelRatio: 1,
				textarea: ''
			}
		},
		onLoad() {
			_self = this;
			//#ifdef MP-ALIPAY
			uni.getSystemInfo({
				success: function(res) {
					if (res.pixelRatio > 1) {
						//正常这里给2就行，如果pixelRatio=3性能会降低一点
						//_self.pixelRatio =res.pixelRatio;
						_self.pixelRatio = 2;
					}
				}
			});
			//#endif
			this.cWidth = uni.upx2px(750);
			this.cHeight = uni.upx2px(500);
			this.getServerData();
		},
		methods: {
			async getServerData() {
				//let res = await this.$api.json('res');
				//let ColumnB = res.data.ColumnB ;
				let that = this ;
				let ColumnB = await emmenia.getChartEmmeniaList(storage.getEmmeniaList(),1);
				if(ColumnB.categories){
					if(ColumnB.categories.length == 0){
						that.$api.msg('数据过少!无需统计');
						let timerNameBack = setTimeout(function() {
							uni.navigateBack()
							//清除定时器
							clearTimeout(timerNameBack);
						}, 2000);
						return ;
					}
				}
				let Column = {
					categories: [],
					series: []
				};
				//这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
				Column.categories = ColumnB.categories;
				Column.series = ColumnB.series;
				_self.textarea = JSON.stringify(ColumnB);
				_self.showColumn("canvasColumn", Column);
				
				let ColumnB2 = await emmenia.getChartEmmeniaList(storage.getEmmeniaList(),2);
				
				let Column2 = {
					categories: [],
					series: []
				};
				//这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
				Column2.categories = ColumnB2.categories;
				Column2.series = ColumnB2.series;
				_self.textarea = JSON.stringify(ColumnB2);
				_self.showColumn2("canvasColumn2", Column2);
			},
			showColumn(canvasId, chartData) {
				canvaColumn = new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'column',
					padding: [15, 15, 0, 15],
					legend: {
						show: true,
						padding: 5,
						lineHeight: 11,
						margin: 0,
					},
					fontSize: 11,
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,
					animation: true,
					dataLabel: true,
					enableMarkLine: true,
					/***需要开启标记线***/
					width: _self.cWidth * _self.pixelRatio,
					height: _self.cHeight * _self.pixelRatio,
					categories: chartData.categories,
					series: chartData.series,
					xAxis: {
						disableGrid: true,
						rotateLabel : true,//横坐标倾斜
					},
					yAxis: {
						//纵坐标刻度
						format: (val) => {
							if((val+"").indexOf(".") != -1){
								return val.toFixed(1);//保留小数后1位
							}else{
								return val;
							}
						},
					},
					extra: {
						column: {
							type: 'group',
							width: _self.cWidth * _self.pixelRatio * 0.45 / chartData.categories.length
						},
						markLine: {
							type: 'dash',
							dashLength: 5,
							data: [{
								value: storage.getEmmeniaCyc(),
								lineColor: '#f04864',
								showLabel: true
							}]
						}
					}
				});

			},
			touchColumn(e) {
				canvaColumn.showToolTip(e, {
					format: function(item, category) {
						if (typeof item.data === 'object') {
							return category + ' ' + item.name + ':' + item.data.value
						} else {
							return category + ' ' + item.name + ':' + item.data
						}
					}
				});
				canvaColumn.touchLegend(e, {
					animation: true
				});
			},
			showColumn2(canvasId, chartData) {
				canvaColumn2 = new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'column',
					padding: [15, 15, 0, 15],
					legend: {
						show: true,
						padding: 5,
						lineHeight: 11,
						margin: 0,
					},
					fontSize: 11,
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,
					animation: true,
					dataLabel: true,
					enableMarkLine: true,
					/***需要开启标记线***/
					width: _self.cWidth * _self.pixelRatio,
					height: _self.cHeight * _self.pixelRatio,
					categories: chartData.categories,
					series: chartData.series,
					xAxis: {
						disableGrid: true,
						rotateLabel : true,//横坐标倾斜
					},
					yAxis: {
						//纵坐标刻度
						format: (val) => {
							if((val+"").indexOf(".") != -1){
								return val.toFixed(1);//保留小数后1位
							}else{
								return val;
							}
						},
					},
					extra: {
						column: {
							type: 'group',
							width: _self.cWidth * _self.pixelRatio * 0.45 / chartData.categories.length
						},
						markLine: {
							type: 'dash',
							dashLength: 5,
							data: [{
								value: storage.getEmmeniaUnitCyc(),
								lineColor: '#f04864',
								showLabel: true
							}]
						}
					}
				});
			
			},
			touchColumn2(e) {
				canvaColumn2.showToolTip(e, {
					format: function(item, category) {
						if (typeof item.data === 'object') {
							return category + ' ' + item.name + ':' + item.data.value
						} else {
							return category + ' ' + item.name + ':' + item.data
						}
					}
				});
				canvaColumn2.touchLegend(e, {
					animation: true
				});
			},
			
		}
	}
</script>

<style>
	/*样式的width和height一定要与定义的cWidth和cHeight相对应*/
	.qiun-charts {
		width: 750upx;
		height: 500upx;
		background-color: #FFFFFF;
	}

	.charts {
		width: 750upx;
		height: 500upx;
		background-color: #FFFFFF;
	}
</style>
