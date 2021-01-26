<template>
	<view >
		<ayTxtOnImg :txt_tips="txt_tips" :txt="txt" @toDetailPage="toDetailPage"></ayTxtOnImg>
		
	</view>
</template>

<script>
	import ayTxtOnImg from '../components/ay-txtOnImg/ay-txtOnImg.vue'
	export default {
		components: {
			ayTxtOnImg,
			
		},
		data() {
			return {
				txt_tips : '距离',
				txt : 'ssss',
			};
		},
	
		methods: {
			
			//详情页
			toDetailPage() {
				let that = this ;
				
			},
			
		}
	}
	
</script>

<style lang="scss">
	
</style>
