<template>
	<view>
		<tiled :list="list" :hengNumber="2" @toDetailPage="toPage" img_last="lgg"></tiled>
		<!-- #ifdef MP-WEIXIN -->
		<view class="cf-ad">
			<ad unit-id="adunit-857f5c9dbc28f928" ad-type="grid" grid-opacity="0.8" grid-count="5" ad-theme="white"></ad>
		</view>
		<!-- #endif -->
		<tiled :list="list_two" :hengNumber="3" @toDetailPage="toPage_two" backgroundColor="#87CEEB" nameColor="#fff" img_last="lg"></tiled>
	</view>
	
</template>

<script>
	import tiled from '@/components/ay-shortcutNav/tiled.vue';
	import menu from '../js/menu.js';
	export default {
		components:{
			tiled,
		},
		data() {
			return {
				list_two :[],
				list : [],
				isLoaded : false ,
			}
		},
		onLoad(options) {
			// uni.setNavigationBarTitle({
			// 	title: sceneMenu[options.index].name
			// })
			// this.scene = sceneMenu[options.index].list
			let that = this;
			that.loadData();
		},
		// #ifdef MP-WEIXIN
		//微信小程序的分享
		onShareAppMessage: function(options) {
		
		},
		// #endif
		methods: {
			async loadData() {
				let that = this;
			
				uni.showLoading({
					title: '加载中',
					mask: true,
				})
			
				let res_home = await menu.res_home;
				//console.log(res_home)
				let data = res_home.data;
			
				that.list = data.list.data;
				
				that.list_two = data.list_two.data;
				
				uni.hideLoading();
			
				that.isLoaded = true;
				
			},
			toPage(e) {
				//console.log(e)
				let item = e.item ;
				let isMenu = item.isMenu ;
				
				if(isMenu){
					uni.navigateTo({
						url: `/pagesShow/index/index_item` + `?data=${encodeURIComponent(JSON.stringify(item))}`,
					})
				}else{
					uni.navigateTo({
						url: `/pagesShow/index/show` + `?data=${encodeURIComponent(JSON.stringify(item))}`,
					})
					
				}
				
				
				// uni.navigateTo({
				// 	url: url
				// })
				
			},
			
		},
	}
</script>

<style  lang="scss">
	
</style>
