<template>
	<view >
		<view class="titleBox">
			<view v-if="list.length>0" class="title">最终总收入（元）：{{list.slice(list.length-1)[0].income}}</view>
		</view>
		<view class="cu-form-group">
			<view class="title">年龄（岁）</view>
			<view class="picker unit">年增值（元）</view>
			<view class="picker">总收入（元）</view>
		</view>
		<scroll-view scroll-y  :style="{ 'max-height': scrollMaxheight + 'px'}">
			<view class="cu-form-group"  v-for="(item,index) in list" :key="index">
				<view class="title">{{item.name}}</view>
				<view class="picker unit">{{item.difference}}</view>
				<view class="picker">{{item.income}}</view>
			</view>
			<view class="cf-bottomCenter" v-if="list.length>0">已经到底啦~</view>
		</scroll-view>
		
	</view>
</template>

<script>
	export default {
		components: {
			
		},
		data() {
			return {
				scrollMaxheight: this.vWindowHeight*0.7 - 130, 

			}
		},
		watch: {
			
		},
		props: {
			compoundsObj :{
				type: Object,
				default () {
					return {
						tips : '',
					}
				}
			},
			
			list: {
				type: Array,
				default () {
					return []
				}
			},
		},
		methods: {
			
		}
	}
</script>

<style lang='scss'>
	page {
		background-color: #FFFFFF;
		height: 100%;
	}
	
	.unit{
		font-size: 20upx;
	}
	.titleBox{
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 80rpx;
	}
	.title{
		font-size: 40rpx;
	}
</style>
