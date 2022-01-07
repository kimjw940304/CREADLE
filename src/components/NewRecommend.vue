<template>
  <div>
    
    <!-- overlay -->
    <div v-if="NewRecommend_modal == 'open' " class="NewRecommend_overlay"></div>
    <!-- Modal -->
    <div v-if="NewRecommend_modal == 'open' " class="NewRecommend_modal">

      <!-- 1.닫기 버튼 -->
      <div class="btn_close" @click="$emit('modal_close')">
        <v-icon >mdi-close-circle</v-icon>
      </div>

      <!-- 2. Creator Info부분 -->
      <div class="timelinebox">
        <!-- creator이미지 -->
        <div class="crator_img"></div>
        
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
      </div>

      <!-- 3. Msg Input -->
      <div class="msg_box">
        <v-textarea solo name="input-7-4" placeholder="상장 응원 메시지를 입력해주세요!">
        </v-textarea>
      </div>
      <!-- 4. 추천 완료 버튼 -->
      <div class="btn_recommend">
        추천완료
      </div>


    </div>
  </div>
</template>

<script>
export default {
  props:{
  NewRecommend_modal : String,
},

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
// overlay style
.NewRecommend_overlay{
  position: fixed;
  left: 0;
  top:0;
  width: 100%;
  height: 100%;
  z-index: 11;
  background: rgba(0, 0, 0, 0.5);
}
.NewRecommend_modal .btn_close{
  margin: 5px 10px 0 0;
  position:absolute;
  right: 0;
}
// Modal Style
.NewRecommend_modal{
  width: calc(100vW * 280/360);
  height: 340px;
  background-color: $--white;
  border-radius: 15px;
  position: absolute;
  left: 50%;
  top:30px;
  transform: translate(-50%);
  z-index: 15;
  padding: 10px;
}

//2. Creator Info부분 Style
.NewRecommend_modal .timelinebox{
  display: flex;
  align-items: center;
  width: 100%;
  height: 95px;
  margin-top: 20px;
  border-radius: 8px; 

}
.NewRecommend_modal .timelinebox .crator_img{
  width: 65px;
  height: 65px;
  border-radius: 50%;
  background-color: $--secondary;
  margin: 0 5px;
}
// creator 정보 style
.NewRecommend_modal .timelinebox .creator_info{
  width: 205px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 5px;
}
.NewRecommend_modal .timelinebox .creator_info .channel{
  color: $--black;
  font-size: 16px;
  font-weight: bold;
  margin: 5px 5px 0 3px;
}
.NewRecommend_modal .timelinebox .creator_info .subscriber{
  color: $--secondary;
  font-size: 14px;
  margin: 5px 5px 0 3px;

}
.NewRecommend_modal .timelinebox .creator_info .categorylist{
  margin: 10px 0 0 0;
  display: flex;

}
.NewRecommend_modal .timelinebox .creator_info .categorylist .item{
    /* Auto Layout */
  padding: 3px;
  background-color: rgba(141, 137, 137, 0.1);
  box-sizing: border-box;
  border-radius: 15px;
  font-size: 12px;
  margin-left: 3px;
}

//3.


//4.
.NewRecommend_modal .btn_recommend{
  text-align: center;
  margin-bottom: 10px;
  color:$--primary;
  font-weight: bold;
}


</style>