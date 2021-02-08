<template>
  <div>
<!--    <a-col :xm="22" :sm="22" :offset="1">-->
<!--      <header class="autumnHeaderClass">-->
<!--        <div class="autumnDivClass"><img src="../assets/autumn/a1.png" class="autumnImgClass"></div>-->
<!--        <div class="autumnDivClass"><img src="../assets/autumn/a2_1.png" class="autumnImgClass" id="girlPic"></div>-->
<!--        <div class="autumnDivClass"><img src="../assets/autumn/a3.png" class="autumnImgClass"></div>-->
<!--        <div class="autumnDivClass"><img src="../assets/autumn/a4.png" class="autumnImgClass"></div>-->
<!--        <div class="autumnDivClass"><img src="../assets/autumn/a5.png" class="autumnImgClass"></div>-->
<!--        <div class="autumnDivClass"><img src="../assets/autumn/a6.png" class="autumnImgClass"></div>-->
<!--      </header>-->
<!--    </a-col>-->
  </div>
</template>

<script>
    export default {
        name: "AutumnBilibili"
    }
</script>

<style scoped>
  .autumnHeaderClass{
    height: 160px;
    position: relative;
    overflow: hidden;
  }

  .autumnDivClass{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    --offset: 0px;
    --blur: 2px;
  }

  .autumnImgClass{
    display: block;
    width: 110%;
    height: 100%;
    object-fit: cover;

    transform: translateX(var(--offset));
    filter: blur(var(--blur));
  }
</style>
