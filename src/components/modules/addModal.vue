<template>
  <a-modal
    title="查看"
    :width="width"
    :visible="visible"
    :confirm-loading="confirmLoading"
    @ok="handleCancel"
    @cancel="handleCancel"
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
          target:{},
          roles:["admin","user"],
        };
      },
      methods: {
        showModal() {
          this.visible = true;
        },
        handleOk(e) {
          this.ModalText = 'The modal will be closed after two seconds';
          this.confirmLoading = true;
          setTimeout(() => {
            this.visible = false;
            this.confirmLoading = false;
          }, 2000);
        },
        handleCancel(e) {
          console.log('Clicked cancel button');
          this.visible = false;
        },
        checkBoxChange(checkedValues){
          console.log('checked = ', checkedValues);
          this.target = checkedValues;
        },
      },
    }
</script>

<style scoped>

</style>
