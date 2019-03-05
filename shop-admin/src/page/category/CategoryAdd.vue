<template>
  <div class="goodsAdd">
    <el-form ref="form" :model="form" label-width="90px">
      <el-form-item label="所属父类别">
        <el-select v-model="form.region" placeholder="请选择">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>

        <el-form-item label="排序数字">
          <el-col :span="8">
            <el-input v-model="formLabelAlign.name" required></el-input>
          </el-col>
          <el-col :span="8">
            <span class="kunum">*栏目排序,排序不能小于( 0 )</span>
          </el-col>
        </el-form-item>

        <el-form-item label="类别名称">
          <el-col :span="8">
            <el-input v-model="formLabelAlign.region" required></el-input>
          </el-col>
          <el-col :span="8">
            <span class="kunum">*类别中文名称，100字符内</span>
          </el-col>
        </el-form-item>

        <el-form-item label="类别级别">
          <el-col :span="8">
            <el-input v-model="formLabelAlign.resource" required></el-input>
          </el-col>
          <el-col :span="8">
            <span class="kunum">类别的级别，1:1级菜单 2：二级菜单 依次类推</span>
          </el-col>
        </el-form-item>

      <el-form-item class="add-btn1">
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { quillEditor } from "vue-quill-editor";

export default {
  data() {
    return {
      form: {
        name: "",
        region: "",
        resource: "",   
      },

      labelPosition: "right",
      formLabelAlign: {
        name: "",
        region: "",
        type: ""
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  }
};
</script>
<style>


.add-btn1 {
 margin-top: 10px;
}
.on-off {
  margin-left: 15px;
  color: #ccc;
}
.kunum {
  color: #ccc;
  margin-left: 15px;
  font-size: 14px;
}
</style>
