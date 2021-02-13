<template>
	<view style="overflow: hidden;">
		<view style="margin-left: 30upx;margin-top: 20upx;">语音识别内容：</view>
		
		<view class="text-box">
			<view class="text-box2 addDot">
				{{currentText}}
			</view>
		</view>
		
		
		<view style="float: right;margin-right: 30upx;" @tap="copy_txt">复制</view>
		
		<view class="btn-btm-box">
			<view class="btn-btm-box2">
				<view v-if="!isSpeaking" @tap="stremRecord" class="btn-bk-l bgcolorTheme">开始录音</view>
				<view v-else class="btn-bk-l cf-bgcolorTheme" @tap="streamRecordEnd">结束录音</view>
			</view>

		</view>

	</view>
</template>

<script>
	//#ifdef MP-WEIXIN
	var voicPlugin = requirePlugin("WechatSI")
	let voicManager = voicPlugin.getRecordRecognitionManager()
	// #endif
	export default {
		components: {

		},

		data() {
			return {
				currentText: '',
				isSpeaking: false,
			}
		},
		// #ifdef MP-WEIXIN
		//微信小程序的分享
		onShareAppMessage: function(options) {

		},
		// #endif
		onShow: function() {
			let that = this;

		},
		onLoad(options) {


		},

		methods: {
			copy_txt(){
				let that = this;
				let currentText = that.currentText ;
				uni.setClipboardData({
				    data: currentText,
				    success: function () {
				        console.log('success');
				    }
				});
				that.$api.msg('复制成功')
			},
			stremRecord() {
				//#ifdef MP-WEIXIN
				voicManager.start({
					lang: 'zh_CN',
				})
				// #endif
				uni.vibrateShort();
				this.isSpeaking = true;
			},
			streamRecordEnd() {
				let that = this;
				//#ifdef MP-WEIXIN
				voicManager.stop();
				// #endif
				uni.vibrateShort();
				that.initRecord();
				this.isSpeaking = false;
			},
			initRecord: function() { //有新的识别内容返回，则会调用此事件
				//#ifdef MP-WEIXIN
				// 识别结束事件
				voicManager.onStop = (res) => {
					console.log(res)
					let text = res.result
					if (text == '') { // 用户没有说话，可以做一下提示处理...
						return
					}
					this.currentText = text;
					// 这里得到完整识别内容就可以去翻译了
					this.translateTextAction();
				}
				// #endif
			},

			translateTextAction() {
				let that = this;
				let lfrom = 'zh_CN';
				let lto = 'en_US';
				voicPlugin.translate({
					lfrom: lfrom,
					lto: lto,
					content: that.currentText,
					tts: true, // 需要合成语音
					success: (resTrans) => { // 翻译可以得到 翻译文本，翻译文本的合成语音，合成语音的过期时间
						let text = resTrans.result;
						that.translateText = text;

						// 得到合成语音让它自动播放出来
						// wx.playBackgroundAudio({
						//  dataUrl: resTrans.filename,
						//  title: '',
						// });
					}
				})
			},


		}
	}
</script>

<style lang="scss">
	
	.text-box{
		margin: 40upx 60upx;
		padding-bottom: 40upx;
		border: 4upx solid #e0e0e0;
		border-radius: 18upx;
	}
	.text-box2{
		
		padding: 40upx 40upx 0 40upx;
	}
	.addDot {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 14;
		overflow: hidden;
	}
	.btn-btm-box {
		position: fixed;
		left: 0;
		bottom: 10upx;
		width: 100%;
	}

	.btn-btm-box2 {
		padding: 30upx 40upx;
		text-align: center;
	}
	.btn-bk-l {
		color: #FFFFFF;
		width: 100%;
		border-radius: 68upx;
		margin: 20upx auto;
		padding: 20upx;
		font-size: 40upx;
	}
	.bgcolorTheme {
		background-color: #33CCCC;
		color: #FFFFFF;
	}
</style>
