<template>
	<view>
		<view class="box">
			<view class="box-item" v-for="(item, index) in list" :key="index">
				<view class="ct-time">{{item.createTime}}</view>

				<view class="cf-hengSpace-B">

					<view class="ct">
						<view>{{item.content}}</view>
					</view>
					<view></view>
				</view>

				<view class="cf-hengSpace-B">


					<view v-if="item.replyStatus" class="reply-ct">
						<view>{{item.replyContent}}</view>
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
				list: [{
						id: 1,

						createTime: '2021-01-24',
						content: '测试',
						replyContent: '回复测试',
						replyStatus: true,
						replyTime: '2021-01-24',

					},
					{
						id: 2,

						createTime: '2021-01-24',
						content: '测试',
						replyContent: '回复测试',
						replyStatus: false,
						replyTime: '2021-01-24',

					},
					{
						id: 1,

						createTime: '2021-01-24',
						content: '测试测试测试测试测试测试测试测试测试测试测试',
						replyContent: '回复测试测试测试测试测试测试测试测试测试测试',
						replyStatus: true,
						replyTime: '2021-01-24',

					},
					{
						id: 2,

						createTime: '2021-01-24',
						content: '测试测试测试测试测试测试测试测试测试测试测试',
						replyContent: '回复测试',
						replyStatus: false,
						replyTime: '2021-01-24',

					},
				],
			}
		},
		methods: {}
	}
</script>

<style lang="scss">
	.box {
		.box-item {
			border-radius: 20upx;
			background-color: #F0F0F0;
			margin: 30upx 40upx;
			padding-bottom: 40upx;
			// border-bottom: 1px solid #d8d8d8;
			box-shadow: #F0F0F0 0px 0px 10px;
		}

		.ct-time {
			margin-left: 40upx;
			padding-top: 40upx;
			// text-align: center;
			color: #999999;
		}

		.ct {
			margin-left: 40upx;
			margin-top: 40upx;
			max-width: 600upx;
			padding: 20upx;
			border-radius: 20upx;
			color: #7d7d7d;
			background-color: #FFFFFF;
		}

		.reply-ct {
			margin-left: 40upx;
			margin-top: 40upx;
			max-width: 600upx;
			padding: 20upx;
			border-radius: 20upx;
			color: #FFFFFF;
			background-color: #ef8200;

			// background-color: #f8f8f8;
			// color: #FFFFFF;
			// background-color: #01A0FC;
		}

		.reply-ct-w {
			// float: left;
			padding: 20upx;
			border-radius: 20upx;


		}
	}
</style>
