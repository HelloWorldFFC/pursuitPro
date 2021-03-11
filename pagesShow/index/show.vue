<template>
	<view>
		<view v-if="type=='ayImageUpload'">
			<ay-image-upload  :list="uploadTipList" @imgAdd="imgAddFun"></ay-image-upload>
			<view class="cf-btn-m-box"  @tap="toConfirm">
				<view class="cf-btn-m" :style="{'background-color': themeColor }">完成</view>
			</view>
			
		</view>
		
		
		<view class="cf-shuCenter" v-if="type=='ayQrcode'">
			<view style="margin: 40upx;">
				<ayQrcode ref="qrcode" qrcode_id="qrcode" :modal="modal_qr" :url="url" @hideQrcode="hideQrcode" :height="300" :width="300"
				 />
			</view>
			
			<view style="margin: 40upx;">
				<ayQrcode ref="qrcode2"  qrcode_id="qrcode2" :modal="modal_qr" :url="url" @hideQrcode="hideQrcode" :height="300" :width="300" 
				themeColor="#33CCCC"
				/>
			</view>
			
			<view style="margin: 40upx;">
				<ayQrcode ref="qrcode3" qrcode_id="qrcode3" :modal="modal_qr" :url="url" @hideQrcode="hideQrcode" :height="300" :width="300"
				 themeColor="#dd524d"
				 :is_themeImg="true"
				  themeImg="https://cdn.pixabay.com/photo/2016/11/29/13/24/balloons-1869816__340.jpg"
				  :height_img="40" 
				  :width_img="40"/>
			</view>
			<!-- <view class="cf-hengCenter input-box">
				<view style="padding-right: 20upx;">网址:</view>
				<input name='url' v-model="url" type="text" :maxlength="url_maxlength" :placeholder="url" />
			</view>
			<view class="cf-btn-m-box"  @tap="toCrtQrCode">
				<view class="cf-btn-m" :style="{'background-color': themeColor }">生成二维码</view>
			</view> -->
			
		</view>


		<!-- <ayDropdownList v-if="type=='ayDropdownList'" :maxheight="700" :marginLeft="152" :width="70" :isShow="isShow_ddList"
		 :list="seleTypeList" @selectItem="selectItem_ddList">
			<view style="margin-left: 40upx;" @tap="showDropdownList">自定义触发有下拉框的内容</view>
		</ayDropdownList> -->

		<ayPopTips id="popup1" ref="popup1" v-if="type=='ayPopTips_center'" type="center" @closeModal="closeModal_tips"
		 @toConfirm="toConfirm_tips">
			<view>
				<view>欢迎来到自定义内容</view>
			</view>
		</ayPopTips>

		<ayPopTips id="popup1" ref="popup1" v-if="type=='ayPopTips_bottom'" type="bottom" @closeModal="closeModal_tips"
		 @toConfirm="toConfirm_tips">
			<view>
				<view>欢迎来到自定义内容</view>
				<view style="color: #FF0000;">欢迎来到自定义内容</view>
			</view>
		</ayPopTips>

		<ayCardOne v-if="type=='ayCardOne'">

		</ayCardOne>
		<ayCardTwoList v-if="type=='ayCardOneList'" :list="card_list">

		</ayCardTwoList>
		<ayCardOneList v-if="type=='ayCardOneList'" :list="card_list">

		</ayCardOneList>

		<cartsBall v-if="type=='cartsBall'" ref="cartsBall" :ballColor="'#fff'" :zIndex="6" :endPos="{
		        x: 150, y: 650
		    }"
		 :bg_img="'https://cdn.pixabay.com/photo/2019/11/26/03/35/maple-4653495__340.jpg'"></cartsBall>
		<view v-if="type=='cartsBall'" @click="drop_cartsBall($event)">
			<view class="cf-btn-m-box">
				<view class="cf-btn-m" :style="{'background-color': themeColor }">点击跳出来</view>
			</view>
		</view>

		<fadeInOut v-if="type=='fadeInOut'" :list="fade_list"></fadeInOut>

		<aybg v-if="type=='aybg'" :list="mark_list">

			<view>自定义内容</view>
		</aybg>
		<!-- #ifdef MP-WEIXIN -->
		<view class="cf-ad">
			<ad unit-id="adunit-857f5c9dbc28f928" ad-type="grid" grid-opacity="0.8" grid-count="5" ad-theme="white"></ad>
		</view>
		<!-- #endif -->

	</view>
</template>

<script>
	import menu from '../js/menu.js';

	import aybg from '../components/ay-bg/ay-bg.vue'
	import fadeInOut from '../components/ay-springing/fadeInOut.vue'
	import cartsBall from '../components/ay-springing/cartsBall.vue'
	import ayCardTwoList from "../components/ay-card/ay-card-two-list.vue"
	import ayCardOne from "../components/ay-card/ay-card-one.vue"
	import ayCardOneList from "../components/ay-card/ay-card-one-list.vue"
	import ayPopTips from "../components/ay-pop/ay-pop-tips.vue"
	// import ayDropdownList from "../components/ay-dropdown-filter/ay-dropdown-list.vue"

	import ayQrcode from "../components/ay-qrcode/ay-qrcode.vue"

	import ayImageUpload from '../components/ay-img-upload/ay-img-upload.vue'
	export default {
		components: {
			ayImageUpload,
			ayQrcode,

			// ayDropdownList,
			ayPopTips,

			ayCardOne,
			ayCardOneList,
			ayCardTwoList,

			cartsBall,
			fadeInOut,

			aybg,
		},
		data() {
			return {
				type: '',
				fade_list: [

				],
				mark_list: [],
				card_list: [],
				//下拉框
				isShow_ddList: false,
				seleTypeList: [{
						selTip: '测试',
						text: '======',
					},
					{
						selTip: '测试2',
						text: '======',
					},
					{
						selTip: '测试23',
						text: '======',
					},
					{
						selTip: '测试',
						text: '======',
					},
					{
						selTip: '测试2',
						text: '======',
					},
					{
						selTip: '测试23',
						text: '======',
					},
					{
						selTip: '测试',
						text: '======',
					},
					{
						selTip: '测试2',
						text: '======',
					},
					{
						selTip: '测试23',
						text: '======',
					},
					{
						selTip: '测试',
						text: '======',
					},
					{
						selTip: '测试2',
						text: '======',
					},
					{
						selTip: '测试23',
						text: '======',
					},
				],
				//二维码相关参数
				url_maxlength: 1000,
				modal_qr: false,
				url: 'https://ext.dcloud.net.cn/plugin?id=3870', // 要生成的二维码值

				//凭证
				themeColor: '#33CCCC',
				uploadTipList: [{
						name: '凭证1',
						img: '',
						remove: true,
					},
					{
						name: '凭证2',
						img: '',
						remove: true,
					},
					{
						name: '凭证3',
						img: '',
						remove: true,
					},
				],

			}
		},
		onLoad(options) {
			let that = this;

			let data = options.data ? JSON.parse(decodeURIComponent(options.data)) : false;
			////console.log(data)
			if (data) {
				that.setDate_init(data)
			}

			that.pageShowHander();
			that.loadData()
		},
		methods: {
			//加入购物车效果
			drop_cartsBall() {
				this.$refs.cartsBall.drop({
					x: 5,
					y: 200
				})
			},
			//弹出框
			toConfirm_tips() {
				this.$refs.popup1.close();
			},
			closeModal_tips() {
				this.$refs.popup1.close();
			},
			//下拉框
			showDropdownList() {
				let that = this;
				that.isShow_ddList = !that.isShow_ddList;
			},
			selectItem_ddList(e) {
				let that = this;
				console.log('选中了' + JSON.stringify(e.item))
				this.$api.msg_modal('选中了' + JSON.stringify(e.item))
				that.isShow_ddList = false;
			},
			// 展示二维码
			showQrcode() {
				let _this = this;
				this.modal_qr = true;
				// uni.showLoading()
				setTimeout(function() {
					// uni.hideLoading()
					_this.$refs.qrcode.crtQrCode();
					_this.$refs.qrcode2.crtQrCode();
					_this.$refs.qrcode3.crtQrCode();
				}, 50)
			},
			//传入组件的方法
			hideQrcode() {
				this.modal_qr = false;
			},
			toCrtQrCode() {
				let _this = this;
				let url = _this.url.trim();
				let url_maxlength = _this.url_maxlength;

				if (url === "") {
					_this.$api.msg('请输入网址')
					return;
				}

				if (url.length > url_maxlength) {
					_this.$api.msg('网址过长，超过' + url_maxlength)
					return;
				}

				uni.showToast({
					title: '生成中...',
					icon: 'loading',
					duration: 2000
				});
				var st = setTimeout(function() {
					uni.hideToast()
					//绘制二维码
					_this.$refs.qrcode.crtQrCode()
					clearTimeout(st);
				}, 2000)

			},

			//凭证
			imgAddFun(e) {
				let that = this;
				console.log(e)
				that.uploadTipList = e;
			},
			toConfirm() {
				let that = this;
				let isHaveNull = false;
				let uploadTipList = that.uploadTipList;
				if (uploadTipList.length < 3) {
					isHaveNull = true;
				} else {
			
					for (let i = 0; i < uploadTipList.length; i++) {
						let img = uploadTipList[i].img;
						if (img.length < 1) {
							isHaveNull = true;
							break;
						}
					}
			
				}
				if (isHaveNull) {
					that.$api.msg('资料上传不完善！请补充。');
					return;
				}
			
				that.$api.msg('上传成功！');
			
				let navBack = setTimeout(function() {
					uni.navigateBack({});
					clearTimeout(navBack);
				}, 800)
			
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

				that.card_list = data.card_list.data;
				that.fade_list = data.fade_list.data;
				that.mark_list = data.mark_list.data;

				if (that.type == 'ayQrcode') {
					that.showQrcode(); //一加载生成二维码
				} else if (that.type.substr(0, 10) == 'ayPopTips_') {
					this.$refs.popup1.open(); //弹出确认框
				}

				uni.hideLoading();

				that.isLoaded = true;

			},

			pageShowHander() {
				let that = this;

			},
			setDate_init(data) {
				let that = this;

				uni.setNavigationBarTitle({
					title: data.name
				})

				that.type = data.type;
			},

		},
		onReady() {
			let that = this;


		},
		onShow: function() {
			let that = this;


		},
		onHide: function() {
			let that = this;

		},
		onUnload() {
			let that = this;

		},

	}
</script>

<style lang="scss">

</style>
