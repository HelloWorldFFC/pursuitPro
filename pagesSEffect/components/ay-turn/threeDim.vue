<template>
	<view>
		<view class="box-content">
			<view class="box">
				<image mode="aspectFit" lazy-load="true" v-for="(item, index) in list" :key="index" @error="onImageError(item)" :src="item.img" />
			</view>
		</view>
	</view>
</template>

<script>
	export default {
			props: {
	
				list: {
					type: Array,
					default () {
						return []
					}
				},
				padding: {
					type: Number,
					default: 0
				},
				height: {
					type: Number,
					default: 0
				},
				borderRadius: {
					type: Number,
					default: 0
				},
				themeColor: {
					type: String,
					default: '#FFFFFF',
				},
			},
			computed: {
				style() {
					let that = this;
					var height = parseInt(that.height);
					var padding = parseInt(that.padding);
					var style = '';
					if (height > 0) {
						style = `height:${height}rpx;`;
					}
					if (padding > 0) {
						style += `padding:0rpx ${padding}rpx;`;
					}
	
					return style;
				},
				style_img() {
					let that = this;
					var borderRadius = that.borderRadius;
					var style = '';
	
					if (borderRadius > 0) {
						style += `border-radius:${borderRadius}rpx;`;
					}
					return style;
				},
			},
	
			watch: {
	
			},
			data() {
				return {
	
				};
			},
	
			methods: {
				//详情页
				toDetailPage(item) {
					let that = this;
					let list = that.list;
					let index = item.index;
					let data = {
						curIndex: index,
						item: list[index],
						list: list
					};
					this.$emit('toDetailPage', data);
				},
	
				onImageError(item, index) {
					//虽触发，但不会显示默认的图片				
					this.error = null; //这个暂没有发现作用
	
					let obj = {
						index: index,
						list: this.list
					};
					this.$emit('Error', obj);
				},
			}
		}
	
</script>

<style lang="scss">
	
	.box-content {
		width: 200rpx;
		height: 150rpx;
		position: relative;
		margin: 200rpx auto 0;
	}

	.box {
		width: 200rpx;
		height: 150rpx;
		transform-style: preserve-3d;
		transform: rotateX(-30deg);
		animation: photo 15s linear infinite;
	}

	.box:hover {
		animation: photo 15s linear infinite paused;
	}

	.box image {
		width: 200rpx;
		height: 150rpx;
		position: absolute;
		left: 0;
		top: 0;
		transform-style: preserve-3d;
		transition: all 1s;
	}

	.box image:nth-child(1) {
		transform: translateZ(280rpx);
	}

	.box image:nth-child(2) {
		transform: rotateY(40deg) translateZ(280rpx);
	}

	.box image:nth-child(3) {
		transform: rotateY(80deg) translateZ(280rpx);
	}

	.box image:nth-child(4) {
		transform: rotateY(120deg) translateZ(280rpx);
	}

	.box image:nth-child(5) {
		transform: rotateY(160deg) translateZ(280rpx);
	}

	.box image:nth-child(6) {
		transform: rotateY(200deg) translateZ(280rpx);
	}

	.box image:nth-child(7) {
		transform: rotateY(240deg) translateZ(280rpx);
	}

	.box image:nth-child(8) {
		transform: rotateY(280deg) translateZ(280rpx);
	}

	.box image:nth-child(9) {
		transform: rotateY(320deg) translateZ(280rpx);
	}

	.box image:nth-child(1):hover {
		transform: translateZ(280rpx) scale(1.2);
	}

	.box image:nth-child(2):hover {
		transform: rotateY(40deg) translateZ(280rpx) scale(1.2);
	}

	.box image:nth-child(3):hover {
		transform: rotateY(80deg) translateZ(280rpx) scale(1.2);
	}

	.box image:nth-child(4):hover {
		transform: rotateY(120deg) translateZ(280rpx) scale(1.2);
	}

	.box image:nth-child(5):hover {
		transform: rotateY(160deg) translateZ(280rpx) scale(1.2);
	}

	.box image:nth-child(6):hover {
		transform: rotateY(200deg) translateZ(280rpx) scale(1.2);
	}

	.box image:nth-child(7):hover {
		transform: rotateY(240deg) translateZ(280rpx) scale(1.2);
	}

	.box image:nth-child(8):hover {
		transform: rotateY(280deg) translateZ(280rpx) scale(1.2);
	}

	.box image:nth-child(9):hover {
		transform: rotateY(320deg) translateZ(280rpx) scale(1.2);
	}

	@keyframes photo {
		0% {
			transform: rotateX(-30deg) rotateY(0deg);
		}

		100% {
			transform: rotateX(-30deg) rotateY(360deg);
		}
	}
</style>
