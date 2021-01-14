<template>
	<view class="" :style="{ height: isWidth, overflowX: 'auto', marginLeft: statusBarHeight }">
		<view class="myFlex" v-if="tableData.length != 0">
			<view class="top1" style="z-index: 9;left: 0;background-color: #FFFFFF;">
				<view class="myFlex top2" style="top: 0;">
					<view class="tableHead" v-for="(item1, index1) in tableHead" :key="index1">
						<view class=" tableColmn tableColmnT" style="background-color: #FDEDD6;font-size: 12px;">{{ item1.name }}</view>
					</view>
				</view>
				<view class="myFlex">
					<view class="">
						<block v-for="(item, index) in centerList" :key="index">
							<view @click="toCenter(item.name)" class="centerTableHead" :style="{ background: item.bgColor }">
								{{ item.name }}
							</view>
						</block>
					</view>
					<view class="">
						<block v-for="(item, index) in tableData" :key="index">
							<view @click="getIndex(index)" :style="{ background: isIndex == index ? '#fffaea;' : '' }"  class="tableColmn">
								{{ item.name }}
							</view>
						</block>
					</view>
					<view class="">
						<block v-for="(item, index) in tableData" :key="index">
							<view @click="getIndex(index)" :style="{ background: isIndex == index ? '#fffaea;' : '' }"  class="tableColmn">
								{{ item.age }}
							</view>
						</block>
					</view>
					<view class="">
						<block v-for="(item, index) in tableData" :key="index">
							<view @click="getIndex(index)" :style="{ background: isIndex == index ? '#fffaea;' : '' }" class="tableColmn tableColmnLei">
								{{ item.color }}
							</view>
						</block>
					</view>
					<view class="">
						<block v-for="(item, index) in tableData" :key="index">
							<view @click="getIndex(index)" class="tableColmn" :style="{ background: isIndex == index ? '#fffaea;' : '' }">
								{{ item.region }}
							</view>
						</block>
					</view>
					<view class="">
						<block v-for="(item, index) in tableData" :key="index">
							<view @click="getIndex(index)" class="tableColmn" :style="{ background: isIndex == index ? '#fffaea;' : '' }">
								{{ item.address }}
							</view>
						</block>
					</view>
					<view class="">
						<block v-for="(item, index) in tableData" :key="index">
							<view @click="getIndex(index)" :style="{ background: isIndex == index ? '#fffaea;' : '' }"  class="tableColmn">
								{{ item.height }}
							</view>
						</block>
					</view>
					<view class="">
						<block v-for="(item, index) in tableData" :key="index">
							<view @click="getIndex(index)" :style="{ background: isIndex == index ? '#fffaea;' : '' }" class="tableColmn tableColmnLei">
								{{ item.width }}
							</view>
						</block>
					</view>
					<view class="">
						<block v-for="(item, index) in tableData" :key="index">
							<view @click="getIndex(index)" class="tableColmn" :style="{ background: isIndex == index ? '#fffaea;' : '' }">
								{{ item.weight }}
							</view>
						</block>
					</view>
					<view class="">
						<block v-for="(item, index) in tableData" :key="index">
							<view @click="getIndex(index)" class="tableColmn" :style="{ background: isIndex == index ? '#fffaea;' : '' }">
								{{ item.hot }}
							</view>
						</block>
					</view>
				</view>
			</view>

			<view class="">
				<view class="myFlex top3" style="top: 0;">
					<view class="tableHead" v-for="(item1, index1) in tableHeadT" :key="index1">
						<view class="tableColmn tableColmnT" style="background-color: #FDEDD6;font-size: 12px;">{{ item1.name }}</view>
					</view>
				</view>
				<view class="myFlex">
						<view class="">
							<block v-for="(item, index) in tableData" :key="index">
								<view @click="getIndex(index)" :style="{ background: isIndex == index ? '#fffaea;' : '' }"  class="tableColmn">
									{{ item.name }}
								</view>
							</block>
						</view>
						<view class="">
							<block v-for="(item, index) in tableData" :key="index">
								<view @click="getIndex(index)" :style="{ background: isIndex == index ? '#fffaea;' : '' }"  class="tableColmn">
									{{ item.age }}
								</view>
							</block>
						</view>
						<view class="">
							<block v-for="(item, index) in tableData" :key="index">
								<view @click="getIndex(index)" :style="{ background: isIndex == index ? '#fffaea;' : '' }" class="tableColmn tableColmnLei">
									{{ item.color }}
								</view>
							</block>
						</view>
						<view class="">
							<block v-for="(item, index) in tableData" :key="index">
								<view @click="getIndex(index)" class="tableColmn" :style="{ background: isIndex == index ? '#fffaea;' : '' }">
									{{ item.region }}
								</view>
							</block>
						</view>
						<view class="">
							<block v-for="(item, index) in tableData" :key="index">
								<view @click="getIndex(index)" class="tableColmn" :style="{ background: isIndex == index ? '#fffaea;' : '' }">
									{{ item.address }}
								</view>
							</block>
						</view>
						<view class="">
							<block v-for="(item, index) in tableData" :key="index">
								<view @click="getIndex(index)" :style="{ background: isIndex == index ? '#fffaea;' : '' }"  class="tableColmn">
									{{ item.height }}
								</view>
							</block>
						</view>
						<view class="">
							<block v-for="(item, index) in tableData" :key="index">
								<view @click="getIndex(index)" :style="{ background: isIndex == index ? '#fffaea;' : '' }" class="tableColmn tableColmnLei">
									{{ item.width }}
								</view>
							</block>
						</view>
						<view class="">
							<block v-for="(item, index) in tableData" :key="index">
								<view @click="getIndex(index)" class="tableColmn" :style="{ background: isIndex == index ? '#fffaea;' : '' }">
									{{ item.weight }}
								</view>
							</block>
						</view>
						<view class="">
							<block v-for="(item, index) in tableData" :key="index">
								<view @click="getIndex(index)" class="tableColmn" :style="{ background: isIndex == index ? '#fffaea;' : '' }">
									{{ item.hot }}
								</view>
							</block>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			// 判断刘海屏
			// 状态栏高度：
			statusBarHeight: null,
			isWidth: null,
			
			isIndex: null
		};
	},
	props: {
		tableData: {
			type: [Array, Boolean],
			default() {
				return [];
			}
		},
		tableHead: {
			type: [Array],
			default() {
				return [];
			}
		},
		tableHeadT: {
			type: [Array],
			default() {
				return [];
			}
		},
		centerList: {
			type: [Array],
			default() {
				return [];
			}
		},
	},
	created() {
		uni.getSystemInfo({
			success: res => {
				console.log(res);
				// 给定表格的高度
				this.isWidth = res.screenHeight - 60 + 'px';
				if (res.statusBarHeight > 43) {
					this.statusBarHeight = res.statusBarHeight + 'px';
				} else {
					this.statusBarHeight = 0;
				}
			}
		});
	},
	methods: {
		getIndex(index) {
			this.isIndex = index;
		},
		toCenter(name){
			uni.showToast({
				title:name
			})
		}
	}
};
</script>

<style lang="scss" scoped>
.myFlex {
	display: flex;
}
.top1,
.top2,
.top3 {
	position: sticky;
	position: -webkit-sticky;
}
.centerTableHead{
	border-right: 1rpx solid #d5d5d5;
	border-bottom: 1rpx solid #d5d5d5;
	width: 50px;
	height: 91px;
	line-height: 91px;
	text-align: center;
	font-size: 12px;
	color: #333333;
}
.tableHead {
	border-right: 1rpx solid #d5d5d5;
	border-bottom: 1rpx solid #d5d5d5;
	width: 50px;
	height: 30px;
	line-height: 30px;
	text-align: center;
	font-size: 12px;
	color: #333333;
}

.tableColmn {
	border-right: 1rpx solid #d5d5d5;
	border-bottom: 1rpx solid #d5d5d5;
	width: 50px;
	height: 30px;
	line-height: 30px;
	text-align: center;
	font-size: 10px;
	color: #333333;
}


</style>
