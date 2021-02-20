<template>
	<view class="content">
		
		<aylottery :type="1" themeColor="#33CCCC" btn_Color="#ffffff" seled_Color="#DB7093" seled_t_Color="#98FB98" un_seled_Color="#00BFFF"
		 un_seled_t_Color="#33CCCC" :result_txt="result_turn" @show="show_turn" @again="again_turn" :show_again="true" again_txt="重新开始" :tips_init="tips_init_turn" :no_z_init="no_z_init_turn"></aylottery>
		
		
		<aylottery :type="2" :list="list" themeColor="#33CCCC" bgColor="#1E90FF" bg_sd_Color="#4169E1" @result="resultFun" @toDetailPage="toDetailPage"></aylottery>
		
		<aylottery :type="3" :list="list_r" :height="600" :width="600" :chance_num_init="chance_num_init" @result="resultFun_chance" @toDetailPage="toDetailPage" :stay_index="stay_index_r"></aylottery>
		
		<!-- #ifdef H5 -->
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
				stay_index_r_init : 4 ,
				stay_index_r : 1,
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
					that.$refs.blowRef.initBlow()
				}, 50)
			})
			// #endif
		},
		methods: {
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
				let list = e.list;
				
				//定义下一次转的位置
				that.stay_index_r = Math.round(Math.random() * (list.length - 1)); //随机数
				
				if(e.isAward){
					this.$api.msg_modal('获得' + (item.name),'恭喜')
					let type = item.type ;
					if(type==1){
						that.chance_num_init += item.val ;
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

				that.list = data.lottery_list.data;
				that.list_r = data.lottery_r_list.data;
				
				that.result_blow = that.getShowTxt();
				uni.hideLoading();
				
				//第一次转盘停的位置
				that.stay_index_r = that.stay_index_r_init ;
				
				that.isLoaded = true;

			},

		}
	}
</script>

<style lang="scss">

</style>
