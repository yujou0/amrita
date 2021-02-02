<template lang="pug">
#productitem
  b-container
    span.bg-lightblue1.ml-lg-5.namesize {{product[0].name}}
    br
    br
    .d-md-flex.flex-column
      .d-md-flex
        img.picsize.ml-lg-5(:src='product[0].src')
        .d-flex.align-items-center
          p
            span.font-weight-bold.text-info(style='font-size:1.5rem') 商品介紹
            br
            | {{product[0].description}}
      .row.product_container.justify-content-between.align-items-center
        .col-lg-5.product_picture.mr-3.m-lg-0
          router-link.text-black-50(to='/products', style='font-size: 20px;')
            font-awesome-icon(:icon="['fas', 'backward']")
            |  BACK
        .col-lg-4.product_text_box
          span.bg-lightblue1.pricesize 售價 $
          span.bg-lightblue1.pricesize.text-danger {{ product[0].price }}
          span.bg-lightblue1.pricesize 元整
        b-container.mt-5.mb-5
          b-tabs(content-class='mt-3', justified='')
            b-tab(title='付款及運送方式')
              img.w-100(src='https://li-water.com.tw/image/catalog/shop%20description/3.%E9%85%8D%E9%80%81%E6%96%B9%E5%BC%8F.jpg')
            b-tab(title='注意事項')
              img.w-100(src='https://li-water.com.tw/image/catalog/shop%20description/1%E8%B3%BC%E8%B2%B7%E5%89%8D%E9%96%B1%E8%AE%80.jpg')
          hr
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
  name: 'testabc',
  id () {
    return this.$route.params.id
  },
  data () {
    return {
      images: [], // 所有商品
      product: []
    }
  },
  mounted () {
    this.axios.get(process.env.VUE_APP_URL + '/albums/user/')
      .then(res => {
        if (res.data.success) {
          this.images = res.data.result.map(image => {
            image.src = process.env.VUE_APP_URL + '/albums/file/' + image.file
            image.edit = false
            image.try = '123'
            delete image.file
            return image
          })
          this.product = this.images.filter(item => {
            return item._id === this.$route.params.id
          })
        } else {
          this.$swal({
            icon: 'error',
            title: '錯誤',
            text: res.data.message
          })
        }
      })
      .catch(err => {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: err.response.data.message
        })
      })
  }
}
</script>
<style>
#productitem{
  overflow: hidden;
}
  .picsize{
    /* margin-left: 5rem; */
    width: 50%;
    height: auto;
  }
    .footer{
  background-color: #003399;
}
.bg-lightblue1{
  background-image: linear-gradient(transparent 50%, rgba(173, 234, 234, 0.5) 50%)
}
.namesize{
  font-size: 2rem;
  font-weight: bold;
}
.pricesize{
  font-size: 1.5rem;
  font-weight: bold;
}
</style>
