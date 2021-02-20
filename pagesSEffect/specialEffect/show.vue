<template>
	<view>
		<!-- js创建原生的有困难 -->
		<!-- <magicCube></magicCube> -->
		<thDTwo v-if="type==1"></thDTwo>
		<shutLoose v-if="type==2"></shutLoose>
		<twtySets v-if="type==3"></twtySets>
		<shutLooseTwo v-if="type==4"></shutLooseTwo>
		<magicCubeAuto v-if="type==5"></magicCubeAuto>
		
		<!-- #ifdef H5 -->
		<scTxt v-if="type==21"></scTxt>
		<!-- #endif -->
		
		<scBg v-if="type==22" :type="index+1" v-for="(item,index) in 4" :key="index">
			<view></view>
		</scBg>
		<!-- #ifdef H5 -->
		<!-- 雷达和文字效果在组件里不行，直接在页面就可以 -->
		<radar v-if="type==23"></radar>
		<!-- #endif -->
	</view>
</template>

<script>
	import shutLoose from '../components/ay-cubic/shut_loose.vue';
	import thDTwo from '../components/ay-cubic/thD_two.vue';
	import twtySets from '../components/ay-cubic/twty_sets.vue';
	import magicCube from '../components/ay-cubic/magic_cube.vue';
	import shutLooseTwo from '../components/ay-cubic/shut_loose_two.vue';
	import magicCubeAuto from '../components/ay-cubic/magic_cube_auto.vue';
	
	import scTxt from '../components/ay-stpvary/txt.vue';
	import scBg from '../components/ay-stpvary/bg.vue';
	import radar from '../components/ay-stpvary/radar.vue';
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
		},
		data() {
			return {
				type: 1,
			}
		},
		onLoad(options) {
			let that = this;
			let data = options.data ? JSON.parse(decodeURIComponent(options.data)) : false;
			////console.log(data)
			if (data) {
				that.setDate_init(data)
			}
			
			
		},
		// #ifdef MP-WEIXIN
		//微信小程序的分享
		onShareAppMessage: function(options) {
		
		},
		// #endif
		methods: {
			setDate_init(data) {
				let that = this;
			
				uni.setNavigationBarTitle({
					title: data.name
				})
				
				that.type = data.type ;
			},
		}
	}
</script>

<style lang="scss">
	
</style>
