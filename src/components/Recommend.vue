<template>
  <div>
    <!-- header -->

    <!-- 검색전 -->
    <div v-if="now_search == 'off' " class="header_recommend">
      <!-- logo -->
      <div class="company">
        <img class="logo" src="@/assets/logo.svg">
        <div class="name">CREADLE</div>
      </div>
      <!-- search btn -->
      <div class="btn_search" @click="search">
        <v-icon large>mdi-magnify</v-icon>
      </div>
    </div>

    <!-- 검색중 (Modal) -->
    <Search :now_search="now_search" @search_off="now_search = 'off'"></Search>


    <!-- main -->
    <div class="main_recommend">
      <!-- 임시 home slider  -->
      <div class="homeslider">
        <div class="slide">
          Make your channel, to your Assets!
        </div>
      </div>

      <!-- TopRecoeemnd -->
      <div class="top_recommend">
        <div class="slide">
          <!--  걍 예시로 하드코딩해둔상태 Top10 DB를 불러와서 for문으로 10개 보여주게끔 짜기 -->
          <div class="card">
            <div class="creator_img"></div>
            <div class="channel">긱블 Geekble</div>
            <div class="subscriber">구독자수 103만명</div>
          </div>
          <div class="card">
            <div class="creator_img"></div>
            <div class="channel">긱블 Geekble</div>
            <div class="subscriber">구독자수 103만명</div>
          </div>
          <div class="card">
            <div class="creator_img"></div>
            <div class="channel">긱블 Geekble</div>
            <div class="subscriber">구독자수 103만명</div>
          </div>
          <div class="card">
            <div class="creator_img"></div>
            <div class="channel">긱블 Geekble</div>
            <div class="subscriber">구독자수 103만명</div>
          </div>
          <div class="card">
            <div class="creator_img"></div>
            <div class="channel">긱블 Geekble</div>
            <div class="subscriber">구독자수 103만명</div>
          </div>
          <div class="card">
            <div class="creator_img"></div>
            <div class="channel">긱블 Geekble</div>
            <div class="subscriber">구독자수 103만명</div>
          </div>
   

        </div>
        <div class="title">
          Montly <span style="font-weight:bold">Top 10</span> Recommend
        </div>
      </div>

      <!-- Timeline option -->
      <div class="timeline_option">
        <div class="category">
          카테고리 : 전체<v-icon large>mdi-menu-down</v-icon>
        </div>
        <div class="sorttype">
          <div @click= "btn_hot" :class="botbtn" class="btn hot">인기</div>
          <div @click= "btn_new" :class="newbtn" class="btn new">최신</div>
        </div>
      </div>

      <!-- Timeline -->
      <!-- ★ timeline_option 선택에 따라 TimelineCard에 binding되는 데이터가 달라지게 짜야함 ★ -->
      <div class="timeline">
        <TimelineCard></TimelineCard>
      </div>

    </div>
  </div>
</template>

<script>
// component import
import TimelineCard from "./TimelineCard.vue";
import Search from "./Search.vue";

export default {
  data(){
  return{
    //timeline_option 버튼 데이터
    botbtn:"active",
    newbtn:"",
    // search진행중에 따라 header 보여주는 데이터 
    now_search:"off",
    }

  },//data end
  methods:{
    btn_hot(){
      this.botbtn="active";
      this.newbtn="";
    },
    btn_new(){
      this.botbtn="";
      this.newbtn="active";
    },
    // 검색 시작
    search(){
      this.now_search="on"
    },

  },//method end
  components: {
    TimelineCard,
    Search,
  },// component end

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
// 검색전 header style
.header_recommend{
  position: fixed;
  left: 0;
  top: 0;
  height: 50px;
  width: 100%;
  background-color:$--white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;

}
.header_recommend .btn_search{
  padding-right: 15px;
}
.header_recommend .company{
  display: flex;
  align-items: center;
}
.header_recommend .company .logo{
  position: relative;
  left: 10px;
}
.header_recommend .company .name{
  position: relative;
  left: 20px;
  font-size: 18px;
  font-weight: 600;
  color: $--primary;
}


//main style
.main_recommend{
  position: relative;
  top: 50px;
}
.main_recommend .homeslider{
  height:50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.main_recommend .homeslider .slide{
  width: 320px;
  height: 35px;
  background-color: $--white;
  border-radius: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
}




// main Top 의 Recommend Style
.main_recommend .top_recommend{
  width: 100%;
  height: 130px;
  background-color: $--white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  
}

//top_recommend의 slide Style
.main_recommend .top_recommend .slide{
  min-width: 100%;
  height: 110px;
  // background-color: bisque;
  display: flex;
  overflow-x: scroll;
}
.main_recommend .top_recommend .slide::-webkit-scrollbar{
  display: none; // x축 scroll bar 숨기기
}


// top_recommend의 slide의 개별 card Style
.main_recommend .top_recommend .slide .card{
  min-width: 110px; //그냥width하면 사이즈 이상해짐
  height: 100px;
  background-color: $--white;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  // text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px 10px 0 10px;
}

.main_recommend .top_recommend .slide .card .creator_img{
  margin : 5px 0;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: $--secondary;
  text-align: center;
}
.main_recommend .top_recommend .slide .card .channel{
  text-align: center;

}
.main_recommend .top_recommend .slide .card .subscriber{
  text-align: center;
  font-size: 12px;
  color: $--secondary;
}



.main_recommend .top_recommend .title{
  width: 100%;
  height: 20px;
  text-align: center;
  color: $--primary;
}

// main Top 의 Timeline option Style
.main_recommend .timeline_option{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding : 15px 5px 15px 10px;
}
.main_recommend .category{
  display: flex;
  justify-content: space-between;
  align-items: center;

}
.main_recommend .sorttype{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.main_recommend .sorttype .btn{
  margin: 0 5px;
  width: 40px;
  height: 25px;
  font-size: 12px;
  border-radius: 70px;
  background-color: $--white;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.15);
}
.main_recommend .sorttype .active{
  background-color: $--primary;
  color: $--white;
}

//main_recommend 의 timeline Style
.main_recommend .timeline{
  width: 100%;
  height: 100%;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

</style>