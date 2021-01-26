<template>
	<view >
		<view class="box" :style="style" @tap="toDetailPage">
			<view>
				<image :style="style_img" style="width: 100%;" :src="img_src"></image>
			</view>
			<view class="txt-box">
				<view class="content-box">
					<view class="rest-box">
						{{txt_tips}}
					</view>
					<view class="time-box">{{txt}}</view>
				</view>
				
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		props: {
			
			img_src: {
				type: String,
				default: 'https://cdn.pixabay.com/photo/2015/10/12/15/01/coastline-984088__340.jpg'
			},
			txt_tips: {
				type: String,
				default: ''
			},
			txt: {
				type: String,
				default: ''
			},
			padding: {
				type: Number,
				default: 0
			},
			isBack: {
				type: [Boolean, String],
				default: false
			},
			height: {
				type: Number,
				default: 300,
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
				let that = this ;
				var padding = parseInt(that.padding);
				
				var style = '' ;
				
				if(padding>0){
					style += `padding:0rpx ${padding}rpx;`;
				}
				
				return style ;
			},
			style_img() {
				let that = this ;
				var height = parseInt(that.height);
				var borderRadius = that.borderRadius;
				
				var style = '' ;
				if(height>0){
					style = `height:${height}rpx;`;
				}
				
				if(borderRadius>0){
					style += `border-radius:${borderRadius}rpx;`;
				}
				return style ;
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
				let that = this ;
				
				this.$emit('toDetailPage', null);
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
	//https://cdn.pixabay.com/photo/2015/10/12/15/01/coastline-984088__340.jpg
	//https://cdn.pixabay.com/photo/2017/12/01/03/17/landscape-2990060__340.jpg
	//https://cdn.pixabay.com/photo/2017/01/20/00/30/maldives-1993704__340.jpg
</script>

<style lang="scss">
	.box{
		position: relative;
		.txt-box{
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			.content-box{
				color: #FFFFFF;
				text-align: center;
				margin-top: 120upx;
				font-weight: bold;
			}
			.rest-box{
				margin-bottom: 40upx;
				font-size: $font-lgg;
			}
			.time-box{
				font-size: $font-lggg;
			}
		}
	}
	
</style>
