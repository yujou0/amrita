<template lang="pug">
#about.mt-5
  b-container.position-relative
    vue-particles.position-absolute(color='#dedede', :particleopacity='0.7', :particlesnumber='80', shapetype='circle', :particlesize='4', linescolor='#dedede', :lineswidth='1', :linelinked='true', :lineopacity='0.4', :linesdistance='150', :movespeed='3', :hovereffect='true', hovermode='grab', :clickeffect='true', clickmode='push')
    b-row
      div
        .mt-5
          .row
            .col-md-6.col-sm-7
              span.abouttitle 關於我們
              br
              br
              div
                span.smalltitle 品牌精神
                p(style='line-height:2rem;width:95%;')
                  | 1998年創立長生淨水科技，再於2004年成立力健國際企業有限公司並於2008發行
                  strong(style='color:blue;') 艾力特AMRITA
                  | 品牌服務至今已改善許多用戶的各種水質問題。
                br
              div
                span.smalltitle 堅持品質
                p(style='line-height:2rem;width:95%;')
                  | 自成立以來已累積許多不同水質問題的經驗，現在仍然秉持著不斷創新、準確的效率、穩健踏實為理念，提供一貫的完整服務。且在客戶長期的讚譽與支持下，在功能與品質均獲得高度的肯定。不為削價而使用仿貨劣貨，秉持專業良知捍衛品質，安全、養生才是我們追求的目標。
                br
              span.smalltitle 貼心服務
              div
                p(style='line-height:2rem;width:95%;')
                  | 本公司目前服務的淨水項目： 家庭淨水以外還有工業用、商業用、農漁業用、公司行號用，若有各合公司行號有需求，也歡迎與我們聯繫。 現在除了宜蘭市的【長生淨水】，在羅東鎮有【力健淨水】及【力樂淨水】，同時為宜蘭地區及大台北地區甚至全國的民眾，的飲水品質而努力及提供服務。 期許各位舊雨新知，不吝指教並能告訴我們你的需求，讓我們能夠提供更貼近、更完善的服務。
              br
              br
            .col-md-6.col-sm-7.d-flex.flex-column
              img.shadow(style='width:95%;', src='https://li-water.com.tw/image/catalog/brand/mrt.jpg')
              br
              img(style='width:95%;', src='https://images.all-free-download.com/images/graphiclarge/glass_cup_and_water_vector_587233.jpg')
          br
          span.abouttitle 門市地點
          br
          br
          .row.w-100
            .col-md-4.col-sm-12
              span.smalltitle 力健淨水
              iframe(src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.3524292230545!2d121.76159531537422!3d24.68040885852753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3467e680677593bd%3A0x8de98a89d17f2c5!2z5Yqb5YGl5ZyL6Zqb5LyB5qWt5pyJ6ZmQ5YWs5Y-4!5e0!3m2!1szh-TW!2stw!4v1609296681181!5m2!1szh-TW!2stw', width='auto', height='auto', frameborder='0', style='border:0;', allowfullscreen='', aria-hidden='false', tabindex='0')
            .col-md-4.col-sm-12
              span.smalltitle 力樂淨水
              iframe(src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.557651464171!2d121.76175811537416!3d24.67334995880694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3467e7dc7957b705%3A0x3ecc6ce6898e5fd9!2z5Yqb5qiC5reo5rC0LeWKm-aoguWci-mam-S8gealreaciemZkOWFrOWPuA!5e0!3m2!1szh-TW!2stw!4v1609297333570!5m2!1szh-TW!2stw', width='auto', height='auto', frameborder='0', style='border:0;', allowfullscreen='', aria-hidden='false', tabindex='0')
            .col-md-4.col-sm-12
              span.smalltitle 長生淨水
              iframe(src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.402952514783!2d121.75272401537497!3d24.747369655874753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3467e4e7ec53d707%3A0x7229b83924ac0a5a!2z6ZW355Sf5reo5rC0!5e0!3m2!1szh-TW!2stw!4v1609297357209!5m2!1szh-TW!2stw', width='auto', height='auto', frameborder='0', style='border:0;', allowfullscreen='', aria-hidden='false', tabindex='0')
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

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+TC&display=swap')
html, body {
  font-family: 'Noto Serif TC', serif;
}
.abouttitle{
  font-size: 2rem;
  font-weight: bold;
  background-image: linear-gradient(transparent 50%, rgba(173, 202, 234, 0.5) 50%)
}
.smalltitle{
  font-size: 1.5rem;
  font-weight: bold;
  background-image: linear-gradient(transparent 50%, rgba(173, 234, 234, 0.5) 50%)
}
h4{
  background-color: lightblue;
}
#about {
  font-family: Georgia, 'Times New Roman', Times, serif;
  /* margin: auto; */
  overflow: hidden;
}
.footer{
  background-color: #003399;
  /* color #fff; */
}
</style>
