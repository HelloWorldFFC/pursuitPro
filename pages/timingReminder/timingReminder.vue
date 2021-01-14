<template>
	<view>
		<view v-if="!isCountDown" class="cu-form-group">
			<view class="title">时间单位：</view>
			<picker @change="changeTimeUnitLength" :value="timeUnitLength" :range="timeUnitList">
				<view class="picker">
					{{timeUnitList[timeUnitLength]}}
				</view>
			</picker>
		</view>
		
		<view v-if="!isCountDown" class="cu-form-group">
			<view class="title">时间间隔：</view>
			<picker @change="changeTimeLength" :value="timeLength" :range="timeList">
				<view class="picker">
					{{timeList[timeLength]}} {{timeTip}}
				</view>
			</picker>
		</view>
		
		<view v-if="isCountDown" class="cu-form-group">
			<view class="title">倒计时：</view>
			<view class="picker cf-colorRed">
				{{countDownTip}}
			</view>
		</view>
		
		<view v-if="!isCountDown" style="margin-top: 100upx;" @tap="toStart">
			<button style="width: 400upx;" class="cf-bgcolorTheme">开始</button>
		</view>
		<view v-else style="margin-top: 100upx;" @tap="toCancelRemander">
			<button style="width: 400upx;" class="cf-bgcolorTheme">取消</button>
		</view>
		
		
	</view>
</template>

<script>
	import preDupliClick from '../../api/preDupliClick.js'
	import storage from '@/store/storage.js'
	import kefu from '@/components/kefu.vue';
	import comm from '../../api/comm.js'
	import timeConvert from '../../api/timeConvert.js'
	
	export default {
		components: {
			kefu,
		},
		data() {
			return {
				timeTip:'分',
				timeUnitList:['分钟','小时','秒'],
				timeUnitMaoList:['60','3600','1'],
				
				timeUnitLength: 0,
				
				timeLength: 0,
				timeList: ['10','5', '15', '20', '23','1','2','3','4','6', '7', '8', '9', '11', '12', '13','30','40','50','60'],
				
				timerName : '',
				valid_timerName : false,
				time_timerName : 1000,
				
				isCountDown : false ,
				countDown : '',
				countDownTip : '',
			}
		},
		async onLoad() {
			let that = this;

		},
		onShow() {
			let that = this;
			let timingReminder = storage.getTimingReminder() ;
			if(timingReminder!==''){
				//表明有需要提醒的时间
				let timingReminder_date = new Date(timingReminder.replace(/-/g,"/"));
				let now = new Date() ;
				if(timingReminder_date>now){
					//说明需要提醒
					let addS = timeConvert.getDatedifferenceS(timingReminder,timeConvert.getTime(now));
					that.startRemander(addS);
				}
				
			}
		},
		onUnload:function(){
			let that = this ;
			console.log('onUnload')
			that.toCancelRemander();
		},
		// #ifdef MP-WEIXIN
		//微信小程序的分享
		onShareAppMessage: function(options) {

		},
		// #endif
		watch: {
			//页面显示更友好
			countDown(e) {
				let that = this ;
				if(e!==''){
					let countDownTip = timeConvert.secondsToHMs(e);
					that.countDownTip = countDownTip ;
				}
			}
		},
		methods: {
			toCancelRemanderFun(){
				let that = this ;
				that.toCancelRemander(true)
			},
			toCancelRemander(isCancel = false){
				let that = this ;
				
				//移除定时器
				let timerName = that.timerName;
				that.valid_timerName = false ;
				if(timerName!==''){
					clearTimeout(timerName);
					that.timerName = '';
					that. isCountDown = false ;
					that .countDown = '';
				}
				
				if(isCancel){
					//清除提醒时间
					storage.clearTimingReminder();
					
				}
			},
			//定时器实现车位1分钟刷新一次
			timerNameFun() {
				let that = this;
				//移除定时器
				let timerName = that.timerName;
				if (timerName !== '') {
					clearTimeout(timerName);
				}
				console.log(timeConvert.getTimeM()+'定时器执行！！！！！！')
				that.countDown --;
				if(that.countDown == 0){
					that.playAnswerAudio();
					that.toCancelRemander(true);
					return ;
				}
				timerName = setTimeout(function() {
					if(that.valid_timerName){
						that.timerNameFun();
					}
				}, that.time_timerName)
				// 保存定时器name
				that.timerName = timerName;
			
			},
			toStart(){
				let isonce = preDupliClick.setpreDupliClickVal(preDupliClick.preDupli.one);
				if (!isonce) return;
				
				let that = this;
				let timeUnitMao = that.timeUnitMaoList[that.timeUnitLength] ;
				let time = that.timeList[that.timeLength] ;
				let addS = parseInt(time)*parseInt(timeUnitMao) ;
				console.log('addS:'+addS)
				let timingReminder = timeConvert.dateAddToTime('s',addS , new Date()) ;
				console.log('timingReminder:'+timingReminder)
				storage.setTimingReminder(timingReminder);
				
				that.startRemander(addS);
				
			},
			startRemander(addS){
				let that = this ;
				that. isCountDown = true ;
				that .countDown = addS;
				
				//定时器实现倒计时
				let timerName = setTimeout(function() {
					that.valid_timerName = true ;
					that.timerNameFun();
				}, that.time_timerName)
				// 保存定时器name
				that.timerName = timerName;
			},
			changeTimeUnitLength(e) {
				let that = this;
				let value = e.detail.value;
				this.timeUnitLength = value;
				that.timeTip = that.timeUnitList[value];
				
			},
			changeTimeLength(e) {
				let that = this;
				let value = e.detail.value;
				this.timeLength = value;
			},
			//播放提醒声音
			playAnswerAudio(){
				
				// var srcurl = "/audio/answer.mp3" ;
				 
				// const audio = wx.createInnerAudioContext('answer')
				// audio.src = srcurl ;
				// audio.autoplay = true ; 
				// audio.startTime = 0 ;
				// audio.loop = true ;
				 
				//  audio.onPlay(() => {
				// 	////////////console.log('开始播放')
				// })
				
				const innerAudioContext = uni.createInnerAudioContext();
				innerAudioContext.autoplay = true;
				innerAudioContext.src = '/audio/answer.mp3';
				innerAudioContext.onPlay(() => {
				  console.log('开始播放');
				});
				innerAudioContext.onError((res) => {
				  console.log(res.errMsg);
				  console.log(res.errCode);
				});
			}
		}

	}
</script>

<style lang="scss">
</style>
