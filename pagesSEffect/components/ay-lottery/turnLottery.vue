<template>
	<view>
		<view class="button" @click="again">重新翻牌</view>
		<view class="curin-index">
			<view @click="tamin(index)" v-for="(item,index) in 9" :key="index" class="currin" :class="[really == index+1?'animt':'', really != index+1 && surplus?'animt':'', really == ''?'cinton'+(index+1):'',really == index+1 && implement > 1?'selected':'un-selected']">
				{{really == index+1?flop:''}}{{really != index+1 && really != ''?biutin:''}}{{really == ''?'点击翻牌':''}}
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				whether: false,
				flop: '点击翻牌',
				really: '',
				implement: 0,
				surplus: false,
				biutin: '点击翻牌',
			}
		},
		methods: {
			again(e) {
				if (this.implement == 3 || this.implement == 0) {
					this.whether = false
					this.flop = '点击翻牌'
					this.really = ''
					this.implement = 0
					this.surplus = false
					this.biutin = '点击翻牌'
				} else {
					uni.showToast({
						title: '正在执行抽奖中...',
						icon: 'none',
						duration: 2000
					})
					return false
				}
			},
			tamin(index) {
				if (this.really == '') {
					this.whether = true
					this.really = index + 1
					this.implement = 1

					setTimeout(res => {
						this.flop = ''
					}, 500)

					setTimeout(res => {
						this.flop = 'iPhone12'
						this.surplus = true
						this.implement = 2
					}, 1200)

					setTimeout(res => {
						this.biutin = ''
					}, 1700)

					setTimeout(res => {
						this.biutin = '谢谢惠顾'
						this.implement = 3
					}, 2500)
				}
			}
		}
	}
</script>

<style lang="scss">
	.selected {
		// background-image: linear-gradient(45deg, #f43f3b, #ec008c);
		background-color: #f43f3b;
	}

	.un-selected {
		// background-image: linear-gradient(45deg, #39b54a, #8dc63f);
		background-color: #39b54a;
	}

	.button {
		width: 40%;
		height: 80rpx;
		line-height: 80rpx;
		background-color: #fadbd9;
		color: #e54d42;
		text-align: center;
		border-radius: 10rpx;
		margin: 30rpx 30%;
		float: left;
		position: relative;
	}

	.curin-index {
		width: 100%;
		float: left;
	}

	.currin {
		margin-left: 4%;
		margin-top: 50rpx;
		width: 28%;
		float: left;
		color: #fff;
		text-align: center;
		height: 200rpx;
		line-height: 200rpx;
		border-radius: 10rpx;
		position: relative;
	}

	.currin::before {
		content: "";
		display: block;
		background: inherit;
		filter: blur(10rpx);
		position: absolute;
		width: 100%;
		height: 100%;
		top: 10rpx;
		left: 10rpx;
		z-index: -1;
		opacity: 0.4;
		transform-origin: 0 0;
		border-radius: inherit;
		transform: scale(1, 1);
	}

	.cinton1 {
		animation: cinton1 alternate linear 2 1s;
	}

	@keyframes cinton1 {
		from {
			top: 0;
			left: 0;
		}

		to {
			top: 230rpx;
			left: 230rpx;
		}
	}

	.cinton2 {
		animation: cinton2 alternate linear 2 1s;
	}

	@keyframes cinton2 {
		from {
			top: 0;
			left: 0;
		}

		to {
			top: 230rpx;
			left: 0rpx;
		}
	}

	.cinton3 {
		animation: cinton3 alternate linear 2 1s;
	}

	@keyframes cinton3 {
		from {
			top: 0;
			left: 0;
		}

		to {
			top: 230rpx;
			left: -230rpx;
		}
	}

	.cinton4 {
		animation: cinton4 alternate linear 2 1s;
	}

	@keyframes cinton4 {
		from {
			top: 0;
			left: 0;
		}

		to {
			top: 0rpx;
			left: 230rpx;
		}
	}

	.cinton6 {
		animation: cinton6 alternate linear 2 1s;
	}

	@keyframes cinton6 {
		from {
			top: 0;
			left: 0;
		}

		to {
			top: 0rpx;
			left: -230rpx;
		}
	}

	.cinton7 {
		animation: cinton7 alternate linear 2 1s;
	}

	@keyframes cinton7 {
		from {
			top: 0;
			left: 0;
		}

		to {
			top: -230rpx;
			left: 230rpx;
		}
	}

	.cinton8 {
		animation: cinton8 alternate linear 2 1s;
	}

	@keyframes cinton8 {
		from {
			top: 0;
			left: 0;
		}

		to {
			top: -230rpx;
			left: 0rpx;
		}
	}

	.cinton9 {
		animation: cinton9 alternate linear 2 1s;
	}

	@keyframes cinton9 {
		from {
			top: 0;
			left: 0;
		}

		to {
			top: -230rpx;
			left: -230rpx;
		}
	}

	.animt {
		animation: fanzhuan 1.2s;
	}

	@keyframes fanzhuan {
		0% {
			transform: perspective(150px) rotateY(0deg);
		}

		50% {
			transform: perspective(150px) rotateY(0deg);
		}

		100% {
			transform: perspective(150px) rotateY(179.9deg);
		}
	}
</style>
