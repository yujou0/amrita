<template lang="pug">
#home(style='overflow:hidden')
  img.m-3.go-top(v-if='btnFlag',src='https://pngimage.net/wp-content/uploads/2018/06/go-to-top-png-1.png', @click='backTop')
  .row
    visual.col-12.d-none.d-lg-block.d-xl-block( :video="'./img/watercutted2.mp4'", autoplay='', muted='', loop='')
    .d-none.d-lg-block.d-xl-block.position-absolute.videotitle
      .col-12.text-center.font-weight-bold.h1.text-secondary 艾力特淨水科技<br>無鉛無氯 安心喝好水
    a(href='#carousel-1').d-flex.justify-content-center.w-100.my-md-5.text-info(style='font-size:2rem')
      // <font-awesome-icon class=" d-none d-lg-block d-xl-block" :icon="['fas', 'angle-double-down']"></font-awesome-icon>
      img.col-2.d-none.d-lg-block.d-xl-block(:src="'https://australia51.com/qpic/mmbiz_gif/2HicSIZwc6l9FDmL5X1LXibwuGQDLTEWKficMwITVvElETZznTa3uyfCgFZNELW2ibzz5j7xXVSOojb7tz7icLwu30g/640__0x0.gif'")
  div.d-md-flex.bg-lightgrey
    b-container.ml-0
      b-carousel#carousel-1(v-model='slide', :interval='4000', controls='', indicators='', background='#ababab', img-width='1024', img-height='480', style='text-shadow: 1px 1px 2px #333;', @sliding-start='onSlideStart', @sliding-end='onSlideEnd')
        // Text slides with image
        b-carousel-slide(img-src='../../public/img/slide0.jpg')
        // Slides with custom text
        b-carousel-slide(:img-src="'./img/slide1.jpg'")
        // Slides with img slot
        // Note the classes .d-block and .img-fluid to prevent browser default image alignment
        b-carousel-slide
          template(v-slot:img='')
            img.d-block.img-fluid.w-100(width='1024', height='480', :src="'./img/slide4.jpg'", alt='image slot')
    .w-100.righttext.d-flex.flex-column.align-items-center.justify-content-center
      h2 好水量身訂做
      p 每個人的體質不同，適合飲用的水質也有所不同<br>而水中礦物質以及微量元素的含量，<br>不只決定水質好壞與口感，<br>更會影響您身體健康的狀態！
      router-link(:to='`/contact/`')
        b-btn.mb-5 聯絡我們
  div.d-md-flex.justify-content-evenly.shadow.bg-lightblue2
    .bg1.w-100.lefttext.d-flex.flex-column.align-items-center.justify-content-center
      h2 濾心卡榫設計 秒換心，不漏水
      p 快拆式濾心接頭設計，無須使用工具，濾心輕鬆一擰即更換完成。
      router-link(:to='`/products/`')
        b-btn 立即購買 !
    b-container(data-aos='zoom-in')
      .carousel.col-12.col-lg-6(v-for="carousel in carousels")
        b-carousel.m-1(id="carousel-fade" :interval="carousel.speed" fade controls indicators)
          .carouselImg(v-for="src in carousel.imgs")
            b-carousel-slide.img-scale(:img-src="src")
  br
  h3.text-center.my-3 最新活動
  b-container.d-flex.justify-content-center.my-5
    .row
      .news.justify-content-around.d-lg-flex.col-12
        div(data-aos='fade-right')
          article.post-layout.post-grid
            .post-thumb
              .image.shadow
                a(href='#')
                  img.img-responsive(src='https://li-water.com.tw/image/cache/catalog/brand/-FB-500x500.jpg', alt='[ 門 市 活 動 ] 88有禮振興券變', title='[ 門 市 活 動 ] 88有禮振興券變')
        div(data-aos='zoom-in-up')
          article.post-layout.post-grid
            .post-thumb
              .image.shadow
                a(href='#')
                  img.img-responsive(src='https://li-water.com.tw/image/cache/catalog/brand/-FB(三間)-500x500.jpg', alt='[  門 市 活 動 ] 幫你把振興券增', title='[  門 市 活 動 ] 幫你把振興券增')
        div(data-aos='fade-left')
          article.post-layout.post-grid
            .post-thumb
              .image.shadow
                a(href='#')
                  img.img-responsive(src='https://li-water.com.tw/image/cache/catalog/brand/2020母(fb)-500x500.jpg', alt='[  門 市 活 動 ] 母親節快樂！媽', title='[  門 市 活 動 ] 母親節快樂！媽')
  div.bg-lightgrey
    .d-flex.justify-content-center.mt-5
      h3.mt-5 商品推薦 &nbsp&nbsp
        img(:src="'https://image.flaticon.com/icons/png/512/119/119972.png'" style="width:50px;height:50px")
    div.d-flex.align-items-center
      //- div.ml-md-5.swipericonsize.font-weight-bolder.text-secondary ◀
      b-container.swiperbg
        swiper.swiper.row(:options='swiperOption')
          //- swiper-slide.col-8.col-md-3.swiperslide
          //-   router-link(:to='`/products/`')
          //-     img(:src="'./img/01.png'", alt='new1')
          //-     p AP-75G RO逆滲透純水機
          swiper-slide.col-8.col-md-3
            router-link(:to='`/products/`')
              img(:src="'./img/02.png'", alt='new2')
              p AR-6600直輸RO機
          swiper-slide.col-8.col-md-3
            router-link(:to='`/products/`')
              img(:src="'./img/03.png'", alt='new3')
              p UDF顆粒活性碳濾芯
          swiper-slide.col-8.col-md-3
            router-link(:to='`/products/`')
              img(:src="'./img/04.png'", alt='new4')
              p 極致式PP-1微米濾芯
          swiper-slide.col-8.col-md-3
            router-link(:to='`/products/`')
              img(:src="'./img/05.png'", alt='new5')
              p 極致式PP5μ濾芯
          //- swiper-slide.col-8.col-md-3
          //-   router-link(:to='`/products/`')
          //-     img(:src="'./img/04.png'", alt='new4')
          //-     p 極致式奈米銀濾芯
          swiper-slide.col-8.col-md-3
            router-link(:to='`/products/`')
              img(:src="'./img/07.png'", alt='new7')
              p 極致式樹脂濾芯
          .swiper-pagination(slot='pagination')
          .swiper-scrollbar
      //- div.mr-md-5.swipericonsize.font-weight-bolder.text-secondary ▶
  img(style='width:100%;height:auto', src='https://li-water.com.tw/image/catalog/brand/homebtn.jpg')
  br
  // footer
  .footer.text-white
    .row.d-flex.justify-content-around
    .row
      .col-12.text-center
        p
          | 【門市資訊】
          br
          | 長生淨水 03-9329722 宜蘭市中山路二段206-1號 ⏰營業時間:週一至週六 8:30~20:00
          br
          | 力健淨水 03-9557339 羅東鎮公正路296號1F ⏰營業時間:週一至週六 9:00~21:00
          br
          | 力樂淨水 03-9551206 羅東鎮純精路一段198號 ⏰營業時間:週一至週六9:00~21:00
        | 【客服信箱】lij45112183@gmail.com
        br
        | 【客服LINE ID】  @klz6621q
        br
        a(href='#')
          font-awesome-icon.fa-3x.mr-md-5.text-white(:icon="['fab', 'line']")
        a(href='#')
          font-awesome-icon.fa-3x.mr-md-5.text-white(:icon="['fab', 'facebook-square']")
        a(href='#')
          font-awesome-icon.fa-3x.mr-md-5.text-white(:icon="['fab', 'instagram']")
        a(href='#')
          font-awesome-icon.fa-3x.text-white(:icon="['fab', 'youtube']")
    .col-12.text-center.pt-1
      .footer-copyright.text-center.py-3
        | Copyright &copy; 2020 AMRITA TAIWAN  All rights reserved.
</template>
<script>
export default {
  data () {
    return {
      btnFlag: false,
      carousels: [
        {
          speed: 3800,
          imgs: [
            // require('../assets/image/home/carousel/S__13344997.jpg'),
            require('../assets/image/01rvsd.png'),
            require('../assets/image/06rvsd.png')
          ]
        }
      ],
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 30,
        // slidesPerGroup: 3,
        centeredSlides: true,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        scrollbar: {
          el: '.swiper-scrollbar',
          hide: true
        }
      },
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    },
    // 点击图片回到顶部方法，加计时器是为了过渡顺滑
    backTop () {
      const that = this
      const timer = setInterval(() => {
        const ispeed = Math.floor(-that.scrollTop / 5)
        document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
        if (that.scrollTop === 0) {
          clearInterval(timer)
        }
      }, 16)
    },
    // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
    scrollToTop () {
      const that = this
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      that.scrollTop = scrollTop
      if (that.scrollTop > 0) {
        that.btnFlag = true
      } else {
        that.btnFlag = false
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.scrollToTop)
  },
  destroyed () {
    window.removeEventListener('scroll', this.scrollToTop)
  }
}
</script>
<style lang="stylus">
.go-top{
  width: 50px;
  height: 50px;
  // background: var(--coffee3);
  border-radius: 50%;
  position: fixed;
  right: 20px;
  bottom: 0;
  z-index: 1;
  // box-shadow: inset 0 0 0 2px var(--coffee3);
}
.swipericonsize{
font-size: 2rem;
}
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+TC&display=swap')
html, body {
  font-family: 'Noto Serif TC', serif;
}
html, body a{
  font-family: 'Noto Serif TC', serif;
}
.bg-lightblue2{
    background: rgba(114, 159, 173, 0.3)
}
.righttext{
  line-height 2rem
}
.bg-lightgrey{
  background-color rgba(0,0,0,0.03)
  // border 1px solid grey
}
.videotitle{
  font-size 2rem
  right 1rem
  bottom 20%
  height 12%
  width: 28%
  // border-radius 50%
  background-image linear-gradient(transparent 20%, rgba(255, 255, 255, 0.5) 80%)
}
.swiper{
width 100%
height 400px
position relative
}
.swiper a{
  color #000
}
.swiperbg{
// background-color rgba(114, 159, 173, 0.3)
}
.swiperslide{
  display flex
  // flex-direction column-reverse
}
.swiper img{
max-height 100%
max-width 100%
width 250px
height auto
position absolute
top 0
bottom 0
left 0
right 0
margin auto
-webkit-filter drop-shadow(12px 12px 7px rgba(0, 0, 0, 0.7));
filter drop-shadow(12px 12px 7px rgba(0, 0, 0, 0.7))
}
.news_box{
  height 100px
  width 50%
  box-shadow 10px 5px 5px grey
  background-color rgba(150,200,200,0.1)
  border-radius 0 5% 5% 0
}
.swiper-slide {
  margin 1rem
  display:flex;
  justify-content:center;
  // background-color: lightblue;
  flex-wrap:wrap;
  border-radius:20%;
  font-family:'微軟正黑體';
  font-size:20px;
  font-weight:bold;
}
.box:before{
  content:'';
  position:absolute;
  z-index:2;
  top:60px;
  left:50px;
  width:50px;
  height:50px;
  background:#c00;
  border-radius:2px;
  transform: rotate(45deg);
  -webkit-animation:box .8s infinite ;
}
@-webkit-keyframes box{
  0%{
    top:50px;
  }
  20%{
    border-radius:2px;  /*從 20% 的地方才開始變形*/
  }
  50%{
    top:80px;
    border-bottom-right-radius:25px;
  }
  80%{
    border-radius:2px;  /*到 80% 的地方恢復原狀*/
  }
  100%{
    top:50px;
  }
}
.footer{
  background-color: #003399;
  // color #fff;
}
</style>
