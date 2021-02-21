<template>
	<view>
		<view style="margin-top: 130upx;">
			<!-- 3d的会影响闪动一下，但不影响单独使用 -->
			<ayturn :type="3" :height="400" :width="300" :cover="cover_auto"  :list="list_page_auto"></ayturn>
		</view>
		
		<ayturn :type="1" :height="100" :width="200"  :list="list"></ayturn>
		
		
		
		
		
		<ayturn :type="2" :height="640" :width="400" :list="list_page">
			
		</ayturn>
		
		<ayturn :type="1" :height="100" :width="200" :marginTop="10" :list="list"></ayturn>
		<ayturn :type="1" :height="100" :width="200" :marginTop="10" :list="list"></ayturn>
		<ayturn :type="1" :height="100" :width="200" :marginTop="10" :list="list"></ayturn>
		<ayturn :type="1" :height="100" :width="200" :marginTop="10" :list="list"></ayturn>
		<ayturn :type="1" :height="100" :width="200" :marginTop="10" :list="list"></ayturn>
		<ayturn :type="1" :height="100" :width="200" :marginTop="10" :list="list"></ayturn>
		
		<ayturn :type="4"  :height="150" :width="150" :pros_img="pros_img" :cons_img="cons_img"></ayturn>
		
	</view>


</template>

<script>
	import menu from '../js/menu.js';
	import ayturn from '../components/ay-turn/ay-turn.vue';
	export default {
		components: {
			ayturn,
		},

		data() {
			return {
				list: [],
				list_page:[],
				list_page_auto:[],
				cover_auto:{},
		
				pros_img:'https://cdn.pixabay.com/photo/2020/03/13/08/34/south-station-4927286__340.jpg',
				cons_img:'https://cdn.pixabay.com/photo/2021/01/11/18/41/snowfall-5909261__340.jpg',
			}
		},
		onLoad() {
			let that = this;
			that.loadData();
		},
		onShow() {

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
			
				that.list = data.turn_thD_list.data;
				// that.list_page = data.turn_page_list.data;
				// that.list_page_auto = data.turn_pageAuto_list.data;
				
				let turn_page_txt = data.turn_page_txt;
				that.list_page = that.get_list_page(turn_page_txt);
				that.list_page_auto = that.get_list_page_auto(turn_page_txt);
				uni.hideLoading();
			
				that.isLoaded = true;
				
			},
			get_list_page(turn_page_txt){
				let that = this;
				let list = [];
				//console.log(turn_page_txt)
				let cover = turn_page_txt.cover;
				list.push({
					size: '',
					img: cover.img,
					txt: cover.txt,
				})
				let list_ct = that.get_ct_list(turn_page_txt);
				list_ct.forEach(item=>{
					list.push(item)
				})
				return list;
			},
			get_list_page_auto(turn_page_txt){
				let that = this;
				let list = [];
				//console.log(turn_page_txt)
				let cover = turn_page_txt.cover;
				list = that.get_ct_list(turn_page_txt).reverse();//自动的需要倒序
				that.cover_auto = cover ;
				return list;
			},
			//按每页设置的文字，取出每页放的内容
			get_ct_list(turn_page_txt){
				let that = this;
				let list = [];
				let ct = turn_page_txt.ct ;
				let num_per = turn_page_txt.num_per ;
				let size = 1 ;
				for(let i=0;i<ct.length;i=i+num_per){
					let legth = (i+num_per)<= ct.length ? num_per :(ct.length-i)
					let txt = ct.substr(i,legth)
					//console.log(txt)
					list.push({
						size: size,
						txt: txt,
					})
					size++;
				}
				return list;
			},
		}
	}
</script>

<style lang="scss">

</style>
