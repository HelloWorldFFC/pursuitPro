<template>
	<view>
		
		
		<marquee :list="list" @result="resultFun"></marquee>
		<turnplate></turnplate>
		<turnLottery></turnLottery>
	</view>
</template>

<script>
	import menu from '../js/menu.js';
	import marquee from '../components/ay-lottery/marquee.vue';
	import turnplate from '../components/ay-lottery/turnplate.vue';
	import turnLottery from '../components/ay-lottery/turnLottery.vue';
	export default {
		components: {
			marquee,
			turnplate,
			turnLottery,
		},

		data() {
			return {
				list: [{
					img: "https://cdn.pixabay.com/photo/2021/01/04/07/38/lily-5886728__340.jpg",
					name: "酷表情"
				}, {
					img: "https://cdn.pixabay.com/photo/2021/01/04/07/38/lily-5886728__340.jpg",
					name: "流鼻血表情"
				}, {
					img: "https://cdn.pixabay.com/photo/2021/01/04/07/38/lily-5886728__340.jpg",
					name: "冷表情"
				}, {
					img: "https://cdn.pixabay.com/photo/2021/01/04/07/38/lily-5886728__340.jpg",
					name: "色表情"
				}, {
					img: "https://cdn.pixabay.com/photo/2021/01/04/07/38/lily-5886728__340.jpg",
					name: "吐表情"
				}, {
					img: "https://cdn.pixabay.com/photo/2021/01/04/07/38/lily-5886728__340.jpg",
					name: "睡觉表情"
				}, {
					img: "https://cdn.pixabay.com/photo/2021/01/04/07/38/lily-5886728__340.jpg",
					name: "哭表情"
				}, {
					img: "https://cdn.pixabay.com/photo/2021/01/04/07/38/lily-5886728__340.jpg",
					name: "奋斗表情"
				}],
			}
		},
		onLoad() {
			let that = this;
			//that.loadData();
		},
		onShow() {

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

<style>
</style>
