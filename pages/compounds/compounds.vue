  <template>
	<view style="width: 100%;">
		<!-- #ifdef MP-WEIXIN -->
		<!-- <kefu></kefu> -->
		<!-- #endif -->
		<view class="cu-form-group">
			<view class="title">周期：</view>
			<picker @change="changecyc" :value="cycLength" :range="cycList">
				<view class="picker">
					{{cycList[cycLength]}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group">
			<view class="title">周期投入（元）：</view>
			<picker @change="changecycInput" :value="cycInputLength" :range="cycInputList">
				<view class="picker">
					{{cycInputList[cycInputLength]}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group">
			<view class="title">预计年收益率（%）：</view>
			<picker @change="changereturnRate_Y" :value="returnRate_YLength" :range="returnRate_YList">
				<view class="picker">
					{{returnRate_YList[returnRate_YLength]}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group">
			<view class="title">当前年龄（岁）：</view>
			<picker @change="changecurAge" :value="curAgeLength" :range="curAgeList">
				<view class="picker">
					{{curAgeList[curAgeLength]}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group">
			<view class="title">目标退休年龄（岁）：</view>
			<picker @change="changeaimAge" :value="aimAgeLength" :range="aimAgeList">
				<view class="picker">
					{{aimAgeList[aimAgeLength]}}
				</view>
			</picker>
		</view>
		<view style="margin-top: 100upx;" @tap="toConfirm">
			<button style="width: 400upx;" class="cf-bgcolorTheme">确定计算</button>
		</view>
		<compoundsEndModal :compoundsObj="compoundsObj" :list="list" :showModal="showModal" @closeModalEvent="closeModal"></compoundsEndModal> 
		
		
		
		<view class="cf-bottomCenter cf-colorHui" >如有错误请联系客服</view>
		
		<!-- #ifdef MP-WEIXIN -->
		<view class="cf-ad">
			<ad unit-id="adunit-da9ca613908f616c" ad-intervals="30"></ad>
		</view>
		<!-- #endif -->
		
	</view>
</template>

<script>
	import kefu from '@/components/kefu.vue';
	import preDupliClick from '../../api/preDupliClick.js'
	import comm from '../../api/comm.js'
	import emmenia from '../../api/emmenia.js'
	import storage from '../../store/storage.js'
	import timeConvert from '../../api/timeConvert.js'
	import compoundsEndModal from '@/components/modal/compoundsEndModal.vue';
	export default {
		components: {
			compoundsEndModal ,
			kefu
		},
		watch: {

		},
		data() {
			return {
				compoundsObj : {},
				showModal : false ,
				list : [],
				cycLength : 0,
				cycList : ['每周','每2周', '每月', '每季', '每年'],
				cycUnitList : [4*12,2*12, 12, 4, 1],
				
				cycInputLength : 0,
				cycInputList : ['200','50','100','300','400','500','800','1000','1500','2000','2500','3000','3500','4000','4500','5000','6000','7000','8000','9000','10000','15000','20000','25000','30000','35000'],
				
				returnRate_YLength  : 0 ,
				returnRate_YList  : ['10','5','6','7','8','9','2','3','4','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','35','40','45','50','80','100'],
				
				curAgeLength : 0,
				curAgeList : [],
				
				aimAgeLength : 0,
				aimAgeList : [],
			};
		},
		onLoad:function(){
			let that = this;
			that.setOptData();
		},
		onShow:function(){
			let that = this;
			
		},
		// #ifdef MP-WEIXIN
		//微信小程序的分享
		onShareAppMessage: function(options) {
		
		},
		// #endif
		methods: {
			setOptData(){
				let that = this ;
				let cycInputList = ['200','50'] ;
				let returnRate_YList = ['10','5'] ;
				let curAgeList = ['26','22', '23','24', '25'] ;
				let aimAgeList = ['60'] ;
				
				for(let i = 27 ;i< 80 ; i++){
					curAgeList.push(i)
				}
				
				for(let i = 40 ;i< 60 ; i++){
					aimAgeList.push(i)
				}
				
				for(let i = 61 ;i<= 80 ; i++){
					aimAgeList.push(i)
				}
				// that.cycInputList = cycInputList ;
				// that.returnRate_YList = returnRate_YList ;
				that.curAgeList = curAgeList ;
				that.aimAgeList = aimAgeList ;
				
			},
			setcompoundsObj(){
				let that = this ;
				let compoundsObj = {
					cyc :  that.cycList[that.cycLength] ,
					cycUnit : that.cycUnitList[that.cycLength] ,
					cycInput : parseInt( that.cycInputList[that.cycInputLength]) ,
					returnRate_Y : parseInt(that.returnRate_YList[that.returnRate_YLength]) ,
					curAge : parseInt(that.curAgeList[that.curAgeLength]) ,
					aimAge : parseInt(that.aimAgeList[that.aimAgeLength]) ,
				};
				that.compoundsObj = compoundsObj ;
				that.setcompoundslist(compoundsObj);
			},
			setcompoundslist(compoundsObj){
				let that = this ;
				let list = [] ;
				let cycInput = compoundsObj.cycInput ;
				let cycUnit =  compoundsObj.cycUnit ;
				let returnRate_Y =  compoundsObj.returnRate_Y ;
				let curAge = compoundsObj.curAge ;
				let aimAge = compoundsObj.aimAge ;
				let onceIncome =  cycInput * cycUnit * (1+ returnRate_Y*0.01 ) ;
				console.log('onceIncome',onceIncome)
				let lastIncome = 0 ;
				for(let i = curAge ;i< aimAge ; i++){
					let name = i+1;
					let income = lastIncome * (1+ returnRate_Y*0.01 ) + onceIncome ;
					//console.log('income',income)
					list.push({
						name : name,
						income : income.toFixed(2),
						difference : (income - lastIncome).toFixed(2),
					});
					lastIncome = income ;
				}
				
				that.list = list ;
			},
			closeModal(e){
				let that = this ;
				that.showModal = false ;
			},
			
			//选择周期
			changecyc(e) {
				let that = this ;
				let value = e.detail.value ;
				console.log('cycLength',value)
				that.cycLength = value ;
			},
			changecycInput(e) {
				let that = this ;
				let value = e.detail.value ;
				that.cycInputLength = value ;
			},
			
			changereturnRate_Y(e){
				let that = this ;
				let value = e.detail.value ;
				that.returnRate_YLength  = value ;
			},
			changecurAge(e){
				let that = this ;
				let value = e.detail.value ;
				that.curAgeLength  = value ;
			},
			changeaimAge(e){
				let that = this ;
				let value = e.detail.value ;
				that.aimAgeLength  = value ;
			},
			toConfirm() {
				let that = this;
				
				let isonce = preDupliClick.setpreDupliClickVal(preDupliClick.preDupli.one);
				if (!isonce) return;
				
				let curAge = parseInt(that.curAgeList[that.curAgeLength]) ;
				let aimAge = parseInt(that.aimAgeList[that.aimAgeLength]) ;
				
				if (curAge>= aimAge){
					that.$api.msg('当前年龄应小于目标退休年龄！')
					return;
				} 
				
				that.showModal = true ;
				that.setcompoundsObj();
			},
			
		},
	}
</script>

<style>
</style>
