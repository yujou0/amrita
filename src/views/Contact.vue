<template lang="pug">
#contact
  .d-flex.justify-content-center
    img(:src="'https://www.union.org/tko/images/banner_contact_en.jpg'", style='width:70%;')
  .container
    .col-12.pt-3
      h2 聯絡我們
    .col-12.text-center
    form.contact-form.p-4(@submit.prevent='sendEmail')
      .form-row
        .col-12.pb-4
          label 分類 | Category
          select.form-control(name='option')
            option 請選擇分類
            option 資料請求
            option 產品疑問
            option 產品報修
            option 客訴案件
            option 付款問題
            option 其他
        .col-12.col-sm-12.col-md-12.col-lg-6.col-xl-6.pb-4
          label 姓名 | Name
          input.form-control(type='text', name='name', placeholder='請輸入姓名')
        .col-12.col-sm-12.col-md-12.col-lg-6.col-xl-6.pb-4
          label 電話 | Phone
          input.form-control(type='text', name='phone', placeholder='請輸入連絡電話')
        .col-12.col-sm-12.col-md-12.col-lg-6.col-xl-6.pb-4
          label 電子信箱 | Email
          input.form-control(type='email', name='email', placeholder='請輸入電子信箱')
        .col-12.col-sm-12.col-md-12.col-lg-6.col-xl-6.pb-4
          label 通訊地址 | Address
          input.form-control(type='text', name='address', placeholder='請輸入通訊地址')
        .col-12.pb-4
          label 需求內容 | Content
          textarea.form-control(name='message', rows='5')
        .col-12.text-center
          button.btn.btn-outline-gold.border.bg-secondary.text-white(type='button submit') &#x9001;&#x51FA;
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
  .footer{
  background-color: #003399;
}
#contact{
  overflow: hidden;
}
</style>
<script>
import emailjs from 'emailjs-com'

export default {
  methods: {
    sendEmail: (e) => {
      emailjs.sendForm('service_0mrjgkl', 'template_nsurm0h', e.target, 'user_f9p9do41ZKignHyIxKnSo')
        .then((result) => {
          alert('已收到您的資料,將有專人與你聯絡,謝謝')
          location.reload()
        }, (error) => {
          console.log('FAILED...', error)
        })
    }
  }
}
</script>
