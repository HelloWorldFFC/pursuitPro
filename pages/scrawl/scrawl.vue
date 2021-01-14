<template>
	<view>
		<htz-signature @sumbit="sumbit"  @fail="fail" cid="ceshi1" :points="points"></htz-signature>
	</view>
</template>

<script>
	import htzSignature from '@/components/htz-signature/htz-signature.vue'
	export default {
		data() {
			return {
				points: [],
			}
		},
		components: {
			htzSignature,
		},
		mounted() {
			this.$nextTick(function() {
				try {
				    this.points=JSON.parse(uni.getStorageSync('points'))
				} catch (e) {
				    // error
				}
				
			});

		},// #ifdef MP-WEIXIN
		//微信小程序的分享
		onShareAppMessage: function(options) {

		},
		// #endif
		methods: {	
			sumbit(result){
				let that = this;
				console.log('sumbit',result)
				try {
				    uni.setStorageSync('ceshiUrl', result.res.tempFilePath);
					
					uni.setStorageSync('points', JSON.stringify(result.point));
					
					that.$api.msg('保存成功！')
					
				} catch (e) {
				    // error
				}
			},
			fail(err){
				console.log('fail',err)
			},
		}
	}
</script>

<style>

</style>
