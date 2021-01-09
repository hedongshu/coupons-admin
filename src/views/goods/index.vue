<template>
	<el-card>
		<el-table
			v-loading=loading
			:data="tableData"
			style="width: 100%"
		>
			<el-table-column
				align="center"
				prop="icon"
				label="图片"
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
				prop="id"
				label="编号"
			>
			</el-table-column>

			<el-table-column
				align="center"
				prop="class"
				label="分类"
			>
			</el-table-column>
			<el-table-column
				align="center"
				prop="title"
				label="标题"
			>
			</el-table-column>

			<el-table-column
				align="center"
				label="库存/状态"
			>
				<template slot-scope="scope">
					<span>{{scope.row.nums}} / </span>
					<el-tag type="success">{{scope.row.status}}</el-tag>
				</template>
			</el-table-column>

			<el-table-column
				align="center"
				prop="price"
				label="价格"
			>
			</el-table-column>

			<el-table-column
				align="center"
				label="数据统计"
			>
				<template slot-scope="scope">
					<p>订单数: {{scope.row.info.orders}}</p>
					<p>销售数: {{scope.row.info.sales}}</p>
				</template>
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
					>编辑</el-button>
				</template>
			</el-table-column>
		</el-table>
	</el-card>
</template>

<script>
let data = [
	{
		id: 611095,
		title: "张单英大米-18斤装-礼盒",
		class: "稻米",
		icon:
			"https://dcdn.it120.cc/2020/05/07/ea45436e-6521-45f2-a162-35f8df240f71.JPG",
		status: "上架",
		nums: 9999,
		price: 100,
		info: {
			orders: 23449,
			sales: 26458,
		},
	},
	{
		id: 611094,
		title: "张单英大米-10斤装",
		class: "稻米",
		icon:
			"https://dcdn.it120.cc/2020/06/12/f0dfbf9d-2ce9-4788-8a85-33a5b5a55536.jpg",
		status: "上架",
		nums: 9999,
		price: 68,
		info: {
			orders: 84328,
			sales: 88153,
		},
	},
	{
		id: 611092,
		title: "张单英大米-20斤装",
		class: "稻米",
		icon:
			"https://dcdn.it120.cc/2020/06/11/f1b64d5b-53a2-4d75-b924-beaa3770d093.jpg",
		status: "上架",
		nums: 9999,
		price: 80,
		info: {
			orders: 94532,
			sales: 97512,
		},
	},
	{
		id: 611090,
		title: "张单英大米-5斤装",
		class: "稻米",
		icon:
			"https://dcdn.it120.cc/2020/06/12/8f9866a1-3979-4b37-93ec-082c68392833.jpg",
		status: "上架",
		nums: 9999,
		price: 30,
		info: {
			orders: 253184,
			sales: 256196,
		},
	},
	{
		id: 611089,
		title: "张单英大米-2斤装",
		class: "稻米",
		icon:
			"https://dcdn.it120.cc/2020/06/12/7087e8cc-0a47-443d-9fac-5648621dfeff.jpg",
		status: "上架",
		nums: 9999,
		price: 12,
		info: {
			orders: 84472,
			sales: 97451,
		},
	},
	{
		id: 610992,
		title: "张单英牌藏红花",
		class: "藏红花",
		icon:
			"https://dcdn.it120.cc/2020/06/12/0d5c6003-a05d-4211-88aa-d883fc365e50.jpg",
		status: "上架",
		nums: 9999,
		price: 998,
		info: {
			orders: 7451,
			sales: 7557,
		},
	},
];
export default {
	name: "goods",
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