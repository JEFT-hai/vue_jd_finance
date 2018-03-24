<template>
  <div class="Index">

    <a-scroll :dataList="autoScroll"></a-scroll>

    <section class="section section9 hasMarginBottom">
      <div class="row row-tit">
        <span class="row-tit-name">-每日签到-</span>
        <span class="row-tit-more">不抢白不抢</span>
      </div>
      <div class="row row-content-flex row-content-flex2 hasPaddingBottom hasMarginBottom">
        <div class="item">
          <img class="cover" src="../assets/img/half_img1.jpg" />
        </div>
         <div class="item">
          <img class="cover" src="../assets/img/half_img2.jpg" />
        </div>
      </div>
    </section>

    <section class="section section9">
      <div class="row row-tit">
        <span class="row-tit-name">-In货推荐-</span>
      </div>
      <div class="row row-content whole-banner6" style="height:100px;">
        <img class="whole-banner_img" src="../assets/img/whole-banner6.png">
      </div>
      <div class="row row-content-twoItem">
        <t-item :dataList="twoItem1"></t-item>
      </div>
      <div class="row row-content whole-banner6" style="height:100px;">
        <img class="whole-banner_img" src="../assets/img/whole-banner7.png">
      </div>
      <div class="row row-content-twoItem">
        <t-item :dataList="twoItem2"></t-item>
      </div>
      <div class="row row-content whole-banner6" style="height:100px;">
        <img class="whole-banner_img" src="../assets/img/whole-banner8.png">
      </div>
      <div class="row row-content-twoItem">
        <t-item :dataList="twoItem3"></t-item>
      </div>
    </section>

    <section class="section section10">
      <div class="row row-tit">
        <span class="row-tit-name">-更多福利-</span>
        <span class="row-tit-more">专享福利</span>
      </div>
      <div class="row row-content-flex row-content-flex3 hasPaddingBottom">
        <div class="item">
          <img class="cover" src="../assets/img/flexImg2_1.jpg" />
        </div>
        <div class="item">
          <img class="cover" src="../assets/img/flexImg2_2.jpg" />
        </div>
        <div class="item">
          <img class="cover" src="../assets/img/flexImg2_3.jpg" />
        </div>
      </div>
    </section>
    <flex-list style="background:#fff;" class="hasPaddingTop hasMarginBottom" :dataList="flexData3" ></flex-list>
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
import AScroll from '../components/nospaceScroll'
import TItem from '../components/twoItem'
export default {
  data () {
    return {
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
      autoScroll:[
        {text:'签到领流量，1元500M！'},
        {text:'百万白条券免费送，速来领取！！'}
      ],
      twoItem1:[
        {
          src:require('../assets/img/two1_1.jpg'),
          tit:'骨传导耳机',
          price:'19.00',
          percent:'386%',
          tip:'精选'
        },
        {
          src:require('../assets/img/two1_2.jpg'),
          tit:'未来游戏装备',
          price:'159.00',
          percent:'999%',
          more:'≥'
        }
      ],
      twoItem2:[
        {
          src:require('../assets/img/two2_1.jpg'),
          tit:'蓝牙音箱',
          price:'29.00',
          gray:'众筹结束'
        },
        {
          src:require('../assets/img/two2_2.jpg'),
          tit:'全球漫游WiFi卡',
          price:'65.00',
          percent:'348%'
        }
      ],
      twoItem3:[
        {
          src:require('../assets/img/two3_1.jpg'),
          tit:'遵义虾子土豆片',
          price:'1.00',
          percent:'0%'
        },
        {
          src:require('../assets/img/two3_2.jpg'),
          tit:'新疆黄杏干',
          price:'35.00',
          percent:'0%'
        }
      ]
    }
  },
  components:{
    flexList,
    sliderList,
    VFooter,
    LiCai,
    HScroll,
    RList,
    AScroll,
    TItem
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
  .row-content-flex2{
    height:80px;
  }
  .row-content-flex item{
    flex:1;
  }
  .row-content-flex{
    display:flex;
    width:100%;
  }
  row-content-flex3{
    height:165px;
  }
  .row-content-flex{
    background:#fff;
  }
  
</style>
