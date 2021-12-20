<template>
  <div>
    <!-- header -->
    <div class="header_myinfo">
      <div>
        <div @click="btn_profile" class="btn_profile">프로필</div>
        <div :class="profilebtn" class="underline"></div>
      </div>
      <div>
        <div @click="btn_wallet" class="btn_wallet">지갑</div>
        <div :class="walletbtn" class="underline"></div>
      </div>
    </div>

    <!-- main -->
    <div class="main_myinfo">
      <div v-if="profilebtn=='active'" class="profile">
        내 계정 정보임
      </div>
      <div v-if="walletbtn=='active'" class="wallet">
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
      profilebtn:"active",
      walletbtn:"",
      }
  },//data end
  methods:{
    btn_profile(){
      this.profilebtn="active";
      this.walletbtn="";
    },
    btn_wallet(){
      this.profilebtn="";
      this.walletbtn="active";
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
.header_myinfo{
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
.header_myinfo .btn_profile,
.header_myinfo .btn_wallet{
width: 50vw;
height: 46px;
display: flex;
align-items: center;
justify-content: center;
}

.header_myinfo .active{
  border: 1.5px solid #287BFF;
}

//main의 profile부분 style
.main_myinfo .profile{
  position: relative;
  top: 50px;
}

//main의 wallet부분 style
.main_myinfo .wallet{
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
