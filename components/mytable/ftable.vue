<template>
	<view class="" :style="{ height: isWidth, overflowX: 'auto', marginLeft: statusBarHeight }">
		<view class="myFlex" v-if="tableList.series.length != 0">
			
		</view>
	</view>
</template>

<script>
	import tTable from '@/components/t-table/t-table.vue';
	import tTh from '@/components/t-table/t-th.vue';
	import tTr from '@/components/t-table/t-tr.vue';
	import tTd from '@/components/t-table/t-td.vue';
	export default {
		components: {
			tTable,
			tTh,
			tTr,
			tTd
		},
		data() {
			return {
				// 判断刘海屏
				// 状态栏高度：
				statusBarHeight: null,
				isWidth: null,

				isIndex: null
			};
		},
		watch: {
			tableList(e) {
				let that = this;
			
				console.log('that.tableList', e);
			},
			tableHead(e) {
				let that = this;

				console.log('that.tableHead', e);
			},
			tableData(e) {
				let that = this;

				console.log('that.tableData', e);
			}
		},
		props: {
			tableList :{
				type: [Object],
				default () {
					return {};
				}
			},
			
		},
		created() {
			let that = this;
			uni.getSystemInfo({
				success: res => {
					console.log(res);
					// 给定表格的高度
					this.isWidth = res.screenHeight - 60 + 'px';
					if (res.statusBarHeight > 43) {
						this.statusBarHeight = res.statusBarHeight + 'px';
					} else {
						this.statusBarHeight = 0;
					}
				}
			});

		},
		methods: {
			getIndex(index) {
				this.isIndex = index;
			},
			toCenter(name) {
				uni.showToast({
					title: name
				})
			}
		}
	};
</script>

<style lang="scss" scoped>
	.myFlex {
		display: flex;
	}

	.top1,
	.top2,
	.top3 {
		position: sticky;
		position: -webkit-sticky;
	}

	.centerTableHead {
		border-right: 1rpx solid #d5d5d5;
		border-bottom: 1rpx solid #d5d5d5;
		width: 50px;
		height: 91px;
		line-height: 91px;
		text-align: center;
		font-size: 12px;
		color: #333333;
	}

	.tableHead {
		border-right: 1rpx solid #d5d5d5;
		border-bottom: 1rpx solid #d5d5d5;
		width: 50px;
		height: 30px;
		line-height: 30px;
		text-align: center;
		font-size: 12px;
		color: #333333;
	}

	.tableColmn {
		border-left: 1upx solid #d5d5d5;
		border-right: 1rpx solid #d5d5d5;
		border-bottom: 1rpx solid #d5d5d5;
		width: 50px;
		height: 30px;
		line-height: 30px;
		text-align: center;
		font-size: 10px;
		color: #333333;
	}
</style>
