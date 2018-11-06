<template>
  <div class="d">
    <el-row class="row">
      <el-col :span="8" style="text-align:center">{{ title }}</el-col>
      <el-col :span="16">
        <el-button-group>
          <el-button class="el-icon-edit" type="primary" size="small"></el-button>
          <el-button class="el-icon-delete" type="primary" size="small"></el-button>
        </el-button-group>
      </el-col>
    </el-row>
  </div>
</template>

<script>
    export default {
      name: "Lib-Item",
      data () {
        return {
          msg: ''
        }
      },
      props: ['title']
    }
</script>

<style scoped>
  .row{
    background: rgb(167, 180, 204);
    margin-top: 10px;
    border-radius: 8px;
    width: 160px;
    margin-left: 10px;
  }
  .d{
    text-align: center;
  }
</style>
