const res = {
	"success": true,
	"data": {
		"Column": {
			"categories": ["2012", "2013", "2014", "2015", "2016", "2017"],
			"series": [{
				"name": "成交量1",
				"data": [15, {
					"value": 20,
					"color": "#f04864"
				}, 45, 37, 43, 34]
			}, {
				"name": "成交量2",
				"data": [30, {
					"value": 40,
					"color": "#facc14"
				}, 25, 14, 34, 18]
			}]
		},
		"ColumnB": {
			"categories": ["2013", "2014", "2015", "2016", "2017", "2018"],
			"series": [{
				"name": "新成交量3",
				"data": [35, 36, 31, 33, 13, 34]
			}, {
				"name": "新成交量4",
				"data": [18, 27, 21, 24, 6, 28]
			}, ]
		},
		"ColumnMeter": {
			"categories": ["2013", "2014", "2015", "2016", "2017", "2018"],
			"series": [{
				"name": "目标值",
				"data": [35, 36, 31, 33, 13, 34],
				"color": "#2fc25b"
			}, {
				"name": "完成量",
				"data": [18, 27, 21, 24, 6, 28],
				"color": "#1890ff"
			}]
		},
		"ColumnStack": {
			"categories": ["2013", "2014", "2015", "2016", "2017", "2018"],
			"series": [{
				"name": "新成交量3",
				"data": [35, 36, 31, 33, 13, 34]
			}, {
				"name": "新成交量4",
				"data": [18, 27, 21, 24, 6, 28]
			}, {
				"name": "新成交量5",
				"data": [18, 27, 21, 24, 6, 28]
			}]
		},
		"Mix": {
			"categories": ["2012", "2013", "2014", "2015", "2016", "2017"],
			"series": [{
				"name": "曲面",
				"data": [70, 50, 85, 130, 64, 88],
				"type": "area",
				"style": "curve"
			}, {
				"name": "柱1",
				"data": [40, 30, 55, 110, 24, 58],
				"type": "column"
			}, {
				"name": "柱2",
				"data": [50, 20, 75, 60, 34, 38],
				"type": "column"
			}, {
				"name": "曲线",
				"data": [70, 50, 85, 130, 64, 88],
				"type": "line",
				"style": "curve",
				"color": "#1890ff",
				"disableLegend": true
			}, {
				"name": "折线",
				"data": [120, 140, 105, 170, 95, 160],
				"type": "line",
				"color": "#2fc25b"
			}, {
				"name": "点",
				"data": [100, 80, 125, 150, 112, 132],
				"type": "point",
				"color": "#f04864"
			}]
		},
		"LineA": {
			"categories": ["2012", "2013", "2014", "2015", "2016", "2017"],
			"series": [{
				"name": "成交量A",
				"data": [35, 8, 25, 37, 4, 20]
			}, {
				"name": "成交量B",
				"data": [70, 40, 65, 100, 44, 68]
			}, {
				"name": "成交量C",
				"data": [100, 80, 95, 150, 112, 132]
			}]
		},
		"LineB": {
			"categories": ["2012", "2013", "2014", "2015", "2016", "2017"],
			"series": [{
				"name": "成交量A",
				"data": [35, 20, 25, 37, 4, 20]
			}, {
				"name": "成交量B",
				"data": [70, 40, 65, 100, 44, 68]
			}, {
				"name": "成交量C",
				"data": [100, 80, 95, 150, 112, 132]
			}]
		},
		"Area": {
			"categories": ["2012", "2013", "2014", "2015", "2016", "2017"],
			"series": [{
				"name": "成交量A",
				"data": [100, 80, 95, 150, 112, 132],
				"color": "#facc14"
			}, {
				"name": "成交量B",
				"data": [70, 40, 65, 100, 44, 68],
				"color": "#2fc25b"
			}, {
				"name": "成交量C",
				"data": [35, 20, 25, 37, 4, 20],
				"color": "#1890ff"
			}]
		},
		"Pie": {
			"series": [{
				"name": "一班",
				"data": 50
			}, {
				"name": "二班",
				"data": 30
			}, {
				"name": "三班",
				"data": 20
			}, {
				"name": "四班",
				"data": 18
			}, {
				"name": "五班",
				"data": 8
			}]
		},
		"Ring": {
			"series": [{
				"name": "一班",
				"data": 50
			}, {
				"name": "二班",
				"data": 30
			}, {
				"name": "三班",
				"data": 20
			}, {
				"name": "四班",
				"data": 18
			}, {
				"name": "五班",
				"data": 8
			}]
		},
		"Radar": {
			"categories": ["维度1", "维度2", "维度3", "维度4", "维度5", "维度6"],
			"series": [{
				"name": "成交量1",
				"data": [90, 110, 165, 195, 187, 172]
			}, {
				"name": "成交量2",
				"data": [190, 210, 105, 35, 27, 102]
			}]
		},
		"Arcbar1": {
			"series": [{
				"name": "正确率",
				"data": 0.29,
				"color": "#2fc25b"
			}]
		},
		"Arcbar2": {
			"series": [{
				"name": "错误率",
				"data": 0.65,
				"color": "#f04864"
			}]
		},
		"Arcbar3": {
			"series": [{
				"name": "完成率",
				"data": 0.85,
				"color": "#1890ff"
			}]
		},
		"Gauge": {
			"categories": [{
				"value": 0.2,
				"color": "#1890ff"
			}, {
				"value": 0.8,
				"color": "#2fc25b"
			}, {
				"value": 1,
				"color": "#f04864"
			}],
			"series": [{
				"name": "完成率",
				"data": 0.66
			}]
		},
		"Candle": {
			"categories": [
				"2013/1/24", "2013/1/25", "2013/1/28", "2013/1/29", "2013/1/30",
				"2013/1/31", "2013/2/1", "2013/2/4", "2013/2/5", "2013/2/6",
				"2013/2/7", "2013/2/8", "2013/2/18", "2013/2/19", "2013/2/20",
				"2013/2/21", "2013/2/22", "2013/2/25", "2013/2/26", "2013/2/27",
				"2013/2/28", "2013/3/1", "2013/3/4", "2013/3/5", "2013/3/6",
				"2013/3/7", "2013/3/8", "2013/3/11", "2013/3/12", "2013/3/13",
				"2013/3/14", "2013/3/15", "2013/3/18", "2013/3/19", "2013/3/20",
				"2013/3/21", "2013/3/22", "2013/3/25", "2013/3/26", "2013/3/27",
				"2013/3/28", "2013/3/29", "2013/4/1", "2013/4/2", "2013/4/3",
				"2013/4/8", "2013/4/9", "2013/4/10", "2013/4/11", "2013/4/12",
				"2013/4/15", "2013/4/16", "2013/4/17", "2013/4/18", "2013/4/19",
				"2013/4/22", "2013/4/23", "2013/4/24", "2013/4/25", "2013/4/26",
				"2013/5/2", "2013/5/3", "2013/5/6", "2013/5/7", "2013/5/8",
				"2013/5/9", "2013/5/10", "2013/5/13", "2013/5/14", "2013/5/15",
				"2013/5/16", "2013/5/17", "2013/5/20", "2013/5/21", "2013/5/22",
				"2013/5/23", "2013/5/24", "2013/5/27", "2013/5/28", "2013/5/29",
				"2013/5/30", "2013/5/31", "2013/6/3", "2013/6/4", "2013/6/5",
				"2013/6/6", "2013/6/7", "2013/6/13"
			],
			"series": [{
				"name": "上证指数",
				"data": [
					[2320.26, 2302.6, 2287.3, 2362.94],
					[2300, 2291.3, 2288.26, 2308.38],
					[2295.35, 2346.5, 2295.35, 2346.92],
					[2347.22, 2358.98, 2337.35, 2363.8],
					[2360.75, 2382.48, 2347.89, 2383.76],
					[2383.43, 2385.42, 2371.23, 2391.82],
					[2377.41, 2419.02, 2369.57, 2421.15],
					[2425.92, 2428.15, 2417.58, 2440.38],
					[2411, 2433.13, 2403.3, 2437.42],
					[2432.68, 2434.48, 2427.7, 2441.73],
					[2430.69, 2418.53, 2394.22, 2433.89],
					[2416.62, 2432.4, 2414.4, 2443.03],
					[2441.91, 2421.56, 2415.43, 2444.8],
					[2420.26, 2382.91, 2373.53, 2427.07],
					[2383.49, 2397.18, 2370.61, 2397.94],
					[2378.82, 2325.95, 2309.17, 2378.82],
					[2322.94, 2314.16, 2308.76, 2330.88],
					[2320.62, 2325.82, 2315.01, 2338.78],
					[2313.74, 2293.34, 2289.89, 2340.71],
					[2297.77, 2313.22, 2292.03, 2324.63],
					[2322.32, 2365.59, 2308.92, 2366.16],
					[2364.54, 2359.51, 2330.86, 2369.65],
					[2332.08, 2273.4, 2259.25, 2333.54],
					[2274.81, 2326.31, 2270.1, 2328.14],
					[2333.61, 2347.18, 2321.6, 2351.44],
					[2340.44, 2324.29, 2304.27, 2352.02],
					[2326.42, 2318.61, 2314.59, 2333.67],
					[2314.68, 2310.59, 2296.58, 2320.96],
					[2309.16, 2286.6, 2264.83, 2333.29],
					[2282.17, 2263.97, 2253.25, 2286.33],
					[2255.77, 2270.28, 2253.31, 2276.22],
					[2269.31, 2278.4, 2250, 2312.08],
					[2267.29, 2240.02, 2239.21, 2276.05],
					[2244.26, 2257.43, 2232.02, 2261.31],
					[2257.74, 2317.37, 2257.42, 2317.86],
					[2318.21, 2324.24, 2311.6, 2330.81],
					[2321.4, 2328.28, 2314.97, 2332],
					[2334.74, 2326.72, 2319.91, 2344.89],
					[2318.58, 2297.67, 2281.12, 2319.99],
					[2299.38, 2301.26, 2289, 2323.48],
					[2273.55, 2236.3, 2232.91, 2273.55],
					[2238.49, 2236.62, 2228.81, 2246.87],
					[2229.46, 2234.4, 2227.31, 2243.95],
					[2234.9, 2227.74, 2220.44, 2253.42],
					[2232.69, 2225.29, 2217.25, 2241.34],
					[2196.24, 2211.59, 2180.67, 2212.59],
					[2215.47, 2225.77, 2215.47, 2234.73],
					[2224.93, 2226.13, 2212.56, 2233.04],
					[2236.98, 2219.55, 2217.26, 2242.48],
					[2218.09, 2206.78, 2204.44, 2226.26],
					[2199.91, 2181.94, 2177.39, 2204.99],
					[2169.63, 2194.85, 2165.78, 2196.43],
					[2195.03, 2193.8, 2178.47, 2197.51],
					[2181.82, 2197.6, 2175.44, 2206.03],
					[2201.12, 2244.64, 2200.58, 2250.11],
					[2236.4, 2242.17, 2232.26, 2245.12],
					[2242.62, 2184.54, 2182.81, 2242.62],
					[2187.35, 2218.32, 2184.11, 2226.12],
					[2213.19, 2199.31, 2191.85, 2224.63],
					[2203.89, 2177.91, 2173.86, 2210.58],
					[2170.78, 2174.12, 2161.14, 2179.65],
					[2179.05, 2205.5, 2179.05, 2222.81],
					[2212.5, 2231.17, 2212.5, 2236.07],
					[2227.86, 2235.57, 2219.44, 2240.26],
					[2242.39, 2246.3, 2235.42, 2255.21],
					[2246.96, 2232.97, 2221.38, 2247.86],
					[2228.82, 2246.83, 2225.81, 2247.67],
					[2247.68, 2241.92, 2231.36, 2250.85],
					[2238.9, 2217.01, 2205.87, 2239.93],
					[2217.09, 2224.8, 2213.58, 2225.19],
					[2221.34, 2251.81, 2210.77, 2252.87],
					[2249.81, 2282.87, 2248.41, 2288.09],
					[2286.33, 2299.99, 2281.9, 2309.39],
					[2297.11, 2305.11, 2290.12, 2305.3],
					[2303.75, 2302.4, 2292.43, 2314.18],
					[2293.81, 2275.67, 2274.1, 2304.95],
					[2281.45, 2288.53, 2270.25, 2292.59],
					[2286.66, 2293.08, 2283.94, 2301.7],
					[2293.4, 2321.32, 2281.47, 2322.1],
					[2323.54, 2324.02, 2321.17, 2334.33],
					[2316.25, 2317.75, 2310.49, 2325.72],
					[2320.74, 2300.59, 2299.37, 2325.53],
					[2300.21, 2299.25, 2294.11, 2313.43],
					[2297.1, 2272.42, 2264.76, 2297.1],
					[2270.71, 2270.93, 2260.87, 2276.86],
					[2264.43, 2242.11, 2240.07, 2266.69],
					[2242.26, 2210.9, 2205.07, 2250.63],
					[2190.1, 2148.35, 2126.22, 2190.1]
				]
			}]
		},

		"CandleColumn": {
			"categories": [
				"2013/1/24", "2013/1/25", "2013/1/28", "2013/1/29", "2013/1/30",
				"2013/1/31", "2013/2/1", "2013/2/4", "2013/2/5", "2013/2/6",
				"2013/2/7", "2013/2/8", "2013/2/18", "2013/2/19", "2013/2/20",
				"2013/2/21", "2013/2/22", "2013/2/25", "2013/2/26", "2013/2/27",
				"2013/2/28", "2013/3/1", "2013/3/4", "2013/3/5", "2013/3/6",
				"2013/3/7", "2013/3/8", "2013/3/11", "2013/3/12", "2013/3/13",
				"2013/3/14", "2013/3/15", "2013/3/18", "2013/3/19", "2013/3/20",
				"2013/3/21", "2013/3/22", "2013/3/25", "2013/3/26", "2013/3/27",
				"2013/3/28", "2013/3/29", "2013/4/1", "2013/4/2", "2013/4/3",
				"2013/4/8", "2013/4/9", "2013/4/10", "2013/4/11", "2013/4/12",
				"2013/4/15", "2013/4/16", "2013/4/17", "2013/4/18", "2013/4/19",
				"2013/4/22", "2013/4/23", "2013/4/24", "2013/4/25", "2013/4/26",
				"2013/5/2", "2013/5/3", "2013/5/6", "2013/5/7", "2013/5/8",
				"2013/5/9", "2013/5/10", "2013/5/13", "2013/5/14", "2013/5/15",
				"2013/5/16", "2013/5/17", "2013/5/20", "2013/5/21", "2013/5/22",
				"2013/5/23", "2013/5/24", "2013/5/27", "2013/5/28", "2013/5/29",
				"2013/5/30", "2013/5/31", "2013/6/3", "2013/6/4", "2013/6/5",
				"2013/6/6", "2013/6/7", "2013/6/13"
			],
			"series": [{
				"name": "成交量1",
				"data": [15, 20, 45, 37, 43, 15, 20, 45, 37, 43, 15, 20, 45, 37, 43, 15, 20,
					45, 37, 43, 15, 20, 45, 37, 43, 15, 20, 45, 37, 43, 15, 20, 45, 37, 43, 15, 20,
					45, 37, 43, 15, 20, 45, 37, 43, 15, 20, 45, 37, 43, 15, 20, 45, 37, 43, 15, 20,
					45, 37, 43, 15, 20, 45, 37, 43, 15, 20, 45, 37, 43, 15, 20, 45, 37, 43, 15, 20,
					45, 37, 43, 15, 20, 45, 37, 43, 15, 20, 45
				]
			}]
		},
		"tips": "【开源不易、改造不易、哪(拿)来简单】uCharts将始终坚持开源，为您提供最便捷的高性能图表工具！"
	}
}

const getVarietyInvestList = {
	"success": true,
	"data": {
		"LineA": {
			"categories": ["2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014",
				"2015", "2016", "2017", "18H1"
			],
			"series": [{
					"name": "原油",
					"data": [-0.89, 34.41, 43.83, 1.24, 62.94, -61.94, 112.5, 19.16, 15.09, 3.26, 0.28, -50.14, -35.02, 53.72, 11.69,
						23.54
					]
				},
				{
					"name": "企债指数",
					"data": [-0.07, -4.09, 24.08, 0.77, -5.19, 17.11, 0.68, 7.42, 3.50, 7.49, 4.36, 8.73, 8.84, 6.04, 2.13, 2.28]
				},
				{
					"name": "CPI",
					"data": [1.2, 3.9, 1.8, 1.5, 4.8, 5.9, -0.7, 3.3, 5.4, 2.6, 2.6, 2.0, 1.4, 2.0, 1.6, 1.9]
				},
				{
					"name": "标普500",
					"data": [26.38, 8.99, 3, 13.62, 3.53, -38.49, 23.45, 12.78, 0, 13.41, 29.60, 11.39, -0.73, 9.54, 19.42, 1.67]
				},
				{
					"name": "定期存款",
					"data": [1.98, 2.25, 2.25, 2.52, 4.14, 2.25, 2.25, 2.75, 3.5, 3, 3, 2.75, 1.5, 1.5, 1.5, 1.5]
				},
				{
					"name": "房价",
					"data": [-7.04, -1.26, 13.36, 26.76, 28.25, 2.15, 31.85, 32.62, 14.1, 10.71, 15.94, -2.08, 5.41, 118.54, 14.57,
						-2.1
					]
				},
				{
					"name": "黄金",
					"data": [19.50, 5.36, 18.36, 23.92, 31.59, 3.41, 27.63, 27.74, 11.65, 5.68, -27.79, -0.19, -11.42, 9.12, 13.29,
						-3.9
					]
				},
				{
					"name": "沪深300",
					"data": [8.25, -16.30, -7.65, 121.02, 161.55, -65.95, 96.71, -12.51, -25.01, 7.55, -7.65, 51.66, 5.58, -11.28,
						21.78, -12.90
					]
				},
			]
		},
		"LineA2": {
			"categories": ["2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014",
				"2015", "2016", "2017", "2018H1"
			],
			"series": [{
					"name": "原油",
					"data": [-0.89, 34.41, 43.83, 1.24, 62.94, -61.94, 112.5, 19.16, 15.09, 3.26, 0.28, -50.14, -35.02, 53.72, 11.69,
						23.54
					]
				},
				{
					"name": "房价",
					"data": [-7.04, -1.26, 13.36, 26.76, 28.25, 2.15, 31.85, 32.62, 14.1, 10.71, 15.94, -2.08, 5.41, 118.54, 14.57,
						-2.1
					]
				},
				{
					"name": "沪深300",
					"data": [8.25, -16.30, -7.65, 121.02, 161.55, -65.95, 96.71, -12.51, -25.01, 7.55, -7.65, 51.66, 5.58, -11.28,
						21.78, -12.90
					]
				},
				
			]
		},
		"LineA3": {
			"categories": ["2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014",
				"2015", "2016", "2017", "2018H1"
			],
			"series": [
				{
					"name": "企债指数",
					"data": [-0.07, -4.09, 24.08, 0.77, -5.19, 17.11, 0.68, 7.42, 3.50, 7.49, 4.36, 8.73, 8.84, 6.04, 2.13, 2.28]
				},
				{
					"name": "CPI",
					"data": [1.2, 3.9, 1.8, 1.5, 4.8, 5.9, -0.7, 3.3, 5.4, 2.6, 2.6, 2.0, 1.4, 2.0, 1.6, 1.9]
				},
				
				{
					"name": "定期存款",
					"data": [1.98, 2.25, 2.25, 2.52, 4.14, 2.25, 2.25, 2.75, 3.5, 3, 3, 2.75, 1.5, 1.5, 1.5, 1.5]
				},
				{
					"name": "标普500",
					"data": [26.38, 8.99, 3, 13.62, 3.53, -38.49, 23.45, 12.78, 0, 13.41, 29.60, 11.39, -0.73, 9.54, 19.42, 1.67]
				},
				{
					"name": "黄金",
					"data": [19.50, 5.36, 18.36, 23.92, 31.59, 3.41, 27.63, 27.74, 11.65, 5.68, -27.79, -0.19, -11.42, 9.12, 13.29,
						-3.9
					]
				},
			]
		},
	}

}

const res_home = {
	"success": true,
	"data": {
		"bannerList": {
			"data": [{
					id: 0,
					img: 'https://cdn.pixabay.com/photo/2016/11/29/13/24/balloons-1869816__340.jpg',
					url: 'www.baidu.com/',

				},
				{
					id: 1,
					img: 'https://cdn.pixabay.com/photo/2016/11/23/17/55/beach-1854072__340.jpg',
					url: 'www.baidu.com/',
				},
				{
					id: 2,
					img: 'https://cdn.pixabay.com/photo/2016/11/19/12/25/art-1839006__340.jpg',
					url: 'www.baidu.com/',
				},
			]
		},

		"bannerList_two": {
			"data": [{
					id: 0,
					img: 'https://cdn.pixabay.com/photo/2016/11/29/11/57/animal-1869337__340.jpg',
					url: 'www.baidu.com/',
					txt_tips:'',
					txt_txt:'',
					txt_url:''
				},
				{
					id: 1,
					img: 'https://cdn.pixabay.com/photo/2016/11/21/15/43/beach-1846040__340.jpg',
					url: 'www.baidu.com/',
				},
				{
					id: 2,
					img: 'https://cdn.pixabay.com/photo/2016/11/29/06/20/anniversary-1867767__340.jpg',
					url: 'www.baidu.com/',
				},
			]
		},

		"shortcutNavList": {
			"data": [{
					img: 'https://cdn.pixabay.com/photo/2016/11/23/17/56/decor-1854075__340.jpg',
					name: '动画',//立人
					key: '1',
				},
				{
					img: 'https://cdn.pixabay.com/photo/2016/11/29/06/28/bay-1867798__340.jpg',
					name: '景区',//立德
					key: '2',
				},
				{
					img: 'https://cdn.pixabay.com/photo/2016/11/22/19/15/bee-1850116__340.jpg',
					name: '跳跃',//立言
					key: '3',
				},
				{
					img: 'https://cdn.pixabay.com/photo/2017/03/27/14/38/architecture-2179108__340.jpg',
					name: '常用',//立行
					key: '4',
				},
			]
		},

		"shortcutNavList_two": {
			"data": [{
					img: 'https://cdn.pixabay.com/photo/2016/11/29/13/09/blur-1869731__340.jpg',
					name: '富强民主',
					key: '富强民主',
				},
				{
					img: 'https://cdn.pixabay.com/photo/2016/11/29/11/30/adventure-1869194__340.jpg',
					name: '文明和谐',
					key: '文明和谐',
				},
				{
					img: 'https://cdn.pixabay.com/photo/2016/03/28/09/34/bedroom-1285156__340.jpg',
					name: '自由平等',
					key: '自由平等',
				},
				{
					img: 'https://cdn.pixabay.com/photo/2016/03/27/23/08/gymnastics-1284656__340.jpg',
					name: '公正法治',
					key: '公正法治',
				},
				{
					img: 'https://cdn.pixabay.com/photo/2016/11/23/17/21/bloom-1853920__340.jpg',
					name: '爱国敬业',
					key: '爱国敬业',
				},
				{
					img: 'https://cdn.pixabay.com/photo/2016/11/18/15/40/cookies-1835414__340.jpg',
					name: ' 诚信友善',
					key: ' 诚信友善',
				},
				{
					img: 'https://cdn.pixabay.com/photo/2016/11/19/12/14/sup-1838969__340.jpg',
					name: '社会主义',
					key: '社会主义',
				},
				{
					img: 'https://cdn.pixabay.com/photo/2016/11/19/14/27/flora-1839558__340.jpg',
					name: '核心价值观',
					key: '核心价值观',
				},
			]
		},

		"goUpNoticeList": {
			"data": [{
					directOne1: '路遥知马力，日久见人心',
					directOne2: '《元曲选·争报恩》',
				},
				{
					directOne1: '天生我材必有用',
					directOne2: '李白',
				},
				{
					directOne1: '穷则独善其身，达则兼济天下',
					directOne2: '孟子',
				},
				{
					directOne1: '业精于勤，荒于嬉；行成于思，毁于随',
					directOne2: '韩愈',
				},
				{
					directOne1: '一年之计在于春，一日之计在于晨',
					directOne2: '萧绎',
				},
				{
					directOne1: '.熟读唐诗三百首，不会作诗也会吟',
					directOne2: '孙洙',
				},
				{
					directOne1: '己所不欲，勿施于人',
					directOne2: '孔子',
				},
				{
					directOne1: '书到用时方恨少，事非经过不知难',
					directOne2: '陆游',
				},
				{
					directOne1: '居安思危，思则有备，有备无患',
					directOne2: '《左传》',
				},
				{
					directOne1: '仰不愧天，俯不愧人，内不愧心',
					directOne2: '韩愈',
				},
				{
					directOne1: '天下兴亡，匹夫有责',
					directOne2: '顾炎武',
				},
				{
					directOne1: '人无远虑，必有近忧',
					directOne2: '孔子',
				},
				{
					directOne1: '为中华之崛起而读书',
					directOne2: '周恩来',
				},
				{
					directOne1: '勿以恶小而为之，勿以善小而不为',
					directOne2: '刘备',
				},
				{
					directOne1: '读书如饭，善吃饭者长精神，不善吃者生疾病',
					directOne2: '章学诚',
				},
				{
					directOne1: '路漫漫其修远兮，吾将上下而求索',
					directOne2: '屈原',
				},
				{
					directOne1: '人谁无过？过而能改，善莫大焉',
					directOne2: '《论语》',
				},
				{
					directOne1: '近朱者赤，近墨者黑',
					directOne2: '付玄',
				},
				{
					directOne1: '长风破浪会有时，直挂云帆济沧海',
					directOne2: '李白',
				},
				{
					directOne1: '受苦的人，没有悲观的权利',
					directOne2: '尼采',
				},
				{
					directOne1: '天行健，君子以自强不息',
					directOne2: '《周易》',
				},
				{
					directOne1: '学必求其心得，业必贵其专精',
					directOne2: '章学诚',
				},
				{
					directOne1: '生活的理想，就是为了理想的生活',
					directOne2: '张闻天',
				},
				{
					directOne1: '有志者事竟成',
					directOne2: '《后汉书·耿列传》',
				},
				{
					directOne1: '人只有献身于社会，才能找出那短暂而有风险的生命的意义',
					directOne2: '爱因斯坦',
				},
			]
		},
		//健康生活
		"shuImgTxtSubNav": {
			"data": [
				'唯美心灵', '许下你的新年愿望'
			]
		},

		"shuImgTxtList": {
			"data": [{
					id: 0,
					img: 'https://cdn.pixabay.com/photo/2016/11/21/16/55/adult-1846436__340.jpg',
					subtitle: '一心一意做事三心二意生活',
					directOne1: '愿你：幸福',
				},
				{
					id: 1,
					img: 'https://cdn.pixabay.com/photo/2016/11/29/04/18/hot-air-balloons-1867279__340.jpg',
					subtitle: '尽最大的努力留最小的遗憾',
					directOne1: '祝你：顺利',
				},
				{
					id: 2,
					img: 'https://cdn.pixabay.com/photo/2016/11/21/15/38/beach-1846009__340.jpg',
					subtitle: '小事成就大事细节成就完美',
					directOne1: '望你：快乐',
				},
			]
		},


		"shuImgTxtSubNav_two": {
			"data": [
				'生活不简单', '尽量简单过'
			]
		},

		"shuImgTxtList_two": {
			"data": [{
					id: 0,
					img: 'https://cdn.pixabay.com/photo/2016/11/19/17/25/furniture-1840463__340.jpg',
					subtitle: '没有特别想维持的关系',

					directOne1: '一切都很平淡',

					directTwo1: '没有特别想努力的动力',
					directTwo2: '| 淡然',

					directTh1: '没有特别想得到的东西',
				},
				{
					id: 1,
					img: 'https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662__340.jpg',
					subtitle: '走近的人不抗拒',

					directOne1: '一切都很顺遂',

					directTwo1: '离开的人不挽留',
					directTwo2: '| 平静',

					directTh1: '吃点亏也懒得计较',
				},
			]
		},

		"shuImgTxtSubNav_three": {
			"data": [
				'无缘人', '迟早去他人身旁'
			]
		},
		//https://cdn.pixabay.com/photo/2016/03/27/17/12/water-1283152__340.jpg
		"shuImgTxtList_three": {
			"data": [{
					id: 0,
					img: 'https://cdn.pixabay.com/photo/2016/11/29/10/22/cobweb-1868997__340.jpg',
					subtitle: ' 如果有一天，你在街上',
					directOne1: '碰到了',
				},
				{
					id: 1,
					img: 'https://cdn.pixabay.com/photo/2016/11/21/17/06/bee-1846521__340.jpg',
					subtitle: '你的前度与新欢',
					directOne1: '在一起',
				},
				{
					id: 2,
					img: 'https://cdn.pixabay.com/photo/2016/11/23/14/49/alcohol-1853327__340.jpg',
					subtitle: '请不要心酸',
					directOne1: '因为自小我们就被教育',
				},
				{
					id: 3,
					img: 'https://cdn.pixabay.com/photo/2016/11/19/17/02/chinese-1840332__340.jpg',
					subtitle: '要把旧玩具',
					directOne1: '送给比自己更不幸的人',
				},
			]
		},

		"hengTxtImgSubNav": {
			"data": [
				'一生很短', '没必要和生活过于计较'
			]
		},
		//https://cdn.pixabay.com/photo/2017/03/27/15/06/autumn-2179272__340.jpg
		"hengTxtImgList": {
			"data": [{
					id: 0,
					img: 'https://cdn.pixabay.com/photo/2016/11/18/15/22/bridge-1835328__340.jpg',
					subtitle: '把不愉快的过往',
					directOne1: '有些事弄不懂，就不去懂',

					directTwo1: '告诉自己',

					directTh1: '可以：',
					directTh2: '不富有',
				},
				{
					id: 1,
					img: 'https://cdn.pixabay.com/photo/2016/11/23/15/33/beautiful-flowers-1853562__340.jpg',
					subtitle: '在无人的角落',
					directOne1: '有些人猜不透，就不去猜',

					directTwo1: '一定要真实',

					directTh1: '可以：',
					directTh2: '不',
				},
				{
					id: 2,
					img: 'https://cdn.pixabay.com/photo/2016/11/18/13/03/beach-1834329__340.jpg',
					subtitle: '折叠收藏',
					directOne1: '有些理儿想不通，就不去想',

					directTwo1: '一定要快乐',

					directTh1: '可以：',
					directTh2: '不完美',
				},
			]
		},

		"hengImgTxtSubNav": {
			"data": [
				'人生梦想', '激情奋斗'
			]
		},

		"hengImgTxtList": {
			"data": [{
					id: 0,
					img: 'https://cdn.pixabay.com/photo/2016/11/18/17/14/bloom-1835900__340.jpg',
					subtitle: '一生交往看人品',
					directOne1: ' 经验，会告诉你怎样去做事',

					directTwo1: '不会一成不变',

					directTh1: '坦途：',
					directTh2: '曲径',
				},
				{
					id: 1,
					img: 'https://cdn.pixabay.com/photo/2016/03/26/23/00/umbrellas-1281751__340.jpg',
					subtitle: '梦想为了给人生带来意义和快乐',
					directOne1: '时间，会教给你如何看人',

					directTwo1: '保持激情',

					directTh1: '不会：',
					directTh2: '孤单',
				},
				{
					id: 2,
					img: 'https://cdn.pixabay.com/photo/2016/11/19/12/15/bicycle-1838972__340.jpg',
					subtitle: '生命是需要奋斗',
					directOne1: '扑面热情，可能只是一念之间',

					directTwo1: '永远热忱',

					directTh1: '应付：',
					directTh2: '未来',
				},
			]
		},

		"hengTxtImgTSubNav": {
			"data": [
				'人与人', '吸引力法则'
			]
		},

		"hengTxtImgTList": {
			"data": [{
					id: 0,
					img: 'https://cdn.pixabay.com/photo/2016/11/29/12/12/architecture-1869398__340.jpg',
					subtitle: '让人过于舒服的路，都是下坡路',

					directOne1: 'icon-daohangdizhi',
					directOne2: '动物园里养不出千里马',

					directTwo1: 'icon-time',
					directTwo2: '水井里也生不出腾飞的巨龙',

					directTh1: '传递',
					directTh2: '温暖',
					directTh3: '不是容颜',
				},
				{
					id: 1,
					img: 'https://cdn.pixabay.com/photo/2016/11/29/05/55/kitchen-1867663__340.jpg',
					subtitle: '最不费力气的行走，都是顺风走',

					directOne1: 'icon-daohangdizhi',
					directOne2: '是选择迎风奔跑',

					directTwo1: 'icon-time',
					directTwo2: '还是就坡下驴',

					directTh1: '传递',
					directTh2: '踏实',
					directTh3: '不是财富',
				},
				{
					id: 2,
					img: 'https://cdn.pixabay.com/photo/2016/11/19/13/53/bar-1839361__340.jpg',
					subtitle: '最终变成什么样取决于是否努力',

					directOne1: 'icon-daohangdizhi',
					directOne2: '努力这个词太平凡',

					directTwo1: 'icon-time',
					directTwo2: '但努力将使人不平庸',

					directTh1: '传递',
					directTh2: '正能量',
					directTh3: '不是才华',
				},
			]
		},

		"hengImgTxtTSubNav": {
			"data": [
				'人生', '远离可悲'
			]
		},

		"hengImgTxtTList": {
			"data": [{
					id: 0,
					img: 'https://cdn.pixabay.com/photo/2016/11/29/12/12/architecture-1869398__340.jpg',
					subtitle: '为自己而进步',

					directOne1: 'icon-daohangdizhi',
					directOne2: '多微笑',

					directTwo1: 'icon-time',
					directTwo2: '做一个开朗热忱的女人',

					directTh1: '胸怀',
					directTh2: '大志',
					directTh3: '虚度',
				},
				{
					id: 1,
					img: 'https://cdn.pixabay.com/photo/2016/11/29/05/55/kitchen-1867663__340.jpg',
					subtitle: '既然知道路远',

					directOne1: 'icon-daohangdizhi',
					directOne2: '多打扮',

					directTwo1: 'icon-time',
					directTwo2: '做一个美丽优雅的女人',

					directTh1: '不够',
					directTh2: '聪明',
					directTh3: '爱拖延',
				},
				{
					id: 2,
					img: 'https://cdn.pixabay.com/photo/2016/11/19/13/53/bar-1839361__340.jpg',
					subtitle: '就该早点出发',

					directOne1: 'icon-daohangdizhi',
					directOne2: '多倾听',

					directTwo1: 'icon-time',
					directTwo2: '做一个温柔善意的女人',

					directTh1: '学历',
					directTh2: '不漂亮',
					directTh3: '没充电',
				},
			]
		},

		// "": {
		// 	"data": [
		// 	]
		// },

	},
}


export default {
	res,
	res_home,
	getVarietyInvestList,
}
