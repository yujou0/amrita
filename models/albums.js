import mongoose from 'mongoose'

const Schema = mongoose.Schema

const albumSchema = new Schema(
  {
    user: {
      type: String,
      required: [true, '缺少使用者欄位']
    },
    description: {
      type: String,
      maxlength: [200, '說明必須 200 字以下']
    },
    file: {
      type: String,
      required: [true, '缺少檔案名稱']
    },
    price: {
      type: Number,
      required: [true, '缺少價格']
    },
    type: {
      type: String,
      required: [true, '缺少分類']
    },
    count: {
      type: String,
      required: [false, '缺少數量']
    },
    name: {
      type: String,
      required: [false, '缺少商品名']
    }
  },
  {
    versionKey: false
  }
)

const albums = mongoose.model('albums', albumSchema)

export default albums
