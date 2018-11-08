<template>
  <div id="executeControl">
    <el-container class="container">
      <el-main>
        <el-row>
          <el-col>
            <el-table
              :data="tableData4"
              style="width: 100%"
              max-height="550">
              <el-table-column
                fixed
                prop="date"
                label="日期"
                width="200">
              </el-table-column>
              <el-table-column
                prop="name"
                label="姓名"
                width="120">
              </el-table-column>
              <el-table-column
                prop="province"
                label="省份"
                width="120">
              </el-table-column>
              <el-table-column
                prop="city"
                label="市区"
                width="120">
              </el-table-column>
              <el-table-column
                prop="address"
                label="地址"
                width="300">
              </el-table-column>
              <el-table-column
                prop="zip"
                label="邮编"
                width="120">
              </el-table-column>
              <el-table-column
                label="操作"
                width="250">
                <template slot-scope="scope">
                  <el-button
                    @click.native.prevent="deleteRow(scope.$index, tableData4)"
                    type="text"
                    size="small">
                    移除
                  </el-button>
                  <el-button
                    @click.native.prevent="checkRow(scope.$index, scope.row)"
                    type="text"
                    size="small">
                    查看
                  </el-button>
                  <el-button
                    @click.native.prevent="editRow(scope.$index, scope.row)"
                    type="text"
                    size="small">
                    编辑
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-col>
          <el-dialog title="修改人员" :visible.sync="dialogFormEdit" style="margin-left:25%;width:50%;height: 900px;">
            <el-form :model="form_edit">
              <el-form-item label="日期" label-width="formLabelWidth">
                <el-date-picker v-model="form_edit.date" type="date" placeholder="选择时间" style="width: 230px"></el-date-picker>
              </el-form-item>
              <el-form-item label="姓名" label-width="formLabelWidth">
                <el-input v-model="form_edit.name" auto-complete="off" style="width: 230px"></el-input>
              </el-form-item>
              <el-form-item label="省份" label-width="formLabelWidth">
                <el-input v-model="form_edit.province" auto-complete="off" style="width: 230px"></el-input>
              </el-form-item>
              <el-form-item label="市区" label-width="formLabelWidth">
                <el-input v-model="form_edit.city" auto-complete="off" style="width: 230px"></el-input>
              </el-form-item>
              <el-form-item label="地址" label-width="formLabelWidth">
                <el-input v-model="form_edit.address" auto-complete="off" style="width: 230px"></el-input>
              </el-form-item>
              <el-form-item label="邮编" label-width="formLabelWidth">
                <el-input v-model="form_edit.zip" auto-complete="off" style="width: 230px"></el-input>
              </el-form-item>
            </el-form>
            <!--<div slot="footer" class="dialog-footer">-->
              <el-button @click="dialogFormEdit = false">取 消</el-button>
              <el-button type="primary" @click="startedit()">确 定</el-button>
            <!--</div>-->
          </el-dialog>
          <el-dialog title="查看人员" :visible.sync="dialogFormCheck" style="margin-left:25%;width:50%;height: 900px;">
            <el-form :model="form_check">
              <el-form-item label="日期" label-width="formLabelWidth">
                <el-date-picker v-model="form_check.date" type="date" placeholder="选择时间" style="width: 230px"></el-date-picker>
              </el-form-item>
              <el-form-item label="姓名" label-width="formLabelWidth">
                <el-input v-model="form_check.name" auto-complete="off" style="width: 230px"></el-input>
              </el-form-item>
              <el-form-item label="省份" label-width="formLabelWidth">
                <el-input v-model="form_check.province" auto-complete="off" style="width: 230px"></el-input>
              </el-form-item>
              <el-form-item label="市区" label-width="formLabelWidth">
                <el-input v-model="form_check.city" auto-complete="off" style="width: 230px"></el-input>
              </el-form-item>
              <el-form-item label="地址" label-width="formLabelWidth">
                <el-input v-model="form_check.address" auto-complete="off" style="width: 230px"></el-input>
              </el-form-item>
              <el-form-item label="邮编" label-width="formLabelWidth">
                <el-input v-model="form_check.zip" auto-complete="off" style="width: 230px"></el-input>
              </el-form-item>
            </el-form>
            <el-button @click="dialogFormCheck = false">确定</el-button>
          </el-dialog>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: "ExecuteControl",
    methods: {
      deleteRow(index, rows) {
        rows.splice(index, 1);
      },
      checkRow(index, row) {
        this.dialogFormCheck=true
        this.form_check.date = row.date
        this.form_check.name = row.name
        this.form_check.province = row.province
        this.form_check.city = row.city
        this.form_check.address = row.address
        this.form_check.zip = row.zip
      },
      startedit() {
        this.tableData4[this.cnt].date = this.form_edit.date
        this.tableData4[this.cnt].name = this.form_edit.name
        this.tableData4[this.cnt].province = this.form_edit.province
        this.tableData4[this.cnt].city = this.form_edit.city
        this.tableData4[this.cnt].address = this.form_edit.address
        this.tableData4[this.cnt].zip = this.form_edit.zip
        this.dialogFormEdit=false
      },
      editRow(index, row) {
        this.cnt = index
        console.log(this.cnt)
        this.dialogFormEdit=true
        this.form_edit.date = row.date
        this.form_edit.name = row.name
        this.form_edit.province = row.province
        this.form_edit.city = row.city
        this.form_edit.address = row.address
        this.form_edit.zip = row.zip
      }
    },
    data() {
      return {
        cnt: '',
        dialogFormEdit: false,
        dialogFormCheck: false,
        tableData4: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }],
        form_edit: {
          date: '',
          name: '',
          province: '',
          city: '',
          address: '',
          zip: ''
        },
        form_check: {
          date: '',
          name: '',
          province: '',
          city: '',
          address: '',
          zip: ''
        },
        formLabelWidth: 100
      }
    }
  }
</script>

<style scoped>
 .container{
   width: 100%;
   height: 100%;
 }
</style>
