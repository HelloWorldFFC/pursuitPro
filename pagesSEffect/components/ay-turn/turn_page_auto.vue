<template>
	<view>
		<view class="box" :style="{'margin-left': (width/3)*2+ 'rpx' }">
			<view class="box-ct" :style="style">
				<view :style="{border: '1px solid '+ themeColor }" class="page bk-ct">底部</view>
				<!-- :style="get_style_bk_c({item:item,index:index})" -->
				<!-- <view class="page bk-c" :style="{border: '1px solid '+ themeColor }" :class="'bk-c'+(index+1)" v-for="(item,index) in list" :key="index">
					<view>{{item.txt}}</view>
				</view> -->
				<view :style="{border: '1px solid '+ themeColor }" class="page bk-c bk-c1">第三页</view>
				<view :style="{border: '1px solid '+ themeColor }" class="page bk-c bk-c2">第二页</view>
				<view :style="{border: '1px solid '+ themeColor }" class="page bk-c bk-c3">第一页</view>
				<view class="page bk-cover" :style="style_cover">封面</view>
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

			height: {
				type: Number,
				default: 400
			},
			width: {
				type: Number,
				default: 300
			},

			themeColor: {
				type: String,
				default: '#33CCCC',
			},
		},
		computed: {
			style() {
				let that = this;
				var height = parseInt(that.height);
				var width = parseInt(that.width);
				var style = '';
				if (height > 0) {
					style = `height:${height}rpx;`;
				}
				if (width > 0) {
					style += `width:${width}rpx;`;
				}

				return style;
			},
			style_cover() {
				let that = this;
				var style = '';
				
				style += `background-color:${that.themeColor};`;
				style += `border : 1px solid ${that.themeColor};`;
				let leg = that.list.length ;
				let time = leg *2;
				//style += `animation: roll ${time}s ease 0s 2 alternate rpx;`;
				return style;
			},

		},

		watch: {

		},
		data() {
			return {

			};
		},
		created: function() {
			let that = this;
		},
		methods: {
			get_style_bk_c(e){
				//console.log(e)
				let that = this;
				
				let index = e.index ;
				let item = e.item ;
				
				var style = '';
				let leg = that.list.length ;
				let time = leg + index;
				let time2 = leg - index;
				style += `border : 1px solid ${that.themeColor};`;
				style += `animation: roll ${time}s ease ${time2}s 2 alternate;`;
				//console.log(style)
				return style;
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
	.box {

		transform-style: preserve-3d;
	}

	.box-ct {

		position: relative;
		margin: 0 auto;
		transform: rotateX(30deg);
		transform-style: preserve-3d;
	}

	.page {
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
		
		display: flex;
		justify-content: center;
		align-items: center;
		transform-origin: left;

	}

	.bk-cover {
		font-size: 30px;
		color: #ffffff;
		animation: roll 6s ease 0s 2 alternate;
	}

	.bk-ct {
		font-size: 30px;
		background-color: #fff;
		color: #33363C;

	}
	
	.bk-c {
		background-color: #fff;
		color: #33363C;
	
	}
	.bk-c1 {
		animation: roll 3s ease 3s 2 alternate;
	}

	.bk-c2 {
		animation: roll 4s ease 2s 2 alternate;
	}

	.bk-c3 {
		animation: roll 5s ease 1s 2 alternate;
	}


	@keyframes roll {
		from {
			transform: rotateY(0)
		}

		to {
			transform: rotateY(-180deg)
		}
	}
</style>
