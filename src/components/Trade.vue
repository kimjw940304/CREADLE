<template>
  <div>
    <!-- header -->
    <div class="header_trade">
      <div>
        <div @click="btn_ipo" class="btn_newipo">신규 공모</div>
        <div :class="ipobtn" class="underline"></div>
      </div>
      <div>
        <div @click="btn_market" class="btn_market">마켓</div>
        <div :class="marketbtn" class="underline"></div>
      </div>
    </div>

    <!-- main -->
    <div class="main_trade">
      <div v-if="ipobtn=='active'" class="newipo">
        서비스 준비중입니다!
      </div>
      <div v-if="marketbtn=='active'" class="market">
        서비스 준비중입니다! 
      </div>
    </div>

  </div>

</template>

<script>
export default {
  data(){
    return{
      //timeline_option 버튼 데이터
      ipobtn:"active",
      marketbtn:"",
      }
  },//data end
  methods:{
    btn_ipo(){
      this.ipobtn="active";
      this.marketbtn="";
    },
    btn_market(){
      this.ipobtn="";
      this.marketbtn="active";
    },
  },//method end
}
</script>

<style lang="scss">
@import "@/assets/scss/common.scss";

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: Roboto;
}
.header_trade{
  position: fixed;
  left: 0;
  top: 0;
  height: 50px;
  width: 100%;
  background-color:$--white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  z-index: 10;
}
.header_trade .btn_newipo,
.header_trade .btn_market{
width: 50vw;
height: 46px;
display: flex;
align-items: center;
justify-content: center;
}

.header_trade .active{
  border: 1.5px solid #287BFF;
}

//main부분 style
.main_trade{
  position: relative;
  top: 50px;
  font-size: 18px;
  color: $--primary;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 120px);
}

</style>
