<template>
  <div>
    
    <!-- overlay -->
    <div v-if="detail_modal == 'open' " class="detail_overlay"></div>
    <!-- Modal -->
    <div v-if="detail_modal == 'open' " class="detail_modal">

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

      <!-- 3. 추천하기 버튼 -->
      <div class="btn_recommend">
        <!-- 추천수 -->
        <div class="counter">
          113,812
        </div>
        <div>
          추천하기
        </div>
      </div>

      <div class="divider"></div>

      <!-- 4. 추천 msg박스 -->
      <div class="msg_box">

        <!-- ★ recommend_mgs 부분을 DB에서 불러온 데이터 바인딩 & 반복 ★ -->
        <div class="recommend_msg">
          <!-- user_img -->
          <div class="user_img"></div>
          
          <!-- content -->
          <div class="content">
            <!-- 채널명 -->
            <div class="user_id">asde...</div>
            <div class="msg">상장을 통해 채널이 더 성장하고 좋은 컨텐츠...</div>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
export default {
  props:{
  detail_modal : String,
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
.detail_overlay{
  position: fixed;
  left: 0;
  top:0;
  width: 100%;
  height: 100%;
  z-index: 11;
  background: rgba(0, 0, 0, 0.5);
}
.detail_modal .btn_close{
  margin: 5px 10px 0 0;
  position:absolute;
  right: 0;
}
// Modal Style
.detail_modal{
  width: calc(100vW * 280/360);
  height: calc(100vh * 450/640);
  background-color: $--white;
  border-radius: 15px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  z-index: 15;
  padding: 10px;
}

//2. Creator Info부분 Style
.detail_modal .timelinebox{
  display: flex;
  align-items: center;
  width: 100%;
  height: 95px;
  margin-top: 20px;
  border-radius: 8px; 

}
.detail_modal .timelinebox .crator_img{
  width: 65px;
  height: 65px;
  border-radius: 50%;
  background-color: $--secondary;
  margin: 0 5px;
}
// creator 정보 style
.detail_modal .timelinebox .creator_info{
  width: 205px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 5px;
}
.detail_modal .timelinebox .creator_info .channel{
  color: $--black;
  font-size: 16px;
  font-weight: bold;
  margin: 5px 5px 0 3px;
}
.detail_modal .timelinebox .creator_info .subscriber{
  color: $--secondary;
  font-size: 14px;
  margin: 5px 5px 0 3px;

}
.detail_modal .timelinebox .creator_info .categorylist{
  margin: 10px 0 0 0;
  display: flex;

}
.detail_modal .timelinebox .creator_info .categorylist .item{
    /* Auto Layout */
  padding: 3px;
  background-color: rgba(141, 137, 137, 0.1);
  box-sizing: border-box;
  border-radius: 15px;
  font-size: 12px;
  margin-left: 3px;
}

//3. recommend 버튼 style
.detail_modal .btn_recommend{
  font-size:16px;
  color: $--secondary;
  text-align: center;
  padding-right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top:15px;
}

.detail_modal .btn_recommend .counter{
  margin-right:10px;
  /* Auto Layout */
  padding: 5px;
  border: 1px solid #8D8989;
  box-sizing: border-box;
  border-radius: 15px;
  width:fit-content;
}
// divider
.detail_modal .divider{
  margin:15px 0 10px 0;
  width: 95%;
  height: 0.1px;
  background-color: $--secondary;;
  margin-bottom: 12px;
  position: relative;
  left: 50%;
  transform: translate(-50%);
}

// 4. 추천 msg박스 style
.detail_modal .msg_box{
  display: flex;
  flex-direction: column;
  align-items: center;

}
.msg_box .recommend_msg{
  display: flex;
  align-items: center;
  height: 68px;
  overflow: hidden;
}
.detail_modal .msg_box .recommend_msg .user_img{
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: $--secondary;
  margin: 0 5px;
}
// creator 정보 style
.detail_modal .msg_box .content{
  width: 205px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 5px;
}
.detail_modal .msg_box .content .user_id{
  color: $--black;
  font-size: 14px;
  font-weight: bold;
  margin: 5px 5px 0 3px;
}
.detail_modal .msg_box .content .msg{
  font-size: 15px;
  margin: 5px 5px 0 3px;
}

</style>