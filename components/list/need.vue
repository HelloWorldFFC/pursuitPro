<template>
	<view class="list" >
		<view v-for="(item, index) in list" :key="index" class="item" @click="navToDetail(item)">
			<view class="imageBox">
				<image :src="item.imgurl" mode="aspectFill"></image>
			</view>
			<view class="txtBox" style="position: relative;">
				<view class="txtFlexBox">
					<view class="title">{{item.title}}</view>
					<view class="subtitle" >{{item.subtitle}}</view>
					<view class="guide">{{item.guide}}</view>
				</view>
			</view>
			<view class="iconBox">
				<!-- #ifndef MP-WEIXIN -->
				<!-- <view class="btmkefuBox" >
					<text class="iconfont icon-xiaoxi"></text>
					<text>客服</text>
				</view> -->
				<!-- #endif -->
				<!-- #ifdef MP-WEIXIN -->
				<view class="btmkefuBox">
					<view  class="wxLoginBox">
						<button open-type="contact" @contact="handleContactFun"></button>
						<view class="btmkefuBox loginBtnMark" >
							<view class="loginBtnMarkFlex">
								<text class="iconfont icon-xiaoxi" ></text>
								<text>客服</text>
							</view>
						</view>
					</view>
				</view>
				<!-- #endif -->
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		components: {
			
		},
		props: {
			
			list: {
				type: Array,
				default () {
					return []
				}
			},
			
		},
		watch: {

		},
		data() {
			return {
				
			};
		},

		methods: {
			// #ifdef MP-WEIXIN
			//客服
			handleContactFun(e){
				var that = this;
				//that.$api.msg('联系客服成功！');
				console.log(e.detail.path)
				console.log(e.detail.query)
			},
			// #endif
			navToDetail(){
				
			},
		}
	}
</script>

<style lang="scss">
	/* 列表 */
	.list {
		// flex-wrap:wrap;
		//margin-bottom: 100upx;
		flex-direction: column;
		padding: 0 10upx;
		background: #fff;

		.item {
			display: flex;
			flex-direction: row;
			width: 100%;
			padding-bottom: 16upx;
			padding-top: 16upx;
			border-bottom: 4upx solid #f9f9f9;

			.imageBox {
				width: 30%;
				height: 160upx;
				border-radius: 3px;
				//overflow: hidden;

				image {
					width: 100%;
					height: 160upx;
					border-radius: 6upx;
					opacity: 1;
				}
			}
			.wxLoginBox button {
				width: 100%;
				height: 160upx;
				background-color: $uni-color-white;
			
				/* 防止按钮点击不生效 */
				opacity: 0.1;
				z-index: 2;
			}
			.txtBox {
				width: 50%;
				padding-left: 20upx;
				.txtFlexBox{
					padding-top : 20upx;
					padding-left: 10upx;
					height: 100%;
					width: 100%;
					display: flex;
					flex-direction: column;
					font-size: 20upx;
					align-items: center;
					justify-content: flex-start;
					background-color: $uni-color-white;
					.title{
						font-size: 34upx;
					}
					.subtitle{
						padding-top: 10upx;
						font-size: 30upx;
						padding-left: 40upx;
					}
					
					.guide{
						padding-top: 10upx;
						font-size: 20upx;
						padding-left: 40upx;
					}
				}
			}
			
			.iconBox {
				width: 20%;
				padding-left: 20upx;
				.btmkefuBox {
					height: 100%;
					width: 100%;
					display: flex;
					flex-direction: column;
					font-size: 20upx;
					align-items: center;
					justify-content: center;
					background-color: $uni-color-white;
					text-align: center;
					border-right: #fbfbfb solid 2upx;
					color: $uni-color-click;
					.icon-xiaoxi{
						font-size: 76upx;
						
					}
				}
			}
			
			.addDot {
				/*多余显示省略号*/
				display: -webkit-box;
				overflow: hidden;
				text-overflow: ellipsis;
				word-wrap: break-word;
				white-space: normal !important;
				-webkit-line-clamp: 1;
				-webkit-box-orient: vertical;
				white-space: nowrap;
			}
			
			
			
			.wxLoginBox button::after {
				border: none;
			}
			
			.wxLoginBox {
				width: 100%;
				position: relative;
			}
			
			.loginBtnMark {
				width: 100%;
				height: 100%;
				position: absolute;
				left: 0;
				top: 0;
			
				.loginBtnMarkFlex {
					width: 100%;
					height: 100%;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					text-align: center;
				}
			}
		}

	}
	.list1 {
		//margin-bottom: 200upx;
	}

	/* #ifdef H5 */
	.list {
		//margin-bottom: 200upx;
	}

	/* #endif */
	/* #ifdef MP-WEIXIN */
	.list {
		//margin-bottom: 100upx;
	}

	/* #endif */
	/* #ifdef APP-PLUS */
	.list {
		//margin-bottom: calc(var(--status-bar-height) + 50px);
	}

	/* #endif */
</style>
