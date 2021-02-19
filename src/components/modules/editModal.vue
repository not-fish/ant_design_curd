<template>
  <a-modal
    title="查看"
    :width="width"
    :visible="visible"
    :confirm-loading="confirmLoading"
    @ok="handleCancel"
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
              <a-col :xs="6" :sm="6" :offset="1">
                <a-form-item label="身份">
                  <span v-for="role in roles">
                    <a-checkbox @change="onChange(role,$event)">
                      <a-tag
                        :key="role"
                        :color="role === 'admin' ? 'volcano' : role === 'user' ? 'green' : 'geekblue'"
                      >{{role.toUpperCase()}}
                      </a-tag>
                    </a-checkbox>

                  </span>
                </a-form-item>
              </a-col>
            </a-row>
          </a-form>

        </a-tab-pane>
        <a-tab-pane key="2" tab="用户图片" force-render>
          <img :src="getImg(target.userImg)" style="width: auto;height: 300px">
        </a-tab-pane>
      </a-tabs>
    </div>
  </a-modal>
</template>

<script>


    export default {
      name: "viewModal",
      data() {
        return {
          ModalText: 'Content of the modal',
          width:800,
          visible: false,
          confirmLoading: false,
          target:{
            roles:[{roleName:null}],
          },
          destroyOnClose:true,
          roles:['admin','user'],
        };
      },
      methods: {
        showModal(data) {
          this.target = data;
          this.visible = true;
        },
        handleOk(e) {
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
        getImg(img){
          let url = "http://localhost:8084/downloadPhoto/" + img;
          return url;
        },
        onChange(role,e) {
          console.log(`checked = ${e.target.checked}`);
        },
      },
    }
</script>

<style scoped>

</style>
