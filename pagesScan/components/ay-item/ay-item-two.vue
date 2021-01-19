<template>
	<view>
		<view class="contentBox" v-for="(item, index) in list" :key="index">
			<view class="cf-hengCenter oneBox">
				<view class="province">{{item.province}}</view>
				<view class="sumNum">({{item.scenicspotList.length}}个)</view>
			</view>
			
			<view class="infoBox" v-for="(item2, index2) in item.scenicspotList" :key="index2">
				<view @tap="toAddress(item2)">
					<view class="iconfont icon-daohangdizhi"></view>
					<view class="distance">{{item2.distance}}</view>
				</view>
				<view class="rightBox">
					<view class="titleBox" @tap="toAddress(item2)">
						<view class="areaBox">
							<view class="title">{{item2.title}}</view>
							
						</view>
						<view class="area" >{{item2.city + item2.area}}</view>
						<view class="subtitle" >{{'---'+item2.subtitle}}</view>
					</view>
					<view>
		
					</view>
					<view class="rrightBox">
						<view v-if="item2.phone.length>0" class="iconfont icon-dianhua" @tap="toPhone(item2)" ></view>
						<view v-else class="nophone">暂无电话</view>
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
	.oneBox{
		text-align: center;
		padding: 20upx;
		border-radius: 100upx;
		box-shadow:2px 2px 5px #999;
		border-bottom: $uni-color-base solid 4upx;
		background: $uni-color-white;
		.province {
			
			font-size: $font-lgg;
			// margin-bottom: 4upx;
			
		}
		.sumNum{
			padding-top: 6upx;
			padding-left: 20upx;
			font-size: $font-lg;
		}
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
			
			.distance{
				font-size: $font-smm;
				color: $uni-color-dan;
					
				padding-top: 10upx;
				padding-left: 10upx;
			}
			
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
					
					.area{
						font-size: $font-sm;
						color: $uni-color-dan;
							
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
					.nophone{
						font-size: $font-smm;
						color: $uni-color-hui;
					}
					.grade {
						padding-top: 10upx;
						color: #FFD700;
						text-align: center;
					}
	
					.icon-dianhua {
						color: $uni-color-phone;
						font-size: $font-lg;
						padding-left: 30upx;
						padding-right: 30upx;
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
