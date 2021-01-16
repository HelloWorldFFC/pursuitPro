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
			],
		},
		
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
