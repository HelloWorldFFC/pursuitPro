<template>
	<view>
		<view class="contentBox" v-for="(item, index) in list" :key="index">
			<view class="province">{{item.province}}</view>
			<view class="infoBox" v-for="(item2, index2) in item.scenicspotList" :key="index2">
				<view @tap="toAddress(item2)">
					<view class="iconfont icon-daohangdizhi"></view>
				</view>
				<view class="rightBox">
					<view class="titleBox" @tap="toAddress(item2)">
						<view class="areaBox">
							<view class="title">{{item2.title}}</view>
							<view class="area">{{item2.city + item2.area}}</view>
						</view>
						<view class="subtitle" v-if="item2.subtitle.length>0">{{'---'+item2.subtitle}}</view>
					</view>
					<view>
		
					</view>
					<view class="rrightBox">
						<view class="iconfont icon-dianhua" @tap="toPhone(item2)" v-if="item2.phone.length>0"></view>
						<view class="grade">{{item2.grade}}</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
			props: {
				list: {
					type: Array,
					default () {
						return []
					}
				},
				themeColor: {
					type: String,
					default: '#33CCCC',
				},
				
			},
			
			data() {
				return {
					
				}
			},
			
			methods: {
				
				toAddress(e){
					
					this.$emit('toAddress', e);
				},
				toPhone(e){
					
					this.$emit('toPhone', e);
				},
			}
		}
	
</script>

<style lang="scss">
	.contentBox {
			width: 100%;
		}
	
		.province {
			text-align: center;
			padding: 20upx;
			font-size: $font-lgg;
			// margin-bottom: 4upx;
			border-bottom: $uni-color-base solid 4upx;
			background: $uni-color-white;
		}
	
		.infoBox {
			padding-top: 10upx;
			border-bottom: $uni-color-base solid 2upx;
			// margin-bottom: 2upx;
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: center;
			width: 100%;
			background: $uni-color-white;
			padding-bottom: 20rpx;
			position: relative;
	
			.rightBox {
				width: 100%;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				padding-left: 26upx;
	
				.titleBox {
					padding: 8upx 8upx 6upx 6upx;
	
					.areaBox {
						display: flex;
						flex-direction: row;
					}
	
					.title {
						font-size: $font-lg;
					}
	
					.area {
						font-size: $font-sm;
						padding-left: 10upx;
						padding-top: 10upx;
					}
	
					.subtitle {
						font-size: $font-sm;
						color: $uni-color-hui;
	
						padding-top: 10upx;
					}
				}
	
	
				.rrightBox {
					padding-right: 20upx;
	
					.grade {
						padding-top: 10upx;
						color: #FFD700;
					}
	
					.icon-dianhua {
						color: $uni-color-phone;
						font-size: $font-lg;
						padding-left: 30upx;
					}
				}
			}
	
	
			.icon-daohangdizhi {
				padding-left: 30upx;
				color: $uni-color-red;
				font-size: $font-lgg;
			}
		}
	
</style>
