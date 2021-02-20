<template>
	<view>

		<view class="box">
			<view :class="'dv'+(index+1)" v-for="(item,index) in 6" :key="index">
				<label v-for="(item2,index2) in 9" :key="index2">
					{{index2+1}}
				</label>
			</view>
		</view>

	</view>

</template>

<script>
	export default {


		components: {

		},
		props: {

		},
		computed: {


		},

		watch: {

		},
		data() {
			return {

			};
		},
		created: function() {

		},
		methods: {


		},
	}
</script>

<style lang="scss">
	.box {
		width: 300upx;
		height: 300upx;
		margin: 150upx auto;
		position: relative;
		font-size: 50upx;
		transform-style: preserve-3d;
		/*动画效果*/
		animation: rotate 10s linear infinite;
	}

	.box>view {
		width: 300upx;
		height: 300upx;
		position: absolute;
	}

	label {
		float: left;
		width: 90upx;
		height: 90upx;
		margin: 5upx;
		border-radius: 20upx;
		line-height: 90upx;
		text-align: center;
	}

	.dv1 label {
		background-color: orange;
		transform: skewZ(60deg);
	}

	.dv1 {
		background-color: transparent;
		transform: rotateY(90deg) translateZ(150upx);
	}

	.dv2 {
		background-color: transparent;
		transform: rotateY(-90deg) translateZ(150upx);
	}

	.dv3 {
		background-color: transparent;
		transform: rotateX(90deg) translateZ(150upx);
	}

	.dv4 {
		background-color: transparent;
		transform: rotateX(-90deg) translateZ(150upx);
	}

	.dv5 {
		background-color: transparent;
		transform: translateZ(150upx);
	}

	.dv6 {
		background-color: transparent;
		transform: translateZ(-150upx);
	}

	.dv2 label {
		background-color: green;
	}

	.dv3 label {
		background-color: greenyellow;
	}

	.dv4 label {
		background-color: palevioletred;
	}

	.dv5 label {
		background-color: pink;
	}

	.dv6 label {
		background-color: yellow;
	}

	@keyframes rotate {
		0% {
			transform: rotateY(0deg) rotateX(0deg);
		}

		100% {
			transform: rotateY(135deg) rotateX(45deg);
		}
	}
</style>
