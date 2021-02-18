<template>
	<view>
		<threeDim v-if="type==1" :height="height" :width="width" :list="list" :marginTop="marginTop"></threeDim>
		<turnPage v-if="type==2" :height="height" :width="width" :list="list"></turnPage>
		<turnPageAuto v-if="type==3" :height="height" :width="width" :list="list" :cover="cover"></turnPageAuto>
		<twoDim v-if="type==4" :height="height" :width="width" :pros_img="pros_img" :cons_img="cons_img"></twoDim>
	</view>
</template>

<script>
	import marquee from './marquee.vue';
	import turnplate from './turnplate.vue';
	import turnLottery from './turnLottery.vue';
	import blow from './blow.vue';
	
	import threeDim from './threeDim.vue';
	import turnPage from './turn_page.vue';
	import turnPageAuto from './turn_page_auto.vue';
	import twoDim from './twoDim.vue';
	export default {
		components: {
			threeDim,
			turnPage,
			turnPageAuto, //内容反着赋值
			twoDim,
		},
		props: {
			type: {
				type: Number,
				default: 1, //1:3d  2:翻页 3：自动翻页 4： 2d平面
			},
			list: {
				type: Array,
				default () {
					return []
				}
			},
			
			height: {
				type: Number,
				default: 150
			},
			width: {
				type: Number,
				default: 150
			},
			marginTop: {
				type: Number,
				default: 140
			},
			themeColor: {
				type: String,
				default: '#FFFFFF',
			},
		},
		computed: {


		},

		watch: {

		},
		data() {
			return {

			};
		},

		methods: {

		},
	}
</script>

<style lang="scss">

</style>
