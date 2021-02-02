<template lang="pug">
  #upload
    loading(:active.sync='isLoading')
    div
      h1.text-center.my-5  商品管理
    b-card(no-body='')
      b-tabs(pills='', card='', vertical='')
        b-tab(title='商品上架', active='')
          b-card-text
          h3.bg-dark.text-white 商品上架
          b-row.bg-white.p-2
            b-col(cols="12")
              b-form(@submit.prevent="onSubmit")
                b-form-group(
                  label="商品名"
                  label-for=""
                  :state="nameState"
                  description="最多20個字"
                  invalid-feedback="格式不符"
                )
                b-form-input(
                    v-model="name"
                    type="text"
                    placeholder="請輸入商品名..."
                    :state="nameState"
                  )
                b-form-group(
                  label="數量"
                  label-for=""
                  :state="countState"
                  description="最多2位數"
                  invalid-feedback="格式不符"
                )
                b-form-input(
                    v-model="count"
                    type="text"
                    placeholder="請輸入數量..."
                    :state="countState"
                  )
                b-form-group(
                  label="圖片說明"
                  label-for=""
                  :state="descState"
                  description="最多200個字"
                  invalid-feedback="格式不符"
                )
                  b-form-textarea(
                    v-model="description"
                    type="text"
                    placeholder="請輸入相片說明..."
                    :state="descState"
                  )
                b-form-group(
                  label-for="type"
                  :state="typeState"
                  description="最多10個字"
                  invalid-feedback="格式不符"
                  label="商品類別"
                )
                  b-form-select(
                    id="type"
                    v-model="type"
                    type="text"
                    :options="options"
                    :state="typeState"
                  )
                b-form-group(
                  label="價格"
                  label-for=""
                  :state="priceState"
                  description="最多10個字"
                  invalid-feedback="格式不符"
                )
                  b-form-input(
                    v-model="price"
                    type="text"
                    placeholder="請輸入價格..."
                    :state="priceState"
                  )
                img-inputer.mx-auto(
                  v-model="image"
                  placeholder="請選擇圖片"
                  bottom-text="點擊或拖曳更換圖片"
                  :max-size="1024"
                  exceedSizeText="檔案大小不能超過"
                  accept="image/*"
                )
                br
                br
                b-btn(type="submit" variant="info") 送出
                  b-spinner(v-if="status.fileUploading",label='Loading...')
        b-tab(title='商品上架列表')
          b-card-text
          h3.bg-dark.text-white 商品上架列表
          b-row.bg-white.p-2
          b-tabs(pills='', card='',content-class='mt-3', justified='')
            b-tab.btab1(title='全部商品', active='')
              b-col(cols="12" md="60" lg="60" v-for="(image, idx) in images" :key="image._id")
                .d-flex
                  img(:src="image.src" v-pswp="image" :style="{maxWidth:'200px',maxHeight:'200px'}")
                  .btn
                    b-btn(v-if="image.edit" variant="info" @click="cancel(image)") 取消
                    b-btn(v-if="image.edit" variant="secondary" @click="save(image)") 保存
                    b-btn(v-if="!image.edit" variant="info" @click="edit(image)") 編輯
                    b-btn(v-if="!image.edit" variant="secondary" @click="del(image, idx)") 刪除
                  br
                  b-form-textarea(v-if="image.edit" v-model="image.modelname")
                  b-col(v-else style="white-space: pre-wrap") {{ image.titlename }}
                  b-form-textarea(v-if="image.edit" v-model="image.modeltype")
                  b-col(v-else style="white-space: pre-wrap") {{'分類:'+ image.titletype }}
                  b-form-textarea(v-if="image.edit" v-model="image.modelprice")
                  b-col(v-else style="white-space: pre-wrap") {{'$'+ image.titleprice }}
                  b-form-textarea(v-if="image.edit" v-model="image.modelcount")
                  b-col(v-else style="white-space: pre-wrap") {{'商品數量'+ image.titlecount }}
                  b-form-textarea(v-if="image.edit" v-model="image.model" )
                  b-col(v-else style="white-space: pre-wrap,overflow:scroll" :style="{maxHeight:'250px',overflow:'scroll'}") {{'描述:'+ image.title }}
            b-tab.btab1(title='濾水器', active='')
              b-col(cols="12" md="60" lg="60" v-for="(image, idx) in images" v-if="image.titletype === '濾水器'" :key="image._id")
                .d-flex
                  img(:src="image.src" v-pswp="image" :style="{maxWidth:'200px',maxHeight:'200px'}")
                  .btn
                    b-btn(v-if="image.edit" variant="info" @click="cancel(image)") 取消
                    b-btn(v-if="image.edit" variant="secondary" @click="save(image)") 保存
                    b-btn(v-if="!image.edit" variant="info" @click="edit(image)") 編輯
                    b-btn(v-if="!image.edit" variant="secondary" @click="del(image, idx)") 刪除
                  br
                  b-form-textarea(v-if="image.edit" v-model="image.modelname")
                  b-col(v-else style="white-space: pre-wrap") {{ image.titlename }}
                  b-form-textarea(v-if="image.edit" v-model="image.modeltype")
                  b-col(v-else style="white-space: pre-wrap") {{'分類:'+ image.titletype }}
                  b-form-textarea(v-if="image.edit" v-model="image.modelprice")
                  b-col(v-else style="white-space: pre-wrap") {{'$'+ image.titleprice }}
                  b-form-textarea(v-if="image.edit" v-model="image.modelcount")
                  b-col(v-else style="white-space: pre-wrap") {{'商品數量'+ image.titlecount }}
                  b-form-textarea(v-if="image.edit" v-model="image.model" )
                  b-col(v-else style="white-space: pre-wrap,overflow:scroll" :style="{maxHeight:'250px',overflow:'scroll'}") {{'描述:'+ image.title }}
            b-tab.btab1(title='濾心', active='')
              b-col(cols="12" md="60" lg="60" v-for="(image, idx) in images" v-if="image.titletype === '濾心'" :key="image._id")
                .d-flex
                  img(:src="image.src" v-pswp="image" :style="{maxWidth:'200px',maxHeight:'200px'}")
                  .btn
                    b-btn(v-if="image.edit" variant="info" @click="cancel(image)") 取消
                    b-btn(v-if="image.edit" variant="secondary" @click="save(image)") 保存
                    b-btn(v-if="!image.edit" variant="info" @click="edit(image)") 編輯
                    b-btn(v-if="!image.edit" variant="secondary" @click="del(image, idx)") 刪除
                  br
                  b-form-textarea(v-if="image.edit" v-model="image.modelname")
                  b-col(v-else style="white-space: pre-wrap") {{ image.titlename }}
                  b-form-textarea(v-if="image.edit" v-model="image.modeltype")
                  b-col(v-else style="white-space: pre-wrap") {{'分類:'+ image.titletype }}
                  b-form-textarea(v-if="image.edit" v-model="image.modelprice")
                  b-col(v-else style="white-space: pre-wrap") {{'$'+ image.titleprice }}
                  b-form-textarea(v-if="image.edit" v-model="image.modelcount")
                  b-col(v-else style="white-space: pre-wrap") {{'商品數量'+ image.titlecount }}
                  b-form-textarea(v-if="image.edit" v-model="image.model" )
                  b-col(v-else style="white-space: pre-wrap,overflow:scroll" :style="{maxHeight:'250px',overflow:'scroll'}") {{'描述:'+ image.title }}
</template>

<script>
export default {
  name: 'Upload',
  data () {
    return {
      status: {
        fileUploading: false
      },
      isLoading: false,
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
      } else if (this.name.length > 30) {
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
    }
  },
  methods: {
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
        this.isLoading = true
        this.status.fileUploading = true
        this.axios.post(process.env.VUE_APP_URL + '/albums/', fd)
          .then(res => {
            if (res.data.success) {
              // 將新增的圖片塞進相簿陣列
              this.isLoading = false
              this.status.fileUploading = false
              res.data.result.src = process.env.VUE_APP_URL + '/albums/file/' + res.data.result.file
              res.data.result.title = res.data.result.description
              res.data.result.edit = false
              res.data.result.model = res.data.result.description
              res.data.result.titletype = res.data.result.type
              res.data.result.edit = false
              res.data.result.modeltype = res.data.result.type
              res.data.result.titleprice = res.data.result.price
              res.data.result.edit = false
              res.data.result.modelprice = res.data.result.price
              res.data.result.titlename = res.data.result.name
              res.data.result.edit = false
              res.data.result.modelname = res.data.result.name
              res.data.result.titlecount = res.data.result.count
              res.data.result.edit = false
              res.data.result.modelcount = res.data.result.count
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
      image.modeltype = image.titletype
      image.modelprice = image.titleprice
      image.modelname = image.titlename
      image.modelcount = image.titlecount
    },
    save (image) {
      this.axios.patch(process.env.VUE_APP_URL + '/albums/' + image._id, { description: image.model, type: image.modeltype, count: image.modelcount, price: image.modelprice, name: image.modelname })
        .then(res => {
          if (res.data.success) {
            image.edit = false
            image.title = image.model
            image.titletype = image.modeltype
            image.titleprice = image.modelprice
            image.titlename = image.modelname
            image.titlecount = image.modelcount
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
      image.modeltype = image.titletype
      image.modelprice = image.titleprice
      image.modelname = image.titlename
      image.modelcount = image.titlecount
    },
    del (image, idx) {
      this.$dialog
        .confirm('確定刪除該筆訂單?? (☉д⊙)')
        .then(res => {
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
  mounted () {
    this.axios.get(process.env.VUE_APP_URL + '/albums/user/')
      .then(res => {
        if (res.data.success) {
          this.images = res.data.result.map(image => {
            image.src = process.env.VUE_APP_URL + '/albums/file/' + image.file
            image.title = image.description
            image.edit = false
            image.model = image.description
            image.titletype = image.type
            image.edit = false
            image.modeltype = image.type
            image.titleprice = image.price
            image.edit = false
            image.modelprice = image.price
            image.titlename = image.name
            image.edit = false
            image.modelname = image.name
            image.titlecount = image.count
            image.edit = false
            image.modelcount = image.count
            delete image.file
            delete image.description
            delete image.type
            delete image.price
            delete image.name
            delete image.count
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
  },
  addCart (item) {
  // 呼叫 mutations
    this.$store.commit('addCart', item)
  }
}
</script>
<style>
</style>
