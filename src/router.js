import Vue from "vue";
import Router from "vue-router";
import HomeContainer from '@/views/HomeContainer.vue'
import MemberContainer from '@/views/MemberContainer.vue'
import ShopcarContainer from '@/views/ShopcarContainer.vue'
import SearchContainer from '@/views/SearchContainer.vue'
import NewsList from '@/components/news/NewsList.vue'
import NewsInfo from '@/components/news/NewsInfo.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect:"/home",
    },
    {
      path: "/home",
      component:HomeContainer,
      meta:{
        title:"首页"
      }
    },
    {
      path: "/member",
      component:MemberContainer,
      meta:{
        title:"会员中心"
      }
    },
    {
      path: "/shopcar",
      component:ShopcarContainer,
      meta:{
        title:"购物车"
      }
    },
    {
      path: "/search",
      component:SearchContainer,
      meta:{
        title:"搜索"
      }
    },
    {
      path: "/home/newsList",
      component:NewsList,
      meta:{
        title:"新闻资讯"
      }
    },
    {
      path: "/home/newsinfo/:id",
      component:NewsInfo,
      meta:{
        title:"新闻详情"
      }
    },
  ],
  linkActiveClass:"mui-active"
});
