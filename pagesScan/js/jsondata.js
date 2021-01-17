//http://api.map.baidu.com/lbsapi/getpoint/
const ministry_url = {
	//中华人民共和国文化和旅游部 ministry of culture and tourism of the people's republic of china
	cult_tour: 'https://www.mct.gov.cn/',
	cult_tour_scenicspot_5A: 'https://zwfw.mct.gov.cn/scenicspot',

}
const scenicspotList = {
	"success": true,
	"data": [{
			province: '陕西',
			scenicspotList: [{
				id: '0100001',
				title: '陕西历史博物馆',
				subtitle: '不含临时、专题展览',
				city: '西安市',
				area: '雁塔区',
				grade: '5A',
				address: {
					name: '',
					longitude: 108.961495, //经度
					latitude: 34.230523, //纬度
					address: '西安市雁塔区小寨东路91号'
				},
				phone: '02985269547',
			}, ],
		},
		{
			province: '北京',
			scenicspotList: [{
					id: '0100001',
					title: '北京八达岭－慕田峪长城旅游区',
					subtitle: '2007',
					city: '北京市',
					area: '怀柔区',
					grade: '5A',
					address: {
						name: '',
						longitude: 116.571611, //经度
						latitude: 40.437442, //纬度
						address: '怀柔区渤海镇慕田峪村'
					},
					phone: '01061626022',
				},
				{
					id: '0100002',
					title: '北京市奥林匹克公园',
					subtitle: '2012',
					city: '北京市',
					area: '朝阳区',
					grade: '5A',
					address: {
						name: '',
						longitude: 116.399206, //经度
						latitude: 39.999245, //纬度
						address: '朝阳区北辰东路15号'
					},
					phone: '',
				},
				{
					id: '0100003',
					title: '北京市明十三陵景区',
					subtitle: '2011',
					city: '北京市',
					area: '昌平区',
					grade: '5A',
					address: {
						name: '',
						longitude: 116.231846, //经度
						latitude: 40.263544, //纬度
						address: '昌平区十三陵镇昌赤路'
					},
					phone: '01060761424',
				},
				{
					id: '0100004',
					title: '北京市海淀区圆明园景区',
					subtitle: '2019',
					city: '北京市',
					area: '海淀区',
					grade: '5A',
					address: {
						name: '',
						longitude: 116.309804, //经度
						latitude: 40.012658, //纬度
						address: '海淀区清华西路28号'
					},
					phone: '01062569609',
				},
				{
					id: '0100005',
					title: '天坛公园',
					subtitle: '2007',
					city: '北京市',
					area: '东城区',
					grade: '5A',
					address: {
						name: '',
						longitude: 116.417246, //经度
						latitude: 39.888243, //纬度
						address: '东城区天坛东里甲1号'
					},
					phone: '01067028866',
				},
				{
					id: '0100006',
					title: '恭王府景区',
					subtitle: '2012',
					city: '北京市',
					area: '西城区',
					grade: '5A',
					address: {
						name: '',
						longitude: 116.392599, //经度
						latitude: 39.943381, //纬度
						address: '西城区前海西街17号'
					},
					phone: '01083288149',
				},
				{
					id: '0100007',
					title: '故宫博物院',
					subtitle: '2007',
					city: '北京市',
					area: '东城区',
					grade: '5A',
					address: {
						name: '',
						longitude: 116.403414, //经度
						latitude: 39.924091, //纬度
						address: '东城区景山前街4号'
					},
					phone: '01085007062',
				},
				{
					id: '0100008',
					title: '颐和园',
					subtitle: '2007',
					city: '北京市',
					area: '海淀区',
					grade: '5A',
					address: {
						name: '',
						longitude: 116.278749, //经度
						latitude: 40.004869, //纬度
						address: '海淀区新建宫门路19号'
					},
					phone: '01062881144',
				},

			],
		},
		{
			province: '天津',
			scenicspotList: [{
					id: '0200001',
					title: '天津古文化街旅游区（津门故里）',
					subtitle: '2007',
					city: '天津市',
					area: '南开区',
					grade: '5A',
					address: {
						name: '',
						longitude: 117.199184, //经度
						latitude: 39.149532, //纬度
						address: '南开区通北路'
					},
					phone: '02227356128',
				},
				{
					id: '0200002',
					title: '天津盘山风景名胜区',
					subtitle: '2007',
					city: '天津市',
					area: '蓟州区',
					grade: '5A',
					address: {
						name: '',
						longitude: 117.288913, //经度
						latitude: 40.102982, //纬度
						address: '蓟州区官庄镇莲花岭村'
					},
					phone: '02229828186',
				},

			],
		},
		
		{
			province: '河北',
			scenicspotList: [{
					id: '0300001',
					title: '保定市安新白洋淀景区',
					subtitle: '2007',
					city: '保定市',
					area: '安新县',
					grade: '5A',
					address: {
						name: '',
						longitude: 115.996445, //经度
						latitude: 38.942194, //纬度
						address: '保定市安新县旅游东路'
					},
					phone: '03125116352',
				},
				{
					id: '0300002',
					title: '唐山市清东陵景区',
					subtitle: '2015',
					city: '唐山市',
					area: '遵化市',
					grade: '5A',
					address: {
						name: '',
						longitude: 117.690626, //经度
						latitude: 40.180984, //纬度
						address: '唐山市遵化市六盘营村清东陵支线'
					},
					phone: '03156945475',
				},
				{
					id: '0300003',
					title: '承德避暑山庄及周围寺庙景区',
					subtitle: '2007',
					city: '承德市',
					area: '',
					grade: '5A',
					address: {
						name: '',
						longitude: 117.953661, //经度
						latitude: 40.988599, //纬度
						address: '中华路街道山庄东路6号(老二中院内)'
					},
					phone: '03142030275',

				},
				{
					id: '0300004',
					title: '河北保定野三坡景区',
					subtitle: '2011',
					city: '保定市',
					area: '涞水县',
					grade: '5A',
					address: {
						name: '',
						longitude: 115.392338, //经度
						latitude: 39.674105, //纬度
						address: '保定市涞水县三坡镇苟各庄村'
					},
					phone: '03124563966',
				},
				{
					id: '0300005',
					title: '河北省保定市清西陵景区',
					subtitle: '2019',
					city: '保定市',
					area: '易县',
					grade: '5A',
					address: {
						name: '',
						longitude: 115.351206, //经度
						latitude: 39.347288, //纬度
						address: '保定市易县112国道'
					},
					phone: '03124710016',
				},
				{
					id: '0300006',
					title: '河北省保定市白石山景区',
					subtitle: '2017',
					city: '保定市',
					area: '涞源县',
					grade: '5A',
					address: {
						name: '',
						longitude: 114.709195, //经度
						latitude: 39.222931, //纬度
						address: '保定市涞源县白石山镇丰凉沟村'
					},
					phone: '4008438433',
				},
				{
					id: '0300007',
					title: '河北省承德市金山岭长城景区',
					subtitle: '2020',
					city: '承德市',
					area: '滦平县',
					grade: '5A',
					address: {
						name: '',
						longitude: 117.25213, //经度
						latitude: 40.692657, //纬度
						address: '承德市滦平县巴克什营镇花楼沟村'
					},
					phone: '03148830222',
				},
				{
					id: '0300008',
					title: '河北省石家庄市西柏坡景区',
					subtitle: '2011',
					city: '石家庄市',
					area: '平山县',
					grade: '5A',
					address: {
						name: '',
						longitude: 113.950648, //经度
						latitude: 38.345935, //纬度
						address: '石家庄市平山县迎宾路'
					},
					phone: '031182851355',
				},
				{
					id: '0300009',
					title: '河北省邯郸市广府古城景区',
					subtitle: '2017',
					city: '邯郸市',
					area: '永年区',
					grade: '5A',
					address: {
						name: '',
						longitude: 114.736727, //经度
						latitude: 36.707347, //纬度
						address: '邯郸市永年区广府镇广府专线'
					},
					phone: '03106612266',
				},
				{
					id: '0300010',
					title: '秦皇岛市山海关景区',
					subtitle: '2007',
					city: '秦皇岛市',
					area: '山海关区',
					grade: '5A',
					address: {
						name: '',
						longitude: 119.805383, //经度
						latitude: 39.976263, //纬度
						address: '秦皇岛市山海关区龙海大道1号'
					},
					phone: '4006033566',
				},
				{
					id: '0300011',
					title: '邯郸市娲皇宫景区',
					subtitle: '2015',
					city: '邯郸市',
					area: '涉县',
					grade: '5A',
					address: {
						name: '',
						longitude: 113.624308, //经度
						latitude: 36.64729, //纬度
						address: '邯郸市涉县索堡镇1号'
					},
					phone: '03103922355',
				},
			],
		},

		{
			province: '山西',
			scenicspotList: [{
					id: '0400001',
					title: '大同市云冈石窟',
					subtitle: '2007',
					city: '大同市',
					area: '云冈区',
					grade: '5A',
					address: {
						name: '',
						longitude: 113.144291, //经度
						latitude: 40.119273, //纬度
						address: '大同市云冈区云冈镇1号'
					},
					phone: '03527992655',
				},
				{
					id: '0400002',
					title: '山西晋城皇城相府生态文化旅游区',
					subtitle: '2011',
					city: '晋城市',
					area: '阳城县',
					grade: '5A',
					address: {
						name: '',
						longitude: 112.589462, //经度
						latitude: 35.519939, //纬度
						address: '晋城市阳城县北留镇皇城村2号'
					},
					phone: '03564858062',
				},
				{
					id: '0400003',
					title: '山西省临汾市洪洞大槐树寻根祭祖园景区',
					subtitle: '2018',
					city: '临汾市',
					area: '洪洞县',
					grade: '5A',
					address: {
						name: '',
						longitude: 111.682355, //经度
						latitude: 36.277087, //纬度
						address: '临汾市洪洞县古槐北路公园街2号'
					},
					phone: '03576658066',
				},
				{
					id: '0400004',
					title: '山西省忻州市雁门关景区',
					subtitle: '2017',
					city: '忻州市',
					area: '代县',
					grade: '5A',
					address: {
						name: '',
						longitude: 112.889451, //经度
						latitude: 39.189975, //纬度
						address: '山西省忻州市代县208国道'
					},
					phone: '03506100519',
				},
				{
					id: '0400005',
					title: '山西省长治市壶关太行山大峡谷八泉峡景区',
					subtitle: '2019',
					city: '长治市',
					area: '壶关县',
					grade: '5A',
					address: {
						name: '',
						longitude: 113.573799, //经度
						latitude: 35.951202, //纬度
						address: '山西省长治市壶关县大峡谷镇'
					},
					phone: '4000710999',
				},
				{
					id: '0400006',
					title: '忻州市五台山风景名胜区',
					subtitle: '2007',
					city: '忻州市',
					area: '五台县',
					grade: '5A',
					address: {
						name: '',
						longitude: 113.595708, //经度
						latitude: 38.976198, //纬度
						address: '山西省忻州市五台县台怀镇'
					},
					phone: '4000350236',
				},
				{
					id: '0400007',
					title: '晋中市介休绵山景区',
					subtitle: '2013',
					city: '介休市',
					area: '绵山镇',
					grade: '5A',
					address: {
						name: '',
						longitude: 111.999227, //经度
						latitude: 36.895317, //纬度
						address: '晋中市介休市绵山镇南槐志村'
					},
					phone: '03547055567',
				},
				{
					id: '0400008',
					title: '晋中市平遥古城景区',
					subtitle: '2015',
					city: '晋中市',
					area: '平遥县',
					grade: '5A',
					address: {
						name: '',
						longitude: 112.19022, //经度
						latitude: 37.209535, //纬度
						address: '山西省晋中市平遥县康宁路'
					},
					phone: '03545690000',
				},
			],
		},

		{
			province: '内蒙古',
			scenicspotList: [{
					id: '0500001',
					title: '内蒙古自治区满洲里市中俄边境旅游区',
					subtitle: '2016',
					city: '呼伦贝尔市',
					area: '满洲里市',
					grade: '5A',
					address: {
						name: '',
						longitude: 117.401013, //经度
						latitude: 49.619437, //纬度
						address: '呼伦贝尔市满洲里市华埠大街23号'
					},
					phone: '04706668688',
				},
				{
					id: '0500002',
					title: '内蒙古自治区赤峰市阿斯哈图石阵旅游区',
					subtitle: '2018',
					city: '赤峰市',
					area: '克什克腾旗',
					grade: '5A',
					address: {
						name: '',
						longitude: 117.541717, //经度
						latitude: 43.936385, //纬度
						address: '赤峰市克什克腾旗阿斯哈图石林景区(热阿线)'
					},
					phone: '',
				},
				{
					id: '0500003',
					title: '内蒙古自治区阿尔山·柴河旅游景区',
					subtitle: '2017',
					city: '兴安盟阿尔山市',
					area: '天池镇',
					grade: '5A',
					address: {
						name: '',
						longitude: 119.890456, //经度
						latitude: 47.286324, //纬度
						address: '内蒙古自治区兴安盟阿尔山市天池镇'
					},
					phone: '4000151757',
				},
				{
					id: '0500004',
					title: '内蒙古自治区阿拉善盟胡杨林旅游区',
					subtitle: '2019',
					city: '阿拉善盟额济纳旗',
					area: '',
					grade: '5A',
					address: {
						name: '',
						longitude: 101.087036, //经度
						latitude: 41.967675, //纬度
						address: '阿拉善盟额济纳旗312省道'
					},
					phone: '04836529998',
				},
				{
					id: '0500005',
					title: '内蒙古鄂尔多斯响沙湾旅游景区',
					subtitle: '2011',
					city: '鄂尔多斯市',
					area: '达拉特旗',
					grade: '5A',
					address: {
						name: '',
						longitude: 109.962922, //经度
						latitude: 40.249915, //纬度
						address: '鄂尔多斯市达拉特旗210国道西'
					},
					phone: '4008785550',
				},
				{
					id: '0500006',
					title: '内蒙古鄂尔多斯成吉思汗陵旅游区',
					subtitle: '2011',
					city: '鄂尔多斯市',
					area: '伊金霍洛旗',
					grade: '5A',
					address: {
						name: '',
						longitude: 109.817734, //经度
						latitude: 39.366985, //纬度
						address: '鄂尔多斯市伊金霍洛旗伊金霍洛镇'
					},
					phone: '',

				},

			],
		},

		{
			province: '辽宁',
			scenicspotList: [{
					id: '0600001',
					title: '大连老虎滩海洋公园.老虎滩极地馆',
					subtitle: '2007',
					city: '大连市',
					area: '',
					grade: '5A',
					address: {
						name: '',
						longitude: 121.68254, //经度
						latitude: 38.87857, //纬度
						address: '大连市滨海中路9号'
					},
					phone: '041182689356',

				},
				{
					id: '0600002',
					title: '本溪市本溪水洞景区',
					subtitle: '2015',
					city: '本溪市',
					area: '本溪满族自治县',
					grade: '5A',
					address: {
						name: '',
						longitude: 124.088332, //经度
						latitude: 41.307454, //纬度
						address: '本溪市本溪满族自治县谢家崴子村'
					},
					phone: '02444891198',

				},
				{
					id: '0600003',
					title: '沈阳市植物园',
					subtitle: '2007',
					city: '沈阳市',
					area: '浑南区',
					grade: '5A',
					address: {
						name: '',
						longitude: 123.64599, //经度
						latitude: 41.863424, //纬度
						address: '沈阳市浑南区双园路301号'
					},
					phone: '02488038035',

				},
				{
					id: '0600004',
					title: '辽宁大连金石滩景区',
					subtitle: '2011',
					city: '大连市',
					area: '金州区',
					grade: '5A',
					address: {
						name: '',
						longitude: 122.00072, //经度
						latitude: 39.101588, //纬度
						address: '大连市金州区龙谷街(神秘东方菩提界)'
					},
					phone: '041187900700',

				},
				{
					id: '0600005',
					title: '辽宁省盘锦市红海滩风景廊道景区',
					subtitle: '2019',
					city: '盘锦市',
					area: '大洼区',
					grade: '5A',
					address: {
						name: '',
						longitude: 121.851983, //经度
						latitude: 40.90784, //纬度
						address: '辽宁省盘锦市大洼区赵圈河镇滨海大道'
					},
					phone: '04276989999',

				},
				{
					id: '0600006',
					title: '辽宁省鞍山市千山景区',
					subtitle: '2017',
					city: '鞍山市',
					area: '千山区',
					grade: '5A',
					address: {
						name: '',
						longitude: 123.123516, //经度
						latitude: 41.024776, //纬度
						address: '辽宁省鞍山市千山区千山东路79号'
					},
					phone: '04127223466',
				},
			],
		},

		{
			province: '吉林',
			scenicspotList: [{
					id: '0700001',
					title: '吉林省通化市高句丽文物古迹旅游景区',
					subtitle: '2019',
					city: '通化市',
					area: '',
					grade: '5A',
					address: {
						name: '',
						longitude: 126.168605, //经度
						latitude: 41.173507, //纬度
						address: '迎宾路49号'
					},
					phone: '04356262796',
					
				},
				{
					id: '0700002',
					title: '吉林省长春市世界雕塑公园旅游景区',
					subtitle: '2017',
					city: '长春市',
					area: '南关区',
					grade: '5A',
					address: {
						name: '',
						longitude: 125.340278, //经度
						latitude: 43.828262, //纬度
						address: '长春市南关区人民大街9518号'
					},
					phone: '043185379019',
					
				},
				{
					id: '0700003',
					title: '吉林长春净月潭景区',
					subtitle: '2011',
					city: '长春市',
					area: '长春净月开发区',
					grade: '5A',
					address: {
						name: '',
						longitude: 125.48287, //经度
						latitude: 43.785108, //纬度
						address: '吉林省长春净月开发区净月大街5840号'
					},
					phone: '043184518000',
					
				},
				{
					id: '0700004',
					title: '敦化市六鼎山文化旅游区',
					subtitle: '2015',
					city: '延边朝鲜族自治州',
					area: '敦化市',
					grade: '5A',
					address: {
						name: '',
						longitude: 128.251207, //经度
						latitude: 43.329782, //纬度
						address: '延边朝鲜族自治州敦化市南郊3公里处牡丹江南岸'
					},
					phone: '04336688330',
					
				},
				{
					id: '0700005',
					title: '长春市伪满皇宫博物院',
					subtitle: '2007',
					city: '长春市',
					area: '宽城区',
					grade: '5A',
					address: {
						name: '',
						longitude: 125.355281, //经度
						latitude: 43.91146, //纬度
						address: '长春市宽城区光复北路5号'
					},
					phone: '043182866611',
					
				},
				{
					id: '0700006',
					title: '长春市长影世纪城旅游区',
					subtitle: '2015',
					city: '长春市',
					area: '南关区',
					grade: '5A',
					address: {
						name: '',
						longitude: 125.452836, //经度
						latitude: 43.778241, //纬度
						address: '长春市南关区永顺路路北'
					},
					phone: '043184550888',
					
				},
				{
					id: '0700007',
					title: '长白山景区',
					subtitle: '2007',
					city: '延边朝鲜族自治州',
					area: '安图县',
					grade: '5A',
					address: {
						name: '',
						longitude: 128.091594, //经度
						latitude: 42.059454, //纬度
						address: '吉林省延边朝鲜族自治州安图县'
					},
					phone: '04335410000',
					
				},
			],
		},
		
		{
			province: '黑龙江',
			scenicspotList: [{
					id: '0800001',
					title: '伊春市汤旺河林海奇石景区',
					subtitle: '2013',
					city: '伊春市',
					area: '汤旺县',
					grade: '5A',
					address: {
						name: '',
						longitude: 129.464252, //经度
						latitude: 48.467373, //纬度
						address: '伊春市汤旺县汤逊公路'
					},
					phone: '04583574029',
					
				},
				{
					id: '0800002',
					title: '哈尔滨市太阳岛景区',
					subtitle: '2007',
					city: '哈尔滨市',
					area: '',
					grade: '5A',
					address: {
						name: '',
						longitude: 126.604304, //经度
						latitude: 45.7976, //纬度
						address: '哈尔滨市太阳大道1号'
					},
					phone: '045188192966',
					
				},
				{
					id: '0800003',
					title: '漠河北极村旅游区',
					subtitle: '2015',
					city: '大兴安岭地区',
					area: '漠河市',
					grade: '5A',
					address: {
						name: '',
						longitude: 122.366127, //经度
						latitude: 53.487363, //纬度
						address: '大兴安岭地区漠河市兴安路'
					},
					phone: '04578966999',
					
				},
				{
					id: '0800004',
					title: '黑龙江牡丹江镜泊湖景区',
					subtitle: '2011',
					city: '牡丹江市',
					area: '宁安市',
					grade: '5A',
					address: {
						name: '',
						longitude: 128.977588, //经度
						latitude: 43.93627, //纬度
						address: '牡丹江市宁安市'
					},
					phone: '04536270180',
					
				},
				{
					id: '0800005',
					title: '黑龙江省虎林市虎头旅游景区',
					subtitle: '2019',
					city: '鸡西市',
					area: '虎林市',
					grade: '5A',
					address: {
						name: '',
						longitude: 133.703218, //经度
						latitude: 46.023458, //纬度
						address: '鸡西市虎林市虎头镇'
					},
					phone: '04675965000',
					
				},
				{
					id: '0800006',
					title: '黑龙江黑河五大连池景区',
					subtitle: '2011',
					city: '黑河市',
					area: '五大连池市',
					grade: '5A',
					address: {
						name: '',
						longitude: 126.168957, //经度
						latitude: 48.699183, //纬度
						address: '黑河市五大连池市五大连池镇药泉东路北侧'
					},
					phone: '04567222000',
					
				},
			],
		},
		
		{
			province: '上海',
			scenicspotList: [{
					id: '0900001',
					title: '上海东方明珠广播电视塔',
					subtitle: '2007',
					city: '上海市',
					area: '浦东新区',
					grade: '5A',
					address: {
						name: '',
						longitude: 121.506379, //经度
						latitude: 31.245414, //纬度
						address: '上海市浦东新区世纪大道1号'
					},
					phone: '02158791888',
					
				},
				{
					id: '0900002',
					title: '上海科技馆',
					subtitle: '2010',
					city: '上海市',
					area: '浦东新区',
					grade: '5A',
					address: {
						name: '',
						longitude: 121.547823, //经度
						latitude: 31.224356, //纬度
						address: '浦东新区世纪大道2000号'
					},
					phone: '02168622000',
					
				},
				{
					id: '0900003',
					title: '上海野生动物园',
					subtitle: '2007',
					city: '上海市',
					area: '浦东新区',
					grade: '5A',
					address: {
						name: '',
						longitude: 121.727995, //经度
						latitude: 31.06138, //纬度
						address: '浦东新区宣桥镇南六公路178号'
					},
					phone: '02158036000',
					
				},
			],
		},
		
		{
			province: '江苏',
			scenicspotList: [{
					id: '1000001',
					title: '中央电视台无锡影视基地三国水浒景区',
					subtitle: '2007',
					city: '无锡市',
					area: '滨湖区',
					grade: '5A',
					address: {
						name: '',
						longitude: 120.24079, //经度
						latitude: 31.487221, //纬度
						address: '无锡市滨湖区山水西路128号'
					},
					phone: '051085556034',
					
				},
				{
					id: '1000002',
					title: '南京市夫子庙-秦淮风光带景区',
					subtitle: '2010',
					city: '南京市',
					area: '秦淮区',
					grade: '5A',
					address: {
						name: '',
						longitude: 118.795956, //经度
						latitude: 32.026196, //纬度
						address: '南京市秦淮区平江府路80-1号'
					},
					phone: '02552209788',
					
				},
				{
					id: '1000003',
					title: '南京市钟山风景名胜区-中山陵园风景区',
					subtitle: '2007',
					city: '南京市',
					area: '玄武区',
					grade: '5A',
					address: {
						name: '',
						longitude: 118.859406, //经度
						latitude: 32.069291, //纬度
						address: '南京市玄武区石象路7号'
					},
					phone: '02584431174',
					
				},
				{
					id: '1000004',
					title: '南通市濠河景区',
					subtitle: '2012',
					city: '南通市',
					area: '玄武区',
					grade: '5A',
					address: {
						name: '',
						longitude: 120.863679, //经度
						latitude: 32.028014, //纬度
						address: '南通市崇川区濠西路19号'
					},
					phone: '051385095199',
					
				},
				{
					id: '1000005',
					title: '周恩来故里旅游景区',
					subtitle: '2015',
					city: '南通市',
					area: '玄武区',
					grade: '5A',
					address: {
						name: '',
						longitude: 119.159692, //经度
						latitude: 33.518892, //纬度
						address: '江苏省淮安市淮安区永怀路6号西60米'
					},
					phone: '051785912365',
					
				},
				{
					id: '1000006',
					title: '大丰中华麋鹿园景区',
					subtitle: '2015',
					city: '南通市',
					area: '玄武区',
					grade: '5A',
					address: {
						name: '',
						longitude: 120.821875, //经度
						latitude: 32.989999, //纬度
						address: '盐城市大丰区川东镇麋鹿线'
					},
					phone: '051583391912',
					
				},
				{
					id: '1000007',
					title: '常州市天目湖景区',
					subtitle: '2013',
					city: '常州市',
					area: '溧阳市',
					grade: '5A',
					address: {
						name: '',
						longitude: 119.452211, //经度
						latitude: 31.324346, //纬度
						address: '常州市溧阳市天目湖镇环湖西路1号'
					},
					phone: '4001888588',
					
				},
				{
					id: '1000008',
					title: '常州市环球恐龙城休闲旅游区',
					subtitle: '2010',
					city: '常州市',
					area: '新北区',
					grade: '5A',
					address: {
						name: '',
						longitude: 120.00606, //经度
						latitude: 31.828146, //纬度
						address: '常州市新北区河海东路60号中华恐龙园内'
					},
					phone: '',
					
				},
				{
					id: '1000009',
					title: '扬州市瘦西湖风景区',
					subtitle: '2010',
					city: '扬州市',
					area: '邗江区',
					grade: '5A',
					address: {
						name: '',
						longitude: 119.428092, //经度
						latitude: 32.41478, //纬度
						address: '扬州市邗江区大虹桥路28号'
					},
					phone: '051487357803',
					
				},
				{
					id: '1000010',
					title: '无锡市灵山景区',
					subtitle: '2010',
					city: '无锡市',
					area: '滨湖区',
					grade: '5A',
					address: {
						name: '',
						longitude: 120.102894, //经度
						latitude: 31.4364, //纬度
						address: '无锡市滨湖区马山镇灵山路1号'
					},
					phone: '051085688631',
					
				},
				{
					id: '1000011',
					title: '无锡市鼋头渚景区',
					subtitle: '2012',
					city: '无锡市',
					area: '滨湖区',
					grade: '5A',
					address: {
						name: '',
						longitude: 120.233413, //经度
						latitude: 31.529774, //纬度
						address: '无锡市滨湖区鼋渚路1号'
					},
					phone: '',
					
				},
				{
					id: '1000012',
					title: '江苏省姜堰市溱湖旅游景区',
					subtitle: '2012',
					city: '泰州市',
					area: '姜堰区',
					grade: '5A',
					address: {
						name: '',
						longitude: 120.092904, //经度
						latitude: 32.61842, //纬度
						address: '泰州市姜堰区沈淤线与溱湖大道交叉路口往北约100米(溱湖国家湿地公园)'
					},
					phone: '',
					
				},
				{
					id: '1000013',
					title: '江苏省宿迁市洪泽湖湿地景区',
					subtitle: '2020',
					city: '宿迁市',
					area: '泗洪县',
					grade: '5A',
					address: {
						name: '',
						longitude: 118.338694, //经度
						latitude: 33.252125, //纬度
						address: '江苏省宿迁市泗洪县城头乡'
					},
					phone: '052780828210',
					
				},
				{
					id: '1000014',
					title: '江苏省常州市中国春秋淹城旅游区',
					subtitle: '2017',
					city: '常州市',
					area: '武进区',
					grade: '5A',
					address: {
						name: '',
						longitude: 119.930306, //经度
						latitude: 31.708147, //纬度
						address: '常州市武进区武宜中路197号'
					},
					phone: '4001880005',
					
				},
				{
					id: '1000015',
					title: '江苏省徐州市云龙湖景区',
					subtitle: '2016',
					city: '徐州市',
					area: '泉山区',
					grade: '5A',
					address: {
						name: '',
						longitude: 117.159573, //经度
						latitude: 34.244338, //纬度
						address: '徐州市泉山区湖中路'
					},
					phone: '051683960925',
					
				},
				{
					id: '1000016',
					title: '江苏省无锡市惠山古镇景区',
					subtitle: '2019',
					city: '徐州市',
					area: '泉山区',
					grade: '5A',
					address: {
						name: '',
						longitude: 120.280765, //经度
						latitude: 31.58758, //纬度
						address: '无锡市梁溪区长寿里15号'
					},
					phone: '051083707864',
					
				},
				{
					id: '1000017',
					title: '江苏省连云港花果山景区',
					subtitle: '2016',
					city: '连云港市',
					area: '海州区',
					grade: '5A',
					address: {
						name: '',
						longitude: 119.280983, //经度
						latitude: 34.647226, //纬度
						address: '连云港市海州区花果山郁林路5号'
					},
					phone: '051885723839',
					
				},
				{
					id: '1000018',
					title: '苏州园林（拙政园、虎丘山、留园）',
					subtitle: '2007',
					city: '苏州市',
					area: '姑苏区',
					grade: '5A',
					address: {
						name: '',
						longitude: 120.635512, //经度
						latitude: 31.330209, //纬度
						address: '苏州市姑苏区东北街202号'
					},
					phone: '',
					
				},
				{
					id: '1000019',
					title: '苏州市同里古镇景区',
					subtitle: '2010',
					city: '苏州市',
					area: '吴江区',
					grade: '5A',
					address: {
						name: '',
						longitude: 120.730109, //经度
						latitude: 31.160914, //纬度
						address: '苏州市吴江区同里古镇中川南路1号'
					},
					phone: '',
					
				},
				{
					id: '1000020',
					title: '苏州市吴中太湖旅游区',
					subtitle: '2013',
					city: '苏州市',
					area: '吴中区',
					grade: '5A',
					address: {
						name: '',
						longitude: 120.451012, //经度
						latitude: 31.224799, //纬度
						address: '江苏省苏州市吴中区孙武路'
					},
					phone: '051266555665',
					
				},
				{
					id: '1000021',
					title: '苏州市周庄古镇景区',
					subtitle: '2007',
					city: '苏州市',
					area: '昆山市',
					grade: '5A',
					address: {
						name: '',
						longitude: 120.858268, //经度
						latitude: 31.119926, //纬度
						address: '苏州市昆山市周庄镇全福路'
					},
					phone: '051257211699',
					
				},
				{
					id: '1000022',
					title: '苏州市沙家浜·虞山尚湖旅游区',
					subtitle: '2013',
					city: '苏州市',
					area: '常熟市',
					grade: '5A',
					address: {
						name: '',
						longitude: 120.692713, //经度
						latitude: 31.646471, //纬度
						address: '苏州市常熟市外环西路'
					},
					phone: '051252225000',
					
				},
				{
					id: '1000023',
					title: '苏州市金鸡湖景区',
					subtitle: '2012',
					city: '苏州市',
					area: '工业园区',
					grade: '5A',
					address: {
						name: '',
						longitude: 120.707796, //经度
						latitude: 31.31043, //纬度
						address: '江苏省苏州市工业园区钟园路747号'
					},
					phone: '',
					
				},
				{
					id: '1000024',
					title: '镇江市句容茅山景区',
					subtitle: '2014',
					city: '镇江市',
					area: '句容市',
					grade: '5A',
					address: {
						name: '',
						longitude: 119.321956, //经度
						latitude: 31.791498, //纬度
						address: '镇江市句容市茅山镇'
					},
					phone: '4001089996',
					
				},
				{
					id: '1000025',
					title: '镇江市金山·焦山·北固山旅游景区',
					subtitle: '2012',
					city: '镇江市',
					area: '京口区',
					grade: '5A',
					address: {
						name: '',
						longitude: 119.463946, //经度
						latitude: 32.222391, //纬度
						address: '镇江市京口区东吴路3号'
					},
					phone: '051188858088',
					
				},
			],
		},
		
		{
			province: '浙江',
			scenicspotList: [{
					id: '1100001',
					title: '台州市天台山景区',
					subtitle: '2015',
					city: '台州市',
					area: '天台县',
					grade: '5A',
					address: {
						name: '',
						longitude: 121.04204, //经度
						latitude: 29.162747, //纬度
						address: '台州市天台县和合街1号'
					},
					phone: '057683958610',
					
				},
				{
					id: '1100002',
					title: '台州市神仙居景区',
					subtitle: '2015',
					city: '台州市',
					area: '仙居县',
					grade: '5A',
					address: {
						name: '',
						longitude: 120.60955, //经度
						latitude: 28.694582, //纬度
						address: '台州市仙居县白塔镇'
					},
					phone: '057687038686',
					
				},
				{
					id: '1100003',
					title: '嘉兴市桐乡乌镇古镇旅游区',
					subtitle: '2010',
					city: '台州市',
					area: '仙居县',
					grade: '5A',
					address: {
						name: '',
						longitude: 120.49039, //经度
						latitude: 30.756424, //纬度
						address: '浙江省嘉兴市桐乡市石佛南路18号'
					},
					phone: '057388731088',
					
				},
				{
					id: '1100004',
					title: '宁波市奉化溪口-滕头旅游景区',
					subtitle: '2010',
					city: '宁波市',
					area: '奉化区',
					grade: '5A',
					address: {
						name: '',
						longitude: 121.394135, //经度
						latitude: 29.707447, //纬度
						address: '宁波市奉化区滕头村'
					},
					phone: '057428518100',
					
				},
				{
					id: '1100005',
					title: '杭州市千岛湖风景名胜区',
					subtitle: '2010',
					city: '杭州市',
					area: '淳安县',
					grade: '5A',
					address: {
						name: '',
						longitude: 119.060105, //经度
						latitude: 29.552987, //纬度
						address: '杭州市淳安县梦姑路'
					},
					phone: '4008811988',
					
				},
				{
					id: '1100006',
					title: '杭州市西湖风景名胜区',
					subtitle: '2007',
					city: '杭州市',
					area: '西湖区',
					grade: '5A',
					address: {
						name: '',
						longitude: 120.12792, //经度
						latitude: 30.228932, //纬度
						address: '杭州市西湖区龙井路1号'
					},
					phone: '',
					
				},
				{
					id: '1100007',
					title: '浙江省丽水市缙云仙都景区',
					subtitle: '2019',
					city: '丽水市',
					area: '缙云县',
					grade: '5A',
					address: {
						name: '',
						longitude: 120.147137, //经度
						latitude: 28.696227, //纬度
						address: '丽水市缙云县鼎湖路'
					},
					phone: '05783120301',
					
				},
				{
					id: '1100008',
					title: '浙江省嘉兴市南湖旅游区',
					subtitle: '2011',
					city: '嘉兴市',
					area: '南湖区',
					grade: '5A',
					address: {
						name: '',
						longitude: 120.76508, //经度
						latitude: 30.757469, //纬度
						address: '嘉兴市南湖区南溪西路1号'
					},
					phone: '057382533437',
					
				},
				{
					id: '1100009',
					title: '浙江省嘉兴市西塘古镇旅游景区',
					subtitle: '2017',
					city: '嘉兴市',
					area: '嘉善县',
					grade: '5A',
					address: {
						name: '',
						longitude: 120.898997, //经度
						latitude: 30.950466, //纬度
						address: '嘉兴市嘉善县南苑路258号'
					},
					phone: '057384567890',
					
				},
				{
					id: '11000010',
					title: '浙江省宁波市天一阁·月湖景区',
					subtitle: '2018',
					city: '宁波市',
					area: '海曙区',
					grade: '5A',
					address: {
						name: '',
						longitude: 121.545981, //经度
						latitude: 29.877267, //纬度
						address: '宁波市海曙区天一街10号'
					},
					phone: '057487293856',
					
				},
				{
					id: '11000011',
					title: '浙江省杭州西溪湿地旅游区',
					subtitle: '2012',
					city: '杭州市',
					area: '西湖区',
					grade: '5A',
					address: {
						name: '',
						longitude: 120.071528, //经度
						latitude: 30.27289, //纬度
						address: '浙江省杭州市西湖区天目山路518号'
					},
					phone: '057188106696',
					
				},
				{
					id: '11000012',
					title: '浙江省温州市刘伯温故里景区',
					subtitle: '2020',
					city: '温州市',
					area: '文成县',
					grade: '5A',
					address: {
						name: '',
						longitude: 119.962309, //经度
						latitude: 27.92215, //纬度
						address: '温州市文成县伯温西路'
					},
					phone: '',
					
				},
				{
					id: '11000013',
					title: '浙江省绍兴市鲁迅故里沈园景区',
					subtitle: '2013',
					city: '绍兴市',
					area: '越城区',
					grade: '5A',
					address: {
						name: '',
						longitude: 120.591062, //经度
						latitude: 29.998999, //纬度
						address: '绍兴市越城区鲁迅中路241号'
					},
					phone: '057585132080',
					
				},
				{
					id: '11000014',
					title: '浙江省衢州市江郎山·廿八都景区',
					subtitle: '2017',
					city: '衢州市',
					area: '江山市',
					grade: '5A',
					address: {
						name: '',
						longitude: 118.489754, //经度
						latitude: 28.29801, //纬度
						address: '衢州市江山市枫岭路1号'
					},
					phone: '05704887543',
					
				},
				{
					id: '11000015',
					title: '温州市雁荡山风景名胜区',
					subtitle: '2007',
					city: '温州市',
					area: '乐清市',
					grade: '5A',
					address: {
						name: '',
						longitude: 121.040296, //经度
						latitude: 28.379665, //纬度
						address: '浙江省温州市乐清市雁荡镇响岭头村'
					},
					phone: '057762178888',
					
				},
				{
					id: '11000016',
					title: '湖州市南浔古镇景区',
					subtitle: '2015',
					city: '湖州市',
					area: '南浔区',
					grade: '5A',
					address: {
						name: '',
						longitude: 120.436766, //经度
						latitude: 30.881469, //纬度
						address: '湖州市南浔区人瑞路51号'
					},
					phone: '05723016999',
					
				},
				{
					id: '11000017',
					title: '舟山市普陀山风景名胜区',
					subtitle: '2007',
					city: '湖州市',
					area: '南浔区',
					grade: '5A',
					address: {
						name: '',
						longitude: 122.397608, //经度
						latitude: 30.007976, //纬度
						address: '舟山市普陀区梅岑路1号'
					},
					phone: '05803191919',
					
				},
				{
					id: '11000018',
					title: '衢州市开化根宫佛国文化旅游景区',
					subtitle: '2013',
					city: '衢州市',
					area: '开化县',
					grade: '5A',
					address: {
						name: '',
						longitude: 118.399521, //经度
						latitude: 29.139382, //纬度
						address: '衢州市开化县根博路1号'
					},
					phone: '05706163966',
					
				},
				{
					id: '11000019',
					title: '金华市东阳横店影视城景区',
					subtitle: '2010',
					city: '金华市',
					area: '东阳市',
					grade: '5A',
					address: {
						name: '',
						longitude: 120.323376, //经度
						latitude: 29.143633, //纬度
						address: '金华市东阳市横店镇'
					},
					phone: '057986908690',
					
				},
			],
		},
		
		{
			province: '安徽',
			scenicspotList: [{
					id: '1200001',
					title: '安徽省安庆市天柱山风景区',
					subtitle: '2011',
					city: '安庆市',
					area: '潜山市',
					grade: '5A',
					address: {
						name: '',
						longitude: 116.466712, //经度
						latitude: 30.741914, //纬度
						address: '安庆市潜山市天柱山路112号'
					},
					phone: '05568146608',
					
				},
				{
					id: '1200002',
					title: '六安市天堂寨旅游景区',
					subtitle: '2012',
					city: '六安市',
					area: '金寨县',
					grade: '5A',
					address: {
						name: '',
						longitude: 115.785284, //经度
						latitude: 31.141125, //纬度
						address: '六安市金寨县天堂寨镇'
					},
					phone: '05647528098',
				},
				{
					id: '1200003',
					title: '合肥市三河古镇景区',
					subtitle: '2015',
					city: '合肥市',
					area: '肥西县',
					grade: '5A',
					address: {
						name: '',
						longitude: 117.251306, //经度
						latitude: 31.517927, //纬度
						address: '合肥市肥西县三河镇三杭路'
					},
					phone: '055168757113',
					
				},
				{
					id: '1200004',
					title: '安徽省六安市万佛湖景区',
					subtitle: '2016',
					city: '六安市',
					area: '舒城县',
					grade: '5A',
					address: {
						name: '',
						longitude: 116.783509, //经度
						latitude: 31.310603, //纬度
						address: '六安市舒城县万佛湖镇'
					},
					phone: '05648535069',
					
				},
				{
					id: '1200005',
					title: '安徽省宣城市绩溪龙川景区',
					subtitle: '2012',
					city: '宣城市',
					area: '绩溪县',
					grade: '5A',
					address: {
						name: '',
						longitude: 118.676602, //经度
						latitude: 30.083012, //纬度
						address: '宣城市绩溪县086县道'
					},
					phone: '05638315555',
					
				},
				{
					id: '1200006',
					title: '安徽省芜湖市方特旅游区',
					subtitle: '2016',
					city: '芜湖市',
					area: '镜湖区',
					grade: '5A',
					address: {
						name: '',
						longitude: 118.38533, //经度
						latitude: 31.383351, //纬度
						address: '安徽省芜湖市镜湖区银湖北路80号'
					},
					phone: '4001660006',
					
				},
				{
					id: '1200007',
					title: '安徽省马鞍山市长江采石矶文化生态旅游区',
					subtitle: '2020',
					city: '马鞍山市',
					area: '雨山区',
					grade: '5A',
					address: {
						name: '',
						longitude: 118.465727, //经度
						latitude: 31.656742, //纬度
						address: '马鞍山市雨山区唐贤街1号'
					},
					phone: '05552100142',
					
				},
				{
					id: '1200008',
					title: '安徽省黄山市皖南古村落—西递宏村',
					subtitle: '2011',
					city: '黄山市',
					area: '徽州区',
					grade: '5A',
					address: {
						name: '',
						longitude: 118.292631, //经度
						latitude: 29.846794, //纬度
						address: '安徽省黄山市徽州区松明山公路'
					},
					phone: '05593542618',
					
				},
				{
					id: '1200009',
					title: '池州市九华山风景区',
					subtitle: '2007',
					city: '池州市',
					area: '青阳县',
					grade: '5A',
					address: {
						name: '',
						longitude: 117.830511, //经度
						latitude: 30.484894, //纬度
						address: '池州市青阳县九华镇九华街'
					},
					phone: '05662823169',
					
				},
				{
					id: '1200010',
					title: '阜阳市颍上八里河景区',
					subtitle: '2013',
					city: '阜阳市',
					area: '颍上县',
					grade: '5A',
					address: {
						name: '',
						longitude: 116.314344, //经度
						latitude: 32.567737, //纬度
						address: '安徽省阜阳市颍上县八里河镇'
					},
					phone: '05584585008',
					
				},
				{
					id: '1200011',
					title: '黄山市古徽州文化旅游区',
					subtitle: '2014',
					city: '黄山市',
					area: '歙县',
					grade: '5A',
					address: {
						name: '',
						longitude: 118.442534, //经度
						latitude: 29.869137, //纬度
						address: '安徽省黄山市歙县徽州路与西街交叉口'
					},
					phone: '05592181014',
					
				},
				{
					id: '1200012',
					title: '黄山市黄山风景区',
					subtitle: '2007',
					city: '黄山市',
					area: '黄山区',
					grade: '5A',
					address: {
						name: '',
						longitude: 118.168089, //经度
						latitude: 30.13039, //纬度
						address: '安徽省黄山市黄山区205国道'
					},
					phone: '05595561111',
					
				},
			],
		},
		
		{
			province: '福建',
			scenicspotList: [{
					id: '1300001',
					title: '南平市武夷山风景名胜区',
					subtitle: '2007',
					city: '南平市',
					area: '武夷山市',
					grade: '5A',
					address: {
						name: '',
						longitude: 117.963042, //经度
						latitude: 27.668108, //纬度
						address: '南平市武夷山市武夷街道'
					},
					phone: '05995135110',
					
				},
				{
					id: '1300002',
					title: '福建省土楼（永定·南靖）旅游',
					subtitle: '2011',
					city: '龙岩市',
					area: '永定区',
					grade: '5A',
					address: {
						name: '',
						longitude: 116.981453, //经度
						latitude: 24.657901, //纬度
						address: '龙岩市永定区湖坑镇洪坑村'
					},
					phone: '05973256222',
					
				},
				{
					id: '1300003',
					title: '厦门市鼓浪屿风景名胜区',
					subtitle: '2007',
					city: '厦门市',
					area: '思明区',
					grade: '5A',
					address: {
						name: '',
						longitude: 118.073467, //经度
						latitude: 24.450968, //纬度
						address: '厦门市思明区安海路'
					},
					phone: '',
					
				},
				{
					id: '1300004',
					title: '宁德市白水洋-鸳鸯溪旅游区',
					subtitle: '2012',
					city: '宁德市',
					area: '屏南县',
					grade: '5A',
					address: {
						name: '',
						longitude: 119.09236, //经度
						latitude: 27.075703, //纬度
						address: '福建省宁德市屏南县双溪镇宜洋村'
					},
					phone: '05933309388',
					
				},
				{
					id: '1300005',
					title: '宁德市福鼎太姥山旅游区',
					subtitle: '2013',
					city: '宁德市',
					area: '福鼎市',
					grade: '5A',
					address: {
						name: '',
						longitude: 120.192158, //经度
						latitude: 27.116377, //纬度
						address: '宁德市福鼎市975县道'
					},
					phone: '05937288001',
					
				},
				{
					id: '1300006',
					title: '泉州市清源山景区',
					subtitle: '2012',
					city: '泉州市',
					area: '丰泽区',
					grade: '5A',
					address: {
						name: '',
						longitude: 118.618323, //经度
						latitude: 24.951064, //纬度
						address: '福建省泉州市丰泽区泉山路'
					},
					phone: '059522771928',
					
				},
				{
					id: '1300007',
					title: '福州市三坊七巷景区',
					subtitle: '2015',
					city: '福州市',
					area: '鼓楼区',
					grade: '5A',
					address: {
						name: '',
						longitude: 119.303186, //经度
						latitude: 26.088452, //纬度
						address: '福建省福州市鼓楼区南后街'
					},
					phone: '059187675791',
					
				},
				{
					id: '1300008',
					title: '福建省三明市泰宁风景旅游区',
					subtitle: '2011',
					city: '三明市',
					area: '泰宁县',
					grade: '5A',
					address: {
						name: '',
						longitude: 117.108373, //经度
						latitude: 26.869942, //纬度
						address: '福建省三明市泰宁县763县道'
					},
					phone: '05987866621',
					
				},
				{
					id: '1300009',
					title: '福建省莆田市湄洲岛妈祖文化旅游区',
					subtitle: '2020',
					city: '莆田市',
					area: '秀屿区',
					grade: '5A',
					address: {
						name: '',
						longitude: 119.151726, //经度
						latitude: 25.096679, //纬度
						address: '莆田市秀屿区湄洲岛'
					},
					phone: '05945094688',
					
				},
				{
					id: '1300010',
					title: '龙岩市古田旅游区',
					subtitle: '2015',
					city: '龙岩市',
					area: '上杭县',
					grade: '5A',
					address: {
						name: '',
						longitude: 116.832941, //经度
						latitude: 25.226696, //纬度
						address: '龙岩市上杭县古田镇古田路76号'
					},
					phone: '05973609366',
					
				},
			],
		},
		
		{
			province: '江西',
			scenicspotList: [{
					id: '1400001',
					title: '上饶市婺源江湾景区',
					subtitle: '2013',
					city: '上饶市',
					area: '婺源县',
					grade: '5A',
					address: {
						name: '',
						longitude: 118.058013, //经度
						latitude: 29.374196, //纬度
						address: '上饶市婺源县云湾路'
					},
					phone: '07937293246',
					
				},
				{
					id: '1400002',
					title: '吉安市井冈山风景旅游区',
					subtitle: '2007',
					city: '吉安市',
					area: '井冈山市',
					grade: '5A',
					address: {
						name: '',
						longitude: 114.143789, //经度
						latitude: 26.636167, //纬度
						address: '吉安市井冈山市茨坪镇'
					},
					phone: '07966552626',
					
				},
				{
					id: '1400003',
					title: '宜春市明月山旅游区',
					subtitle: '2015',
					city: '宜春市',
					area: '袁州区',
					grade: '5A',
					address: {
						name: '',
						longitude: 114.299102, //经度
						latitude: 27.60543, //纬度
						address: '宜春市袁州区温汤镇潭下村'
					},
					phone: '07953516666',
					
				},
				{
					id: '1400004',
					title: '景德镇古窑民俗博览区',
					subtitle: '2013',
					city: '景德镇市',
					area: '昌江区',
					grade: '5A',
					address: {
						name: '',
						longitude: 117.191564, //经度
						latitude: 29.289262, //纬度
						address: '景德镇市昌江区古窑路1号'
					},
					phone: '07988534444',
					
				},
				{
					id: '1400005',
					title: '江西省上饶市三清山旅游景区',
					subtitle: '2011',
					city: '上饶市',
					area: '玉山县',
					grade: '5A',
					address: {
						name: '',
						longitude: 118.076681, //经度
						latitude: 28.911597, //纬度
						address: '江西省上饶市玉山县三清乡(近金沙服务区)'
					},
					phone: '',
					
				},
				{
					id: '1400006',
					title: '江西省上饶市龟峰景区',
					subtitle: '2017',
					city: '上饶市',
					area: '弋阳县',
					grade: '5A',
					address: {
						name: '',
						longitude: 117.432958, //经度
						latitude: 28.323365, //纬度
						address: '上饶市弋阳县320国道'
					},
					phone: '07937112400',
				},
				{
					id: '1400007',
					title: '江西省九江市庐山西海景区',
					subtitle: '2020',
					city: '九江市',
					area: '永修县',
					grade: '5A',
					address: {
						name: '',
						longitude: 115.479351, //经度
						latitude: 29.200974, //纬度
						address: '九江市永修县306省道'
					},
					phone: '07923111234',
					
				},
				{
					id: '1400008',
					title: '江西省南昌市滕王阁旅游区',
					subtitle: '2018',
					city: '南昌市',
					area: '东湖区',
					grade: '5A',
					address: {
						name: '',
						longitude: 115.887675, //经度
						latitude: 28.687376, //纬度
						address: '南昌市东湖区仿古街58号'
					},
					phone: '079186702036',
					
				},
				{
					id: '1400009',
					title: '江西省南昌市滕王阁旅游区',
					subtitle: '2018',
					city: '南昌市',
					area: '东湖区',
					grade: '5A',
					address: {
						name: '',
						longitude: 115.887675, //经度
						latitude: 28.687376, //纬度
						address: '南昌市东湖区仿古街58号'
					},
					phone: '079186702036',
					
				},
			],
		},
		
		// {
		// 	province: '天津',
		// 	scenicspotList: [{
		// 			id: '0200001',
		// 			title: '天津古文化街旅游区（津门故里）',
		// 			subtitle: '2007',
		// 			city: '天津市',
		// 			area: '南开区',
		// 			grade: '5A',
		// 			address: {
		// 				name: '',
		// 				longitude: 117.199184, //经度
		// 				latitude: 39.149532, //纬度
		// 				address: '南开区通北路'
		// 			},
		// 			phone: '02227356128',
		// 		},
		// 		{
		// 			id: '0200002',
		// 			title: '天津盘山风景名胜区',
		// 			subtitle: '2007',
		// 			city: '天津市',
		// 			area: '蓟州区',
		// 			grade: '5A',
		// 			address: {
		// 				name: '',
		// 				longitude: 117.288913, //经度
		// 				latitude: 40.102982, //纬度
		// 				address: '蓟州区官庄镇莲花岭村'
		// 			},
		// 			phone: '02229828186',
		// 		},
		
		// 	],
		// },
		
		
		
		{
			province: '陕西',
			scenicspotList: [{
					title: '陕西历史博物馆',
					subtitle: '不含临时、专题展览',
					city: '西安市',
					area: '雁塔区',
					grade: 'AAAA',
					//电话：(029),(029)85253806
					//http://api.map.baidu.com/lbsapi/getpoint/
					address: {
						name: '',
						longitude: 108.961495, //经度
						latitude: 34.230523, //纬度
						address: '西安市雁塔区小寨东路91号'
					},
					phone: '02985269547',
				},
				{
					title: '西安大唐西市文化景区',
					subtitle: '',
					city: '西安市',
					area: '莲湖区',
					grade: 'AAAA',
					address: {
						name: '',
						longitude: 108.912974,
						latitude: 34.250685,
						address: '陕西省西安市莲湖区劳动南路118号'
					},
					phone: '02988361111',
				},
				{
					title: '西安博物院',
					subtitle: '小雁塔',
					city: '西安市',
					area: '碑林区',
					grade: 'AAAA',
					address: {
						name: '',
						longitude: 108.947004,
						latitude: 34.243512,
						address: '西安市碑林区友谊西路72号'
					},
					phone: '02987803591',
				},
				{
					title: '西安世博园',
					subtitle: '',
					city: '西安市',
					area: '灞桥区',
					grade: 'AAAA',
					address: {
						name: '',
						longitude: 109.067589,
						latitude: 34.328862,
						address: '世博大道1号'
					},
					phone: '02983596013',
				},
				{
					title: '西安汉城湖景区',
					subtitle: '不含大风搁博物馆',
					city: '西安市',
					area: '未央区',
					grade: 'AAAA',
					address: {
						name: '',
						longitude: 108.926141,
						latitude: 34.326457,
						address: '西安市未央区北二环与朱宏路交汇处'
					},
					phone: '02986483430',
				},
				{
					title: '西安浐灞国家湿地公园',
					subtitle: '',
					city: '西安市',
					area: '未央区',
					grade: 'AAAA',
					address: {
						name: '',
						longitude: 109.012096,
						latitude: 34.425649,
						address: '西安市未央区浐灞生态区启源三路1号'
					},
					phone: '02962815566',
				},
				{
					title: '西安市王顺山景区',
					subtitle: '',
					city: '西安市',
					area: '蓝田县',
					grade: 'AAAA',
					address: {
						name: '',
						longitude: 109.489883,
						latitude: 34.09606,
						address: '西安市蓝田县蓝桥镇蓝桥街村'
					},
					phone: '02982825070',
				},
				{
					title: '周至水街沙沙河景区',
					subtitle: '',
					city: '西安市',
					area: '周至县',
					grade: 'AAAA',
					address: {
						name: '',
						longitude: 108.217085,
						latitude: 34.143748,
						address: '陕西省西安市周至县南大门南1公里'
					},
					phone: '02985122000',
				},
				{


					title: '白鹿原影视景区',
					subtitle: '',
					city: '西安市',
					area: '蓝田县',
					grade: 'AAAA',
					address: {
						name: '',
						longitude: 109.285255,
						latitude: 34.081604,
						address: '陕西省西安市蓝田县焦岱镇南门广场'
					},
					phone: '02982842666',
				},
				{

					title: '白鹿原白鹿仓景区',
					subtitle: '',
					city: '西安市',
					area: '灞桥区',
					grade: 'AAAA',
					address: {
						name: '',
						longitude: 109.120859,
						latitude: 34.223996,
						address: '西安市灞桥区狄寨北路368号'
					},
					phone: '02983559999',
				},
				{
					title: '水陆庵',
					subtitle: '',
					city: '西安市',
					area: '蓝田县',
					grade: 'AAA',
					address: {
						name: '',
						longitude: 109.423326,
						latitude: 34.13812,
						address: '蓝田县10公里处普化镇杨斜村'
					},
					phone: '02982920741',
				},
				{
					title: '临潼博物馆',
					subtitle: '',
					city: '西安市',
					area: '临潼区',
					grade: 'AAA',
					address: {
						name: '',
						longitude: 109.223643,
						latitude: 34.370614,
						address: '环城东路1号'
					},
					phone: '02983812071',
				},
				{
					title: '西安大兴善寺',
					subtitle: '',
					city: '',
					area: '',
					grade: 'AAA',
					address: {
						name: '',
						longitude: 108.949999,
						latitude: 34.23336,
						address: '西安市雁塔区兴善寺西街55号'
					},
					phone: '02985227071',
				},
				{
					title: '八路军西安办事处纪念馆',
					subtitle: '',
					city: '西安市',
					area: '新城区',
					grade: 'AAA',
					address: {
						name: '',
						longitude: 108.96083,
						latitude: 34.279099,
						address: '陕西省西安市新城区北新街七贤庄八路'
					},
					phone: '',
				},
				{
					title: '蓝田猿人遗址',
					subtitle: '',
					city: '西安市',
					area: '蓝田县',
					grade: 'AAA',
					address: {
						name: '',
						longitude: 109.501569,
						latitude: 34.188555,
						address: '西安市蓝田县九间房镇公王岭蓝田猿人遗址'
					},
					phone: '02982971807',
				},
				{
					title: '泾河新城茯茶镇景区',
					subtitle: '',
					city: '西安市',
					area: '西咸新区',
					grade: 'AAAA',
					address: {
						name: '',
						longitude: 108.904458,
						latitude: 34.525247,
						address: '西咸新区高泾大道与茶马大道交叉处西北角'
					},
					phone: '02936201810',
				},

				// 西安大唐西市文化景区	上王村景区
				// 西安博物院（小雁塔）	临潼奥特莱斯景区
				// 西安世博园	金鼎蓝田玉文化石艺博览馆
				// 西安汉城湖景区（不含大风搁博物馆）	西安御品轩幸福烘焙魔法城堡景区
				// 西安浐灞国家湿地公园	蓝天丝路慢城玉山景区
				// 西安市王顺山景区	高陵区博物馆
				// 周至水街沙沙河景区	秦龙乳业旅游园
				// 白鹿原影视景区	伊利集团西安乳业园景区
				// 白鹿原白鹿仓景区	葛牌镇区苏维埃政府纪念馆
				// 水陆庵	汪峰故居纪念馆
				// 临潼区博物馆	伊利集团西安工业园景区
				// 西安大兴善寺	西安玉山蓝河风景区
				// 八路军西安办事处纪念馆	白跃羊乳文化馆
				// 蓝田猿人遗址	长安区杜甫纪念馆
				// 杨虎城将军陵园	泾河新城茯茶镇景区
				// 西安高陵奇石博物馆	原点新城商贸旅游示范区
				// 户县钟馗故里名俗文化旅游景区	萧何曹参遗址公园
				// 广仁寺	大石头名俗旅游度假村
				// 西安青龙寺遗址景区	西咸沛东沛河生态景区
				// 灞桥生态湿地公园	泾渭茯茶坊
				// 西安白鹿原葡萄主体公园	咸阳茯茶文化体验园
				// 西安辋川溶洞风景区	西咸新区王府井赛特奥莱旅游示范区
				// 蔡文姬纪念馆	顺陵景区
				// 西安华南城景区	西安桃花潭景区
				// 	永兴坊景区
			]
		},

	]
}


export default {
	ministry_url,
	scenicspotList,
}
