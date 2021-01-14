<template>
	<view >
		<view class="cf-modal-mask" @touchmove.stop.prevent="preventTouchMove" :hidden="!showModal" @tap="closeModal"></view>
		<view class="cf-modal-dialog" :hidden="!showModal">
			<view class="cf-modal-dialog-content">
				<view class="cf-closeBox">
					<view class="iconfont icon-icon-1 cf-close"  @tap="closeModal"></view>
				</view>
				<view class="cf-modalBox">
					<compoundsEnd  style="width: 90%;" :compoundsObj="compoundsObj" :list="list" ></compoundsEnd>
				</view>
			</view>

		</view>
	</view>
</template>

<script>
	import compoundsEnd from "@/components/modal/compoundsEnd.vue";
	export default {
		components: {
			compoundsEnd
		},
		data() {
			return {
				
			}
		},
		props: {
			compoundsObj :{
				type: Object,
				default () {
					return {
						tips : '',
					}
				}
			},
			list: {
				type: Array,
				default () {
					return []
				}
			},
			showModal: {
				type: [Boolean, String],
				default: false
			},
		},
		methods: {
			preventTouchMove() {
				
			},
			
			closeModal: function(e) {
				let that = this;
				that.$emit('closeModalEvent', e);
			},
		}
	}
</script>

<style lang='scss'>
	@import '@/style/specialism/modal.css';
</style>
