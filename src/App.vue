<template>
  <div class="container">

    <!-- main -->
    <div class="main">
      <router-view></router-view>
    </div>

    <!-- footer -->
    <div class="footer">
      <v-bottom-navigation :value="value" color=#287BFF grow>

        <v-btn @click="$router.push('/home')">
          <span style="font-size:13px">홈</span>
          <v-icon>mdi-home</v-icon>
        </v-btn>

        <v-btn @click="$router.push('/recommend')">
          <span style="font-size:13px">추천</span>
          <v-icon>mdi-thumb-up</v-icon>
        </v-btn>

        <v-btn @click="$router.push('/trade')">
          <span style="font-size:13px">거래</span>
          <v-icon>mdi-swap-horizontal</v-icon>
        </v-btn>

        <v-btn @click="$router.push('/myinfo')">
          <span style="font-size:13px">내정보</span>
          <v-icon>mdi-account</v-icon>
        </v-btn>
      </v-bottom-navigation>
    </div>


  </div>

</template>

<script>

export default {
  name: 'App',

  components: {
  },
  data(){
    return{
      value: 1 // footer nowpage value
    }
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/common.scss";
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: Roboto;
}
.main{
  background-color: $--bg_basic;
  width: 100%;
  height: calc(100vh - 56px);
  overflow-y: scroll;
  overflow-x: scroll; 
  // -webkit-overflow-scrolling: touch; 
}
.footer{
  position: fixed;
  bottom: 0px;
  left: 0;
  width: 100%;
  z-index: 10;
}

/* bottom navigation 사이즈 오류(vuetify 자체 에러임..) 수정코드 */
.v-item-group.v-bottom-navigation .v-btn.v-size--default {
    height: inherit;
    background: white;
    padding: 1.3rem;
}


</style>