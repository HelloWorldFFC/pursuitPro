<template>
	<view style="width: 100%;">
		<!-- #ifdef MP-WEIXIN -->
		<kefu></kefu>
		<!-- #endif -->
		<view class="cu-form-group" >
			<view class="title">处理时间： </view>
			<view class="title" @click="onShowDatePicker('datetime')">{{datetime}}</view>
			<view @click="onShowDatePicker('datetime')" class="iconfont icon-shijian" style="font-size: 40upx;"></view>
			<mx-date-picker :show="showPicker" :type="type" :value="value" :show-tips="true" :begin-text="''" :end-text="''"
			 :show-seconds="true" @confirm="onSelected" @cancel="onSelected" />
		</view>
		<view class="cu-form-group" >
			<view class="title">处理事项： </view>
			<textarea class="title" placeholder-style="color:#cccccc;padding-top:100upx;" maxlength="100"  v-model="feedBack" placeholder="长度控制在100字符" style="height: 250upx;border: 2upx solid #CCCCCC;margin: 0 auto;" />
		</view>
		<view style="margin-top: 100upx;" @tap="toAdd">
			<button style="width: 400upx;" class="cf-bgcolorTheme">保存</button>
		</view>
		<view class="cf-bottomCenter cf-colorHui">如有错误请联系客服</view>
	</view>
</template>

<script>
	import mxDatePicker from "@/components/mx-datepicker/mx-datepicker.vue";
	import kefu from '@/components/kefu.vue';
	import preDupliClick from '../../api/preDupliClick.js'
	import comm from '../../api/comm.js'
	import emmenia from '../../api/emmenia.js'
	import storage from '../../store/storage.js'
	import timeConvert from '../../api/timeConvert.js'
	export default {
		components: {
			kefu,
			mxDatePicker
		},
		watch: {

		},
		data() {
			return {
				formid: '',
				
				feedBack:'',
				
				showPicker: false,
				datetime: timeConvert.getTime(new Date()),
				type: 'datetime',
				value: '',
				
				
			};
		},
		onLoad: function() {
			let that = this;
			// #ifdef MP-WEIXIN
			// wx.requestSubscribeMessage({
			//   tmplIds: ['vvJPv5OD8diwnZGyXDtUtL9gM7ZebMmL3wiUyvig-_U'],
			//   success (res) {
			// 	console.log(res)  
			//   },
			//   fail (err) {
			// 	  console.log(err) 
			//   },
			// })
			// #endif
		},
		onShow: function() {
			let that = this;

		},
		// #ifdef MP-WEIXIN
		//微信小程序的分享
		onShareAppMessage: function(options) {

		},
		// #endif
		methods: {
			//显示
			onShowDatePicker(type) {
			
				let that = this;
				console.log('type', type)
				this.type = type;
				this.showPicker = true;
				this.value = this[type];
			},
			onSelected(e) { //选择
				let that = this;
				this.showPicker = false;
				if (e) {
					this[this.type] = e.value;
					//选择的值
					//console.log('value => ' + e.value);
					//原始的Date对象
					//console.log('date => ' + e.date);
					that.enterTime = timeConvert.getTime(e.date);
				}
			},
			//事件处理函数
			registerFormSubmit: function(e) {
				let that = this;
				//    打印formId
				console.log(e.detail.formId);
				that.formId = e.detail.formId;
			},
			//测试推送
			push() {
				let that = this;
				let formid = this.data.formid;
				let openid = '';
				// wx.request({
				// 	url: 'http://localhost:8080/push?openId=' + openid + "&formId=" + formid,
				// 	success(res) {
				// 		console.log("推送结果：", res)
				// 	},
				// 	fail(err) {
				// 		console.log("推送失败：", err)
				// 	}
				// })
			},
			toAdd() {
				let that = this;
				
			},
		},
	}
</script>

<style lang="scss">
	
</style>
