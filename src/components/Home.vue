<template>
  <div>

    <div>
      <a-page-header title="Peko Station" sub-title="">
        <template slot="tags">
          <a-tag color="blue">
            2.0
          </a-tag>
        </template>
        <template slot="extra">
          <a-button key="3">
            Operation
          </a-button>
          <a-button key="2">
            Operation
          </a-button>
          <a-button key="1" type="primary">
            Primary
          </a-button>
        </template>
      </a-page-header>
    </div>

    <div class="background" style="width: 100%;height:auto">
      <a-row>
        <a-col :md="22" :sm="22">
          <a-button type="primary" @click="showDrawer" style="margin-left: 20px;margin-top:10px">
            Menu
          </a-button>
        </a-col>

        <a-col :md="22" :sm="22" offset="1">
          <router-view></router-view>
        </a-col>
      </a-row>
      </div>
      <a-drawer
        placement="left"
        :closable="false"
        :visible="visible"
        :after-visible-change="afterVisibleChange"
        @close="onClose"
      >
          <a-menu
            style="height: 600px"
            :default-selected-keys="['1']"
            :default-open-keys="['sub1']"
            mode="inline"
            theme="light"
            :inline-collapsed="collapsed"
          >
            <a-menu-item key="1" @click="toHomepage">
              <a-icon type="home" />
              <span>主页</span>
            </a-menu-item>
            <a-menu-item key="2" @click="toUser">
              <a-icon type="user" />
              <span>用户列表</span>
            </a-menu-item>
            <a-sub-menu key="sub1">
              <span slot="title"><a-icon type="picture" /><span>动画图</span></span>
              <a-menu-item key="5"  @click="toAnimate">
                <span>Spring</span>
              </a-menu-item>
              <a-menu-item key="6">
                Summer
              </a-menu-item>
              <a-menu-item key="7" @click="toAnimateAutumn">
                Autumn
              </a-menu-item>
              <a-menu-item key="8">
                Winter
              </a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="sub2">
              <span slot="title"><a-icon type="appstore" /><span>Navigation Two</span></span>
              <a-menu-item key="9">
                Option 9
              </a-menu-item>
              <a-menu-item key="10">
                Option 10
              </a-menu-item>
              <a-sub-menu key="sub3" title="Submenu">
                <a-menu-item key="11">
                  Option 11
                </a-menu-item>
                <a-menu-item key="12">
                  Option 12
                </a-menu-item>
              </a-sub-menu>
            </a-sub-menu>
          </a-menu>
      </a-drawer>
  </div>

</template>

<script>


  import router from '../route'

  export default {
    name: "homepage",
    router,
    components: {
    },
    data() {
      return {
        collapsed: false,
        visible: false,
      };
    },
    methods: {
      toggleCollapsed() {
        this.collapsed = !this.collapsed;
      },
      toHomepage(){
        this.$router.push('/homepage');
      },
      toUser(){
        this.$router.push('/user');
      },
      toAnimate(){
        this.$router.push('/animate');
      },
      toAnimateAutumn(){
        this.$router.push('/animate/autumn');
      },
      afterVisibleChange(val) {
        // console.log('visible', val);
      },
      showDrawer() {
        this.visible = true;
      },
      onClose() {
        this.visible = false;
      },
    },
  }
</script>

<style scoped>
   .background{
     background-color: #583e7e;
   }
</style>
