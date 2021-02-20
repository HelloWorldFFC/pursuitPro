<template>
	<view>
		<!-- js创建原生的有困难 -->
		<!-- <magicCube></magicCube> -->
		<thDTwo v-if="type==1"></thDTwo>
		<thDShtLs v-if="type==2"></thDShtLs>
		<twtySets v-if="type==3"></twtySets>
	</view>
</template>

<script>
	import thDShtLs from '../components/ay-turn/thD_sht_ls.vue';
	import thDTwo from '../components/ay-turn/thD_two.vue';
	import twtySets from '../components/ay-turn/twty_sets.vue';
	import magicCube from '../components/ay-turn/magic_cube.vue';
	export default {
		components: {
			thDShtLs,
			thDTwo,
			twtySets,
			magicCube,
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
