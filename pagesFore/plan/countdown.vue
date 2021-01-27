<template>
	<view >
		<ayTxtOnImg :txt_tips="txt_tips" :txt="txt" @toDetailPage="toDetailPage"></ayTxtOnImg>
		
	</view>
</template>

<script>
	import timeConvert from '@/api/timeConvert.js'
	import storage_z from '@/store/storage.js'
	import preDupliClick from '@/api/preDupliClick.js'
	import storage from '../store/storage.js'
	import ayTxtOnImg from '../components/ay-txtOnImg/ay-txtOnImg.vue'
	export default {
		components: {
			ayTxtOnImg,
			
		},
		data() {
			return {
				//定时更新
				timerRenewTime: 1000,
				timerName: '',
				isRemove_timer: false,
				isScreen_rest : false ,//判断息屏，防止息屏时间不跟实际时间更新
				
				txt_tips : '',
				txt : '',
				time : '',
			};
		},
		onShow:function(){
			console.log('rrrr onShow')
			let that = this;
			
			if(that.isScreen_rest){
				that.isRemove_timer = false;//开启屏幕重新进入，启用timer
				that.set_txt()
			}
		},
		onHide:function(){
			console.log('rrrr onHide')
			let that = this;
			that.isScreen_rest = true ;//说明息屏了
			that.isRemove_timer = true;
			//移除定时器
			let timerName = that.timerName;
			if (timerName !== '') {
				clearTimeout(timerName);
			
			}
		},
		onUnload() {
			let that = this;
			console.log('rrrr onUnload')
			that.isRemove_timer = true;
			//移除定时器
			let timerName = that.timerName;
			if (timerName !== '') {
				clearTimeout(timerName);
		
			}
		},
		
		onLoad:function(){
			let that = this ;
			that.isRemove_timer = false; //重新进入，启用timer
			try {
			    const p_t_range = uni.getStorageSync(storage_z.storageKeyType.p_t_range);
			    if (p_t_range) {
			        if(p_t_range.name){
			        	that.txt_tips = '距离' + p_t_range.name+'仅剩' ;
						let time = p_t_range.time ;
						that.time = time ;
			        	that.set_txt() ;
			        }
			    }
			} catch (e) {
			    // error
			}
		},
		methods: {
			set_txt(){
				let that = this;
				let nowStr = timeConvert.getTime(new Date());
				let time = that.time ;
				that.txt = timeConvert.get_mm_ByTwoTimeStr(nowStr,time) ;
				
				//开启定时器
				that.timerNameFun();
			},
			//定时器实现更新
			timerNameFun() {
				let that = this;
				//移除定时器
				let timerName = that.timerName;
				if (timerName !== '') {
					clearTimeout(timerName);
				}
			
				if (!that.isRemove_timer) {
					timerName = setTimeout(function() {
						if (!that.isRemove_timer) {
							that.set_txt();
						}
					}, that.timerRenewTime)
					// 保存定时器name
					that.timerName = timerName;
				}
			
			
			},
			
			//详情页
			toDetailPage() {
				let that = this ;
				let isonce = preDupliClick.setpreDupliClickVal(preDupliClick.preDupli.one);
				if (!isonce) return;
				
				uni.navigateTo({
					url: `/pagesFore/plan/set_plan`
				})
			},
			
		}
	}
	
</script>

<style lang="scss">
	
</style>
