<template>
	<view class="" :style="{ height: isWidth, overflowX: 'auto', marginLeft: statusBarHeight }">
		<view class="myFlex" v-if="tableList.series.length != 0">
			<view class="top1" style="z-index: 9;left: 0;background-color: #FFFFFF;">
				<view class="myFlex top2" style="top: 0;">
					<view class="tableHead" >
						<view class=" tableColmn tableColmnT" style="background-color: #FDEDD6;font-size: 12px;">{{ tableList.title }}</view>
					</view>
					<view class="tableHead" v-for="(item, index) in  tableList.series" :key="index">
						<view class=" tableColmn tableColmnT" style="background-color: #FDEDD6;font-size: 12px;">{{ item.name }}</view>
					</view>
				</view>
				<view class="myFlex">
					<view class="">
						<block v-for="(item, index) in centerList" :key="index">
							<view @click="toCenter(item.name)" class="centerTableHead" :style="{ background: item.bgColor }">
								{{ item.name }}
							</view>
						</block>
					</view>
					<view class="">
						<block v-for="(item, index) in tableList.categories" :key="index">
							<view @click="getIndex(index)" :style="{ background: isIndex == index ? '#fffaea;' : '' }" class="tableColmn">
								{{ item }}
							</view>
						</block>
						
					</view>
					<view class="" v-for="(item, index) in tableList.series" :key="index">
						<block v-for="(ditem, dindex) in item.data" :key="'d'+dindex">
							<view @click="getIndex(index)" :style="{ background: isIndex == index ? '#fffaea;' : '' }"  class="tableColmn">
								{{ ditem }}
							</view>
						</block>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
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
			tableData: {
				type: [Array, Boolean],
				default () {
					return [];
				}
			},
			tableHead: {
				type: [Array],
				default () {
					return [];
				}
			},
			tableHeadT: {
				type: [Array],
				default () {
					return [];
				}
			},
			centerList: {
				type: [Array],
				default () {
					return [];
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
