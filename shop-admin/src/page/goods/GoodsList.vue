<template>
	<div>
		<div class="form-control">
			<div>
				<!-- <el-button @click="toggleSelection()">全选</el-button> -->
				<router-link to="goods-add"><el-button>新增</el-button></router-link>
				<el-button @click="handleDelete(selectedRows)">删除</el-button>
			</div>

			<div >
				<el-input placeholder="请输入内容" v-model="searchvalue" class="input-with-select">
					<el-button slot="append" icon="el-icon-search" @click="handleSearch"></el-button>
				</el-input>
			</div>
		</div>

		<el-table
			ref="multipleTable"
			:data="tableData"
			tooltip-effect="dark"
			style="width: 100%"
			@selection-change="handleSelectionChange">
			<el-table-column
			type="selection"
			width="55">
			</el-table-column>
			<el-table-column
			label="标题">
				<template slot-scope="scope">
					<router-link to="/">
						<div class="goods-info">
							<div class="goods-img">
								<img :src="scope.row.imgurl"/>
							</div>
							<p>{{scope.row.title}}</p>
						</div>
					</router-link>
				</template>
			</el-table-column>
			<el-table-column
			prop="categoryname"
			label="类型"
			width="120">
			</el-table-column>
			<el-table-column
			prop="market_price"
			label="价格"
			show-overflow-tooltip>
			</el-table-column>
			<el-table-column label="操作" align="right">
				<template slot-scope="scope">
					<el-button
					size="mini"
					@click="handleEdit(scope.row)">编辑</el-button>
					<el-button
					size="mini"
					type="danger"
					@click="handleDelete([scope.row])">删除</el-button>
				</template>
			</el-table-column>
		</el-table>

		<div class="block">
			<el-pagination
			@size-change="handleSizeChange"
			@current-change="handleCurrentChange"
			:current-page="pageIndex"
			:page-sizes="[5, 10, 15, 20]"
			:page-size="pageSize"
			layout="total, sizes, prev, pager, next, jumper"
			:total="totalCount">
			</el-pagination>
		</div>
	</div>
</template>
<script>


	export default {
		data(){
			return{
				  tableData: [
        {
          title: "小米9 xiaomi新品三摄 6GB+128GB全息幻彩蓝",
          type: "手机",
          price: 3599
        },
        {
          title: "小米9 xiaomi新品三摄 6GB+128GB全息幻彩蓝",
          type: "手机",
          price: 3599
        },
        {
          title: "小米9 xiaomi新品三摄 6GB+128GB全息幻彩蓝",
          type: "手机",
          price: 3599
        },
        
      ],
				selectedRows: [],

				pageIndex: 1,
				pageSize: 5,
				searchvalue: "",
				totalCount: 0
			}
		},

		methods: {
			handleSizeChange(val) {
				this.pageSize = val;
				this.getList();
			},
			handleCurrentChange(val) {
				this.pageIndex = val;
				this.getList();
			},
			handleEdit(val){
				this.$router.push({name: "goods-edit", params: {id: val.id}})
			},
			handleSelectionChange(val) {
				this.selectedRows = val;
			},
			getList(){
				// 获取列表数据
				this.$axios({
					method:"GET",
					url: `/admin/goods/getlist`,
					params: {
						pageIndex: this.pageIndex,
						pageSize: this.pageSize,
						searchvalue: this.searchvalue
					}
				}).then(res => {
					const {message, pageIndex, pageSize, totalcount} = res.data;
					this.tableData = message;
					this.pageIndex = pageIndex,
					this.pageSize = pageSize;
					this.totalCount = totalcount;
				})
			},

			handleDelete(list = []){
				if(list.length === 0){
					return;
				}
				
				const arr = list.map(v => {
					return v.id
				})
				this.$axios({
					method:"GET",
					url: `/admin/goods/del/${arr.join(",")}`,
				}).then(res => {
					const {message} = res.data;
					this.$message({
			          message,
			          type: 'success'
			        });

			        this.getList();
				})
			},

			handleSearch(){
				this.pageIndex = 1;
				this.getList();
			}
		},

		mounted(){
			this.getList();
		}
	}
</script>
<style scoped lang="scss">
	.form-control{
		display: flex;
		justify-content: space-between;
		margin-bottom:20px;
	}

	.el-table{
		margin-bottom:20px;
	}

	.goods-info{
		display: flex;
		align-items: center;

		.goods-img{
			width:64px;
			height:64px;
			display: flex;
			justify-content: center;
			align-items: center;
			overflow: hidden;
			flex-shrink: 0;
			margin-right:10px;
			img{
				display: block;
				height:64px;
			}
		}
	}
</style>