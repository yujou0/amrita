<template lang="pug">
  #app
    #homeanimation(v-if="isShow")
      .containerHomeAnimation(onclick)
        .top1
        //- .bottom1
        .center1
          b-img.logoimg(src="../public/img/homepagepic2.png" width="500px" )
          b-img.logoimg(src="../public/img/water-filter (1)_animated (1).svg" width="150px" )
          font-awesome-icon.my-3.toHome.text-secondary.btn-size(:icon="['fas', 'arrow-alt-circle-right']" @click="toggleWelcome")
    #appMain(v-else)
      b-navbar.shadow.mb-1(v-if="user.id.length === 0 " toggleable='lg')
        b-container
          b-navbar-brand(to='/')
            img.logo(src='../public/img/logo.png')
            //- img.logo2(src='../public/img/logo2.png')
            span.logotitle &nbsp;&nbsp;艾力特淨水
          b-navbar-toggle(target='nav-collapse' )
            span.navbar-toggler-icon
        b-collapse#nav-collapse(is-nav)
          b-navbar-nav.ml-auto.font-weight-bold
            b-nav-item(@click="loading" v-if="user.id.length === 0 | user.id.length> 0" to='/about') 品牌故事
            b-nav-item(@click="loading" v-if="user.id.length === 0 | user.id.length> 0" to='/products') 淨水商品
            b-nav-item(@click="loading" v-if="user.id.length === 0 | user.id.length> 0" to='/contact') 聯絡我們
            b-nav-item(@click="loading" v-if="user.id.length === 0 | user.id.length> 0" to='/cart')
              font-awesome-icon(:icon="['fas', 'shopping-cart']")
              span.text-info {{ images.length }}
            b-nav-item(v-if="user.id.length === 0" to='/login')
              font-awesome-icon(:icon="['fas', 'user-cog']")
      b-navbar.shadow.mb-1.bg-dark(v-if="user.id.length > 0" toggleable='lg' type='dark')
        b-container
          b-navbar-brand(to='/')
            img.logo(src='../public/img/logo.png')
            span.logotitle &nbsp;&nbsp;艾力特淨水後台管理
          b-navbar-toggle(target='nav-collapse' )
            span.navbar-toggler-icon
        b-collapse#nav-collapse(is-nav)
          b-navbar-nav.ml-auto
            b-nav-item(v-if="user.id.length > 0" to='/checkoutlist') 銷售紀錄
            b-nav-item(v-if="user.id.length > 0" to='/upload') 商品管理
            b-nav-item(v-if="user.id.length > 0" ) 管理員{{ user.name }}
            b-dropdown#dropdown-1(right='')
              b-dropdown-item(v-if="user.id.length > 0" @click="logout") 登出
            b-nav-item(v-if="user.id.length === 0" to='/login')
              font-awesome-icon(:icon="['fas', 'user-cog']")
      b-img.loadingimg.position-absolute(src="../public/img/water-filter (1)_animated (5).svg" width="100px" v-if="status.fileUploading",label='Loading...' )
      transition.position-relative(name='slide-fade')
        router-view
</template>
<style lang="scss">
.loadingimg{
  left: 50%;
  top: 50%;
  z-index: 1;
}

.btn-size{
  font-size: 3rem;
}
#homeanimation{
  position: relative;
  width: 100vw;
  height: 100vh;
  background: #fff;
  z-index: 101;

  .containerHomeAnimation{
    position:absolute;
    width:100%;
    height:100%;
    overflow:hidden;

    &:hover,&:active{
      .top1, .bottom1{
        &:before, &:after{
          margin-left: 190px;
          transform-origin: -185px 55%;
          transition-delay:0s;
        }
      }

      .center1{
        opacity:1;
        transition-delay:0.2s;
      }
    }
  }

  .top1, .bottom1{
    &:before, &:after{
      content:'';
      display:block;
      position:absolute;
      width:200vmax;
      height:200vmax;
      top:40%;left:45%;
      margin-top:-100vmax;
      transform-origin: 0 50%;
      transition:all 0.5s cubic-bezier(0.445, 0.05, 0, 1);
      z-index:10;
      opacity:0.65;
      transition-delay:0.2s;
    }
  }

  .top1{
    &:before{border-radius:50%;transform:rotate(45deg);background:#bbd8e9;}
    &:after{border-radius:50%;transform:rotate(135deg);background:#92ccf3;}
  }
  .bottom1{
    &:before{border-radius:50%;transform:rotate(-45deg);background:#8d8d8d;}
    &:after{border-radius:50%;transform:rotate(-135deg);background:#000000;}
  }

  .center1{
    position:absolute;
    width:400px;
    height:400px;
    top:50%;left:50%;
    margin-left:-200px;
    margin-top:-200px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding:30px;
    opacity:0;
    transition:all 0.5s cubic-bezier(0.445, 0.05, 0, 1);
    transition-delay:0s;
    color:#333;

    .toHome{
      cursor: pointer;
    }
  }
}
.slide-fade{
 /* position: absolute;left:0;right: 0; */
   width: 100px;
  height: 100px;
  // background-color: red;
}
.slide-fade-enter-active {
 transition: all 3s ease;
}
.slide-fade-leave-active {
 transition: all .1s cubic-bezier(2.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
{
 left:0;right: 0;
 transform: translateX(50px);
 opacity: 0;
}
.logo {
  height: 50px;
  width: 50px;
  vertical-align: middle;
  display: inline-block;
}
// .logo2 {
//   height: 50px;
//   width: 70px;
//   vertical-align: middle;
//   display: inline-block;
// }
.logotitle{
  font-weight: bolder;
  // font-family: '新細明體';
  font-size: 1.5rem;
}
.navbar-toggler-icon{
  background-image:url('https://www.freeiconspng.com/uploads/menu-icon-5.png');
}
</style>
<script>
export default {
  name: 'App',
  computed: {
    user () {
      return this.$store.state.user
    },
    images () {
      // 直接取 vuex 的 items
      // return this.$store.state.items
      // 呼叫 vuex 的 getters
      return this.$store.getters.images
    }
  },
  data () {
    return {
      status: {
        fileUploading: false
      },
      // screenWidth: document.body.clientWidth,
      isShow: true
    }
  },
  methods: {
    toggleWelcome () {
      this.isShow = !this.isShow
    },
    loading () {
      this.status.fileUploading = true
      setTimeout(() => {
        this.status.fileUploading = false
      }, 1800)
    },
    logout () {
      this.axios.delete(process.env.VUE_APP_URL + '/users/logout')
        .then(res => {
          // 如果登出成功
          if (res.data.success) {
            this.$swal({
              icon: 'success',
              title: '成功',
              text: '登出成功'
            })

            // 清除 vuex
            this.$store.commit('logout')

            // 導回首頁
            if (this.$route.path !== '/') {
              this.$router.push('/')
            }
          } else {
            this.$swal({
              icon: 'error',
              title: '錯誤',
              text: res.data.message
            })
          }
        })
        .catch(error => {
          // 如果回來的狀態碼不是 200，直接 alert 錯誤訊息
          this.$swal({
            icon: 'error',
            title: '錯誤',
            text: error.response.data.message
          })
        })
    },
    heartbeat () {
      this.axios.get(process.env.VUE_APP_URL + '/users/heartbeat')
        .then(res => {
          // 如果 vuex 是登入中
          if (this.user.id.length > 0) {
            // 但是後端沒登入
            if (!res.data) {
              this.$swal({
                icon: 'error',
                title: '錯誤',
                text: '登入時效已過'
              })
              // 登出
              this.$store.commit('logout')
              // 導回首頁
              if (this.$route.path !== '/') {
                this.$router.push('/')
              }
            }
          }
        })
        .catch(() => {
          this.$swal({
            icon: 'error',
            title: '錯誤',
            text: '發生錯誤'
          })
          // 登出
          this.$store.commit('logout')
          // 導回首頁
          if (this.$route.path !== '/') {
            this.$router.push('/')
          }
        })
    }
  },
  mounted () {
    this.heartbeat()
    setInterval(() => {
      this.heartbeat()
    }, 5000)
  }
}
</script>
