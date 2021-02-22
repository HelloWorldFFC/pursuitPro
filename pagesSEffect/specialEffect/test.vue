<template>
	<view >
		<view class="box">
			<view class="box-item" v-for="(item, index) in list" :key="index">
				<view class="ct-time">{{item.createTime}}</view>
				
				
				
				<view class="cf-hengSpace-B">
					<view></view>
					<view class="ct">
						<view>{{item.content}}</view>
					</view>
					
				</view>
				
				<view class="cf-hengSpace-B">
					
					
					<view v-if="item.replyStatus" class="reply-ct">
						<view>{{item.replyContent}}</view>
					</view>
					<view v-else class="reply-ct">
						<view>待回复</view>
					</view>
					<view></view>
				</view>
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [
					{
						id : 1 ,
						
						createTime : '2021-01-24' ,
						content : '测试',
						replyContent : '回复测试' ,
						replyStatus : true,
						replyTime : '2021-01-24' ,
							
					},
					{
						id : 2 ,
						
						createTime : '2021-01-24' ,
						content : '测试',
						replyContent : '回复测试' ,
						replyStatus : false,
						replyTime : '2021-01-24' ,
								
					},
				],
			}
		},
		methods: {}
	}
</script>

<style lang="scss">
	.box{
		.box-item{
			margin: 20upx;
			padding-bottom: 40upx;
			border-bottom: 1px solid #d8d8d8;
		}
		
		.ct-time{
			padding-top: 40upx;
			text-align: center;
			color: #999999;
		}
		.ct{
			// float: right;
			padding: 20upx;
			border-radius: 20upx;
			color: #FFFFFF;
			background-color: #ef8200;
		}
		
		.reply-ct{
			// float: left;
			padding: 20upx;
			border-radius: 20upx;
			background-color: #d8d8d8;
		}
		
	}
</style>

