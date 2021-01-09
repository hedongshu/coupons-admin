<template>
	<div class="dashboard-container">
		<!-- <el-row :gutter="20">
			<el-col :span="6">
				<el-card>
					<div class="panel-group">
						<i
							class="el-icon-user-solid"
							style="color:#43c8c6; font-size:50px"
						></i>
						<div class="column-box"></div>
						<div class="card-panel-description">
							<div>
								用户数
							</div>
							<span>71548</span>
						</div>
					</div>
				</el-card>
			</el-col>
			<el-col :span="6">
				<el-card>
					<div class="panel-group">
						<i
							class="el-icon-goods"
							style="color:#009fff; font-size:50px"
						></i>
						<div class="column-box"></div>
						<div class="card-panel-description">
							<div>
								订单数
							</div>
							<span>547416</span>
						</div>
					</div>
				</el-card>
			</el-col>
			<el-col :span="6">
				<el-card>
					<div class="panel-group">
						<i
							class="el-icon-receiving"
							style="color:#ff3636; font-size:50px"
						></i>
						<div class="column-box"></div>
						<div class="card-panel-description">
							<div>
								存储
							</div>
							<span>10%</span>
						</div>
					</div>
				</el-card>
			</el-col>
			<el-col :span="6">
				<el-card>
					<div class="panel-group">
						<i
							class="el-icon-shopping-cart-2  "
							style="color:#48c321; font-size:50px"
						></i>
						<div class="column-box"></div>
						<div class="card-panel-description">
							<div>
								商品数量
							</div>
							<span>6</span>
						</div>
					</div>
				</el-card>
			</el-col>
		</el-row>

		<el-row
			:gutter="20"
			style="margin-top:30px;"
		>
			<el-col :span="12">
				<el-card title="基本信息">
					<table class="baseInfoTable">
						<tr>
							<th
								width="140px"
								align="left"
							>店铺</th>
							<td>
								<span>天然小店</span>
							</td>
						</tr>
						<tr>
							<th
								width="140px"
								align="left"
							>管理员</th>
							<td>
								<span>何**</span>
							</td>
						</tr>
						<tr>
							<th
								width="140px"
								align="left"
							>绑定电话</th>
							<td>
								<span>133****3018</span>
							</td>
						</tr>
					</table>
				</el-card>
			</el-col>
			<el-col :span="12">
				<el-card title="二维码">
					<table class="baseInfoTable">
						<tr
							width="140px"
							align="left"
						>
							<th>二维码</th>
							<td>
								<img
									style="height: 115px"
									src="https://tva1.sinaimg.cn/large/0081Kckwly1gkemtsu0oij3076076gml.jpg"
									alt=""
								>
							</td>
						</tr>
					</table>
				</el-card>
			</el-col>
		</el-row> -->

		<el-card style="margin-top: 30px">
			<el-date-picker
				v-model="timeLimit"
				type="daterange"
				@change='getData'
				range-separator="至"
				start-placeholder="开始日期"
				end-placeholder="结束日期"
			>
			</el-date-picker>

			<div
				class="chartContainer"
				v-if="!loading"
			>
				<v-chart :options="chartopt" />
			</div>

		</el-card>
	</div>
</template>

<script>
import ECharts from "vue-echarts";
import "echarts/lib/chart/bar";
import "echarts/lib/component/title";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/dataZoom";

import { getOrders, getOrdersCount } from "@/api/orders";

import { mapGetters } from "vuex";

export default {
	name: "Dashboard",
	computed: {
		...mapGetters(["name"]),
	},
	data() {
		const end = new Date();
		const start = new Date();
		start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);

		return {
			timeLimit: [start, end],
			loading: true,
			ordersList: [],
			chartopt: {
				title: {
					text: "订单数据",
					show: true,
				},
				tooltip: {
					trigger: "axis",
					show: true,
					// formatter: function (params) {
					// 	let html = `  时间: ${params[0].value[0]} <br/> ${params[0].seriesName}: ${params[0].value[1]} `;
					// 	return html;
					// },
				},
				xAxis: {
					type: "time",
				},
				yAxis: {
					type: "value",
				},
				series: [
					{
						name: "订单数",
						data: [],
						type: "bar",
					},
				],
			},
			chartsData: {},
		};
	},
	mounted() {
		// this.getData();
	},
	methods: {
		getData() {
			const loading = this.$loading({
				lock: true,
				text: "加载订单数据",
				spinner: "el-icon-loading",
			});

			this.loading = true;

			// getOrdersCount({
			// 	start: this.timeLimit[0],
			// 	end: this.timeLimit[1],
			// }).then((res) => {
			// 	console.log("统计信息", res);
			// 	let data = res.result;
			// 	this.chartopt.series[0].data = data;

			// 	this.loading = false;
			// 	loading.close();
			// });
		},
	},
};
</script>

<style lang="scss" scoped>
.dashboard {
	&-container {
		margin: 30px;
	}
	&-text {
		font-size: 30px;
		line-height: 46px;
	}
}
</style>


<style scoped lang='scss'>
.dashboard-container {
	.el-card__body {
		.panel-group {
			display: flex;
			.column-box {
				width: 2px;
				height: 60px;
				background: #e6e6e6;
				margin: 0 10px;
			}
			.card-panel-description {
				width: 100%;
				text-align: center;
				font-weight: 700;
				div {
					line-height: 18px;
					color: rgba(0, 0, 0, 0.4);
					font-size: 14px;
					margin-bottom: 12px;
				}
				span {
					font-size: 24px;
				}
			}
		}
	}

	.chartContainer {
		width: 100%;
		height: 400px;
		padding: 10px;
		.echarts {
			width: 100%;
			height: 100%;
		}
	}
}

.baseInfoTable {
	width: 100%;
	line-height: 40px;
	td {
		border-bottom: 1px solid #ebeef5;
		color: green;
	}
}
</style>
