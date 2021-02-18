<template>
	<view class="content">
		<turnLottery themeColor="#33CCCC" btn_Color="#ffffff" seled_Color="#DB7093" seled_t_Color="#98FB98" un_seled_Color="#00BFFF"
		 un_seled_t_Color="#33CCCC" result="中奖结果"></turnLottery>

		<!-- #ifndef MP-WEIXIN -->
		<blow style="margin-top: 40upx;" ref="blowRef" result="中奖结果" :height="150" :width="350" themeColor="#33CCCC" txtColor="#ffffff"
		 :txtFontSize="50" canvasId="canvasId2"></blow>
		<!-- #endif -->

		<marquee :list="list" themeColor="#33CCCC" bgColor="#1E90FF" bg_sd_Color="#4169E1" @result="resultFun"></marquee>

		<turnplate :list="list_r" :chance_num_init="chance_num_init" @result="resultFun_chance"></turnplate>


	</view>
</template>

<script>
	import menu from '../js/menu.js';
	import marquee from '../components/ay-lottery/marquee.vue';
	import turnplate from '../components/ay-lottery/turnplate.vue';
	import turnLottery from '../components/ay-lottery/turnLottery.vue';
	import blow from '../components/ay-lottery/blow.vue';
	export default {
		components: {
			marquee,
			turnplate,
			turnLottery,
			blow,
		},

		data() {
			return {
				chance_num_init:6,
				list: [],
				list_r: [],
			}
		},
		onLoad() {
			let that = this;
			that.loadData();

		},
		onShow() {

		},
		onReady: function() {
			let that = this;

			//#ifndef MP-WEIXIN
			setTimeout(function() {
				that.$refs.blowRef.initCanvas()
			}, 50)
			// #endif

		},
		methods: {
			resultFun(e) {
				let that = this;
				let item = e.item;
				this.$api.msg_modal("抽中了" + item.name,'恭喜您')

			},
			resultFun_chance(e){
				let that = this;
				let item = e.item;
				let index = e.curIndex ;
				this.$api.msg_modal('获得' + (item.name),'恭喜')
				uni.showModal({
					title: '恭喜',
					content: '获得' + (item.name),
					showCancel: false
				});
				let type = item.type ;
				if(type==1){
					that.chance_num_init += item.val ;
				}
			},
			async loadData() {
				let that = this;

				uni.showLoading({
					title: '加载中',
					mask: true,
				})

				let res_home = await menu.res_home;
				//console.log(res_home)
				let data = res_home.data;

				that.list = data.lottery_list.data;
				that.list_r = data.lottery_r_list.data;

				uni.hideLoading();

				that.isLoaded = true;

			},

		}
	}
</script>

<style lang="scss">

</style>
