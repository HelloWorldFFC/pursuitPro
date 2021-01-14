<template>
	<view class="cf-content">
		
		<!-- #ifdef MP-WEIXIN -->
		<kefu></kefu>
		<!-- #endif -->
		<uni-notice-bar show-icon="true" scrollable="true" single="true" :text="notice" speed=50></uni-notice-bar>
		<view class="cu-form-group">
			<view class="title">产品：</view>
			<input placeholder="请输入(请不多于15个字)" v-model="name"></input>
		</view>
		<view class="cu-form-group">
			<view class="title">生产日期：</view>
			<picker mode="date" :value="manufactureDate"  @change="DateChange_manufactureDate">
				<view class="picker">
					{{manufactureDate}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group">
			<view class="title">保质期（月）：</view>
			<picker @change="changeValidLength" :value="validLength" :range="validMonthList">
				<view class="picker">
					{{validMonthList[validLength]}} 月
				</view>
			</picker>
		</view>
		<view style="margin-top: 100upx;" @tap="toAdd">
			<button style="width: 400upx;" class="cf-bgcolorTheme">添加</button>
		</view>
		<scroll-view scroll-y class="cf-scrollBox " :style="{ 'max-height': scrollMaxheight + 'px'}">
			
			<view class="cf-shuCenter"> 
				<!-- <view class="cf-size-lg">近1年记录</view> -->
				<view v-for="(item, index) in list" :key="index" class="cf-hengSpace-B cf-ptop-l" @longtap="del({item,index})">
					<view class="cf-hengStartS cf-ptop-s">
						<view class="iconfont icon-liebiao cf-pleft-m cf-size-lgs cf-colorRili"></view>
						<view class="cf-pleft-m cf-ptop-s" style="overflow: hidden;white-space: nowrap;text-overflow: ellipsis;max-width: 200upx;">{{item.name}}</view>
						<view class="cf-pleft-m cf-ptop-s ">{{item.manufactureDate}} - </view>
						<view class="cf-ptop-s ">{{item.enddate}}</view>
						
						<view class="cf-pleft-lg cf-size-l cf-ptop-s" :class="item.isRed?'cf-colorRed':''">{{item.days}}天</view>
					</view>

					
				</view>
			</view>
			<view class="cf-bottomCenter" v-if="list.length>0">已经到底啦~</view>
			<view class="cf-bottomCenter" v-else>暂无数据</view>
			<view class="cf-bottomCenter cf-colorHui" v-if="list.length>0">长按删除，如有错误请联系客服</view>
		</scroll-view>
	</view>
</template>

<script>
	import validTerm from '../../api/validTerm.js'
	import preDupliClick from '../../api/preDupliClick.js'
	import storage from '@/store/storage.js'
	import uniNoticeBar from "@/components/uni-ui/uni-notice-bar/uni-notice-bar.vue";
	import kefu from '@/components/kefu.vue';
	import comm from '../../api/comm.js'
	import timeConvert from '../../api/timeConvert.js'
	
	export default {
		components: {
			kefu,
			uniNoticeBar
		},
		data() {
			return {
				scrollMaxheight: this.vWindowHeight - 300, 
				name : '',
				manufactureDate:timeConvert.dateToString(new Date()),
				validLength: 0,
				validMonthList: ['12','6', '15', '18', '24', '36', '1','2','3','4','5', '7', '8', '9', '10', '11', '13'],
				
				notice: '欢迎您的使用！可以支持50条记录，为了不影响使用，请勿删除此小程序',
				list: [
					
				],
				validTermList : [],
			}
		},
		async onLoad() {
			let that = this;

		},
		onShow() {
			let that = this;
			let validTermList = storage.getValidTermList() ;
			that.setList(validTermList)
		},
		// #ifdef MP-WEIXIN
		//微信小程序的分享
		onShareAppMessage: function(options) {

		},
		// #endif
		methods: {
			setList(validTermList){
				let that = this;
				let list = [];
				list = validTerm.getCalcuList(validTermList);
				
				that.list = list ;
				
				that.validTermList = validTermList ;
				
				if(list.length>0){
					that.setNotice(list[0]);
				}
			},
			setInit(){
				let that = this;
				that.name = '' ;
				that.manufactureDate  = timeConvert.dateToString(new Date()) ;
				that.validLength =  0;
			},
			toAdd(){
				let isonce = preDupliClick.setpreDupliClickVal(preDupliClick.preDupli.one);
				if (!isonce) return;
				
				let that = this;
				let name  = that.name ;
				let manufactureDate = that.manufactureDate ;
				let validMonth = that.validMonthList[that.validLength] ;
				
				if (that.name.trim().length == 0) {
					that.$api.msg('请输入产品！');
					return;
				}
				
				if (!comm.checkStrLen(name)) {
					that.$api.msg('产品字数过长！');
					return;
				}
				
				let enddate = timeConvert.dateAddToString('m',parseInt(validMonth) , new Date(manufactureDate)) ;
				
				if(new Date(enddate)<=new Date()){
					that.$api.msg('产品已过期！')
					return ;
				}
				
				let validTermList = that.validTermList ;
				let obj  = validTerm.iscan(name,validTermList);
				if(obj.iscan){
					let obj = {
						name: name,
						manufactureDate : manufactureDate,
						validMonth : validMonth ,
					}
					validTermList.push(obj)
					
					validTermList = validTerm.getsetList(validTermList);
					that.setList(validTermList);
					
					that.$api.msg('保存成功！')
					that.setInit();
					storage.setValidTermList(validTermList);
				}else{
					that.$api.msg(obj.msg)
				}
			},
			del(e){
				let item = e.item ;
				let index = e.index ;
				let that = this;
				uni.showModal({
					content: '确认删除'+ item.name + '？',
					success: (e) => {
						if (e.confirm) {
							that.list.splice(index, 1) ;
							
							let validTermList = that.validTermList.splice(index, 1) ;
						
							that.$api.msg('删除成功！');
							
							storage.setValidTermList(validTermList);
						}
					}
				})
				
			},
			//选择保质期
			changeValidLength(e) {
				let that = this;
				let value = e.detail.value;
				this.validLength = value;
			},
			DateChange_manufactureDate(e) {
				let that = this;
				let value = e.detail.value;
				that.manufactureDate = value;
			},
			setNotice(listLast){
				let that = this;
				that.comparisonTime(listLast);
			},
			comparisonTime(listLast){
				let that = this;
				if(listLast.isRed){
					that.notice = '您有即将到期的商品，请及时处理！可以支持50条记录，为了不影响使用，请勿删除此小程序' ;
				}
				
			},
		}

	}
</script>

<style lang="scss">
</style>
