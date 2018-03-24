<template>
  <div class="Index">
    <div class="focus" style="height:160px;">
      <slider-list :dataList="sliderData" ></slider-list>
    </div>

    <flex-list class="hasPaddingTop hasMarginBottom" :dataList="flexData" ></flex-list>
    <section class="section section1 hasMarginBottom">
      <div class="row row-tit">
        <span class="row-tit-name">-新品特权-</span>
      </div>
      <div class="row row-content border-top-1px banner-1-2">
        <v-banner class="left big border-right-1px"  :dataList="banner[0]"></v-banner>
        <v-banner class="right top border-bottom-1px"  :dataList="banner[1]"></v-banner>
        <v-banner class="right bottom" :dataList="banner[2]"></v-banner>
      </div>
    </section>
    <section class="section section2 hasMarginBottom">
      <div class="row row-tit">
        <span class="row-tit-name">-极速借贷-</span>
      </div>
      <div class="row row-content whole-banner">
        <img src="../assets/img/whole-banner.png">
      </div>
    </section>
    <section class="section section3 hasMarginBottom">
      <div class="row row-tit">
        <span class="row-tit-name">-理财精选-</span>
      </div>
      <li-cai :dataList="licai"></li-cai>
    </section>
    <section class="section section4 hasMarginBottom">
      <div class="row row-tit">
        <span class="row-tit-name">-新品特权-</span>
        <span class="row-tit-more">更多尖货</span>
      </div>
      <h-scroll :dataList="hscroll"></h-scroll>
    </section>
    <section class="section section5 hasMarginBottom">
      <div class="row row-tit">
        <span class="row-tit-name">-生活服务-</span>
      </div>
      <flex-list class="hasPaddingBottom hasMarginBottom" :dataList="flexData2" ></flex-list>
    </section>
    <section class="section section6">
      <div class="row row-content whole-banner2">
        <img src="../assets/img/whole-banner2.png">
      </div>
    </section>
    <flex-list style="background:#f5f5f5;"  class="hasPaddingTop hasMarginBottom" :dataList="flexData3" ></flex-list>
    <v-footer style="background:#f5f5f5;"></v-footer>
  </div>
  
</template>

<script>
import flexList from '../components/flexList'
import sliderList from '../components/mobile_slider'
import VFooter from '../components/footer'
import VBanner from '../components/banner-1-2-item'
import LiCai from '../components/licai'
import HScroll from '../components/hscroll'
export default {
  data () {
    return {
      flexData:[
        {
          src:require('../assets/flex1/1.png'),
          tit:'优惠券',
          bg:'#fff'
        },
        {
          src:require('../assets/flex1/2.png'),
          tit:'领红包',
          bg:'#fff'
        },
        {
          src:require('../assets/flex1/3.png'),
          tit:'抢钢镚',
          tit_color:'#ff0000',
          bg:'#fff'
        },
        {
          src:require('../assets/flex1/4.png'),
          tit:'领京豆',
          bg:'#fff'
        },
        {
          src:require('../assets/flex1/5.png'),
          tit:'白条提额',
          bg:'#fff'
        }
      ],
      flexData2:[
        {
          src:require('../assets/flex2/1.png'),
          tit:'惠加油',
          bg:'#fff'
        },
        {
          src:require('../assets/flex2/2.jpg'),
          tit:'小白信用',
          desc:'全新升级',
          desc_color:'#FF801A',
          bg:'#fff'
        },
        {
          src:require('../assets/flex2/3.png'),
          tit:'信用卡还款',
          bg:'#fff'
        },
        {
          src:require('../assets/flex2/4.png'),
          tit:'卡转让',
          bg:'#fff'
        },
        {
          src:require('../assets/flex2/5.png'),
          tit:'定期还款',
          bg:'#fff'
        }
      ],
      flexData3:[
        {
          src:require('../assets/flex3/1.png'),
          tit:'客户端',
          bg:'#f5f5f5'
        },
        {
          src:require('../assets/flex3/2.png'),
          tit:'触屏版',
          bg:'#f5f5f5'
        },
        {
          src:require('../assets/flex3/3.png'),
          tit:'电脑版',
          bg:'#f5f5f5'
        }
      ],
      sliderData:[
        {
          src:require('../assets/slider1/1.jpg'),
          tit:'优惠券'
        },
        {
          src:require('../assets/slider1/2.jpg'),
          tit:'领红包'
        },
        {
          src:require('../assets/slider1/3.jpg'),
          tit:'抢钢镚',
          tit_color:'#ff0000'
        },
        {
          src:require('../assets/slider1/4.jpg'),
          tit:'领京豆'
        }
      ],
      banner:[
        {
          tit1:'下载APP',
          tit2:'送888元礼包',
          desc:'新手专享',
          src: require('../assets/banner-1-2/1.png')
        },
        {
          tit1:'',
          tit2:'领128元新手礼包',
          desc:'立即开通',
           src: require('../assets/banner-1-2/2.png')
        },
        {
          tit1:'打白条',
          tit2:'享免息',
          desc:'立即开通享豪礼',
           src: require('../assets/banner-1-2/3.png')
        }
      ],
      licai:[
        {
          tit:'定期理财',
          tip:'理财首选',
          perc:'5.60%',
          desc:'历史年化回报率'
        },
        {
          tit:'小白理财',
          tip:'理财首选',
          perc:'4.22%',
          desc:'7日年化收益率'
        },
        {
          tit:'月月盈',
          tip:'养老保障',
          perc:'5%',
          desc:'七日年化收益率'
        },
        {
          tit:'小白基金',
          tip:'天天赚钱',
          perc:'4.27%',
          desc:'7日年化收益率'
        }
      ],
      hscroll:[
        { src: require('../assets/hscroll/1.jpg')},
        { src: require('../assets/hscroll/2.jpg')},
        { src: require('../assets/hscroll/3.jpg')},
        { src: require('../assets/hscroll/4.jpg')}
      ]
    }
  },
  components:{
    flexList,
    sliderList,
    VFooter,
    VBanner,
    LiCai,
    HScroll
  }
}
</script>
  
<style scoped>
  .hasPaddingTop{
    padding-top:20px;
  }
  .hasPaddingBottom{
    padding-bottom:20px;
  }
  .hasMarginBottom{
    margin-bottom:10px;
  }
  .whole-banner{
    height:140px;
  }
  .whole-banner2{
    height:84px;
  }
  .whole-banner img,.whole-banner2 img{
    width:100%;
    height:100%;
  }
</style>
