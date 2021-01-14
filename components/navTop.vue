<template>
	<view class="navTopBox">
		<!-- style="[{height:CustomBar + 'px'}]" -->
		<view class="cu-custom" style="height: 90upx;">
			<view class="cu-bar " style="height: 80upx;">
				<view class="navTopContentBox">
					<view class="logoBox">
						<image src="../static/logo.png"></image>
					</view>

					<view class="search-box">
						<image class="search-input-img" src="../static/search.png" style="width: 40upx;height: 40upx;"></image>
						<input class="search-input" type="text" placeholder="请输入搜索关键字" style="" v-model="searchModel" @input="searchInput" />
					</view>
					<view class="kefuBox">
						<!-- <text class="iconfont icon-kefu"></text> -->
					</view>

				</view>
			</view>
		</view>
		<!-- :class="{active: curId === index}" @tap.stop="stopEvent"-->

		<view class="search-popup" v-show="ifshowSearchPopup" @touchmove.stop.prevent>
			<scroll-view scroll-with-animation scroll-y class="scroll" v-show="ifshowSearchPopup">
				<view class="search-popup-content" v-for="(item,index) in searchList" :key="index" @click="searchItemClick(item)">
					<view v-if="item.name==notRes?false:true">
						<image src="../static/search.png" style="width: 40upx;height: 40upx;"></image>
					</view>
					<view style="margin-left: 20upx;color:#9aa9aa ;">{{item.name}}</view>
				</view>
			</scroll-view>
		</view>

	</view>
</template>

<script>
	import reqUrl from '../api/reqUrl.js'
	import index from '../api/index.js'
	export default {
		data() {
			return {
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar,

				ifshowSearchPopup: false,
				searchModel: '',
				curId: 0,
				searchList: [],
				notRes: '暂无匹配结果',
			};
		},
		name: 'cu-custom',
		computed: {
			style() {
				var StatusBar = this.StatusBar;
				var CustomBar = this.CustomBar;
				var bgImage = this.bgImage;
				var style = `height:${CustomBar}px;padding-top:${StatusBar}px;`;
				if (this.bgImage) {
					style = `${style}background-image:url(${bgImage});`;
				}
				return style
			}
		},
		props: {
			searchvalue: {
				type: String,
				default: ''
			},
			isBack: {
				type: [Boolean, String],
				default: false
			},
			bgImage: {
				type: String,
				default: ''
			},
		},
		watch: {
			searchvalue(e) {
				// #ifdef  MP-WEIXIN
				let that = this ;
				that.searchModel = e;
				// #endif 
			},
		},
		created: function() {
			let that = this;
			that.searchModel = that.searchvalue;
		},
		methods: {
			searchInput(e) {
				//console.log(e)
				let that = this;
				let searchInputTxt = e.detail.value;
				if (searchInputTxt.length > 0) {
					that.ifshowSearchPopup = true;
					//that.loadSearchTipsDataByYun(searchInputTxt);
				} else {
					that.ifshowSearchPopup = false;
					that.searchModel = '';

				}

			},
			searchItemClick(e) {
				console.log(e)
				let currentPages = getCurrentPages();
				let curPage = currentPages[currentPages.length - 1].route;
				let that = this;
				let item = e;
				that.ifshowSearchPopup = false;
				let key = item.name
				if (key !== that.notRes) {
					if (curPage !== 'pages/index/searchResults') {
						that.searchModel = '';
						uni.navigateTo({
							url: `/pages/index/searchResults` + `?data=${key}`
						})
					} else {
						that.searchModel = key;

						this.$emit("searchConfirm", item);
					}
				}


			},
			stopEvent(event) {},
			BackPage() {
				uni.navigateBack({
					delta: 1
				});
			},

		}
	}
</script>

<style lang="scss">
	.cu-custom {
		background-color: #FFFFFF;
	}

	.scroll {
		height: 800upx;
	}

	.navTopBox {
		// background:url(../image/shouye/顶部01@2x.png) no-repeat center center;
		// background-size:100% 100%;
		//background: #ee4042;
	}

	.navTopContentBox {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		margin-top: 10upx;

		.logoBox {
			text-align: center;

			image {
				margin-left: 10upx;
				width: 60upx;
				height: 60upx;
			}
		}

		.search-box {
			width: 100%;
			padding: 0 60upx 0 20upx;
			position: relative;
			
			input::-webkit-input-placeholder,
			textarea::-webkit-input-placeholder {
				color: #303133;
				font-size: 16px;
			}

			input:-moz-placeholder,
			textarea:-moz-placeholder {
				color: #303133;
				font-size: 16px;
			}

			input::-moz-placeholder,
			textarea::-moz-placeholder {
				color: #303133;
				font-size: 16px;
			}

			input:-ms-input-placeholder,
			textarea:-ms-input-placeholder {
				color: #303133;
				font-size: 16px;
			}

			.search-input-img {
				position: absolute;
				top: 16upx;
				left: 56upx;
			}

			.search-input {
				font-weight: 400;
				flex: 1;
				height: 72upx;
				line-height: 72upx;
				//text-align: center;
				padding-left: 100upx;
				font-size: 26upx;
				//color: #b30116;
				border-radius: 20px;
				background: #f5f5f5;
			}
		}

		.kefuBox {
			text-align: center;
		}
	}

	.search-popup {
		position: absolute;
		z-index: 999999;

		// background: rgba(0, 0, 0, .3);
		// height: calc(100% - 50px);
		width: 100%;
		left: 0px;
		overflow: hidden;
		padding: 0 72upx 10upx 126upx;

		.search-popup-content {
			display: flex;
			border-bottom: 4upx solid #f9f9f9;
			border-left: 4upx solid #f9f9f9;
			border-right: 4upx solid #f9f9f9;

			padding: 20upx 80upx 10upx 14upx;
			height: 80upx;
			background: $uni-color-white;

			&.active {
				background: $uni-color-theme;
			}


		}
	}
</style>
