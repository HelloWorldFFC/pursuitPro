  <template>
	<view>
		<view class="cu-form-group">
			<view class="title">月周期天数：</view>
			<picker @change="changemouth" :value="mouthLength" :range="mouthTime">
				<view class="picker">
					{{mouthLength>-1?mouthTime[mouthLength]:'请选择'}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group">
			<view class="title">每次天数：</view>
			<picker @change="changeunit" :value="unitLength" :range="unitTime">
				<view class="picker">
					{{unitLength>-1?unitTime[unitLength]:'请选择'}}
				</view>
			</picker>
		</view>
		<view style="margin-top: 100upx;" @tap="toSave">
			<button style="width: 400upx;" class="cf-bgcolorTheme">完成</button>
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
				unitLength : -1 ,
				unitTime  : ['2', '3', '4', '5', '6', '7', '8', '9', '10'],
				mouthLength : -1,
				mouthTime : ['20', '21', '22', '23', , '24', '25', '26', '27', '28', '29', '30', '31', '32', '33'],
			};
		},
		onLoad:function(){
			let that = this;
		},
		onShow:function(){
			let that = this;
			that.setShowData();
		},
		methods: {
			setShowData(){
				let that = this ;
				let emmeniaCyc = storage.getEmmeniaCyc();
				let emmeniaUnitCyc = storage.getEmmeniaUnitCyc();
				console.log(emmeniaUnitCyc,emmeniaCyc)
				let mouthTime = that.mouthTime ;
				let unitTime = that.unitTime ;
				
				for(let i= 0 ; i < mouthTime.length ; i++){
					let item = mouthTime[i];
					if(parseInt(item) == emmeniaCyc){
						that.mouthLength = i ;
						break ;
					}
				}
				
				for(let i = 0;i < unitTime.length; i++){
					let item = unitTime[i];
					if(parseInt(item) == emmeniaUnitCyc){
						that.unitLength = i ;
						break ;
					}
				}
			},
			//选择续费时长
			changemouth(e) {
				let that = this ;
				let value = e.detail.value ;
				console.log('changemouth',value)
				that.mouthLength = value ;
			},
			changeunit(e){
				let that = this ;
				let value = e.detail.value ;
				console.log('changeunit',value)
				that.unitLength = value ;
			},
			
			toSave() {
				let that = this;
				
				let isonce = preDupliClick.setpreDupliClickVal(preDupliClick.preDupli.one);
				if (!isonce) return;
				
				let emmeniaCyc= that.mouthTime[that.mouthLength];
				let emmeniaUnitCyc = that.unitTime[that.unitLength];
				that.$api.msg('保存成功！')
				
				storage.setEmmeniaCyc(emmeniaCyc);
				storage.setEmmeniaUnitCyc(emmeniaUnitCyc);
				
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
