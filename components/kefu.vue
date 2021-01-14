<template>
	<view @tap="TO" class="rightBottomBox cf-pright-lgg">
		<!-- #ifdef MP-WEIXIN -->
		<view  class="wxBtnBox">
			<button open-type="contact" @contact="handleContactFun"></button>
			<view class="wxBtnMark" >
				<view class="cf-shuCenter">
					<text class="iconfont icon-xiaoxi" ></text>
					<!-- <text>客服</text> -->
				</view>
			</view>
		</view>
		<!-- #endif -->
		<!-- #ifndef MP-WEIXIN -->
		<text class="iconfont icon-xiaoxi"></text>
		<!-- #endif -->
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
			// #ifdef MP-WEIXIN
			//客服
			handleContactFun(e){
				var that = this;
				//that.$api.msg('联系客服成功！');
				//console.log(e.detail.path)
				//console.log(e.detail.query)
			},
			// #endif
		}
	}
</script>

<style lang="scss">
	.wxBtnBox button::after {
		border: none;
	}
	
	.wxBtnBox {
		width: 100%;
		position: relative;
	}
	.wxBtnMark {
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
	}
	.wxBtnBox button {
		width: 100%;
		height: 160upx;
		background-color: $uni-color-white;
	
		/* 防止按钮点击不生效 */
		opacity: 0.1;
		z-index: 2;
	}
	.icon-xiaoxi {
		color: $uni-color-click;
		font-size: 80upx;
		// color: rgba(0, 0, 0, .3);
	}
</style>
