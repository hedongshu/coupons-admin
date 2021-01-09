<template>
	<div>
		<h1>生成链接</h1>
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

			<el-form-item>
				<el-button
					type="primary"
					@click="submit"
				>立即查询</el-button>
			</el-form-item>
		</el-form>

		<el-card>
			<el-table
				v-loading="loading"
				:data="linksData"
				style="width: 100%"
			>
				<el-table-column
					align="center"
					prop="title"
					label="活动标题"
					width="300"
				> </el-table-column>

				<el-table-column
					align="center"
					prop="data"
					label="小程序跳转链接"
				> </el-table-column>
			</el-table>
		</el-card>
	</div>
</template>

<script>
import { getLinks } from "@/api/orders";

export default {
	name: "links",
	data() {
		return {
			form: {
				sid: "",
			},
			linksData: [],
		};
	},
	methods: {
		getlinksData() {
			getLinks(this.form.sid).then((res) => {
				console.log(res.data);

				this.linksData = res.data;
			});
		},
		submit() {
			if (this.form.sid == "") {
				this.$alert("请输入sid", "提示", {
					confirmButtonText: "确定",
					callback: (action) => {
						// return;
					},
				});
				return;
			}

			this.getlinksData();
		},
	},
};
</script>