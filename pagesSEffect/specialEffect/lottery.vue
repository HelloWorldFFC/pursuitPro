<template>
	<view class="content">

		<aylottery :type="1" themeColor="#33CCCC" btn_Color="#ffffff" seled_Color="#DB7093" seled_t_Color="#98FB98"
		 un_seled_Color="#00BFFF" un_seled_t_Color="#33CCCC" :result_txt="result_turn" @show="show_turn" @again="again_turn"
		 :show_again="true" again_txt="重新开始" :tips_init="tips_init_turn" :no_z_init="no_z_init_turn"></aylottery>

		<!-- #ifdef MP-WEIXIN -->
		<view class="cf-ad">
			<ad unit-id="adunit-857f5c9dbc28f928" ad-type="grid" grid-opacity="0.8" grid-count="5" ad-theme="white"></ad>
		</view>
		<!-- #endif -->
		<aylottery :type="2" :list="lottery_list" themeColor="#33CCCC" bgColor="#1E90FF" bg_sd_Color="#4169E1" @result="resultFun"
		 @toDetailPage="toDetailPage"
		 :stay_index="stay_index_m"></aylottery>
		
		<aylottery :type="2"  :list="lottery_list" themeColor="#33CCCC" bgColor="#1E90FF" bg_sd_Color="#F4A460" @result="resultFun"
		 @toDetailPage="toDetailPage" theme_img_bg="https://cdn.pixabay.com/photo/2021/02/17/12/04/winter-6024017__340.jpg" :is_img_bg="true" box_shadow_Color="#F0F8FF" bg_img="https://cdn.pixabay.com/photo/2018/05/12/03/18/love-3392348__340.jpg"
		 :stay_index="stay_index_m"></aylottery>
		 
		
		<aylottery :type="3" :list="list_r" :height="600" :width="600" :chance_num_init="chance_num_init" @result="resultFun_chance"
		 @toDetailPage="toDetailPage" :stay_index="stay_index_r"></aylottery>


		<aylottery :type="4" canvasId="canvasId1" :height="200" :width="600" style="margin: 20upx 40upx;" refs="card" @complete="seatShow" :disabled="false" title="刮文本" watermark="刮一刮" @init="init_blow" :is_show="is_show_blow" :result_txt="result_blow" themeColor="#33CCCC" :txtFontSize="txtFontSize_blow" :txtColor="txtColor_blow">
		</aylottery>
		
		<aylottery :type="5" canvasId="canvasId2" :height="200" :width="600" refs="card" style="margin: 20upx 40upx;"  @complete="seatShow"
		 :disabled="false" title="刮图片" watermark="刮一刮" @init="init_blow" :is_show="is_show_blow" :result_img="result_img_blow">
		 
		</aylottery>
		
		<aylottery :type="6"  canvasId="canvasId3" :height="200" :width="600" refs="card" style="margin: 20upx 40upx;"  @complete="seatShow"
		 :disabled="false" title="刮自定义" watermark="刮一刮" @init="init_blow">
			<view style="position: absolute;" v-if="is_show_blow" >
				
				<view style="margin: 40upx;">
					你可以自定义更漂亮的内容
				</view>
			
			</view>
			
		
		</aylottery>
		
		<!-- #ifdef MP-WEIXIN -->
		<view class="cf-ad">
			<ad unit-id="adunit-8f6c4b5b2cfbf8de" ad-type="video" ad-theme="white"></ad>
		</view>
		<!-- #endif -->
		
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
					this.$api.msg_modal('获得' + (item.name), '恭喜')
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
				that.list_r = data.lottery_r_list.data;

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

<style lang="scss">
	.blow {

		background-size: contain;
		margin: 0rpx auto;
		box-sizing: border-box;
		position: relative;
		overflow: hidden;

		.box {
			width: 100%;
			height: 100%;
			// background: #aaaa7f;
			border-radius: 10rpx;
			position: relative;
			overflow: hidden;

			.result {
				height: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				// font-size: 50rpx;
				// color: #FFFFFF;
			}


		}


	}
</style>
