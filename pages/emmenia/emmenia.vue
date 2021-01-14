<template>
	<view class="cf-content">
		
		<!-- #ifdef MP-WEIXIN -->
		<kefu></kefu>
		<!-- #endif -->
		<scroll-view scroll-y class="cf-scrollBox ">
			<uni-notice-bar show-icon="true" scrollable="true" single="true" :text="notice" speed=50></uni-notice-bar>
			<view class="cf-shuCenter">
				<view class="cf-hengCenter">
					<view class="cf-shuCenter cf-p-s" v-for="(item, index) in handlelist" :key="index" @tap="toPage(item)">
						<view class="iconfont cf-size-lgg" :class="item.icon.length>0?item.icon:''"></view>
						<view class="cf-p-s">{{item.name}}</view>
					</view>
				</view>
				<!-- <view class="cf-size-lg">近1年记录</view> -->
				<view v-for="(item, index) in list" :key="index" class="cf-hengSpace-B cf-ptop-l">
					<view class="cf-hengStartS cf-ptop-s">
						<view class="iconfont icon-liebiao cf-pleft-m cf-size-lgs cf-colorRili"></view>
						<view class="cf-pleft-m cf-ptop-s">{{item.startdate}}</view>
						<view class="cf-pleft-m cf-ptop-s">至</view>
						<view class="cf-pleft-m cf-ptop-s ">{{item.enddate}}</view>
						<view class="cf-pleft-lg cf-size-l cf-ptop-s">{{item.days}}</view>
						<view class="cf-size-l cf-ptop-s" >天</view>
						<view class="cf-pleft-lg cf-size-l cf-ptop-s">{{item.emmeniaCyc}}</view>
						<view class="cf-size-l cf-ptop-s" v-if="item.emmeniaCyc>0">天</view>
					</view>

					<view class="iconfont icon-xiugai cf-pright-l cf-size-lg cf-colorEdit" @tap="edit(item)"></view>
				</view>
			</view>
			<view class="cf-bottomCenter" v-if="list.length>0">已经到底啦~</view>
			<view class="cf-bottomCenter" v-else>暂无数据</view>
			<view class="cf-bottomCenter cf-colorHui" v-if="list.length>0">如有错误请联系客服</view>
		</scroll-view>
	</view>
</template>

<script>
	import emmenia from '../../api/emmenia.js'
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
				handlelist:[
					{
						icon:'icon-shezhi',
						name:'设置',
						toPageUrl : '/pages/emmenia/sete_emmenia',
					},
					{
						icon:'icon-tongji1',
						name:'统计',
						toPageUrl : '/pages/emmenia/statistic_emmenia',
					},
					{
						icon:'icon-add',
						name:'新建',
						toPageUrl : '/pages/emmenia/add_emmenia',
					}
				],
				notice: '欢迎您使用姨妈期记录功能！可以支持最新12个月的记录，为了不影响使用，请勿删除此小程序',
				list: [
					// {
					// 	enddate: '2020-08-20',
					// 	startdate: '2020-07-20',
					// 	days: 30,
					// },
				]
			}
		},
		async onLoad() {
			let that = this;

		},
		onShow() {
			let that = this;
			let list = [];
			let emmeniaList = storage.getEmmeniaList() ;
			console.log('emmeniaList',emmeniaList)
			list = emmenia.getCalcuEmmeniaList(emmeniaList);
			that.list = list ;
			if(list.length>0){
				that.setNotice(list[0]);
			}
		},
		// #ifdef MP-WEIXIN
		//微信小程序的分享
		onShareAppMessage: function(options) {

		},
		// #endif
		methods: {
			setNotice(emmeniaLast){
				let that = this;
				that.comparisonTime(emmeniaLast);
			},
			comparisonTime(emmeniaLast){
				let that = this;
				console.log('1111111111111')
				let now = new Date();
				let notice = '' ;
				let emmeniaUnitCyc = storage.getEmmeniaUnitCyc();
				let emmeniaCyc = storage.getEmmeniaCyc();
				
				//let thisEmmenia = timeConvert.dateAdd('d',emmeniaCyc, );
				let days = timeConvert.getDatedifference(new Date(emmeniaLast.startdate),now) ;
				let dv = days - emmeniaCyc ;
				console.log(days,emmeniaCyc,dv,emmeniaUnitCyc)
				if(dv>0){
					let delay = dv ;
					if(delay < emmeniaUnitCyc){
						 
						notice = '您已推迟' + delay +'天降临大姨妈，请注意！' ;
					}
				}else{
					let ahead =  Math.abs(dv) ;
					if(ahead < emmeniaUnitCyc){
						let aheadMark = '' ;
						if(ahead == 0){
							aheadMark = '今' ;
						}else if(ahead == 1){
							aheadMark = '明' ;
						}else{
							aheadMark = '近' + ahead;
						}
						notice = '您将在' + aheadMark +'天降临大姨妈，请做好准备！' ;
					}
				}
				
				if(notice.length>0){
					that.notice = notice ;
					let emmeniaCancel = getApp().globalData.emmeniaCancel ;
					if((emmeniaCancel !== timeConvert.dateToString(now))||(emmeniaCancel =='')){
						uni.showModal({
							content: '是否来大姨妈？',
							success: (e) => {
								if (e.confirm) {
									uni.navigateTo({
										url: '/pages/emmenia/add_emmenia',
									})
								}else{
									getApp().globalData.emmeniaCancel = timeConvert.dateToString(now);
								}
							}
						})
					}
					
				}
			},
			toPage(item){
				let that = this;
				
				let isonce = preDupliClick.setpreDupliClickVal(preDupliClick.preDupli.one);
				if (!isonce) return;
				
				let toPageUrl = item.toPageUrl ;
				uni.navigateTo({
					url : toPageUrl ,
				})
			},
			edit(item){
				let that = this;
				
				let isonce = preDupliClick.setpreDupliClickVal(preDupliClick.preDupli.two);
				if (!isonce) return;
				
				uni.navigateTo({
				     url: '/pages/emmenia/edite_emmenia?items='+encodeURIComponent(JSON.stringify(item)),
				})
			},
		}

	}
</script>

<style lang="scss">
</style>
