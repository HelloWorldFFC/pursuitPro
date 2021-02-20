<template>
	<view>
		<view class="eyes">
			<view class="box">
				<view :class="'div'+(index+1)" v-for="(item,index) in 6" :key="index">
					<image  lazy-load="true" src="https://cdn.pixabay.com/photo/2021/01/04/07/38/lily-5886728__340.jpg">
				</view>
			</view>
		</view>
	</view>
	

</template>

<script>
</script>

<style lang="scss">
	.eyes {
		perspective: 1000upx;
	}

	.box {
		/*设置3D效果*/
		transform-style: preserve-3d;
		/*盒子的大小*/
		width: 200upx;
		height: 200upx;
		background: #87CEFA;
		/*设置盒子的位置，便于观察*/
		margin: 200upx auto;
		/*复合方式设置动画 三者分别为：动画名 执行一次时间 执行方式*/
		animation: zhuan 3s ease;
		/*令动画无限执行下去*/
		animation-iteration-count: infinite;
		animation-timing-function: linear;
	}

	.box view {
		width: 200upx;
		height: 200upx;
		opacity: 1;
		/*设置过渡*/
		transition: all 1s ease 0s;
		position: absolute;
		top:0%;
		left:0%;
	}
	
	.box image{
		width: 200upx;
		height: 200upx;
	}
	/*调整位置，制作成一个六边形*/
	.box .div1 {
		background: green;
		transform: translateZ(100upx);
	}

	.box .div2 {
		background: green;
		transform: translateZ(-100upx);
	}

	.box .div3 {
		background: green;
		transform: rotateX(90deg) translateZ(100upx);
	}

	.box .div4 {
		background: green;
		transform: rotateX(270deg) translateZ(100upx);
	}

	.box .div5 {
		background: green;
		transform: rotateY(-90deg) translateZ(100upx);
	}

	.box .div6 {
		background: green;
		transform: rotateY(90deg) translateZ(100upx);
	}

	/*添加3D旋转效果 让其绕X、Y轴同时旋转90度*/
	@keyframes zhuan {
		from {
			transform: rotateX(0deg) rotateZ(0deg) rotateY(0deg);
		}

		to {
			transform: rotateX(360deg) rotateZ(360deg) rotateY(360deg);
		}
	}

	/*给正方体添加一个hover效果*/
	.box:hover .div1 {
		transform: translateZ(200upx);
	}

	.box:hover .div2 {
		transform: translateZ(-200upx);
	}

	.box:hover .div3 {
		transform: rotateX(90deg) translateZ(200upx);
	}

	.box:hover .div4 {
		transform: rotateX(270deg) translateZ(200upx);
	}

	.box:hover .div5 {
		transform: rotateY(-90deg) translateZ(200upx);
	}

	.box:hover .div6 {
		transform: rotateY(90deg) translateZ(200upx)
	}
</style>
