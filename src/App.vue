<template>
  <div id="app">
    <el-menu :default-active="$route.path"
             class="head h r" mode="horizontal" background-color="#545c64"
             text-color="#fff"  active-text-color="#ffd04b" router>
      <!--img src="./assets/logo.png" width="30px" align="left"-->
      <img src="./assets/logo.png"  class="content" align="left">
      <el-submenu index="1">
        <template slot="title">来访记录</template>
        <el-menu-item index="/realvisit">实时来访</el-menu-item>
        <el-menu-item index="">历史来访</el-menu-item>
        <el-menu-item index="">人卡一致</el-menu-item>
      </el-submenu>
      <el-menu-item index="2">处理中心</el-menu-item>
      <el-submenu index="3">
        <template slot="title">人员库管理</template>
        <el-menu-item index="/personlib">人员库</el-menu-item>
        <el-menu-item index="/executeControl">布控管理</el-menu-item>
        <el-menu-item index="/tableshow">table表格</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">统计分析</template>
        <el-menu-item index="/PersonStat">人员统计</el-menu-item>
        <el-menu-item index="/container">车辆统计</el-menu-item>
      </el-submenu>
    </el-menu>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
.content{
  position: relative;
  margin-top: 5px;
  margin-left: 10px;
  width: 45px;
}
.h{
  height: 60px;
}
.le{
  float:left;
  background: #545c64;
  width:200px;
  box-shadow: 3px 5px 3px #888888;
  text-align: center;
}
</style>
