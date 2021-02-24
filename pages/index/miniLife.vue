<template>
	<view class="cf-content">
		<!-- #ifdef MP-WEIXIN -->
		<kefu></kefu>
		<!-- #endif -->
		<!-- <scroll-view scroll-y class="cf-scrollBox " :style="{ 'max-height': scrollMaxheight + 'px'}"> -->
			<view class="cf-grid">
				<view class="cf-grid-Item" v-for="(item,index) in list" :key="index" @tap="toItem(item)">
					<view class="cf-box">
						<view class="cf-number">{{ item.title }}</view>
						<view class="cf-contrast">
							<view class="cf-bubble" v-for="(item,index) in 17" :key="index"></view>
							<view class="cf-circle"></view>
							<view class="cf-bubble-home"></view>
						</view>
					</view>
				</view>
			</view>
		<!-- </scroll-view> -->
		<!-- #ifdef MP-WEIXIN -->
		<view class="cf-ad">
			<ad unit-id="adunit-da9ca613908f616c" ad-intervals="30"></ad>
		</view>
		<!-- #endif -->
	</view>
</template>

<script>
	import kefu from '@/components/kefu.vue';
	import preDupliClick from '../../api/preDupliClick.js'
	export default {
		components: {
			kefu,
		},
		data() {
			return {
				scrollMaxheight: this.vWindowHeight,
				list: [
					{
						title: '动画效果',
						toPageUrl: '/pagesSEffect/index/index',
					},
					{
						title: '景区导航',
						//toPageUrl: '/pagesScan/scenicspot/scenicspot',
						toPageUrl: '/pagesScan/scenicspot/scenicspot_5A',
					},
					{
						title: '姨妈记录',
						toPageUrl: '/pages/emmenia/emmenia',
					},
					
					{
						title: '有效期记录',
						toPageUrl: '/pages/validTerm/validTerm',
					},
					{
						title: '定时提醒',
						toPageUrl: '/pages/timingReminder/timingReminder',
					},
					
					{
						title: '涂鸦',
						toPageUrl: '/pages/scrawl/scrawl',
					},
				]
			}
		},
		async onLoad() {
			let that = this;

		},
		onShow() {
			let that = this;
			let list = [];

		},
		// #ifdef MP-WEIXIN
		//微信小程序的分享
		onShareAppMessage: function(options) {

		},
		// #endif
		methods: {

			toItem(item) {
				let isonce = preDupliClick.setpreDupliClickVal(preDupliClick.preDupli.one);
				if (!isonce) return;

				let that = this;
				let toPageUrl = item.toPageUrl;
				if (toPageUrl.length > 0) {
					uni.navigateTo({
						url: toPageUrl,
					})
				} else {
					// #ifdef MP-WEIXIN
					uni.navigateToMiniProgram({
						appId: '',
						path : 'pages/index/index',
						extraData: {
							par: 'test'
						},
						envVersion: 'release',// develop（开发版），trial（体验版），release（正式版）
						success(res) {
							console.log('跳转成功');
						}
					})
					// #endif
					//that.$api.msg('新增功能请联系客服！')
				}


			},

		}

	}
</script>

<style lang="scss">
	@import '@/style/specialism/electtricize.css';
</style>
