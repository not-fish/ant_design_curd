<template>
  <div >
    <a-row>
      <a-col :xm="20" :sm="20" :offset="2" style="height:615px">
        <a-carousel autoplay style="width: 100%;height: auto">
          <div><img src="../assets/logo.png" style="width: auto;height: 610px"></div>
          <div><h3>2</h3></div>
          <div><img src="../assets/yourName.jpg" style="width: auto;height: 610%"></div>
          <div><h3>4</h3></div>
        </a-carousel>
      </a-col>
    </a-row>
  </div>


</template>

<script>
    export default {
        name: "Homepage"
    }
</script>

<style scoped>
  /* For demo */
  .ant-carousel >>> .slick-slide {
    text-align: center;
    height: 500px;
    line-height: 160px;
    background: #364d79;
    overflow: hidden;
  }

  .ant-carousel >>> .slick-slide h3 {
    color: #fff;
  }
</style>
