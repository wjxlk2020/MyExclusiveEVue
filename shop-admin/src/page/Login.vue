<template>
  <div class="login-form">
    <h5>登录</h5>
  <el-form :model="ruleForm2" status-icon label-width="100px" >
    <!-- el-form-item是el-form的子组件，不能放到el-form的外部 -->
  <el-form-item label="账号">
    <el-input  v-model="ruleForm2.username" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="密码" >
    <el-input type="password" v-model="ruleForm2.password" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item class="btn">
    <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
    <el-button @click="resetForm('ruleForm2')">重置</el-button>
  </el-form-item>
</el-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        ruleForm2: {
          username: '',
          password: '',
        },
       
      };
    },
    methods: {
      submitForm(formName) {
        //获取数据
      console.log(this.ruleForm2);
      
        //提交到接口

      },
      resetForm(formName) {
        //重置表单
        this.ruleForm2={
          username: '',
          password: '',
        }
      }
    }
  }
</script>
<style lang="less">

  .login-form{
    h5{
      text-align: center;
      color:skyblue;
      font-size: 20px;
      //去掉加粗
      font-weight: normal;
      margin: 0 -320px 13px -250px;
    }
    // 让元素居中显示
    width: 500px;
    position:absolute;
    left: 50%;
    top:50%;
    margin: -120px 0 0 -250px;
    .btn{
    text-align: center
    }
  }
</style>
