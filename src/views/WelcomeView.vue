<template>
    <div class="cotainer">
        <img src="../assets/launch_bcg.png" class="bg" alt="welcome">
        <div class="top">
            <div class="wrapper">
                <img src="../assets/launch_diamond.png" alt="diamond">
                <p>相信科技的力量</p>
            </div>            
        </div>
        <div class="bottom">
            <img src="../assets/launch_bottom.png" alt="">
        </div>
    </div>
</template>
<script>
export default {
    name: 'welcome',
    data() {
        return {}
    },
    mounted() {
        this.direct()
    },
    methods:{ 
       direct() {
           // 已登录跳转到首页，否则跳转到综合页
           let user = localStorage.getItem('user_info');
           if(user){
               setTimeout(() => this.$router.push('/index'),2000)
           }else {
               setTimeout(() => this.$router.push('/index/synthesize'),2000)
           }
           
       } 
    }
};
</script>
<style lang="scss" scoped>
.cotainer { 
  box-sizing: border-box;
  display: flex;
  position: relative;
  .bg {
    width: 100%;
    height: 100%;
  }
  .top {
    position: absolute;
    width: 100%;
    top: 30%;
    .wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      p {
        font: {
          size: 1.5rem;
          weight: 300;
        }
      }
      img {
        width: 30%;
        height: 30%;
        margin-bottom: 1rem;
      }
    }
  }
  .bottom{
      position: fixed;
      bottom: 1.5rem;
      text-align: center;
      img{
          width: 70%;
          height: 70%;
      }
  }
}
</style>


