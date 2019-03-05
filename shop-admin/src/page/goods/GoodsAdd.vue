<template>
  <div class="goodsAdd">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="所属类型">
        <el-select v-model="form.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="是否发布">
        <el-switch v-model="form.delivery"></el-switch>
        <span class="on-off">*不发布前台则无法显示</span>
      </el-form-item>

      <el-form-item label="活动性质">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="置顶" name="type"></el-checkbox>
          <el-checkbox label="热门" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>

      <el-form-item label="内容标题">
        <el-col :span="6">
          <el-input v-model="form.name"></el-input>
        </el-col>
      </el-form-item>

      <el-form-item label="副标题">
        <el-col :span="6">
          <el-input v-model="form.name"></el-input>
        </el-col>
      </el-form-item>

      <el-form-item label="封面图片">
        <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt>
        </el-dialog>
      </el-form-item>

      <div style="margin: 20px;"></div>
      <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
        <el-form-item label="商品货号">
          <el-col :span="6">
            <el-input v-model="formLabelAlign.names"></el-input>
          </el-col>
        </el-form-item>

        <el-form-item label="库存数量">
          <el-col :span="6">
            <el-input v-model="formLabelAlign.name" required></el-input>
          </el-col>
          <el-col :span="6">
            <span class="kunum">*我不确定要不要自动生成</span>
          </el-col>
        </el-form-item>

        <el-form-item label="市场价格">
          <el-col :span="6">
            <el-input v-model="formLabelAlign.region"></el-input>
          </el-col>
        </el-form-item>

        <el-form-item label="销售价格">
          <el-col :span="6">
            <el-input v-model="formLabelAlign.type"></el-input>
          </el-col>
        </el-form-item>
      </el-form>

      <el-form-item label="图片相册">
        <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt>
        </el-dialog>
      </el-form-item>

      <el-form-item label="内容摘要">
        <el-col :span="16">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-col>
      </el-form-item>

      <el-form-item label="内容描述" class="editor">
        <el-col :span="16">
          <el-row>
            <quill-editor
              v-model="content"
              :options="editorOption"
              @blur="onEditorBlur($event)"
              @focus="onEditorFocus($event)"
              @change="onEditorChange($event)"
            ></quill-editor>
          </el-row>
        </el-col>
      </el-form-item>

      <el-form-item class="add-btn">
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
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },

      labelPosition: "right",
      formLabelAlign: {
        name: "",
        region: "",
        type: ""
      },

      //富文本编辑器
      content: "",
      editorOption: {}
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },

    //富文本编辑方法
    onEditorBlur(editor) {
      //失去焦点事件
    },
    onEditorFocus(editor) {
      //获得焦点事件
    },
    onEditorChange({ editor, html, text }) {
      //编辑器文本发生变化
      //this.content可以实时获取到当前编辑器内的文本内容
      console.log(this.content);
    }
  }
};
</script>
<style>
.goodsAdd > el-input {
  width: 300px;
}
.quill-editor {
  height: 150px;
}
.add-btn {
  margin-top: 120px;
}
.on-off {
  margin-left: 15px;
  color: #ccc;
}
.kunum {
  color: #ccc;
  margin-left: 15px;
}
</style>
