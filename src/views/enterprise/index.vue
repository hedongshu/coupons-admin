<template>
	<div>
		<el-card>
			<table class="baseInfoTable">
				<tr>
					<th
						width="140px"
						align="left"
					>企业名称</th>
					<td>江西省东树农业开发有限公司</td>
				</tr>
				<tr>
					<th
						width="140px"
						align="left"
					>类型</th>
					<td>有限责任公司(自然人投资或控股)</td>
				</tr>
				<tr>
					<th
						width="140px"
						align="left"
					>法定代表人</th>
					<td>何育红</td>
				</tr>
				<tr>
					<th
						width="140px"
						align="left"
					>经营范围</th>
					<td>水稻、果树、蔬菜、中药材、苗木种植及销售、农业信息技术咨询（依法须经批准的项目，经相关部门批准后方可开展经营活动）</td>
				</tr>
			</table>
		</el-card>

		<el-card style="margin-top: 10px">
			<div slot="header">
				<span>营业执照</span>
			</div>
			<img
				src="https://tva1.sinaimg.cn/large/0081Kckwly1gkixpv8exnj30u016jjzm.jpg"
				alt=""
			>
		</el-card>
	</div>
</template>

<script>
export default {
	name: "enterprise",
	data() {
		return {
			tableData: [{}],
		};
	},
};
</script>

<style lang='scss' scoped>
.baseInfoTable {
	width: 100%;
	line-height: 40px;
	td {
		border-bottom: 1px solid #ebeef5;
		color: green;
	}
}
</style>