<template lang="pug">
  #order
    h1.text-center 訂單資訊
      b-container(style='font-size: 16pt')
        b-row
          b-col
            b-table-simple
              b-thead
                b-tr
                  b-th 姓名
                  b-th 商品圖
                  b-th 書名
                  b-th 數量
                  b-th 總價
              b-tbody(v-for="(item,index) in items" :key="index")
                b-tr(v-for="(cart,idx) in item.cart" :key="idx")
                  b-th(:rowspan="item.cart.length" v-if="(idx === 0)").align-middle {{ item.id }}
                  b-th
                    b-img(:src="cart.name" :style="{maxWidth:'50px'}")
                  b-th {{ cart.title }}
                  b-th {{ cart.count }}
                  b-th(:rowspan="item.cart.length" v-if="(idx === 0)").align-middle {{ item.totalprice }}
</template>

<script>
export default {
  data () {
    return {
      items: []
    }
  },
  mounted () {
    this.axios.get(process.env.VUE_APP_APIURL + '/order')
      .then(response => {
        console.log(response.data.result)
        this.items = response.data.result
      })
  }
}
</script>
