<template>
	<view>
		<view @tap="changeFun" class="cf-hengStart xuanShowBox">
			<view :class="isSwitch?'icon-xuanzhong':'icon-weixuan'" :style="style_xuan"  class="iconfont xuanShow"
			 style="font-size: 50upx;"></view>
		</view>
	</view>
	
</template>

<script>
	export default {
		components: {},
		props: {
			switch: {
				type: Boolean,
				default: false,
			},
			themeColor: {
				type: String,
				default: '#33CCCC',
			},
			item: {
				type: Object,
				default () {
					return {
						
					}
				}
			},
			index: {
				type: Number,
				default: 0,
			},
			//是否多组
			isGroup: {
				type: Boolean,
				default: false,
			},
		},
		computed: {
			style_xuan() {
				let that = this ;
				var themeColor = that.themeColor;
				var isSwitch = that.isSwitch;
				var style = '' ;
				
				if(isSwitch){
					style += `color:${themeColor};`;
				}
				return style ;
			},
		},
		created:function(){
			let that = this;
			that.isSwitch = that.switch ;
		},
		data() {
			return {
				isSwitch:false ,
			}
		},
		watch:{
			switch(e){
				let that = this;
				that.isSwitch = e ;
			},
		},
		methods: {
			changeFun(e) {
				//console.log(e)
				let that = this;
				let isChange = false ;
				if(that.isGroup){
					if(!that.isSwitch){
						isChange = true ;
					}
				}else{
					isChange = true ;
					
				}
				if(isChange){
					
					//that.isSwitch = !that.isSwitch;
					let data={
						item:that.item,
						index:that.index,
						isSwitch : that.isSwitch, 
					}
					this.$emit('change', data);
				}
			},
			
			
		}
	}
</script>

<style lang="scss">
	page,
	.content {
		width: 100%;
		height: 100%;
		background-color: #FFFFFF;
	}
	.xuanShowBox{
		padding-left: 40upx;
		.icon-weixuan{
			color: #eaeeed;
		}
	}
	

</style>

