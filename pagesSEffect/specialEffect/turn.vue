<template>
	<view>
		<threeDim :list="list"></threeDim>
		<turnPage :height="640" :width="500" :list="list_page"></turnPage>
		<turnPageAuto :height="300" :width="200"  :list="list_page"></turnPageAuto>
	</view>


</template>

<script>
	import threeDim from '../components/ay-turn/threeDim.vue';
	import turnPage from '../components/ay-turn/turn_page.vue';
	import turnPageAuto from '../components/ay-turn/turn_page_auto.vue';
	export default {
		components: {
			threeDim,
			turnPage,
			turnPageAuto,
		},

		data() {
			return {
				list: [{
						id: 0,
						img: 'https://cdn.pixabay.com/photo/2016/11/29/13/24/balloons-1869816__340.jpg',

					},
					{
						id: 1,
						img: 'https://cdn.pixabay.com/photo/2016/11/23/17/55/beach-1854072__340.jpg',

					},
					{
						id: 2,
						img: 'https://cdn.pixabay.com/photo/2016/11/19/12/25/art-1839006__340.jpg',

					},
					{
						id: 0,
						img: 'https://cdn.pixabay.com/photo/2016/11/29/13/24/balloons-1869816__340.jpg',

					},
					{
						id: 1,
						img: 'https://cdn.pixabay.com/photo/2016/11/23/17/55/beach-1854072__340.jpg',

					},
					{
						id: 2,
						img: 'https://cdn.pixabay.com/photo/2016/11/19/12/25/art-1839006__340.jpg',

					},
					{
						id: 0,
						img: 'https://cdn.pixabay.com/photo/2016/11/29/13/24/balloons-1869816__340.jpg',

					},
					{
						id: 1,
						img: 'https://cdn.pixabay.com/photo/2016/11/23/17/55/beach-1854072__340.jpg',

					},
					{
						id: 2,
						img: 'https://cdn.pixabay.com/photo/2016/11/19/12/25/art-1839006__340.jpg',

					},
				],
				list_page:[
					{
						size:'',
						img : 'https://cdn.pixabay.com/photo/2016/11/29/13/24/balloons-1869816__340.jpg',
						txt:'修身治国平天下',
					},
					{
						size:1,
						txt:'修身治国平天下11111111',
					},
					{
						size:2,
						txt:'修身治国平天下222222222',
					},
					// {
					// 	size:3,
					// 	txt:'修身治国平天下33333333',
					// },
				],
			}
		},
		onLoad() {

		},
		onShow() {

		},
		methods: {

		}
	}
</script>

<style lang="scss">

</style>
