<template>
  <div class="timelinecard">
    <!-- timeline header -->
    <div class="header_timeline">
      kimjw0...님이 <span style="color:#287BFF; font-weight:bold;">긱블Geekble</span> 채널을 추천하셨습니다.
    </div>

    <!-- timelinebox -->
    <div class="timelinebox">

      <!-- creator이미지 -->
      <div class="crator_img">
      </div>

      <!-- creator 정보 -->
      <div class="creator_info">
        <!-- 채널명 -->
        <div class="channel">긱블 Geekble</div>
        <div class="subscriber">구독자수 103만명</div>
        <div class="categorylist">

          <!-- item 배열을 불러와서 v-for문으로 돌려서 넣어줘야함 일단 지금은 하드코딩 -->
          <div class="item">
            엔터테인먼트
          </div>
          <div class="item">
            과학/실험
          </div>
        </div>
      </div>

      <!-- 추천하기 버튼 -->
      <div class="btn_recommend">
        <!-- 추천수 -->
        <div class="counter">
          113,812
        </div>
        <div>
          추천수
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

.timelinecard{
  width: 340px;
  height: 100%;
  margin-bottom: 15px;
}

.timelinecard .header_timeline{
  margin-left: 10px;
  font-size: 14px;
}



.timelinecard .timelinebox{
  display: flex;
  align-items: center;
  background-color: $--white;
  width: 100%;
  margin-top: 15px;
  height: 95px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px; 

}
.timelinecard .timelinebox .crator_img{
  width: 65px;
  height: 65px;
  border-radius: 50%;
  background-color: $--secondary;
  margin: 0 5px;
}
//  creator 정보 style
.timelinecard .timelinebox .creator_info{
  width: 205px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.timelinecard .timelinebox .creator_info .channel{
  color: $--black;
  font-size: 16px;
  font-weight: bold;
  margin: 5px 5px 0 3px;
}
.timelinecard .timelinebox .creator_info .subscriber{
  color: $--secondary;
  font-size: 14px;
  margin: 5px 5px 0 3px;

}
.timelinecard .timelinebox .creator_info .categorylist{
  margin: 10px 0 0 0;
  display: flex;

}
.timelinecard .timelinebox .creator_info .categorylist .item{
    /* Auto Layout */
  padding: 3px;
  background-color: rgba(141, 137, 137, 0.1);
  box-sizing: border-box;
  border-radius: 15px;
  font-size: 12px;
  margin-left: 3px;

}

// recommend 버튼 style
.timelinecard .timelinebox .btn_recommend{
  font-size:12px;
  color: $--secondary;
  text-align: center;
  padding-right: 5px;
}

.timelinecard .timelinebox .btn_recommend .counter{
  /* Auto Layout */
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 5px;
  border: 1px solid #8D8989;
  box-sizing: border-box;
  border-radius: 15px;
}



</style>