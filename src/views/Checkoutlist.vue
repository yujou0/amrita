<template lang="pug">
  #checkoutlist
      b-row
        b-col(cols="12")
          h1.text-center.my-5 銷售紀錄
      b-card(no-body='')
        b-tabs(pills='', card='', vertical='' )
          b-tab(title='銷售詳情', active='')
              h3.bg-dark.text-white.mb-3 銷售詳情
              table
                thead
                  tr
                    th 訂單編號
                    th 姓名/ 地址/ 電話
                    //- th 地址
                    th 電子信箱
                    //- th 電話
                    th 備註
                    th 訂購內容
                tbody.table(v-for='(image, idx) in images', :key='image._id')
                  img(:src="image.src" v-pswp="image" :style="{maxWidth:'200px',maxHeight:'200px'}")
                  tr
                  //- th(scope='row')
                  tr
                  td {{ image._id }}
                  td {{ image.checkoutname }} <br>{{ image.checkoutaddress }}<br>{{ '0' + image.checkoutphone }}
                  //- td {{ image.checkoutaddress }}
                  td {{ image.checkoutemail }}
                  //- td {{ '0' + image.checkoutphone }}
                  td {{ image.checkoutcontent }}
                  //- th(scope='row') 購買內容
                  td(v-for='(name, p) in image.checkoutproductname')
                    | {{ name.name }} <br> {{ '訂購價格' +name.price }} <br> {{ '訂購數量' + name.cartcount }}
                  tr
                    b-btn(v-if="!image.edit" variant="secondary" @click="del(image, idx)") 刪除
          b-tab(title='銷售統計')
            h3.bg-dark.text-white.mb-3 銷售統計
            b-card-text
              b-card-text {{ '總計銷售訂單數: ' + images.length + '筆'}}

</template>
<script>
export default {
  name: 'Checkoutlist',
  data () {
    return {
      images: [],
      items: this.$store.getters.images.checkoutproductname
    }
  },
  computed: {
    checkout () {
      // 直接取 vuex 的 items
      // return this.$store.state.items
      // 呼叫 vuex 的 getters
      return this.$store.getters.images
    }
  },
  mounted () {
    this.axios.get(process.env.VUE_APP_URL + '/orders/checkoutlist/')
      .then(res => {
        if (res.data.success) {
          this.images = res.data.result
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
  },
  methods: {
    del (image, idx) {
      this.$dialog
        .confirm('確定刪除該筆訂單?? (☉д⊙)')
        .then(res => {
          this.axios.delete(process.env.VUE_APP_URL + '/orders/' + image._id)
            .then(res => {
              if (res.data.success) {
                this.images.splice(idx, 1)
              } else {
                this.$swal({
                  icon: 'error',
                  title: '錯誤',
                  text: res.data.message
                })
              }
            })
        })
        .catch(err => {
          this.$swal({
            icon: 'error',
            title: '錯誤',
            text: err.response.data.message
          })
        })
    },
    delsure (image) {
      // this.$store.commit('addCart', image)
      // this.dismissCountDown = this.dismissSecs
      this.$swal('確定要刪除該筆訂單嗎? ')
    }
  }
}
</script>
<style >

</style>
