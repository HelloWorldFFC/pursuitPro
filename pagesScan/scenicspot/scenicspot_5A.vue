<template>
	<view class="content">
		<!-- #ifdef MP-WEIXIN -->
		<kefu></kefu>
		<!-- #endif -->
		<scroll-view scroll-y class="cf-scrollBox ">
			<!-- <ayitemone :list="list" @toAddress="toAddress" @toPhone="toPhone"></ayitemone> -->
			<ayitemtwo :list="list" @toAddress="toAddress" @toPhone="toPhone"></ayitemtwo>
			<view class="cf-bottomCenter" v-if="list.length>0">已经到底啦~</view>
			<view class="cf-bottomCenter cf-colorHui" v-if="list.length>0">如有错误请联系客服</view>
		</scroll-view>
	</view>
</template>

<script>
	import ayitemone from '../components/ay-item/ay-item-one.vue';
	import ayitemtwo from '../components/ay-item/ay-item-two.vue';
	import kefu from '@/components/kefu.vue';
	import comm from '@/api/comm.js'
	import jsondata from '../js/jsondata.js'
	export default {
		components: {
			kefu,
			ayitemone,
			ayitemtwo,
		},
		data() {
			return {
				list: []
			}
		},
		async onLoad() {
			let that = this;
			//let list = jsondata.scenicspotList;
			let list = jsondata.scenicspotList_5A;
			that.list = list.data;
		},
		onShow() {

		},
		// #ifdef MP-WEIXIN
		//微信小程序的分享
		onShareAppMessage: function(options) {

		},
		// #endif
		methods: {
			toAddress(item) {
				let that = this;
				let latitude = item.address.latitude;
				let longitude = item.address.longitude;
				let changeAddress = comm.changeAdress_bd_To_gcj(latitude, longitude);
				console.log('changeAddress', changeAddress)
				uni.openLocation({
					latitude: changeAddress.latitude, //要去的纬度-地址       
					longitude: changeAddress.longitude, //要去的经度-地址
					name: item.address.name, //地址名称
					address: item.address.address, //详细地址名称
					success: function() {
						console.log('导航成功');
					},
					fail: function(error) {
						console.log(error)
					}
				});
			},
			toPhone(item) {
				uni.makePhoneCall({
					phoneNumber: item.phone
				});
			},
		}

	}
</script>

<style lang="scss">
	page,
	.content {
		width: 100%;
		height: 100%;
		background-color: $uni-color-white;
	}

</style>
