// page import
import Home from "./components/Home.vue";
import Recommend from "./components/Recommend.vue";
import Trade from "./components/Trade.vue";
import Myinfo from "./components/Myinfo.vue";

const routes = [
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/recommend",
    component: Recommend,
  },
  {
    path: "/trade",
    component: Trade,
  },
  {
    path: "/myinfo",
    component: Myinfo,
  }
];


export default routes;