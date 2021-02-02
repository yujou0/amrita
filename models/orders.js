import mongoose from 'mongoose'

const Schema = mongoose.Schema

const orderSchema = new Schema(
  {
    checkoutname: {
      type: String,
      minlength: [2, '訂購姓名必須2個字以上'],
      required: '訂購姓名必填'
    },
    checkoutphone: {
      type: Number,
      minlength: [10, '訂購電話必須10個字以上'],
      required: '訂購電話必填'
    },
    checkoutemail: {
      type: String,
      minlength: [5, '訂購信箱必須5個字以上'],
      required: '訂購信箱必填'
    },
    checkoutaddress: {
      type: String,
      minlength: [8, '訂購地址必須8個字以上'],
      required: '訂購地址必填'
    },
    checkoutcontent: {
      type: String,
      // required: '訂購姓名必填'
    },
    checkoutprice: {
      type: String,
      // minlength: [2, '訂購姓名必須2個字以上'],
      // required: '訂購姓名必填'
    },
    checkoutproductname: {
      // type: String,
      // minlength: [2, '訂購姓名必須2個字以上'],
      // required: '訂購姓名必填'
    },
    checkoutcartcount: {
      type: String,
      // minlength: [2, '訂購姓名必須2個字以上'],
      // required: '訂購姓名必填'
    }
  },
  {
    versionKey: false
  }
)

const orders = mongoose.model('orders', orderSchema)

export default orders
