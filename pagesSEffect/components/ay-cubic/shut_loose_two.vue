<template>
	<view>
		<view class="rt">
			<view class="out_front">
				<image src="https://cdn.pixabay.com/photo/2021/01/04/07/38/lily-5886728__340.jpg" class="out_pic">
			</view>
			<view class="out_back">
				<image src="https://cdn.pixabay.com/photo/2021/01/04/07/38/lily-5886728__340.jpg" class="out_pic">
			</view>
			<view class="out_left">
				<image lazy-load="true" src="https://cdn.pixabay.com/photo/2021/01/04/07/38/lily-5886728__340.jpg" class="out_pic">
			</view>
			<view class="out_right">
				<image lazy-load="true" src="https://cdn.pixabay.com/photo/2013/07/18/20/26/sea-164989__340.jpg" class="out_pic">
			</view>
			<view class="out_top">
				<image lazy-load="true" src="https://cdn.pixabay.com/photo/2021/01/04/07/38/lily-5886728__340.jpg" class="out_pic">
			</view>
			<view class="out_bottom">
				<image lazy-load="true" src="https://cdn.pixabay.com/photo/2021/01/04/07/38/lily-5886728__340.jpg" class="out_pic">
			</view>
			<view class="in_front in-box">
				<image lazy-load="true" src="https://cdn.pixabay.com/photo/2021/01/04/07/38/lily-5886728__340.jpg" class="in_pic">
			</view>
			<view class="in_back in-box">
				<image lazy-load="true" src="https://cdn.pixabay.com/photo/2013/07/18/20/26/sea-164989__340.jpg" class="in_pic">
			</view>
			<view class="in_left in-box">
				<image lazy-load="true" src="https://cdn.pixabay.com/photo/2021/01/04/07/38/lily-5886728__340.jpg" class="in_pic">
			</view>
			<view class="in_right in-box">
				<image lazy-load="true" src="https://cdn.pixabay.com/photo/2021/01/04/07/38/lily-5886728__340.jpg" class="in_pic">
			</view>
			<view class="in_top in-box">
				<image lazy-load="true" src="https://cdn.pixabay.com/photo/2013/07/18/20/26/sea-164989__340.jpg" class="in_pic">
			</view>
			<view class="in_bottom in-box">
				<image lazy-load="true" src="https://cdn.pixabay.com/photo/2021/01/04/07/38/lily-5886728__340.jpg" class="in_pic">
			</view>
		</view>
	</view>


</template>

<script>
</script>

<style lang="scss">
	.rt {
		width: 200upx;
		height: 200upx;
		margin: 200upx auto;
		transform-style: preserve-3d;
		animation: rotate 20s infinite;
		animation-timing-function: linear;
	}

	.rt view {
		position: absolute;
		transition: all .4s;
	}

	view .out_pic {
		width: 200upx;
		height: 200upx;
		opacity: 0.9;
	}

	view .in_pic {
		width: 100upx;
		height: 100upx;
	}

	.rt .in-box {
		display: block;
		position: absolute;
		width: 100upx;
		height: 100upx;
		top: 50%;
		left: 50%;
	}

	@keyframes rotate {
		from {
			transform: rotateX(0deg) rotateY(0deg);
		}

		to {
			transform: rotateX(360deg) rotateY(360deg);
		}
	}


	.out_front {
		transform: translateZ(100upx);
	}

	.out_back {
		transform: translateZ(-100upx);
	}

	.out_left {
		transform: rotateY(90deg) translateZ(100upx);
	}

	.out_right {
		transform: rotateY(-90deg) translateZ(100upx);
	}

	.out_top {
		transform: rotateX(90deg) translateZ(100upx);
	}

	.out_bottom {
		transform: rotateX(-90deg) translateZ(100upx);
	}

	.in_front {
		transform: translateZ(50upx);
	}

	.in_back {
		transform: translateZ(-50upx);
	}

	.in_left {
		transform: rotateY(90deg) translateZ(50upx);
	}

	.in_right {
		transform: rotateY(-90deg) translateZ(50upx);
	}

	.in_top {
		transform: rotateX(90deg) translateZ(50upx);
	}

	.in_bottom {
		transform: rotateX(-90deg) translateZ(50upx);
	}

	/*外面的图片散开*/
	.rt:hover .out_front {
		transform: translateZ(200upx);
	}

	.rt:hover .out_back {
		transform: translateZ(-200upx);
	}

	.rt:hover .out_left {
		transform: rotateY(90deg) translateZ(200upx);
	}

	.rt:hover .out_right {
		transform: rotateY(-90deg) translateZ(200upx);
	}

	.rt:hover .out_top {
		transform: rotateX(90deg) translateZ(200upx);
	}

	.rt:hover .out_bottom {
		transform: rotateX(-90deg) translateZ(200upx);
	}


	/*里面的图片散开*/
	.rt:hover .in_front {
		transform: translateZ(100upx);
	}

	.rt:hover .in_back {
		transform: translateZ(-100upx);
	}

	.rt:hover .in_left {
		transform: rotateY(90deg) translateZ(100upx);
	}

	.rt:hover .in_right {
		transform: rotateY(-90deg) translateZ(100upx);
	}

	.rt:hover .in_top {
		transform: rotateX(90deg) translateZ(100upx);
	}

	.rt:hover .in_bottom {
		transform: rotateX(-90deg) translateZ(100upx);
	}
</style>
