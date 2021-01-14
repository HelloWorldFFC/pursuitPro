<template>
	<scroll-view scroll-x class="t-Box">
		<view class="t-c-Box">
			<view v-for="(item, index) in tableList.series" :key="index" class="t-ContentBox">
				<view class="t-name">{{item.name}}</view>
				<view class="t-subItem" v-for="(sitem, sindex) in item.subItem" :key="'s'+sindex">
					<view class="t-DetailBox" v-for="(iitem, iindex) in sitem.incomeDetail" :key="'i'+iindex">
						<view class="t-d-name">{{iitem.name}}</view>
						<view class="t-DataBox">
							<view class="t-d-data"  v-for="(iditem, idindex) in iitem.data" :key="'id'+idindex">{{iditem}}</view>
						</view>
						
					</view>
					<view class="t-DetailBox" >
						<view class="t-d-name">{{sitem.incomeSum.name}}</view>
						<view class="t-DataBox">
							<view class="t-d-data"  v-for="(iditem, idindex) in sitem.incomeSum.data" :key="'id'+idindex">{{iditem}}</view>
						</view>
					</view>
					<view class="t-DetailBox" v-for="(iitem, iindex) in sitem.outcomeDetail" :key="'o'+iindex">
						<view class="t-d-name">{{iitem.name}}</view>
						<view class="t-DataBox">
							<view class="t-d-data"  v-for="(iditem, idindex) in iitem.data" :key="'od'+idindex">{{iditem}}</view>
						</view>
						
					</view>
					<view class="t-DetailBox" >
						<view class="t-d-name">{{sitem.outcomeSum.name}}</view>
						<view class="t-DataBox">
							<view class="t-d-data"  v-for="(iditem, idindex) in sitem.incomeSum.data" :key="'id'+idindex">{{iditem}}</view>
						</view>
					</view>
					<view class="t-DetailBox" >
						<view class="t-d-name">{{sitem.total.name}}</view>
						<view class="t-DataBox">
							<view class="t-d-data"  v-for="(iditem, idindex) in sitem.incomeSum.data" :key="'id'+idindex">{{iditem}}</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</scroll-view>
	
</template>

<script>
	export default {
		props: {
			tableList :{
				type: [Object],
				default () {
					return {};
				}
			},
		},
		data() {
			return {
				
			};
		}
		
	}
</script>

<style lang="scss">
	.t-Box{
		width: 700upx;
		height: 100%;
		margin: 10upx;
		background-color: $uni-color-white;
		.t-c-Box{
			//border-top: 1rpx solid #d5d5d5;
			//border-bottom: 1rpx solid #d5d5d5;
			width: 100%;
			border-left: 1rpx solid #d5d5d5;
		}
		.t-ContentBox {
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: center;
			border-top: 1rpx solid #d5d5d5;
			border-bottom: 1rpx solid #d5d5d5;
			.t-name{
				width: 80upx;
				height: 100%;
				padding: 0 10upx;
				
			}
			.t-subItem{
				.t-DetailBox:nth-child(2n) {
					border-top : 1rpx solid #d5d5d5;
				}
				.t-DetailBox:nth-child(2n+1) {
					border-top : 1rpx solid #d5d5d5;
				}
				.t-DetailBox:last-child {
					border-bottom : 1rpx solid #d5d5d5;
				}
				.t-DetailBox{
					display: flex;
					flex-direction: row;
					justify-content: flex-start;
					align-items: center;
					// border-bottom : 1rpx solid #d5d5d5;
					border-left : 1rpx solid #d5d5d5;
					.t-d-name{
						width: 340upx;
						padding: 0 10upx;
						font-size: 12upx;
						border-right: 1rpx solid #d5d5d5;
					}
					.t-DataBox{
						display: flex;
						flex-direction: row;
						justify-content: center;
						align-items: center;
						.t-d-data{
							padding: 0 10upx;
							width: 80upx;
							border-right: 1rpx solid #d5d5d5;
						}
					}
				}
			}
		}
		
	}
	
</style>
