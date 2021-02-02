import Vue from 'vue'
import Vuex from 'vuex'
import Persistedstate from 'vuex-persistedstate'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    user: {
      name: '',
      id: ''
    },
    // 購物車
    images: []
  },
  mutations: {
    // state 代表上面的 state
    // data 代表傳入的資料
    addCart (state, data) {
      const idx = state.images.findIndex(image => {
        return image.name === data.name
      })
      if (idx === -1) {
        state.images.push(data)
      } else {
        state.images[idx].cartcount += data.cartcount
      }
    },
    delCart (state, index) {
      state.images.splice(index, 1)
    },
    logout (state) {
      state.user.name = ''
      state.user.id = ''
    },
    login (state, data) {
      state.user.name = data.account
      state.user.id = data._id
    },
    delItem (state, index) {
      state.images.count.splice(index, 1)
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    images (state) {
      return state.images
    }
  },
  plugins: [Persistedstate()]
})
