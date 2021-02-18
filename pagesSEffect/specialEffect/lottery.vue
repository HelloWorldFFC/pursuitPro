<template>
	<view class="content">
		<turnLottery themeColor="#33CCCC" btn_Color="#ffffff" seled_Color="#DB7093" seled_t_Color="#98FB98" un_seled_Color="#00BFFF" un_seled_t_Color="#33CCCC" result="中奖结果"></turnLottery>
		
		<!-- #ifndef MP-WEIXIN -->
		<blow style="margin-top: 40upx;" ref="blowRef" result="中奖结果" :height="150" :width="350" themeColor="#33CCCC" txtColor="#ffffff" :txtFontSize="50" canvasId="canvasId2"></blow>
		<!-- #endif -->
		
		<marquee :list="list" themeColor="#33CCCC" bgColor="#1E90FF" bg_sd_Color="#4169E1" @result="resultFun"></marquee>
		
		<turnplate :list="list_r"></turnplate>
		

	</view>
</template>

<script>
	import menu from '../js/menu.js';
	import marquee from '../components/ay-lottery/marquee.vue';
	import turnplate from '../components/ay-lottery/turnplate.vue';
	import turnLottery from '../components/ay-lottery/turnLottery.vue';
	import blow from '../components/ay-lottery/blow.vue';
	export default {
		components: {
			marquee,
			turnplate,
			turnLottery,
			blow,
		},

		data() {
			return {
				list: [{
					img: "https://cdn.pixabay.com/photo/2021/01/04/07/38/lily-5886728__340.jpg",
					name: "第1个"
				}, {
					img: "https://cdn.pixabay.com/photo/2021/01/04/07/38/lily-5886728__340.jpg",
					name: "第2个"
				}, {
					img: "https://cdn.pixabay.com/photo/2021/01/04/07/38/lily-5886728__340.jpg",
					name: "第3个"
				}, {
					img: "https://cdn.pixabay.com/photo/2021/01/04/07/38/lily-5886728__340.jpg",
					name: "第4个"
				}, {
					img: "https://cdn.pixabay.com/photo/2021/01/04/07/38/lily-5886728__340.jpg",
					name: "第5个"
				}, {
					img: "https://cdn.pixabay.com/photo/2021/01/04/07/38/lily-5886728__340.jpg",
					name: "第6个"
				}, {
					img: "https://cdn.pixabay.com/photo/2021/01/04/07/38/lily-5886728__340.jpg",
					name: "第7个"
				}, {
					img: "https://cdn.pixabay.com/photo/2021/01/04/07/38/lily-5886728__340.jpg",
					name: "第8个"
				}],
				list_r:[{
							index: 0,
							name: '10元红包',
							type: 0,
							img:'https://cdn.pixabay.com/photo/2020/11/23/15/00/butterfly-5770034__340.jpg',
						},
						{
							index: 1,
							name: '谢谢参与',
							type: 1,
							img:'https://cdn.pixabay.com/photo/2020/11/23/15/00/butterfly-5770034__340.jpg',
						},
						{
							index: 2,
							name: '50元红包',
							type: 0,
							img:'https://cdn.pixabay.com/photo/2020/11/23/15/00/butterfly-5770034__340.jpg',
						},
						{
							index: 3,
							name: '谢谢参与',
							type: 1,
							img:'https://cdn.pixabay.com/photo/2020/11/23/15/00/butterfly-5770034__340.jpg',
						},
						{
							index: 4,
							name: '100元话费',
							type: 0,
							img:'https://cdn.pixabay.com/photo/2020/11/23/15/00/butterfly-5770034__340.jpg',
						},
						{
							index: 5,
							name: '谢谢参与',
							type: 1,
							img:'https://cdn.pixabay.com/photo/2020/11/23/15/00/butterfly-5770034__340.jpg',
						},
						{
							index: 6,
							name: '20元红包',
							type: 0,
							img:'https://cdn.pixabay.com/photo/2020/11/23/15/00/butterfly-5770034__340.jpg',
						},
						{
							index: 7,
							name: '谢谢参与',
							type: 1,
							img:'https://cdn.pixabay.com/photo/2020/11/23/15/00/butterfly-5770034__340.jpg',
						},
						{
							index: 8,
							name: '谢谢参与',
							type: 1,
							img:'https://cdn.pixabay.com/photo/2020/11/23/15/00/butterfly-5770034__340.jpg',
						}
					]
			}
		},
		onLoad() {
			let that = this;
			//that.loadData();
			
		},
		onShow() {

		},
		onReady: function() {
			let that = this;

			//#ifndef MP-WEIXIN
			setTimeout(function() {
				that.$refs.blowRef.initCanvas()
			}, 50)
			// #endif

		},
		methods: {
			resultFun(e) {
				let that = this;
				let item = e.item;
				this.$api.msg("恭喜您，抽中了" + item.name)

			},
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
			get_list_page(turn_page_txt) {
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
				list_ct.forEach(item => {
					list.push(item)
				})
				return list;
			},
			get_list_page_auto(turn_page_txt) {
				let that = this;
				let list = [];
				//console.log(turn_page_txt)
				let cover = turn_page_txt.cover;
				list = that.get_ct_list(turn_page_txt).reverse(); //自动的需要倒序
				that.cover_auto = cover;
				return list;
			},
			//按每页设置的文字，取出每页放的内容
			get_ct_list(turn_page_txt) {
				let that = this;
				let list = [];
				let ct = turn_page_txt.ct;
				let num_per = turn_page_txt.num_per;
				let size = 1;
				for (let i = 0; i < ct.length; i = i + num_per) {
					let legth = (i + num_per) <= ct.length ? num_per : (ct.length - i)
					let txt = ct.substr(i, legth)
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
