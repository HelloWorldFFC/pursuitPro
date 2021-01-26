  <template>
	<view>
		
		<view class="cu-form-group">
			<view class="title">时间：</view>
			<picker mode="date" :value="enddate"  @change="DateChange_enddate">
				<view class="picker">
					{{enddate}}
				</view>
			</picker>
		</view>
		<view style="margin-top: 100upx;" @tap="toAdd">
			<button style="width: 400upx;" class="cf-bgcolorTheme">保存</button>
		</view>
	</view>
</template>

<script>
	import preDupliClick from '@/api/preDupliClick.js'
	import storage from '../store/storage.js'
	import timeConvert from '@/api/timeConvert.js'
	export default {
		components: {

		},
		watch: {

		},
		data() {
			return {
				enddate: '',
			};
		},
		onLoad:function(){
			
		},
		onShow:function(){
			let that = this;
			let now = new Date() ;
			let emmeniaUnitCyc = storage.get_p_t_range();
		},
		methods: {
			
			DateChange_enddate(e) {
				let that = this;
				let value = e.detail.value;
				console.log('DateChange_enddate', value)
				that.enddate = value;
			},
			toAdd() {
				let that = this;
				
				let isonce = preDupliClick.setpreDupliClickVal(preDupliClick.preDupli.one);
				if (!isonce) return;
				
				let enddate = that.enddate;
				let data = {
					name : '',
					time : enddate,
				}
				that.$api.msg('保存成功！')
				storage.set_p_t_range(data);
				
				let timerNameBack = setTimeout(function() {
					uni.navigateBack()
					//清除定时器
					clearTimeout(timerNameBack);
				}, 2000);
			},
		},
	}
</script>

<style>
</style>
