<template>
  <div >

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

    <div class="background">
      <a-row>
        <a-col :md="3" :sm="3">
          <div>
          <a-menu
            style="height: 800px"
            :default-selected-keys="['1']"
            :default-open-keys="['sub1']"
            mode="inline"
            theme="dark"
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
              <a-menu-item key="7">
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
          </div>
        </a-col>
        <a-col :md="21" :sm="21" style="margin-top: 50px">
          <router-view></router-view>
        </a-col>
      </a-row>

    </div>



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
      }
    },
  }
</script>

<style scoped>
 .background{
   background-color: #583e7e;
 }
</style>
