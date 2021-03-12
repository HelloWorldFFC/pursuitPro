<template>
	<view >
		
		
		<view style="margin-top: 200upx;">
			<aylottery :type="3" :list="list_r" :height="600" :width="600" :chance_num_init="chance_num_init" @result="resultFun_chance"
			 @toDetailPage="toDetailPage" :stay_index="stay_index_r"></aylottery>
		</view>
		
		<view style="position: relative;" @tap="toSetGift">
			<view class="cf-fixed-right cf-tab-m">设置礼物</view>
		</view>
		
	</view>
</template>

<script>
	import menu from '../js/menu.js';
		import aylottery from '../components/ay-lottery/ay-lottery.vue';
		
		export default {
			components: {
				aylottery,
				
			},
	
			data() {
				return {
					//刮一刮
					result_img_blow: 'https://cdn.pixabay.com/photo/2021/01/04/07/38/lily-5886728__340.jpg',
					themeColor: '#33CCCC',
					txtFontSize_blow: 50,
					txtColor_blow: '#FFFFFF',
					is_show_blow: false, //防止画布画好前闪烁
					result_blow: '谢谢参与',
					
					stay_index_r_init: 4,
					stay_index_r: 1,
					stay_index_m : 1 ,//跑马灯
					stay_index_m_init : 4,
					tips_init_turn: '点击',
					no_z_init_turn: '点击',
					result_turn: '好运降临',
					
					chance_num_init: 6,
					lottery_list: [],
					list_r: [],
				}
			},
			onLoad() {
				let that = this;
				that.loadData();
	
			},
			onShow() {
	
			},
			// #ifdef MP-WEIXIN
			//微信小程序的分享
			onShareAppMessage: function(options) {
	
			},
			// #endif
			onReady: function() {
				let that = this;
	
				// #ifdef H5
				this.$nextTick(() => {
					setTimeout(function() {
						//that.$refs.blowRef.initBlow();
					}, 50)
				})
				// #endif
	
			},
			methods: {
				toSetGift(){
					
					uni.navigateTo({
						url: '/pagesScan/setup/set_gift'
					})
				},
				init_blow() {
					this.is_show_blow = true;
				},
				reset: function() {
					this.$refs.card.init();
				},
	
				seatShow: function() {
					
				},
				toDetailPage(e) {
					let list = e.list;
					let idx = e.curIndex;
					let list_img = [];
					let item = e.item;
	
					list.forEach(item => {
						list_img.push(item.img)
					})
					if (list_img && list_img.length > 0) {
						uni.previewImage({
							current: list_img[idx], //  传 Number H5端出现不兼容
							urls: list_img,
							indicator: "number",
							loop: true,
						});
					}
				},
	
				again_turn(e) {
					let that = this;
					that.result_turn = '';
					that.no_z_init_turn = that.tips_init_turn;
				},
				show_turn(e) {
					let that = this;
					if (e.result == 1) {
	
						that.result_turn = that.getShowTxt();
					} else {
						that.no_z_init_turn = '谢谢参与';
					}
	
				},
				getShowTxt() {
					let that = this;
					//随机获取list的值
					let num = Math.floor(Math.random() * 10); //可均衡获取0到9的随机整数
					let legth = that.lottery_list.length || 0;
					let index = num < legth ? num : (legth - 1);
					return that.lottery_list[index].name || '哈哈'
				},
				resultFun(e) {
					let that = this;
					let item = e.item;
					let list = e.list;
					
					this.$api.msg_modal("抽中了" + item.name, '恭喜您')
					//定义下一次转的位置
					that.stay_index_m = Math.round(Math.random() * (list.length - 1)); //随机数
				},
				resultFun_chance(e) {
					let that = this;
	
					let item = e.item;
					let index = e.curIndex;
					let list = e.list;
	
					//定义下一次转的位置
					that.stay_index_r = Math.round(Math.random() * (list.length - 1)); //随机数
	
					if (e.isAward) {
						this.$api.msg_modal('快去送' + (item.name), '恭喜')
						let type = item.type;
						if (type == 1) {
							that.chance_num_init += item.val;
						}
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
	
					that.lottery_list = data.lottery_list.data;
					that.list_r = data.gift_list.data;
	
					that.result_blow = that.getShowTxt();
					//第一次转盘停的位置
					that.stay_index_r = that.stay_index_r_init;
					that.stay_index_m = that.stay_index_m_init;
					
					uni.hideLoading();
	
					
	
					that.isLoaded = true;
	
				},
	
			}
		}
	
</script>

<style>
</style>
