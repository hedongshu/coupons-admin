<template>
	<el-card>
		<el-table
			v-loading=loading
			:data="tableData"
			style="width: 100%"
		>
			<el-table-column
				align="center"
				prop="id"
				label="编号"
			>
			</el-table-column>
			<el-table-column
				align="center"
				prop="name"
				label="名称"
			>
			</el-table-column>
			<el-table-column
				align="center"
				prop="icon"
				label="图标"
			>
				<template slot-scope="scope">
					<img
						style="width: 80px"
						:src="scope.row.icon"
						alt=""
					>
				</template>
			</el-table-column>
			<el-table-column
				align="center"
				label="状态"
			>
				<template slot-scope="scope">
					<el-tag type="success">{{scope.row.status}}</el-tag>
				</template>
			</el-table-column>
			<el-table-column
				align="center"
				prop="createtime"
				label="添加时间"
			>
			</el-table-column>

			<el-table-column
				align="center"
				label="操作"
			>
				<template slot-scope="scope">
					<el-button
						type="danger"
						size="mini"
						disabled
					>删除</el-button>
				</template>
			</el-table-column>
		</el-table>
	</el-card>
</template>

<script>
let data = [
	{
		id: 1,
		name: "藏红花",
		icon:
			"https://dcdn.it120.cc/2020/05/07/f978149f-83ce-4ea0-af7d-1a156844930d.png",
		status: "启用",
		createtime: "2019-12-07",
	},
	{
		id: 2,
		name: "稻米",
		icon:
			"https://dcdn.it120.cc/2020/05/07/c058e01f-f897-4991-9703-bc385c59ff95.png",
		status: "启用",
		createtime: "2019-12-07",
	},
];
export default {
	name: "classification",
	data() {
		return {
			loading: false,
			tableData: [],
		};
	},
	mounted() {
		this.loading = true;
		setTimeout(() => {
			this.loading = false;
			this.tableData = data;
		}, 500);
	},
};
</script>