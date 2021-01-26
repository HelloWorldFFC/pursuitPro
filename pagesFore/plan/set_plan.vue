  <template>
	<view>
		<view class="cu-form-group">
			<view class="title">提醒说明：</view>
			<input placeholder="输入如2022年考研(不多于15个字)" v-model="name"></input>
		</view>
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
	import comm from '@/api/comm.js'
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
				name:'',
				enddate: '',
			};
		},
		onLoad:function(){
			let that = this;
			that.setData_init();
		},
		onShow:function(){
			let that = this;
			
		},
		methods: {
			setData_init(){
				let that = this;
				
				let data = storage.get_p_t_range();
				that.enddate = '2022-12-23' ;
			},
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
				
				let name = that.name ;
				if (name.trim().length == 0) {
					that.$api.msg('请输入提醒说明！');
					return;
				}
				
				if (!comm.checkStrLen(name)) {
					that.$api.msg('提醒说明字数过长！');
					return;
				}
				let now = new Date() ;
				let enddate = that.enddate;
				let enddate_max = timeConvert.dateAddToString('m',storage.def_Data.maxnum , now) ;
				let timestamp_cha = timeConvert.getTimestamp(enddate_max)<timeConvert.getTimestamp(enddate)?true:false;
				if (timestamp_cha) {
					that.$api.msg('最多设置3年！');
					return;
				}
				
				
				let data = {
					name : that.name,
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
