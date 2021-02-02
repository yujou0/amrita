import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import ImgInputer from 'vue-img-inputer'
import 'vue-img-inputer/dist/index.css'
import Photoswipe from 'vue-pswipe'
import VueGtag from 'vue-gtag'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import AOS from 'aos'
import 'aos/dist/aos.css'
import VueGoodWizard from 'vue-good-wizard'
import Visual from 'vue-visual'
import 'vue-visual/index.css'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import VuejsDialog from 'vuejs-dialog'
import VueParticles from 'vue-particles'
import VueFormWizard from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'

import App from './App.vue'
import router from './router'
import store from './store'
import './styles/swiper-bundle.css'
import animated from 'animate.css'
import 'vuejs-dialog/dist/vuejs-dialog.min.css'
/* FontAwesome */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserCog, faShoppingCart, faShoppingBag, faBackward, faAngleDoubleDown, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import { faLine, faFacebookSquare, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

library.add(faAngleDoubleDown, faUserCog, faBackward, faShoppingCart, faShoppingBag, faTrashAlt, faLine, faFacebookSquare, faInstagram, faYoutube, faArrowAltCircleRight)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('visual', Visual)
Vue.component('Loading', Loading)

axios.defaults.withCredentials = true

Vue.config.productionTip = false
AOS.init()

Vue.component('ImgInputer', ImgInputer)

Vue.use(VueFormWizard)
Vue.use(VueParticles)
Vue.use(VuejsDialog)
Vue.use(animated)
Vue.use(VueGoodWizard)
Vue.use(VueAwesomeSwiper)
Vue.use(VueAxios, axios)
Vue.use(VueSweetalert2)
Vue.use(Photoswipe)
Vue.use(VueGtag, {
  config: {
    id: process.env.VUE_APP_GA
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
