<template>
  <a-modal
    title="添加"
    :width="width"
    :visible="visible"
    :confirm-loading="confirmLoading"
    @ok="handleOk"
    @cancel="handleCancel"
    :destroyOnClose="destroyOnClose"
  >
    <div>
      <a-tabs default-active-key="1">
        <a-tab-pane key="1" tab="基本信息">
          <a-form>
            <a-row>
              <a-col :xs="6" :sm="6" :offset="1">
                <a-form-item label="ID">
                  <a-input v-model="target.userId"></a-input>
                </a-form-item>
              </a-col>
              <a-col :xs="6" :sm="6" :offset="1">
                <a-form-item label="姓名">
                  <a-input v-model="target.userName"></a-input>
                </a-form-item>
              </a-col>
              <a-col :xs="6" :sm="6" :offset="1">
                <a-form-item label="手机号">
                  <a-input v-model="target.userPhone"></a-input>
                </a-form-item>
              </a-col>
<!--              <a-col :xs="6" :sm="6" :offset="1">-->
<!--                <a-form-item label="身份">-->
<!--                  <a-checkbox-group @change="checkBoxChange">-->
<!--                    <a-row>-->
<!--                      <a-col :span="13">-->
<!--                        <a-checkbox value="admin">-->
<!--                          <a-tag color="volcano">-->
<!--                            ADMIN-->
<!--                          </a-tag>-->
<!--                        </a-checkbox>-->
<!--                      </a-col>-->
<!--                      <a-col :span="13">-->
<!--                        <a-checkbox value="user">-->
<!--                          <a-tag color="green">-->
<!--                            USER-->
<!--                          </a-tag>-->
<!--                        </a-checkbox>-->
<!--                      </a-col>-->
<!--                    </a-row>-->
<!--                  </a-checkbox-group>-->
<!--                </a-form-item>-->
<!--              </a-col>-->
            </a-row>
          </a-form>

        </a-tab-pane>
        <a-tab-pane key="2" tab="用户图片" force-render>
          <div class="clearfix">
            <a-upload :file-list="fileList" :remove="handleRemove" :before-upload="beforeUpload">
              <a-button> <a-icon type="upload" /> Select File </a-button>
            </a-upload>
            <a-button
              type="primary"
              :disabled="fileList.length === 0"
              :loading="uploading"
              style="margin-top: 16px"
              @click="handleUpload"
            >
              {{ uploading ? 'Uploading' : 'Start Upload' }}
            </a-button>
          </div>
        </a-tab-pane>
      </a-tabs>
    </div>
  </a-modal>
</template>

<script>

  import axios from 'axios'

    export default {
      name: "viewModal",
      data() {
        return {
          ModalText: 'Content of the modal',
          width:800,
          visible: false,
          confirmLoading: false,
          destroyOnClose:true,
          target:{
            userId:null,
            userName:null,
            userPhone:null,
            userImg:null,
          },
          roles:["admin","user"],
          fileList: [],
          uploading: false,
          url:{
            uploadPhoto: 'http://localhost:8084/uploadPhoto',
            add: 'http://localhost:8084/table/add',
          }
        };
      },
      methods: {
        showModal() {
          this.visible = true;
        },
        handleOk(e) {

          const that = this;
          let httpUrl = this.url.add;
          console.log(this.target);

          axios.post(httpUrl,this.target).then((response)=>{
            console.log(response);
            if(response.data.returnCode === 'CODE6000'){
              that.$message.success('成功');
            }else{
              that.$message.warning(response.data.returnMsg);
            }
          }).catch((err)=>{
            console.log('失败');
            console.log(err);    //捕获异常
            that.$message.warning('失败');
          }).finally(()=>{

          });

          this.ModalText = 'The modal will be closed after two seconds';
          this.confirmLoading = true;
          setTimeout(() => {
            this.visible = false;
            this.confirmLoading = false;
          }, 500);
        },
        handleCancel(e) {
          // console.log('Clicked cancel button');
          this.visible = false;
        },

        handleRemove(file) {
          const index = this.fileList.indexOf(file);
          const newFileList = this.fileList.slice();
          newFileList.splice(index, 1);
          this.fileList = newFileList;
        },
        beforeUpload(file) {
          this.fileList = [...this.fileList, file];
          return false;
        },
        handleUpload() {
          const { fileList } = this;
          const formData = new FormData();
          formData.append('photo', fileList[0]);
          this.uploading = true;

          let httpUrl = this.url.uploadPhoto;  //后端接口地址
          const that = this;

          axios.post(httpUrl,formData).then((response) => {
            console.log('响应');
            console.log(response);
            if(response.data.type === 'success'){
              that.$message.success('成功');
              this.fileList = [];
              this.target.userImg = response.data.filename;
            }else{
              that.$message.warning('失败');
            }
          }).catch(function (err) {
            console.log('失败');
            console.log(err);    //捕获异常
            that.$message.warning('失败');
          }).finally(()=>{
            this.uploading = false;
          });

        },
      },
    }
</script>

<style scoped>

</style>
