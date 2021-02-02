<template lang="pug">
#cart
  b-container
    form-wizard(@on-complete='onComplete' title="" subtitle="" back-button-text="上一頁" next-button-text="下一頁" finish-button-text="提交訂單" color="#555b6e")
      tab-content(title='購物車')
        h4 Step 1
        #cart
          b-container(v-if='images.length>0')
            h1.mb-5 購物明細
            .row
              b-table.col-lg-8(:items='images', :fields='fields',stacked='sm', striped='striped', hover='hover')
                template(v-slot:cell(src)='row')
                  b-img.mr-3(:src='row.item.src', width='75', height='75')
                template(#cell(cartcount)='row')
                  b-form-spinbutton#sb-inline(inline='inline', v-model='row.item.cartcount', @change='addCart(data.image)')
                template(#cell(action)='data')
                  b-button(variant='danger', @click='del(data.index)')
                    font-awesome-icon(:icon="['far', 'trash-alt']")
              .col-lg-4.mt-5.mt-lg-0.px-0.px-md-1.bg-secondary.text-white.h-100
                .cart-info-box.px-3.pb-2
                  h2.h4.font-weight-bold.text-center.cart-info-title.m-0.py-3 訂單摘要
                  hr.border-white.mt-0
                  .d-flex.justify-content-between.mb-1
                    span 小計
                    span NT$ {{ totalprice }}
                  div(v-if='totalprice >= 899')
                    .d-flex.justify-content-between.mb-3.py-3
                      span.h5.m-0.font-weight-bold.py-1 滿899運費
                      span.h5.m-0.font-weight-bold.py-1 NT$ 0
                    .d-flex.justify-content-between
                      span.h5.m-0.font-weight-bold.py-3 總計
                      span.h5.m-0.font-weight-bold.py-3
                        | NT$ {{ totalprice }}
                  div(v-else='')
                    .d-flex.justify-content-between.mb-3.py-3
                      span.h5.m-0.font-weight-bold.py-1 未滿899酌收運費
                      span.h5.m-0.font-weight-bold.py-1 NT$ 60
                    .d-flex.justify-content-between
                      span.h5.m-0.font-weight-bold.py-3 總計
                      span.h5.m-0.font-weight-bold.py-3
                        | NT$ {{ totalprice + 60 }}
          b-container(v-else='')
            img(src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQERU2GZJwVF3ph7NNwhOixJLdml8p5mDxdsA&usqp=CAU', style='')
            h5
              | 你的購物車沒有商品 ಥ_ಥ
              br
              router-link.h5(to='/products') 可以從這裡去看看喔！
      tab-content(title='輸入訂購資料')
        h4 Step 2
        b-container
          h1 輸入訂購資料
          b-form(@submit.prevent='onSubmit')
            b-form-group#input-group-1(label='收件人名字', label-for='input-1', :state='checkoutnameState', description='(必填)', invalid-feedback='名字格式不符')
              b-form-input#input-1(v-model='checkoutname', type='text', required='required', placeholder='請輸入名字...', :state='checkoutnameState')
            b-form-group#input-group-1(label='信箱', label-for='input-1',  description='(必填)', invalid-feedback='email格式不符')
              b-form-input#input-1(v-model='checkoutemail', type='text', required='required', placeholder='請輸入email...')
            b-form-group#input-group-1(label='收件人電話', label-for='input-1',  description='(必填)', invalid-feedback='電話格式不符')
              b-form-input#input-1(v-model='checkoutphone', type='text', required='required', placeholder='請輸入電話...')
            b-form-group#input-group-1(label='欲送達地址', label-for='input-1',  description='(必填)', invalid-feedback='地址格式不符')
              b-form-input#input-1(v-model='checkoutaddress', type='text', required='required', placeholder='請輸入地址...')
            b-form-group#input-group-1(label='備註', label-for='input-1', description='輸入想備註的內容(選填)', invalid-feedback='備註格式不符')
              b-form-input#input-1(v-model='checkoutcontent', type='text', placeholder='請輸入備註...')
            //- .text-center
            //-   b-btn.mx-1(variant='success', type='submit') &#x63D0;&#x4EA4;&#x8A02;&#x55AE;
  // footer
  .footer.text-white.mt-5
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
  #total{
    float: right;
  }
  #cart{
    overflow: hidden;
  }
  .footer{
  background-color: #003399;
}
</style>
<script>
export default {
  name: 'Cart',
  data () {
    return {
      checkoutname: '',
      checkoutemail: '',
      checkoutphone: '',
      checkoutaddress: '',
      checkoutcontent: '',
      checkoutproductname: this.$store.getters.images,
      steps: [
        {
          label: '購物車',
          slot: 'page1'
        },
        {
          label: '提交訂單',
          slot: 'page2'
        }
      ],
      // cartcount: 1,
      fields: [
        {
          key: 'src',
          label: '商品照片'
        },
        {
          key: 'name',
          label: '商品名稱'
        },
        {
          key: 'cartcount',
          label: '數量'
        },
        {
          key: 'price',
          label: '單價'
        },
        {
          key: 'action',
          label: '操作'
        }
      ],
      secondfields: [
        {
          key: 'src',
          label: '商品照片'
        },
        {
          key: 'name',
          label: '商品名稱'
        },
        {
          key: 'cartcount',
          label: '數量'
        },
        {
          key: 'price',
          label: '單價'
        }
      ]
    }
  },
  computed: {
    checkoutnameState () {
      if (this.checkoutname.length === 0) {
        return null
      } else if (this.checkoutname.length > 200) {
        return false
      } else {
        return true
      }
    },
    images () {
      // 直接取 vuex 的 items
      // return this.$store.state.items
      // 呼叫 vuex 的 getters
      return this.$store.getters.images
    },
    totalprice () {
      let price = 0
      for (const image of this.images) {
        price += image.cartcount * image.price
      }
      return price
    },
    finalprice () {
      let price = 0
      for (const image of this.images) {
        price += image.cartcount * image.price + 80
      }
      return price
    }
  },
  methods: {
    onComplete: function () {
      if (this.checkoutnameState) {
        this.axios.post(process.env.VUE_APP_URL + '/orders/', this.$data)
          .then(res => {
            if (res.data.success) {
              this.$swal({
                icon: 'success',
                title: '訂購成功',
                text: '恭喜您訂購完成!預計7-14個工作天會寄出商品!(貨到付款)，若您購買的是濾水器，預計2個工作天內會有專人與您聯繫安裝時間!'
              })
              this.checkoutname = ''
              this.checkoutemail = ''
              this.checkoutphone = ''
              this.checkoutaddress = ''
              this.checkoutcontent = ''
              this.checkoutproductname.length = 0
            } else {
              this.$swal({
                icon: 'error',
                title: '發生錯誤',
                text: res.data.message
              })
            }
          })
          .catch(err => {
            this.$swal({
              icon: 'error',
              title: '發生錯誤',
              text: err.response.data.message
            })
          })
      }
    },
    onSubmit () {
      if (this.checkoutnameState) {
        this.axios.post(process.env.VUE_APP_URL + '/orders/', this.$data)
          .then(res => {
            if (res.data.success) {
              this.$swal({
                icon: 'success',
                title: '訂購成功',
                text: '恭喜您訂購完成!預計7-14個工作天會寄出商品!(貨到付款)，若您購買的是濾水器，預計2個工作天內會有專人與您聯繫安裝時間!'
              })
              this.checkoutname = ''
              this.checkoutemail = ''
              this.checkoutphone = ''
              this.checkoutaddress = ''
              this.checkoutcontent = ''
              this.checkoutproductname.length = 0
            } else {
              this.$swal({
                icon: 'error',
                title: '發生錯誤',
                text: res.data.message
              })
            }
          })
          .catch(err => {
            this.$swal({
              icon: 'error',
              title: '發生錯誤',
              text: err.response.data.message
            })
          })
      }
    },
    nextClicked (currentPage) {
      console.log('next clicked', currentPage)
      return true // return false if you want to prevent moving to next page
    },
    backClicked (currentPage) {
      console.log('back clicked', currentPage)
      return true // return false if you want to prevent moving to previous page
    },
    del (index) {
      this.$store.commit('delCart', index)
    },
    edit (index) {
      this.$store.commit('editCart', index)
    },
    checkOut (image) {
      this.$router.push('/checkout')
    }
  }
}
</script>
