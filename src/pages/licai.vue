<template>
  <div class="Index">
    <div class="focus hasMarginBottom"  style="height:160px;">
      <slider-list :dataList="sliderData" ></slider-list>
    </div>

    <section class="section section6 hasMarginBottom">
      <div class="row row-content whole-banner3">
        <img class="whole-banner_img" src="../assets/img/whole-banner3.png">
      </div>
    </section>

    <section class="section section3 hasMarginBottom">
      <div class="row row-tit">
        <span class="row-tit-name">-精选推荐-</span>
      </div>
      <li-cai :dataList="licai"></li-cai>
    </section>

    <section class="section section6 hasMarginBottom">
      <div class="row row-content whole-banner4">
        <img class="whole-banner_img" src="../assets/img/whole-banner4.png">
      </div>
    </section>

    <section class="section section1 hasMarginBottom">
      <div class="row row-tit">
        <span class="row-tit-name">-理财精选-</span>
      </div>
      <div class="row row-content">
        <r-list :dataList="rowList1"></r-list>
      </div>
    </section>

    <section class="section section6 hasMarginBottom">
      <div class="row row-content whole-banner5" style="height:60px;">
        <img class="whole-banner_img" src="../assets/img/whole-banner.jpg">
      </div>
    </section>
    
    <flex-list style="background:#f5f5f5;" class="hasPaddingTop hasMarginBottom" :dataList="flexData3" ></flex-list>
    <v-footer style="background:#f5f5f5;"></v-footer>
  </div>
  
</template>

<script>
import flexList from '../components/flexList'
import sliderList from '../components/mobile_slider'
import VFooter from '../components/footer'
import LiCai from '../components/licai'
import RList from '../components/rowList'
import HScroll from '../components/hscroll'
export default {
  data () {
    return {
      flexData3:[
        {
          src:require('../assets/flex3/1.png'),
          tit:'客户端'
        },
        {
          src:require('../assets/flex3/2.png'),
          tit:'触屏版'
        },
        {
          src:require('../assets/flex3/3.png'),
          tit:'电脑版'
        }
      ],
      sliderData:[
        {
          src:require('../assets/slider2/1.jpg'),
          tit:'优惠券'
        },
        {
          src:require('../assets/slider2/2.png'),
          tit:'领红包'
        },
        {
          src:require('../assets/slider2/3.png'),
          tit:'抢钢镚',
          tit_color:'#ff0000'
        }
      ],
      rowList1:[
        {
          tit:'月度理财',
          benifit:'去赚钱',
          desc:'预期年化收益率4.50%',
          src: require('../assets/banner-1-2/1.png')
        },
        {
          tit:'季度理财',
          benifit:'去赚钱',
          desc:'历史年化回报率5.50%',
          src: require('../assets/banner-1-2/2.png')
        },
        {
          tit:'一年理财',
          benifit:'去赚钱',
          desc:'历史年化回报率5.80%',
          src: require('../assets/banner-1-2/3.png')
        }
      ],
      licai:[
        {
          ti:'定期理财',
          tip:'90天可质押',
          perc:'5.50%',
          desc:'历史年化回报率'
        },
        {
          tit:'固收理财',
          tip:'理财首选',
          perc:'5.80%',
          desc:'综合年化收益率'
        },
        {
          tit:'基智账户',
          tip:'组合投资',
          perc:'8%-10%',
          desc:'止盈年化收益率'
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
    LiCai,
    HScroll,
    RList
  }
}
</script>
  
<style scoped>
  .whole-banner3{
    height:135px;
  }
  .whole-banner4{
    height:84px;
  }

</style>
