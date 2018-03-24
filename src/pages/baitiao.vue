<template>
  <div class="Index">
    <div class="focus hasMarginBottom"  style="height:160px;">
      <slider-list :dataList="sliderData" ></slider-list>
    </div>

    <section class="section section6 hasMarginBottom">
      <div class="row row-tit">
        <span class="row-tit-name">-白条福利-</span>
      </div>
      <div class="row row-content">
        <r-list :dataList="rowList2"></r-list>
      </div>
    </section>

    <section class="section section7 hasMarginBottom">
      <div class="row row-tit">
        <span class="row-tit-name">-更多服务-</span>
      </div>
      <div class="row row-content">
        <flex-list  class="hasPaddingBottom" :dataList="flexData4" ></flex-list>
        <flex-list  class="hasPaddingBottom" :dataList="flexData5" ></flex-list>
      </div>
    </section>

    <section class="section section8">
      <div class="row row-content whole-banner5" style="height:84px;">
        <img class="whole-banner_img" src="../assets/img/whole-banner5.png">
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
      flexData4:[
        {
          src:require('../assets/flex4/1.png'),
          tit:'小白卡'
        },
        {
          src:require('../assets/flex4/2.png'),
          tit:'白条商城'
        },
        {
          src:require('../assets/flex4/3.png'),
          tit:'消费分期'
        },
        {
          src:require('../assets/flex4/4.png'),
          tit:'借钱'
        }
      ],
      flexData5:[
        {
          src:require('../assets/flex5/1.png'),
          tit:'白条提额'
        },
        {
          src:require('../assets/flex5/2.png'),
          tit:'白条闪付'
        },
        {
          src:require('../assets/flex5/3.png'),
          tit:'小白会玩'
        },
        {
          src:require('../assets/flex5/4.png'),
          tit:'钢镚'
        }
      ],
      sliderData:[
        {
          src:require('../assets/img/slider3_1.jpg')
        },
        {
          src:require('../assets/img/slider3_2.jpg')
        }
      ],
      rowList2:[
        {
          tit:'开通白条',
          benifit:'立即开通',
          desc:'送188元礼包',
          src: require('../assets/img/icon6.jpg')
        },
        {
          tit:'白条闪付',
          benifit:'随机立减',
          desc:'新手享158元礼包',
          src: require('../assets/img/icon7.jpg')
        },
        {
          tit:'白条提额',
          benifit:'去提额',
          desc:'金融app专享提额礼包',
          src: require('../assets/img/icon8.jpg')
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
