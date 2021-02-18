<template>
	<view class="content">
		
		<aylottery :type="1" themeColor="#33CCCC" btn_Color="#ffffff" seled_Color="#DB7093" seled_t_Color="#98FB98" un_seled_Color="#00BFFF"
		 un_seled_t_Color="#33CCCC" :result_txt="result_turn" @show="show_turn" @again="again_turn" :show_again="true" again_txt="重新开始" :tips_init="tips_init_turn" :no_z_init="no_z_init_turn"></aylottery>
		
		
		<aylottery :type="2" :list="list" themeColor="#33CCCC" bgColor="#1E90FF" bg_sd_Color="#4169E1" @result="resultFun"></aylottery>
		
		<aylottery :type="3" :list="list_r" :height="600" :width="600" :chance_num_init="chance_num_init" @result="resultFun_chance"></aylottery>
		
		<!-- #ifndef MP-WEIXIN -->
		<aylottery :type="4" style="margin-top: 40upx;" ref="blowRef" :result_txt="result_blow" :height="150" :width="350" themeColor="#33CCCC" txtColor="#ffffff"
		 :txtFontSize="50" canvasId="canvasId2"></aylottery>
		<!-- #endif -->
	</view>
</template>

<script>
	import menu from '../js/menu.js';
	import marquee from '../components/ay-lottery/marquee.vue';
	import turnplate from '../components/ay-lottery/turnplate.vue';
	import turnLottery from '../components/ay-lottery/turnLottery.vue';
	import blow from '../components/ay-lottery/blow.vue';
	import aylottery from '../components/ay-lottery/ay-lottery.vue';
	export default {
		components: {
			marquee,
			turnplate,
			turnLottery,
			blow,
			aylottery,
		},

		data() {
			return {
				tips_init_turn:'点击',
				no_z_init_turn:'点击',
				result_turn:'',
				result_blow:'谢谢参与',
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
				that.$refs.blowRef.initBlow()
			}, 50)
			// #endif

		},
		methods: {
			again_turn(e){
				let that = this;
				that.result_turn = '';
				that.no_z_init_turn = that.tips_init_turn;
			},
			show_turn(e){
				let that = this;
				if(e.result==1){
					
					that.result_turn = that.getShowTxt();
				}else{
					that.no_z_init_turn = '谢谢参与';
				}
				
			},
			getShowTxt(){
				let that = this;
				//随机获取list的值
				let num = Math.floor(Math.random()*10);//可均衡获取0到9的随机整数
				let legth = that.list.length || 0 ;
				let index = num<legth ? num : (legth-1) ;
				return that.list[index].name ||'哈哈'
			},
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
				
				that.result_blow = that.getShowTxt();
				uni.hideLoading();

				that.isLoaded = true;

			},

		}
	}
</script>

<style lang="scss">

</style>
