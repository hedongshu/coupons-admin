<template>
	<div>
		<el-form
			ref="form"
			:model="form"
			label-width="80px"
		>
			<el-form-item label="sid">
				<el-input
					v-model="form.sid"
					style="width: 50%"
				></el-input>
			</el-form-item>

			<el-form-item label="选择时间">
				<el-date-picker
					v-model="form.dateLimit"
					type="daterange"
					range-separator="至"
					start-placeholder="开始日期"
					end-placeholder="结束日期"
					style="width: 50%"
					value-format="yyyy-MM-dd"
				>
				</el-date-picker>
			</el-form-item>

			<el-form-item>
				<el-button
					type="primary"
					@click="submit"
				>立即查询</el-button>
			</el-form-item>
		</el-form>

		<el-card>
			<div>
				<el-alert
					style="margin-top: 40px; margin-bottom: 20px"
					:title="titleStr"
					type="success"
					:closable="false"
				>
				</el-alert>
			</div>
			<div>
				<el-table
					v-loading="loading"
					:data="ordersList"
					style="width: 100%"
				>
					<el-table-column
						align="center"
						prop="sid"
						label="sid"
					> </el-table-column>

					<el-table-column
						align="center"
						prop="smstitle"
						label="商铺名称"
					> </el-table-column>

					<el-table-column
						align="center"
						label="支付时间"
					>
						<template slot-scope="scope">
							<span>{{ scope.row.paytime | formatTime}}</span>
						</template>
					</el-table-column>

					<el-table-column
						align="center"
						prop="payprice"
						label="订单金额"
					> </el-table-column>

					<el-table-column
						align="center"
						prop="profit"
						label="返佣"
					> </el-table-column>

					<el-table-column
						align="center"
						label="状态"
					>
						<template slot-scope="scope">
							<span>{{ scope.row.status | status}}</span>
						</template>
					</el-table-column>

				</el-table>

				<el-pagination
					layout="prev, pager, next"
					:total="pagelimit.total"
					:page-size='pagelimit.limit'
					@current-change='pageChange'
				>
				</el-pagination>
			</div>
		</el-card>
	</div>

</template>

<script>
import { getOrders } from "@/api/orders";

export default {
	name: "order",
	data() {
		return {
			form: {
				sid: "",
				dateLimit: [],
			},
			titleStr: "",
			ordersList: [],
			orderData: {},
			pagelimit: {
				total: 100,
				page: 1,
				limit: 100,
			},
			loading: false,
		};
	},
	methods: {
		getOrders() {
			this.loading = true;
			console.log(this.pagelimit);

			getOrders(this.pagelimit).then((res) => {
				console.log(res.data);
				this.orderData = res.data;

				this.ordersList = res.data.list;
				this.pagelimit.page = res.data.page;
				this.pagelimit.total = res.data.total;
				this.pagelimit.limit = res.data.limit;

				this.titleStr = `订单总数: ${this.orderData.total}  预计总交易额: ${this.orderData.totalPayprice}  预计返佣: ${this.orderData.totalProfit}`;
				this.loading = false;
			});
		},

		pageChange(page) {
			this.pagelimit.page = page;
			this.getOrders();
		},

		submit() {
			if (this.form.dateLimit.length != 2 || this.form.sid == "") {
				this.$alert("请输入sid和时间", "提示", {
					confirmButtonText: "确定",
					callback: (action) => {
						// return;
					},
				});
				return;
			}

			this.pagelimit.startTime = this.form.dateLimit[0];
			this.pagelimit.endTime = this.form.dateLimit[1];
			this.pagelimit.sid = this.form.sid;

			this.getOrders();
		},
	},
	mounted() {},
	filters: {
		formatTime(date) {
			return new Date(Number(date + "000")).toLocaleString();
		},
		status(status) {
			switch (status) {
				case 1:
					return "已付款";
					break;
				case 8:
					return "已完成";
					break;
				case 9:
					return "已退款或风控";
					break;
				default:
					return "异常";
					break;
			}
		},
	},
};
</script>