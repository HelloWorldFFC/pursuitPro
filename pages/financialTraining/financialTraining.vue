<template>
	<scroll-view scroll-y class="cf-scrollBox ">
		<view class="qiun-bg-white qiun-title-bar qiun-common-mt">
			<view class="qiun-title-dot-light">2003年~2018年H1各类投资平均收益率对比表</view>
		</view>
		<view class="cf-shuCenter">
			<view v-for="(item, index) in list" :key="index" class="cf-hengCenter cf-pleft-s">
				<view style="font-size: 16upx;">{{item.time}}</view>
				<view  v-for="(item2, index2) in item.data" :key="index2" class="cf-shuCenter" :class="item2.colorClass">
					<view class="cf-unitTable" >
						<view style="overflow: hidden;white-space: nowrap;text-overflow: ellipsis;width: 39upx;">{{item2.name}}</view>
						<view style="font-size: 18upx;">{{item2.lucre}}</view>
					</view>
					
				</view>
			</view>
		</view>
		<view class="qiun-columns">

			<view class="qiun-bg-white qiun-title-bar qiun-common-mt">
				<view class="qiun-title-dot-light"  @tap="test">2003年~2018年H1各类投资平均收益率对比图</view>
			</view>
			<view class="qiun-charts">
				<!--#ifdef MP-ALIPAY -->
				<canvas canvas-id="canvasLineA" id="canvasLineA" class="charts" :width="cWidth*pixelRatio" :height="cHeight*pixelRatio"
				 :style="{'width':cWidth+'px','height':cHeight+'px'}" @touchstart="touchLineA"></canvas>
				<!--#endif-->
				<!--#ifndef MP-ALIPAY -->
				<canvas canvas-id="canvasLineA" id="canvasLineA" class="charts" @touchstart="touchLineA"></canvas>
				<!--#endif-->
			</view>

		</view>
	</scroll-view>
</template>

<script>
	import uCharts from '@/components/u-charts/u-charts.js';
	import financialTraining from '../../api/financialTraining.js'
	
	var _self;
	var canvaLineA = null;
	export default {
		data() {
			return {
				list: [
					{
					time: '2018',
					data: [{
							name: '黄金',
							colorClass: 'cf-huangjin',
							lucre: '2%',
						},
						{
							name: '沪深300',
							colorClass: 'cf-hushen300',
							lucre: '3%'
						},
						{
							name: '黄金',
							colorClass: 'cf-huangjin',
							lucre: '2%',
						},
						{
							name: '沪深300',
							colorClass: 'cf-hushen300',
							lucre: '3%'
						},
						{
							name: '黄金',
							colorClass: 'cf-huangjin',
							lucre: '2%',
						},
						{
							name: '沪深300',
							colorClass: 'cf-hushen300',
							lucre: '3%'
						},
						{
							name: '黄金',
							colorClass: 'cf-huangjin',
							lucre: '2%',
						},
						{
							name: '沪深300',
							colorClass: 'cf-hushen300',
							lucre: '3%'
						},
					]
				},
				{
					time: '2018',
					data: [{
							name: '黄金',
							colorClass: 'cf-huangjin',
							lucre: '2%',
						},
						{
							name: '沪深300',
							colorClass: 'cf-hushen300',
							lucre: '3%'
						},
						{
							name: '黄金',
							colorClass: 'cf-huangjin',
							lucre: '2%',
						},
						{
							name: '沪深300',
							colorClass: 'cf-hushen300',
							lucre: '3%'
						},
						{
							name: '黄金',
							colorClass: 'cf-huangjin',
							lucre: '2%',
						},
						{
							name: '沪深300',
							colorClass: 'cf-hushen300',
							lucre: '3%'
						},
						{
							name: '黄金',
							colorClass: 'cf-huangjin',
							lucre: '2%',
						},
						{
							name: '沪深300',
							colorClass: 'cf-hushen300',
							lucre: '3%'
						},
					]
				},
				 ],

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
			test(){
				uni.navigateTo({
					url: '/pages/financialTraining/detail',
				})
			},
			async getServerData() {
				let that = this;
				let res = await this.$api.json('getVarietyInvestList');
				
				
				let LineObj = res.data.LineA ;
				that.list = financialTraining.getListByObj(LineObj);
				
				
				let LineA = {
					categories: [],
					series: []
				};
				//这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
				LineA.categories = res.data.LineA.categories;
				LineA.series = res.data.LineA.series;
				_self.textarea = JSON.stringify(res.data.LineA);
				_self.showLineA("canvasLineA", LineA);
				
			},
			showLineA(canvasId, chartData) {
				canvaLineA = new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'line',
					fontSize: 11,
					padding: [15, 20, 0, 15],
					legend: {
						show: true,
						padding: 5,
						lineHeight: 11,
						margin: 0,
					},
					dataLabel: true,
					dataPointShape: true,
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,
					categories: chartData.categories,
					series: chartData.series,
					animation: true,
					xAxis: {
						type: 'grid',
						gridColor: '#CCCCCC',
						gridType: 'dash',
						dashLength: 8,
						boundaryGap: 'justify',
						disableGrid: true,
						rotateLabel: true, //横坐标倾斜
					},
					yAxis: {
						gridType: 'dash',
						gridColor: '#CCCCCC',
						dashLength: 8,
						splitNumber: 5,
						format: (val) => {
							return val.toFixed(2) + '%'
						}
					},
					width: _self.cWidth * _self.pixelRatio,
					height: _self.cHeight * _self.pixelRatio,
					extra: {
						line: {
							type: 'curve'
						}
					}
				});
				//下面是默认选中索引
				let cindex = 3;
				//下面是自定义文案
				//let textList=[{text:'我是一个标题',color:null},{text:'自定义1：值1',color:'#2fc25b'},{text:'自定义2：值2',color:'#facc14'},{text:'自定义3：值3',color:'#f04864'}];
				//下面是event的模拟,tooltip的Y坐标值通过这个mp.changedTouches[0].y控制
				let tmpevent = {
					mp: {
						changedTouches: [{
							x: 0,
							y: 80
						}]
					}
				};
				setTimeout(() => {
					canvaLineA.showToolTip(tmpevent, {
						index: cindex,
						//textList:textList
					});
				}, 200)
			},
			touchLineA(e) {
				canvaLineA.touchLegend(e);
				canvaLineA.showToolTip(e, {
					format: function(item, category) {
						return category + ' ' + item.name + ':' + item.data
					}
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
