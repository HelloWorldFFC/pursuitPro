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
		<view style="margin-top: 100upx;" @tap="toEdit">
			<button style="width: 400upx;" class="cf-bgcolorTheme">确认</button>
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
				emmeniaindex : 0,
				startdate: '',
				enddate: '',
			};
		},
		onLoad:function(options){
			let that = this;
			let items = JSON.parse(decodeURIComponent(options.items) );
			let startdate = items.startdate ;
			let enddate = items.enddate ;
			let emmeniaList = storage.getEmmeniaList() ;
			for(let i=0;i<emmeniaList.length;i++){
				let item = emmeniaList[i];
				console.log(item.startdate)
				if(item.startdate == startdate){
					that.emmeniaindex = emmeniaList.indexOf(item)
					break;
				}
			}
			that.startdate = startdate ;
			that.enddate = enddate ;
		},
		onShow:function(){
			
		},
		methods: {
			DateChange_startdate(e) {
				let that = this;
				let value = e.detail.value;
				console.log('DateChange_startdate', value)
				that.startdate = value;
				that.enddate = timeConvert.dateAddToString('d',storage.getEmmeniaUnitCyc(), new Date(value))
			},
			DateChange_enddate(e) {
				let that = this;
				let value = e.detail.value;
				console.log('DateChange_enddate', value)
				that.enddate = value;
			},
			toEdit() {
				
				let isonce = preDupliClick.setpreDupliClickVal(preDupliClick.preDupli.one);
				if (!isonce) return;
				
				let that = this;
				let startdate = that.startdate;
				let enddate = that.enddate;
				let emmeniaList = storage.getEmmeniaList() ;
				let emmeniaindex = that.emmeniaindex ;
				let obj = emmenia.dataIscan(startdate,enddate,storage.getEmmeniaUnitCyc(), storage.getEmmeniaCyc(),emmeniaList,emmeniaindex) ;
				console.log('obj',obj);
				if(obj.iscan){
					
					emmeniaList[emmeniaindex].startdate = startdate ;
					emmeniaList[emmeniaindex].enddate = enddate ;
					
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
