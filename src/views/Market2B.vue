<template>
  <div>
    <Top />
    <Breadcrumb :items='breadcrumb' />
    <SearchBar />
    <MarketNavi :dataUrl="dataUrl" />
    <!-- <MarketNavi :dataUrl="dataUrl" :imgUrl="imgUrl" /> -->
    <MarketProductRecommend2B />
    <Bottom />
  </div>
</template>

<script>
import Top from "../components/Shared/Top";
import Breadcrumb from "../components/Shared/Breadcrumb";
import SearchBar from "../components/Shared/SearchBar";
import MarketNavi from "../components/Shared/MarketNavi";
import MarketProductRecommend2B from "../components/Market2B/MarketProductRecommend2B";
import Bottom from "../components/Shared/Bottom";

export default {
  components: {
    Top,
    Breadcrumb,
    SearchBar,
    MarketNavi,
    MarketProductRecommend2B,
    Bottom,
  },
  data() {
    return {
      breadcrumb: [
        {
          name: '竹材批发商城',
          url: {path: '/market2b'},
        }
      ],
      dataUrl: "/get/marketnavi2b",
      // dataUrl: "/static/MarketNavi/2b.json",
      // imgUrl: "/static/img/market2b_images/1.jpg",
    };
  },
};
</script>