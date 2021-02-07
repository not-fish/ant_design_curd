<template>
  <div style="height: 163px; margin-top: -20px;">
    <a-row>
      <a-col :xm="22" :sm="22" :offset="1">
        <img src="../assets/bilibili.png" style="width: 100%">
      </a-col>

      <a-col :xm="22" :sm="22" :offset="1">
        <a-card title="查询" style="width: 100%;margin-top: 20px">
          <a-form :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }" @submit="handleSubmit">
            <a-row>
              <a-col :xm="8" :sm="8">
                <a-form-item label="ID">
                  <a-input
                    v-decorator="['userId', { rules: [{ required: false, message: 'Please input your note!' }] }]"
                  />
                </a-form-item>
              </a-col>

              <a-col :xm="8" :sm="8">
                <a-form-item label="姓名">
                  <a-input
                    v-decorator="['userName', { rules: [{ required: false, message: 'Please input your note!' }] }]"
                  />
                </a-form-item>
              </a-col>

              <a-col :xm="8" :sm="8">
                <a-form-item label="手机号码">
                  <a-input
                    v-decorator="['userPhone', { rules: [{ required: false, message: 'Please input your note!' }] }]"
                  />
                </a-form-item>
              </a-col>

              <a-col :xm="8" :sm="8">
                <a-form-item label="用户状态">
                  <a-select
                    v-decorator="['status',{ rules: [{ required: false, message: 'Please select your gender!' }] },]"
                    style="width: 100%"
                  >
                    <a-select-option v-for="(item,index) in options" :value="item.value" :key="index">
                      {{item.name}}
                    </a-select-option>
<!--                    <a-select-option value="online">-->
<!--                      在线-->
<!--                    </a-select-option>-->
<!--                    <a-select-option value="offline">-->
<!--                      离线-->
<!--                    </a-select-option>-->
                  </a-select>
                </a-form-item>
              </a-col>

              <a-col :xm="8" :sm="8">
                <a-form-item label="日期">
                  <a-date-picker @change="onChange" v-decorator="['day']"/>
                </a-form-item>
              </a-col>

            </a-row>

            <a-row>
              <a-col :span="24" :style="{ textAlign: 'right' }">
                <a-button type="primary" html-type="submit">
                  查询
                </a-button>
                <a-button :style="{ marginLeft: '8px' }" @click="handleReset">
                  重置
                </a-button>
              </a-col>
            </a-row>

          </a-form>

        </a-card>
      </a-col>

      <a-col :xm="22" :sm="22" :offset="1">
        <a-card title="信息" style="width: 100%;margin-top: 20px">
          <a-col :md="24" :sm="24">
              <span style="float: left;overflow: hidden;" class="table-page-search-submitButtons">
               <a-button type="primary" @click="viewData(target[0])">查看</a-button>
               <a-button type="primary" @click="addData" style="margin-left: 8px">添加</a-button>
                <a-button type="primary" @click="" style="margin-left: 8px">修改</a-button>
                <a-button type="primary" @click="" style="margin-left: 8px">删除</a-button>
             </span>
          </a-col>

          <!-- table区域-begin -->
          <div style="margin-bottom: 16px">
            <a-col :md="24" :sm="24">
            <div class="ant-alert ant-alert-info" style="margin-bottom: 16px;margin-top:10px">
              <i class="anticon anticon-info-circle ant-alert-icon"></i> 已选择 <a style="font-weight: 600">{{ selectedRowKeys.length }}</a>项
              <a style="margin-left: 24px" @click="onClearSelected">清空</a>
            </div>
            </a-col>
            <a-col :md="24" :sm="24">
              <a-table
                ref="table"
                size="middle"
                bordered
                rowKey="userId"
                :columns="columns"
                :dataSource="dataSource"
                :pagination="ipagination"
                :loading="loading"
                :scroll="{ x: 1000 }"
                :rowSelection="{fixed:true,selectedRowKeys: selectedRowKeys, onChange: onSelectChange,type:'radio'}"

                @change="handleTableChange">

                <span slot="roles" slot-scope="roles">
                  <a-tag
                    v-for="role in roles"
                    :key="role.roleName"
                    :color="role.roleName === 'admin' ? 'volcano' : role.roleName === 'user' ? 'green' : 'geekblue'"
                  >
                    {{ role.roleName.toUpperCase() }}
                  </a-tag>
                </span>

              </a-table>
            </a-col>
          </div>
        </a-card>
      </a-col>
    </a-row>
    <view-modal ref="viewModalForm" @ok="tableQuery"></view-modal>
    <add-modal ref="addModalForm" @ok="tableQuery"></add-modal>
  </div>

</template>

<script>
  import axios from 'axios'
  import viewModal from "./modules/viewModal";
  import addModal from "./modules/addModal";

export default {
  name: "homepage",
  components:{
    viewModal,addModal,
  },
  data() {
    return {
      formLayout: 'horizontal',
      form: this.$form.createForm(this, { name: 'coordinated' }),
      options:[{value:'',name:'...'},{value:'online',name:'在线'},{value:'offline',name:'离线'}],
      target:{},
      columns: [
        // {
        //   title: '序号',
        //   dataIndex: '',
        //   key:'rowIndex',
        //   width:80,
        //   align:"center",
        //   customRender:function (t,r,index) {
        //     return parseInt(index)+1;
        //   }
        // },
        {
          title:'身份',
          align:"left",
          dataIndex: 'roles',
          scopedSlots: { customRender: 'roles' },
        },
        {
          title:'用户ID',
          align:"left",
          dataIndex: 'userId'
        },
        {
          title:'名字',
          align:"left",
          dataIndex: 'userName'
        },
        {
          title:'电话',
          align:"left",
          dataIndex: 'userPhone'
        },
        {
          title:'头像',
          align:"left",
          dataIndex: 'userImg'
        }
        ],
      /* table选中keys*/
      selectedRowKeys: [],
      /* table选中records*/
      selectionRows: [],
      /* 数据源 */
      dataSource:[],
      /* 分页参数 */
      ipagination: {
        current: 1,
        pageSize: 10,
        pageSizeOptions: ['10', '20', '30'],
        showTotal: (total, range) => {
          return range[0] + "-" + range[1] + " 共" + total + "条"
        },
        showQuickJumper: true,
        showSizeChanger: true,
        total: 0
      },
      /* table加载状态 */
      loading:false,
      /* 排序参数 */
      isorter:{
        //column: 'createTime',
        order: 'desc',
      },
      url:{
        findAll:"http://localhost:8084/table/all",
        query:"http://localhost:8084/table/query",
      }
    };
  },
  mounted(){
    this.findAll();
  },
  methods: {
    //表单提交
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
          this.tableQuery(values);
        }
      });
    },
    //日期选择器
    onChange(date, dateString) {
      console.log(date, dateString);
    },
    //清空表单
    handleReset() {
      this.form.resetFields();
      this.findAll();
    },
    //清除选中的数据
    onClearSelected() {
      this.selectedRowKeys = [];
      this.selectionRows = [];
    },
    //记录选中的数据
    onSelectChange(selectedRowKeys,record) {
      console.log("选择了一条数据！");
      this.selectedRowKeys = selectedRowKeys;
      console.log(record);
      this.target = record;
    },
    handleTableChange(pagination, filters, sorter) {
      //分页、排序、筛选变化时触发
      //TODO 筛选
      if (Object.keys(sorter).length > 0) {
        this.isorter.column = sorter.field;
        this.isorter.order = "ascend" === sorter.order ? "asc" : "desc"
      }
      this.ipagination = pagination;
      this.loadData();
    },
    //获取所有数据
    findAll(){
      let url = this.url.findAll;
      let data = {};

      axios.post(url,data).then((response) => {
        console.log('响应');
        console.log(response);
        this.dataSource = response.data;
      }).catch(function (err) {
        console.log('失败');
        console.log(err);    //捕获异常

      });
    },
    tableQuery(values){
        let url = this.url.query;

        axios.post(url,values).then((response) => {
          console.log('响应');
          console.log(response);
          this.dataSource = response.data;
        }).catch(function (err) {
          console.log('失败');
          console.log(err);    //捕获异常

        });
    },
    //查看模态框
    viewData(target){

      if(this.selectedRowKeys.length === 0){
        alert('请选择一条数据');
        return;
      }

      this.$refs.viewModalForm.showModal(target);
    },
    //添加模态框
    addData(){
      this.$refs.addModalForm.showModal();
    }
  },
}
</script>

<style scoped>

</style>
