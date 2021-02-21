<template>
	<view>
		<!-- js创建原生的有困难 -->
		<!-- <magicCube></magicCube> -->
		<thDTwo v-if="type==1" :list="list_two" :margin_t_b="margin_t_b_td" :height="180" :width="210" :height_t="200"
		 :width_t="220"></thDTwo>

		<shutLoose v-if="type==2" :list="list_two" :bg_img="bg_img_sl" :height="200" :width="200"></shutLoose>
		<twtySets v-if="type==3"></twtySets>

		<shutLooseTwo v-if="type==4" :list="list_th" :margin_t_b="margin_t_b_ma" :height="200" :width="200" :height_in="100"
		 :width_in="100"></shutLooseTwo>

		<magicCubeAuto v-if="type==5" :w_h="300" :margin_t_b="margin_t_b_ma" :w_h_item="90" :margin_item="5"></magicCubeAuto>

		<!-- #ifdef H5 -->
		<!-- #endif -->

		<scTxt v-if="type==21" :txt="txt_sc" txtColor1="#00BFFF" txtColor2="#FF00FF" txtColor3="#d71345" txtColor4="#f7acbc"
		 txtColor5="#ADFF2F" txtColor6="#3498db" txtColor7="#f47920" txtColor8="#d71345" txtColor9="#f7acbc" txtColor10="#DDA0DD"
		 txtColor11="#3498db"></scTxt>


		<scBg v-if="type==22" :type="index+1" v-for="(item,index) in 4" :key="index">
			<view>
				<radar colorName="gold" :height="200" :width="200"></radar>
			</view>
		</scBg>

		<!-- 雷达和文字效果在组件里不行，直接在页面就可以 -->
		<radar v-if="type==23" colorName="aqua" :height="400" :width="400"></radar>
		<radar v-if="type==23" colorName="hotPink" :height="400" :width="400"></radar>
		<radar v-if="type==23" colorName="lime" :height="400" :width="400"></radar>
		<radar v-if="type==23" colorName="gold" :height="400" :width="400"></radar>
		<radar v-if="type==23" colorName="orangeRed" :height="400" :width="400"></radar>


		<fireworkSati v-if="is_fkSati&&type==31" :show_fw_re="is_fkSati" />
	</view>
</template>

<script>
	import menu from '../js/menu.js';

	import shutLoose from '../components/ay-cubic/shut_loose.vue';
	import thDTwo from '../components/ay-cubic/thD_two.vue';
	import twtySets from '../components/ay-cubic/twty_sets.vue';
	import magicCube from '../components/ay-cubic/magic_cube.vue';
	import shutLooseTwo from '../components/ay-cubic/shut_loose_two.vue';
	import magicCubeAuto from '../components/ay-cubic/magic_cube_auto.vue';

	import scTxt from '../components/ay-stpvary/txt.vue';
	import scBg from '../components/ay-stpvary/bg.vue';
	import radar from '../components/ay-stpvary/radar.vue';

	import fireworkSati from '../components/ay-firework/firework_sati.vue'

	export default {
		components: {
			shutLoose,
			thDTwo,
			twtySets,
			magicCube,
			shutLooseTwo,
			magicCubeAuto,
			scTxt,
			scBg,
			radar,

			fireworkSati,
		},
		data() {
			return {
				colorName_rd: 'orangeRed',
				list_th: [],
				list_two: [],
				list: [],
				isLoaded: false,
				type: 1, ////1旋转2旋转立方体3二十面体4双旋转立方体5旋转魔方
				margin_t_b_ma: 200,
				margin_t_b_td: 4,
				bg_img_sl: 'https://cdn.pixabay.com/photo/2019/11/26/03/35/maple-4653495__340.jpg',
				txt_sc: '',
				is_fkSati: false,

				//定时播放礼花更新
				timerRenewTime: 10000,
				timerName: '',
				isRemove_timer: false,
				isScreen_rest: false, //判断息屏，防止息屏时间不跟实际时间更新
			}
		},
		onLoad(options) {
			let that = this;
			that.isRemove_timer = false; //重新进入，启用timer

			let data = options.data ? JSON.parse(decodeURIComponent(options.data)) : false;
			////console.log(data)
			if (data) {
				that.setDate_init(data)
			}

			that.pageShowHander();
			that.loadData()
		},
		onReady() {
			let that = this;
			that.play_fw();


		},
		onShow: function() {
			let that = this;
			if (that.isScreen_rest) {
				that.isRemove_timer = false; //开启屏幕重新进入，启用timer
				that.play_fw()
			}

		},
		onHide: function() {
			let that = this;
			that.isScreen_rest = true; //说明息屏了
			that.isRemove_timer = true;
			//移除定时器
			let timerName = that.timerName;
			if (timerName !== '') {
				clearTimeout(timerName);

			}
		},
		onUnload() {
			let that = this;
			that.isRemove_timer = true;
			//移除定时器
			let timerName = that.timerName;
			if (timerName !== '') {
				clearTimeout(timerName);

			}
		},
		methods: {
			play_fw() {
				let that = this;

				
				this.$nextTick(() => { //后面记得销毁哈，不使用时设置为false
					setTimeout(() => {
						this.is_fkSati = true;
					}, 50)
				})
				//开启定时器
				that.timerNameFun();


			},
			//定时器实现更新
			timerNameFun() {
				let that = this;
				//移除定时器
				let timerName = that.timerName;
				if (timerName !== '') {
					clearTimeout(timerName);
				}

				if (!that.isRemove_timer) {
					this.is_fkSati = false;
					timerName = setTimeout(function() {
						if (!that.isRemove_timer) {
							that.play_fw();
						}
					}, that.timerRenewTime)
					// 保存定时器name
					that.timerName = timerName;
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

				that.list = data.list.data;

				that.list_two = data.list_two.data;
				that.list_th = data.list_th.data;

				that.txt_sc = data.turn_page_txt.ct;

				uni.hideLoading();

				that.isLoaded = true;

			},
			pageShowHander() {
				let that = this;

			},
			setDate_init(data) {
				let that = this;

				uni.setNavigationBarTitle({
					title: data.name
				})

				that.type = data.type;
			},
		}
	}
</script>

<style lang="scss">

</style>
