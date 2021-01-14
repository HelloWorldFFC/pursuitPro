<template>
	<view class="content">
		<!-- <navTop></navTop> -->
		<scroll-view scroll-y class="scrollBox">
			<uni-notice-bar show-icon="true" scrollable="true" single="true" :text="notice" speed=50></uni-notice-bar>
			<!-- <view @tap="toDetail_stock">详情示例</view> -->
			<uni-swiper-dot :info="info" :current="current" field="content" mode="nav">
				<swiper class="swiper-box" @change="change" autoplay="true" circular="true" interval="2000" indicator-dots="true">
					<swiper-item v-for="(item ,index) in info" :key="index">
						<image :src="item.images" class="swiper-item"></image>
					</swiper-item>
				</swiper>
			</uni-swiper-dot>
			<need :list="needList"></need>
			<view class="cf-bottomCenter">已经到底啦~</view>
		</scroll-view>

	</view>
</template>

<script>
	import reqUrl from '../../api/reqUrl.js'
	import need from '@/components/list/need.vue';
	import fitable from "@/components/mytable/fitable.vue";
	import ptable from "@/components/mytable/ptable.vue";
	import ftable from "@/components/mytable/ftable.vue";
	import mytable from "@/components/mytable/mytable.vue";
	import tTable from '@/components/t-table/t-table.vue';
	import tTh from '@/components/t-table/t-th.vue';
	import tTr from '@/components/t-table/t-tr.vue';
	import tTd from '@/components/t-table/t-td.vue';
	import uniSwiperDot from "@/components/uni-ui/uni-swiper-dot/uni-swiper-dot.vue";
	import uniNoticeBar from "@/components/uni-ui/uni-notice-bar/uni-notice-bar.vue";
	import uniGrid from "@/components/uni-ui/uni-grid/uni-grid.vue";
	import navTop from '@/components/navTop.vue';
	export default {
		components: {
			need,
			navTop,
			uniSwiperDot,
			uniNoticeBar,
			uniGrid,
			tTable,
			tTh,
			tTr,
			tTd,
			mytable,
			ftable,
			ptable,
			fitable
		},
		data() {
			return {
				needList: [{
						id: 0,
						title: '每天努力一点点超越',
						subtitle: '在业余时间想兼职',
						guide: '请联系客服',
						imgurl: 'https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress',
					},
					{
						id: 1,
						title: '梦想总会慢慢实现的',
						subtitle: '有什么需求想实现',
						guide: '请联系客服',
						imgurl: 'https://images.pexels.com/photos/226424/pexels-photo-226424.jpeg?auto=compress',
					}, {
						id: 2,
						title: '外面的繁华与我无关',
						subtitle: '我只想静静地待着',
						guide: '请联系客服',
						imgurl: 'https://images.pexels.com/photos/850216/pexels-photo-850216.jpeg?auto=compress',
					}, {
						id: 3,
						title: '钱包外表是那么漂亮',
						subtitle: '里边想充实一点不',
						guide: '请联系客服',
						imgurl: 'https://images.pexels.com/photos/6423/desk-notebook-office-grey.jpg?auto=compress',
					}, {
						id: 4,
						title: '海浪打击不到心的',
						subtitle: '你会越来越好的',
						guide: '请联系客服',
						imgurl: 'https://images.pexels.com/photos/3968102/pexels-photo-3968102.jpeg?auto=compress',
					}, {
						id: 5,
						title: '远方的美景在等你呢',
						subtitle: '你值得一切最好的',
						guide: '请联系客服',
						imgurl: 'https://images.pexels.com/photos/2641624/pexels-photo-2641624.jpeg?auto=compress',
					}
				],
				info: [{
						content: '生活的美无处不在',
						images: 'https://images.pexels.com/photos/873082/pexels-photo-873082.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260'
					}, {
						content: '美好的回忆永在心中',
						images: 'https://images.pexels.com/photos/3905450/pexels-photo-3905450.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940%20940w'
					},
					{
						content: '你值得拥有更好的',
						images: 'https://images.pexels.com/photos/2956954/pexels-photo-2956954.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500 1x'
					}, {
						content: '哪天礼物就来到了',
						images: 'https://images.pexels.com/photos/3711652/pexels-photo-3711652.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260'
					}, {
						content: '距离产生美',
						images: 'https://images.pexels.com/photos/47396/pexels-photo-47396.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=126'
					},
					{
						content: '珍惜过好当下每一天',
						images: 'https://images.pexels.com/photos/1809340/pexels-photo-1809340.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260'
					},
					{
						content: '终有自己一片宁静的天空',
						images: 'https://images.pexels.com/photos/1809347/pexels-photo-1809347.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260'
					},
					//
					//
				],
				current: 0,
				notice: '为大家的需求提供一个通道！感谢各位反馈和支持！',
			}
		},
		onLoad() {
			let that = this;
			that.shareInit();
			//that.getListByYun();
		},

		// #ifdef MP-WEIXIN
		//微信小程序的分享
		onShareAppMessage: function(options) {

		},
		//分享到朋友圈
		onShareTimeline: function() {

		},
		// #endif
		methods: {
			async getListByYun(){
				let that = this ;
				let url = reqUrl.loginUrl.list ;
				const res = await that.$myRequest({
					url : url,
					method : 'POST',
					//data : JSON.stringify(req) ,
					// header : {
					// 	'token' :  storage.getToken()
					// }
					
				});
				console.log(res)
			},
			shareInit() {
				// #ifdef MP-WEIXIN
				//微信小程序的分享
				wx.showShareMenu({
					withShareTicket: true,
					menus: ['shareAppMessage', 'shareTimeline']
				})
				// #endif
			},
			toDetail_stock() {
				let url = `/pages/stock/detail_s`;
				uni.navigateTo({
					url: url,
				})
			},
			change(e) {
				this.current = e.detail.current;
			},
		}

	}
</script>

<style lang="scss">
	page,
	.content {

		width: 100%;
		height: 100%;
		overflow: hidden;

		background-color: $page-color-base;
	}

	.t-Box {
		width: 700upx;
		height: 100%;
		margin: 10upx;
		background-color: $uni-color-white;

		.t-c-Box {
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

			.t-name {
				width: 80upx;
				height: 100%;
				padding: 0 10upx;

			}

			.t-subItem {
				.t-DetailBox:nth-child(2n) {
					border-top: 1rpx solid #d5d5d5;
				}

				.t-DetailBox:nth-child(2n+1) {
					border-top: 1rpx solid #d5d5d5;
				}

				.t-DetailBox:last-child {
					border-bottom: 1rpx solid #d5d5d5;
				}

				.t-DetailBox {
					display: flex;
					flex-direction: row;
					justify-content: flex-start;
					align-items: center;
					// border-bottom : 1rpx solid #d5d5d5;
					border-left: 1rpx solid #d5d5d5;

					.t-d-name {
						width: 340upx;
						padding: 0 10upx;
						font-size: 12upx;
						border-right: 1rpx solid #d5d5d5;
					}

					.t-DataBox {
						display: flex;
						flex-direction: row;
						justify-content: center;
						align-items: center;

						.t-d-data {
							padding: 0 10upx;
							width: 80upx;
							border-right: 1rpx solid #d5d5d5;
						}
					}
				}
			}
		}

	}

	.scrollBox {
		width: 100%;
		height: 100%;
		background-color: $uni-color-white;


	}

	.swiper-box {
		width: 750upx;
		height: 400upx;
	}

	.swiper-item {
		width: 750upx;
		height: 400upx;
	}

	.t-table {
		border: none;
		margin: 30upx;
	}

	.t-table .t-tr .t-th:nth-child(2n) {
		background: $uni-color-white;
	}

	// .t-td:nth-child(odd)
	// {
	// 	border: 1px #d0dee5 solid;
	// }
	// .t-td:nth-child(even)
	// {
	// 	border: 1px #d0dee5 solid;
	// }
	.t-td {
		background: $uni-color-white;
		border: 1px #d0dee5 solid;
	}

	.t-th {
		background: $uni-color-white;
		border: 1px #d0dee5 solid;
	}

	.tableBox {
		width: 700upx;
		font-size: 28upx;
		color: #323232;

		t-table {
			width: 100%;
		}

		t-td {
			color: #323232;
			font-size: 28upx;
			font-weight: 400;
		}
	}
</style>
