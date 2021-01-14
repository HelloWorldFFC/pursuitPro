<template>
	<view view class="content">
		<!-- <navTop></navTop> -->
		<view @tap="toDetail_fund">详情示例</view>
	</view>
</template>

<script>
	import navTop from '@/components/navTop.vue';
	export default {
			components: {
				navTop,
			},
	        data() {
	            return {
	               
	            }
	        },
			methods: {
				toDetail_fund(){
					let url = `/pages/fund/detail_f`;
					uni.navigateTo({
						url: url,
					})
				},
			
			}
	    }
</script>

<style lang="scss">
	page,
	.content {
	
		width: 100%;
		height: 100%;
		overflow: hidden;
	
		background-color: $page-color-base ;
	}
</style>
