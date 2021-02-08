<template>
  <div>
    <a-col :xm="22" :sm="22" :offset="1">
      <header class="autumnHeaderClass" @mousemove="mouseUpdate">
        <div class="autumnDivClass"><img src="../assets/autumn/a1.png" class="autumnImgClass"></div>
        <div class="autumnDivClass"><img src="../assets/autumn/a2_1.png" class="autumnImgClass" ref="girlPic">></div>
        <div class="autumnDivClass"><img src="../assets/autumn/a3.png" class="autumnImgClass">></div>
        <div class="autumnDivClass"><img src="../assets/autumn/a4.png" class="autumnImgClass">></div>
        <div class="autumnDivClass"><img src="../assets/autumn/a5.png" class="autumnImgClass">></div>
        <div class="autumnDivClass"><img src="../assets/autumn/a6.png" class="autumnImgClass">></div>
      </header>
    </a-col>
  </div>
</template>

<script>
    export default {
      name: "AutumnBilibili",
      mounted() {
        this.girlAnimation();
      },
      data(){
        return{
          x:0,
        }
      },
      methods: {
        mouseUpdate() {
          let images = document.querySelectorAll('.autumnImgClass');
          document.querySelector('.autumnHeaderClass').addEventListener('mousemove', (e) => {
            let percentage = e.clientX / window.outerWidth;
            let offset = 10 * percentage;
            let blur = 20;

            for (let [index, image] of images.entries()) {
              offset *= 1.3;

              let blurValue = (Math.pow((index / images.length - percentage), 2) * blur);

              image.style.setProperty('--offset', `${offset}px`);
              image.style.setProperty('--blur', `${blurValue}px`);
            }
          });
        },
        girlAnimation() {
          setInterval(this.eyes, 4000);
        },
        eyes() {
          let inputDOM = this.$refs.girlPic;
          setTimeout(function () {
            inputDOM.setAttribute("src", "../assets/autumn/a2_2.png");
          }, 500);
          setTimeout(function () {
            inputDOM.setAttribute("src", "../assets/autumn/a2_3.png");
          }, 600);
          setTimeout(function () {
            inputDOM.setAttribute("src", "../assets/autumn/a2_2.png");
          }, 700);
          setTimeout(function () {
            inputDOM.setAttribute("src", "../assets/autumn/a2_1.png");
          }, 800);

        },
      }
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
