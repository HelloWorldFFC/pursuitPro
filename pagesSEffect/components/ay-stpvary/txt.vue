<template>
	<view>
		<view class="txt">北国风光，千里冰封，万里雪飘。</view>
		<!-- <view class="txt">望长城内外，惟余莽莽；</view>
		<view class="txt">大河上下，顿失滔滔。</view>
		<view class="txt">山舞银蛇，原驰蜡象，欲与天公试比高。</view>
		<view class="txt">须晴日，看红妆素裹，分外妖娆。</view>
		<view class="txt">江山如此多娇，</view>
		<view class="txt">引无数英雄竞折腰。</view>
		<view class="txt">惜秦皇汉武，略输文采；</view>
		<view class="txt">唐宗宋祖，稍逊风骚。</view>
		<view class="txt">一代天骄，成吉思汗，只识弯弓射大雕。</view>
		<view class="txt">俱往矣，数风流人物，还看今朝。</view> -->
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
	}
</script>

<style lang="scss">
	.txt {
		display: block;
		text-decoration: none;
		text-align: center;
		line-height: 1.5;
		margin: 20px 0px;
		// -webkit-linear-gradient
		background-image: linear-gradient(left, #3498db, #f47920 10%, #d71345 20%, #f7acbc 30%, #ffd400 40%, #3498db 50%, #f47920 60%, #d71345 70%, #f7acbc 80%, #ffd400 90%, #3498db);
		color: transparent;
		-webkit-background-clip: text;
		background-size: 200% 100%;
		-webkit-animation: slide 2s infinite linear;
		animation: slide1 5s infinite linear;
		font-size: 40rpx;
	}
	
	@keyframes slide1 {
		0% {
			background-position: 0 0;
		}
	
		100% {
			background-position: -100% 0;
		}
	}
</style>
