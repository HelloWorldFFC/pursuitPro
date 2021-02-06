<template>
	<view>
		<view class="oneBox">
			<view class="itemBox">
				<view class="name">消息推送</view>
				<view >
					<ayswitch :themeColor="themeColor" :item="msgMoveObj" :isSwitch="msgMoveObj.isSwitch" @change="switchFun_msgMove"></ayswitch>

				</view>
			</view>
			<view>
				<hengItem :list="tipList" @toDetailPage="toDetailPage_tip"></hengItem>
			</view>

			
			

		</view>
		<view class="exitBox" @click="exitFun" v-if="isLogin">
			<view class="exit">退出</view>
		</view>
		
	</view>
</template>

<script>
	import ayswitch from '../components/ay-switch/ay-switch.vue'
	import hengItem from '@/components/ay-hengItem/hengItem.vue';
	
	export default {
		components: {
			hengItem,
			ayswitch,
		},
		
		data() {
			return {
				themeColor : '#33CCCC',
				msgMoveObj: {
					isSwitch: true,
				},
				isAndroidOs : this.isAndroidOs ,
				
				tipList: [{
						img: '',
						name: '更换密码',
						toPageUrl: '/pagesShow/login/changePwd',
						
					},
					{
						img: '',
						name: '我的愿望',
						toPageUrl: '/pagesFore/plan/set_plan',
					},

				],
				isBackToHome: false,
			}
		},
		// #ifdef MP-WEIXIN
		//微信小程序的分享
		onShareAppMessage: function(options) {

		},
		// #endif
		onShow: function() {
			let that = this;
			
		},
		onLoad(options) {
			let that = this;
			try {
				const value = uni.getStorageSync('isLogin');
				that.isLogin = value;
			
			} catch (e) {
				// error
			}

		},

		methods: {
			switchFun_msgMove(e) {
				let that = this;
				let item = e.item;
				let index = e.index;
				let isSwitch = item.isSwitch;
				
				let tip = '';
				if (isSwitch) {
					tip = '确认关闭吗？';
				} else {
					tip = '确认开启吗？';
				}
				uni.showModal({
					title: '提醒',
					content: tip,
					success(res) {
						if (res.confirm) {
							that.msgMoveObj.isSwitch = !isSwitch;
							that.$api.msg('操作成功');
						} else if (res.cancel) {
			
						}
					}
				})
			},
			toDetailPage_tip(e) {
				let that = this;
				let list = e.list;
				let idx = e.curIndex;
				let item = e.item;

				if(item.isToPageWeb){
					comm.toWebPage(item.web_url)
				}else{
					uni.navigateTo({
						url: item.toPageUrl
					})
				}
				
			},
			

			//退出
			exitFun() {
				let that = this;
				uni.showModal({
					content: '确认退出？',
					success: (e) => {
						if (e.confirm) {

							try {
								uni.setStorageSync('isLogin', false);
							} catch (e) {
								// error
							}
							let toPage = setTimeout(function() {
								uni.switchTab({
									url: `/pages/index/index`
								})
								clearTimeout(toPage);
							}, 500)

						}
					}
				})
			},
			
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #f9f9f9;
	}

	.oneBox {
		background-color: #FFFFFF;
		color: #bcbcbc;
		padding-left: 0upx;
	}

	.itemBox {
		display: flex;
		padding: 18upx 20upx;
		border-bottom: 2upx solid #EEEEEE;
		align-items: center;
		
		.name {
			font-size: 34upx;
			line-height: 60upx;
			margin-left: 20upx;
			color: #323232;
			width: 84%;
			font-family: PingFang SC;
		}
		
		.toright {
			width: 35upx;
			height: 35upx;
			margin-left: 30upx;
		}
	}
	
	.exitBox {
		background-color: #FFFFFF;
		margin-top: 100upx;

		.exit {
			font-size: 34upx;
			line-height: 100upx;
			color: #323232;
			font-family: PingFang SC;
			text-align: center;
		}
	}
</style>
