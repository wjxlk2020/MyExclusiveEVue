<template>
  <el-table
    ref="multipleTable"
    :data="tableData3"
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange"
  >
  
    <!-- 全选框 -->
    <el-table-column type="selection" width="55" id="title_1"></el-table-column>

    <el-table-column label="标题" width="120">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>

    <el-table-column prop="name" label="类型" width="120"></el-table-column>

    <el-table-column prop="address" label="价格" show-overflow-tooltip></el-table-column>

    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>

     
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData3: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      multipleSelection: []
    };
  },

  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    
  }
};
</script>
<style >
#title_1 {
  height: 30px;
}
</style>
