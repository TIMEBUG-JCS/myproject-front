<template>
  <div id="personlib">
    <el-container>
      <el-aside width="200px">
        <el-button class="btn" type="primary" icon="el-icon-plus" @click="dialogVisible = true">创建</el-button>
        <div v-for="item in lib_list" :key=item>
          <lib-item :title="item"></lib-item>
        </div>
      </el-aside>
      <el-main>
        <el-row>
          <el-col :span="8" style="padding: 14px;" v-for="item in info" :key="item.name">
            <person-item :img="item.img" :name="item.name"></person-item>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
    <el-dialog
      title="创建"
      :visible.sync="dialogVisible"
      width="30%">
      <div>库名字：
        <el-input
          placeholder="输入名字"
          v-model="new_lib_name">
        </el-input>
      </div>
      <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="handleSubmit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  import LibItem from './LibItem'
  import PersonItem from './PersonItem'
  import axios from 'axios'

    export default {
      name: "PersonLib",
      data () {
        return {
          new_lib_name: '',
          dialogVisible: false,
          lib_list: ['aa'],
          info: {}
        }
      },

    components: {
      LibItem,
      PersonItem
    },

      methods: {
        handleSubmit () {
          console.log(this.lib_list)
          console.log(this.new_lib_name)
          this.lib_list.push(this.new_lib_name)
          this.new_lib_name = ''
          this.dialogVisible = false
        }
      },

      mounted () {
        axios.get('http://127.0.0.1:8000/data').then(response => {
          this.info = response.data.data
          console.log(response.data)
      })
      }
    }

</script>

<style scoped>
  .el-aside {
    background-color: rgb(250, 250, 250);
    line-height: 50px;
    opacity:1;
  }

  .el-main {
    background-color: rgb(255, 255, 255);
    line-height: 160px;
    opacity:1;

  }

  .el-input{
    width: 180px;
  }
  .btn {
    width: 80px;
    text-align: left;
    padding-left: 10px;
  }
</style>
