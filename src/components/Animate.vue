<template>
  <div class="background" style="width: 100%;height:600px">
    <a-row>
      <a-col :md="22" :sm="22" offset="1">
        <router-view></router-view>
      </a-col>
    </a-row>
  </div>
</template>

<script>


export default {
    name: "animate",
}
</script>

<style scoped>
  .background{
    background-color: #583e7e;
  }
</style>
