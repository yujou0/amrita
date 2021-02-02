<template lang="pug">
  #products.relative
    div
    .container.d-flex.justify-content-center.mt-5.my-5
      b-container.bg-products
        b-row
          b-col(cols="12")
            h1.text-center.my-5 淨水商品
        b-tabs(pills='', card='',content-class='mt-3', justified='')
            b-tab.btab1(title='全部商品', active='')
              Photoswipe
                b-row
                  b-col(cols="12" md="60" lg="3" v-for="(image, idx) in images" :key="image._id")
                    .col
                      b-card-img(:src="image.src" v-pswp="image")
                      b-card-body
                        b-card-text(v-model="image.model4" style="white-space: pre-wrap") {{ image.name }}
                        b-card-text.text-danger.font-weight-bold(v-model="image.model3" style="white-space: pre-wrap") {{'NT$'+ image.price }}
                        b-form
                          b-button.mr-2(variant="secondary")
                            a.text-white(@click='godetail(image._id)') 查看更多
                          b-button(variant="secondary" @click=("addCart(image)"))
                            font-awesome-icon(:icon="['fas', 'shopping-cart']")
                  b-toast#my-toast(variant='warning', solid='') ☑已加入購物車!
                    template(#toast-title='')
                      .d-flex.flex-grow-1.align-items-center
                        b-img.mr-2(:src="toast.src" v-pswp="image" width='80', height='80')
                        b-card-text(v-model="toast.model4" style="white-space: pre-wrap") {{ toast.name }}
                        b-card-text.text-danger.font-weight-bold(v-model="toast.model3" style="white-space: pre-wrap") {{'NT$'+ toast.price }}
            b-tab(title='濾水器')
              Photoswipe
                b-row
                  b-col(cols="12" md="60" lg="3" v-for="(image, idx) in images" v-if="image.type === '濾水器'" :key="image._id")
                    .col
                      b-card-img(:src="image.src" v-pswp="image" )
                      b-card-body
                        b-card-text(v-model="image.model4" style="white-space: pre-wrap") {{ image.name }}
                        b-card-text.text-danger.font-weight-bold(v-model="image.model3" style="white-space: pre-wrap") {{'NT$'+ image.price }}
                        b-form
                          b-button.mr-2(variant="secondary")
                            a.text-white(@click='godetail(image._id)') 查看更多
                          b-button(variant="secondary" @click="addCart(image)")
                            font-awesome-icon(:icon="['fas', 'shopping-cart']")
            b-tab(title='濾心')
              Photoswipe
                b-row
                  b-col(cols="12" md="60" lg="3" v-for="(image, idx) in images" v-if="image.type === '濾心'" :key="image._id")
                    .col
                      b-card-img(:src="image.src" v-pswp="image")
                      b-card-body
                        b-card-text(v-model="image.model4" style="white-space: pre-wrap") {{ image.name }}
                        b-card-text.text-danger.font-weight-bold(v-model="image.model3" style="white-space: pre-wrap") {{'NT$'+ image.price }}
                        b-form
                          b-button.mr-2(variant="secondary")
                            a.text-white(@click='godetail(image._id)') 查看更多
                          b-button(variant="secondary" @click="addCart(image)")
                            font-awesome-icon(:icon="['fas', 'shopping-cart']")
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
.hovershadow :hover{
  box-shadow: 0 0 11px rgba(33,33,33,.2)
}
.bg-products{
  background: rgba(255, 255, 255, 0.95)
}
.footer{
  background-color: #003399;
}
#products{
  overflow: hidden;
    background-image: url('https://images.pexels.com/photos/4022782/pexels-photo-4022782.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
}
</style>

<script>
export default {
  name: 'Products',
  data () {
    return {
      toast: {},
      toastCount: 0,
      dismissSecs: 2,
      dismissCountDown: 0,
      showDismissibleAlert: false,
      image: null,
      description: '',
      type: '',
      price: '',
      name: '',
      count: '',
      title: '',
      images: [],
      options: [
        { text: '請選擇類別', value: null },
        { text: '濾水器', value: '濾水器' },
        { text: '濾心', value: '濾心' }
      ]
    }
  },
  computed: {
    descState () {
      if (this.description.length === 0) {
        return null
      } else if (this.description.length > 200) {
        return false
      } else {
        return true
      }
    },
    typeState () {
      if (this.type.length === 0) {
        return null
      } else if (this.type.length > 10) {
        return false
      } else {
        return true
      }
    },
    priceState () {
      if (this.price.length === 0) {
        return null
      } else if (this.price.length > 10) {
        return false
      } else {
        return true
      }
    },
    nameState () {
      if (this.name.length === 0) {
        return null
      } else if (this.name.length > 10) {
        return false
      } else {
        return true
      }
    },
    countState () {
      if (this.count.length === 0) {
        return null
      } else if (this.count.length > 2) {
        return false
      } else {
        return true
      }
    },
    user () {
      return this.$store.state.user
    },
    titleState () {
      if (this.title.length === 0) {
        return null
      } else if (this.title.length > 20) {
        return false
      } else {
        return true
      }
    },
    cart () {
      return this.$store.state.images
    }
  },
  methods: {
    addCart (image) {
      // 呼叫 mutations
      this.$store.commit('addCart', image)
      // this.dismissCountDown = this.dismissSecs
      // this.$swal('☑ 已加入購物車', image.name + ' x ' + 1)
      this.$bvToast.show('my-toast')
      this.toast = image
    },
    onSubmit () {
      if (this.image.size > 1024 * 1024) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: '圖片太大'
        })
      } else if (!this.image.type.includes('image')) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: '檔案格式錯誤'
        })
      } else {
        const fd = new FormData()
        fd.append('image', this.image)
        fd.append('description', this.description)
        fd.append('type', this.type)
        fd.append('price', this.price)
        fd.append('name', this.name)
        fd.append('count', this.count)
        this.axios.post(process.env.VUE_APP_URL + '/albums/', fd)
          .then(res => {
            if (res.data.success) {
              // 將新增的圖片塞進相簿陣列
              res.data.result.src = process.env.VUE_APP_URL + '/albums/file/' + res.data.result.file
              res.data.result.title = res.data.result.description
              res.data.result.edit = false
              res.data.result.model = res.data.result.description
              res.data.result.title2 = res.data.result.type
              res.data.result.edit = false
              res.data.result.model2 = res.data.result.type
              res.data.result.title3 = res.data.result.price
              res.data.result.edit = false
              res.data.result.model3 = res.data.result.price
              res.data.result.title4 = res.data.result.name
              res.data.result.edit = false
              res.data.result.model4 = res.data.result.name
              res.data.result.title5 = res.data.result.count
              res.data.result.edit = false
              res.data.result.model5 = res.data.result.count
              delete res.data.result.file
              delete res.data.result.description
              delete res.data.result.type
              delete res.data.result.price
              delete res.data.result.name
              delete res.data.result.count
              this.images.push(res.data.result)
              // 送出後清空表單
              this.image = null
              this.description = ''
              this.type = ''
              this.price = ''
              this.count = ''
              this.name = ''
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
    },
    cancel (image) {
      image.edit = false
      image.model = image.title
      image.model2 = image.title2
      image.model3 = image.title3
      image.model4 = image.title4
      image.model5 = image.title5
    },
    save (image) {
      this.axios.patch(process.env.VUE_APP_URL + '/albums/' + image._id, { description: image.model })
        .then(res => {
          if (res.data.success) {
            image.edit = false
            image.title = image.model
            image.type = image.model2
            image.price = image.model3
            image.name = image.model4
            image.count = image.model5
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
    edit (image) {
      image.edit = true
      image.model = image.title
      image.model2 = image.title2
      image.model3 = image.title3
      image.model4 = image.title4
      image.model5 = image.title5
    },
    del (image, idx) {
      this.axios.delete(process.env.VUE_APP_URL + '/albums/' + image._id)
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
        .catch(err => {
          this.$swal({
            icon: 'error',
            title: '錯誤',
            text: err.response.data.message
          })
        })
    },
    godetail (id) {
      this.$router.push(`/productcontent/${id}`)
    },
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
    }
  },
  mounted () {
    this.axios.get(process.env.VUE_APP_URL + '/albums/user/')
      .then(res => {
        if (res.data.success) {
          this.images = res.data.result.map(image => {
            image.src = process.env.VUE_APP_URL + '/albums/file/' + image.file
            image.edit = false
            image.cartcount = 1
            delete image.file
            return image
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
