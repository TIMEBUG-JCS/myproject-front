<template>
  <el-card :body-style="{ padding: '0px' }" class="card">
    <el-col :span="8">
      <img :src="img" width="100px" height="150px"/>
    </el-col>
    <el-col :span="16">
      <div>
        姓名：{{name}}<br/>
        性别：<br/>
        身份证：123456789012345678<br/>
        录入时间：<br/>
      </div>
    </el-col>
  </el-card>
</template>

<script>
    export default {
      name: "PersonItem",
      data () {
        return {
          msg: ''
        }
      },
      props: ['img', 'name']
    }
</script>

<style scoped>
  .row{
    background: rgb(167, 180, 204);
    margin-top: 10px;
    border-radius: 8px;
    width: 250px;
    margin-left: 20px;
  }
  .card{
    height: 160px;
    line-height: 30px;
    font-size: 13px;
  }
</style>
