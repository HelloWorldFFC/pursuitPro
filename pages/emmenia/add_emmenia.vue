  <template>
	<view>
		<view class="cu-form-group " >
			<view class="title">开始时间：</view>
			<picker mode="date" :value="startdate"  @change="DateChange_startdate">
				<view class="picker">
					{{startdate}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group">
			<view class="title">结束时间：</view>
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
	import preDupliClick from '../../api/preDupliClick.js'
	import comm from '../../api/comm.js'
	import emmenia from '../../api/emmenia.js'
	import storage from '../../store/storage.js'
	import timeConvert from '../../api/timeConvert.js'
	export default {
		components: {

		},
		watch: {

		},
		data() {
			return {
				startdate: '',
				enddate: '',
			};
		},
		onLoad:function(){
			
		},
		onShow:function(){
			let that = this;
			let now = new Date() ;
			that.startdate = timeConvert.dateToString(now) ;
			let emmeniaUnitCyc = storage.getEmmeniaUnitCyc();
			that.enddate = timeConvert.dateAddToString('d',emmeniaUnitCyc, now)
		},
		methods: {
			DateChange_startdate(e) {
				let that = this;
				let value = e.detail.value;
				console.log('DateChange_startdate', value)
				that.startdate = value;
				console.log('storage.getEmmeniaUnitCyc()', storage.getEmmeniaUnitCyc())
				that.enddate = timeConvert.dateAddToString('d',storage.getEmmeniaUnitCyc(), new Date(value))
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
				
				let startdate = that.startdate;
				let enddate = that.enddate;
				let emmeniaList = storage.getEmmeniaList() ;
				let obj = emmenia.dataIscan(startdate,enddate,storage.getEmmeniaUnitCyc(), storage.getEmmeniaCyc(),emmeniaList) ;
				console.log('obj',obj);
				if(obj.iscan){
					let obj = {
						startdate: startdate,
						enddate: enddate,
					}
					emmeniaList.push(obj)
					emmeniaList = emmenia.getsetemmeniaList(emmeniaList);
					that.$api.msg('保存成功！')
					storage.setEmmeniaList(emmeniaList);
					
					let timerNameBack = setTimeout(function() {
						uni.navigateBack()
						//清除定时器
						clearTimeout(timerNameBack);
					}, 2000);
					
				}else{
					that.$api.msg(obj.msg)
				}
			},
		},
	}
</script>

<style>
</style>
