<template>
  <div>
    <!-- overlay -->
    <div v-if="now_search == 'on' " class="search_overlay"></div>

    <div v-if="now_search == 'on' " class="header_recommend_on">

      <!-- 검색BAR  -->
      <div class="searchbar">
        <div @click="$emit('search_off')" class="btn_back">
          <v-icon >mdi-arrow-left</v-icon>
        </div>
        <div class="inputbar">
          <input type="text" placeholder="   채널명을 입력해주세요">
        </div>
      </div>

      <!-- 검색 결과창 -->
      <!-- ★ 검색 결과가 있을때 ★ -->
      <div v-if="isresult=='yes'" class="search_result">

        <!--★ div box부분 검색결과데이터 반복문으로 입력필요 ★ -->
        <!-- 지금은 예제로 div box를 4개 입력해둠 -->
        <div class="box">
          <div class="result">
            <div class="creator_img"></div>
            <div class="channel">긱블 Geekble</div>
          </div>
          <div class="divider"></div>
        </div>

        <div class="box">
          <div class="result">
            <div class="creator_img"></div>
            <div class="channel">긱블 스튜디어</div>
          </div>
          <div class="divider"></div>
        </div>

        <div class="box">
          <div class="result">
            <div class="creator_img"></div>
            <div class="channel">긱블연구소</div>
          </div>
          <div class="divider"></div>
        </div>

        <div class="box">
          <div class="result">
            <div class="creator_img"></div>
            <div class="channel">Geekble Geekble </div>
          </div>
          <div class="divider"></div>
        </div>

      </div>

      <!-- ★ 검색 결과가 없을때 ★ -->
      <div v-if="isresult=='no'" class="search_no_result">
        <div class="msg">
          해당 크리에이터의 <span style="color:#287BFF; font-weight:bold;">첫 추천자</span>가 될 기회입니다!<br>
          추천한 크리에이터가 <span style="color:#287BFF;">Weekly Top 10</span>에 오를 경우<br>
          스타벅스 기프티콘을 선물로 드립니다 !
        </div>
        <div class="btn_firstrecommend">
          첫 추천하기
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  props:{
    now_search : String,
  },
  data(){
  return{
    // 검색결과 존재 여부 결과
    isresult:"yes"  //★ DB에서 검색결과 조회 후 있으면 yes, 없으면 no 입력해줘야함 ★
    }

  },//data end
  methods:{
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
// 검색중 header style
.search_overlay{
  position: fixed;
  left: 0;
  top:0;
  width: 100%;
  height: 100%;
  z-index: 13;
  background: rgba(0, 0, 0, 0.5);
}
.header_recommend_on{
  position: fixed;
  left: 0;
  top:0;
  width: 100%;
  z-index: 15;
}
.header_recommend_on .searchbar{
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 15px;
  background-color: $--white;
}
.header_recommend_on .searchbar .inputbar{
  margin-left:15px;
  width: 70vw;
  height: 32px;
  display: flex;
  align-items: center;
  border: 1px solid #287BFF;
  box-sizing: border-box;
  border-radius: 70px;
  color: $--secondary;
  font-size:14px;
}
// 검색중 header result(검색결과 존재할 경우) style
.header_recommend_on .search_result{
  max-height: 200px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: $--white;
}
.header_recommend_on .search_result .result{
  width: calc(100vw * 32/36);
  height: 43px;
  margin: 10px 15px 3px 15px;
  display: flex;
  align-items: center;
}
.header_recommend_on .search_result .result .creator_img{
  width: 33px;
  height: 33px;
  background-color: $--secondary;
  border-radius: 50%;
}
.header_recommend_on .search_result .result .channel{
  margin-left: 10px;
}
.header_recommend_on .search_result .divider{
  width: calc(100vw * 32/36);
  height: 0.1px;
  background-color: $--secondary;;
  margin-bottom: 12px;
  position: relative;
  left: 50%;
  transform: translate(-50%);
}

// 검색중 header result(검색결과 없을 경우) style
.header_recommend_on .search_no_result{
  height: 160px;
  background-color: $--white;
}
.header_recommend_on .msg{
  padding: 15px 0;
  text-align: center;
  font-size: 15px;
  line-height: 150%;
}
.header_recommend_on .btn_firstrecommend{
  color: $--white;
  width: 120px;
  height: 35px;
  background-color: $--primary;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  position: relative;
  left: 50%;
  transform: translate(-50%);
}
</style>