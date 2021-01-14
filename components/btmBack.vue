<template>

	<view @tap="BackPage" class="backBox">
		<text class="iconfont icon-back "></text>
	</view>

</template>

<script>
	export default {
		data() {
			return {

			};
		},
		computed: {

		},
		props: {
			
		},
		methods: {
			BackPage() {
				let that = this ;
				let routes = getCurrentPages(); // 获取当前打开过的页面路由数组
				//alert(routes.length);
				//let curRoute = routes[routes.length - 1].route //获取当前页面路由
				//let curParam = routes[routes.length - 1].options; //获取路由参数
				if(routes.length == 1){
					uni.switchTab({
						url: `/pages/index/index`,
					})
				}else{
					uni.navigateBack({
						delta: 1
					});
				}
				
			}
		}
	}
</script>

<style lang="scss">
	.backBox {
		position: fixed;
		bottom: 140upx;
		right: 30upx;
		padding-top: 4upx;
		padding-left: 10upx;
		z-index: 1999999;
		.icon-back {
			font-size: 80upx;
			color: rgba(0, 0, 0, .3);
		}
	}
</style>
