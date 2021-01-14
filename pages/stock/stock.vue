<template>
	<view view class="content">
		<navTop></navTop>
		<view @tap="toDetail_stock">详情示例</view>
		<view @tap="toDetail_stock_linkage">详情联动示例</view>
		<fitable :tableList="tableList"></fitable>
	</view>
</template>

<script>
	import fitable from "@/components/mytable/fitable.vue";
	import navTop from '@/components/navTop.vue';
	export default {
		components: {
			navTop,
			fitable,
		},
		data() {
			return {
				tableList: {
					"title": '现金流量表',
					"categories": ['2002', '2001', '1904', '1903', '1902', '1901', '1804', '1803', '1802', '1801'],
					"series": [{
						"name": '经营活动产生',
						"subItem": [{
							"incomeDetail": [{
								"name": '销售商品',
								"data": [820, 890, 810, 800, 890, 810, 800, 890, 810, 910]
							}, {
								"name": '收到税费返还',
								"data": [812, 890, 810, 810, 890, 801, 800, 890, 810, 901]
							}, {
								"name": '收到其他有关现金',
								"data": [813, 809, 801, 801, 809, 841, 890, 819, 801, 901]
							}, ],
							"incomeSum": {
								"name": '现金流入小计',
								"data": [812, 892, 861, 821, 819, 841, 880, 849, 831, 931]
							},
							"outcomeDetail": [{
								"name": '购买商品支付劳务',
								"data": [811, 891, 811, 811, 891, 811, 801, 891, 811, 911]
							}, {
								"name": '支付给职工以及为职工支付',
								"data": [814, 894, 811, 813, 892, 811, 801, 892, 811, 911]
							}, ],
							"outcomeSum": {
								"name": '现金流出小计',
								"data": [812, 892, 861, 821, 819, 841, 880, 849, 831, 931]
							},
							"total": {
								"name": '现金流量净额',
								"data": [812, 892, 861, 821, 819, 841, 880, 849, 831, 931]
							},
						}, ],
					}, 
					{
						"name": '投资活动产生',
						"subItem": [{
							"incomeDetail": [{
								"name": '销售商品',
								"data": [820, 890, 810, 800, 890, 810, 800, 890, 810, 910]
							}, {
								"name": '收到税费返还',
								"data": [812, 890, 810, 810, 890, 801, 800, 890, 810, 901]
							}, {
								"name": '收到其他有关现金',
								"data": [813, 809, 801, 801, 809, 841, 890, 819, 801, 901]
							}, ],
							"incomeSum": {
								"name": '现金流入小计',
								"data": [812, 892, 861, 821, 819, 841, 880, 849, 831, 931]
							},
							"outcomeDetail": [{
								"name": '购买商品支付劳务',
								"data": [811, 891, 811, 811, 891, 811, 801, 891, 811, 911]
							}, {
								"name": '支付给职工以及为职工支付',
								"data": [814, 894, 811, 813, 892, 811, 801, 892, 811, 911]
							}, ],
							"outcomeSum": {
								"name": '现金流出小计',
								"data": [812, 892, 861, 821, 819, 841, 880, 849, 831, 931]
							},
							"total": {
								"name": '现金流量净额',
								"data": [812, 892, 861, 821, 819, 841, 880, 849, 831, 931]
							},
						}, ],
					}, 
					{
						"name": '筹资活动产生',
						"subItem": [{
							"incomeDetail": [{
								"name": '销售商品',
								"data": [820, 890, 810, 800, 890, 810, 800, 890, 810, 910]
							}, {
								"name": '收到税费返还',
								"data": [812, 890, 810, 810, 890, 801, 800, 890, 810, 901]
							}, {
								"name": '收到其他有关现金',
								"data": [813, 809, 801, 801, 809, 841, 890, 819, 801, 901]
							}, ],
							"incomeSum": {
								"name": '现金流入小计',
								"data": [812, 892, 861, 821, 819, 841, 880, 849, 831, 931]
							},
							"outcomeDetail": [{
								"name": '购买商品支付劳务',
								"data": [811, 891, 811, 811, 891, 811, 801, 891, 811, 911]
							}, {
								"name": '支付给职工以及为职工支付',
								"data": [814, 894, 811, 813, 892, 811, 801, 892, 811, 911]
							}, ],
							"outcomeSum": {
								"name": '现金流出小计',
								"data": [812, 892, 861, 821, 819, 841, 880, 849, 831, 931]
							},
							"total": {
								"name": '现金流量净额',
								"data": [812, 892, 861, 821, 819, 841, 880, 849, 831, 931]
							},
						}, ],
					}, ],
				},
			}
		},
		methods: {
			toDetail_stock() {
				let url = `/pages/stock/detail_s`;
				uni.navigateTo({
					url: url,
				})
			},
			toDetail_stock_linkage() {
				let url = `/pages/stock/detail_s_linkage`;
				uni.navigateTo({
					url: url,
				})
			},
		}
	}
</script>

<style lang="scss">
	page,
	.content {

		width: 100%;
		height: 100%;
		overflow: hidden;

		background-color: $page-color-base;
	}
</style>
