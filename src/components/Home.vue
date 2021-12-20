<template>
  <div>
    <!-- header -->
    <div class="header_home">
      <div class="company">
        <img class="logo" src="@/assets/logo.svg">
        <div class="name">CREADLE</div>
      </div>
    </div>

    <!-- main -->
    <div class="main_home">
      <!-- slider -->
      <div class="slidebox">
        슬라이드 박스
      </div>
      <!-- contents -->
      <div class="top">
        <div class="title">
          크리에이터 수익 공유 플랫폼 <span style="color:#287BFF">CREADLE</span>
        </div>
        <div class="summary">
          크레들은 '수익 공유'를 통해 크리에이터가<br>
          시청자와 함께 성장할 수 있는 공간입니다.
        </div>
      </div>

      <div class="mid">
        What you <span style="color:#287BFF; font-weight: bold;">can do ?</span>
        <div class="divider"></div>
      </div>

      <div class="contentsbox">

        <div class="content1">
          <div class="content">
            <div class="title">
              평소 즐겨보던 크리에이터,<br><span style="color:#287BFF">남들보다 먼저하는</span> 투자
            </div>
            <div class="description">
              다가올 첫 크리에이터 공모를 통해<br>가장 먼저 크리에이터 수익 공유권에 <br> 투자할 수 있어요!
            </div>
          </div>
          <div class="img1">
            <img src="@/assets/homeimg1.svg" alt="error">
          </div>
        </div>

        <div class="content2">
          <div class="img2">
            <img src="@/assets/homeimg2.svg" alt="error">
          </div>          
          <div class="content">
            <div class="title">
              크리에이터 수익을,<br><span style="color:#287BFF">배당</span> 받을 수 있습니다.
            </div>
            <div class="description">
              기업의 주주가 수익의 일부를 배당<br>받듯 수익 공유권 소유에 따른<br>크리에이터 수익을 배당 받자!
            </div>
          </div>
        </div>

        <div class="content3">
          <div class="content">
            <div class="title">
              크리에이터 성장에 따른,<br><span style="color:#287BFF">시세 차익</span>을 얻을 수 있습니다.
            </div>
            <div class="description">
              주식과 같이 시세 차익을 기대하고,<br>수익 공유권을 실시간으로<br>자유롭게 거래하자!
            </div>
          </div>
          <div class="img1">
            <img src="@/assets/homeimg3.svg" alt="error">
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
export default {

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

.header_home{
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

.header_home .company{
  display: flex;
  align-items: center;
}
.header_home .company .logo{
  position: relative;
  left: 10px;
}
.header_home .company .name{
  position: relative;
  left: 20px;
  font-size: 18px;
  font-weight: 600;
  color: $--primary;
}

.main_home{
  position: relative;
  top: 50px;
  // padding: 10px;
}

.main_home .slidebox{
  width: 100%;
  height: 180px;
  background-color: $--secondary;
}
.main_home .top{
  margin-top: 10px;
  width: 100%;
  height: 85px;
}
.main_home .top .title{
  font-size: 16px;
  color: $--black;
  font-weight: bold;
  text-align: center;
}
.main_home .top .summary{
  margin-top: 10px;
  font-size: 14px;
  color: $--secondary;
  text-align: center;
}
.main_home .mid{
  width: 100%;
  height: 30px;
  margin-top: 18px;
  text-align: center;
}
.main_home .mid .divider{
  margin-top: 8px;
  width: 40px;
  height: 0px;
  border: 1px solid #287BFF;
  position: relative;
  left: 50%;
  transform: translate(-50%);
}

.main_home .contentsbox .content1{
  width: 100%;
  height: 230px;
  margin-top: 10px;
  padding-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $--white;

}

.main_home .contentsbox .content1 .content{
  margin-right:15px;
}
.main_home .contentsbox .content1 .content .title{
  color: $--black;
  font-weight: bold;
  text-align: center;
}
.main_home .contentsbox .content1 .content .description{
  margin-top: 25px;
  color: $--secondary;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
}


.main_home .contentsbox .content2{
  width: 100%;
  height: 230px;
  display: flex;
  padding-left: 10px;
  align-items: center;
  justify-content: center;
  background:transparent;
  
}
.main_home .contentsbox .content2 .img2{
  position: relative;
  margin-left: 15px;
}
.main_home .contentsbox .content2 .content{
  margin-left: 15px;
}
.main_home .contentsbox .content2 .content .description{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: $--secondary;
  font-size: 14px;
  font-weight: bold;
  margin-top: 25px;
  text-align: center;
}
.main_home .contentsbox .content2 .content .title{
  color: $--black;
  font-weight: bold;
  text-align: center;
}




.main_home .contentsbox .content3{
  width: 100%;
  height: 230px;
  margin-top: 10px;
  padding-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $--white;
}

.main_home .contentsbox .content3 .content{
  margin-right:15px;
}
.main_home .contentsbox .content3 .content .title{
  color: $--black;
  font-weight: bold;
  text-align: center;
}
.main_home .contentsbox .content3 .content .description{
  margin-top: 25px;
  color: $--secondary;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
}


</style>