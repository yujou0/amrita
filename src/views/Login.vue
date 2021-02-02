<template lang="pug">
  #reg.d-flex.align-items-center
    //- div
    //- div(style='margin-bottom: 0.5em')
    b-container.d-flex.justify-center.flex-column.loginbg.text-white.p-3
      div.d-flex.justify-content-center.flex-column.align-items-center
        //- img(:src="'https://www.wealthmanagement.com/sites/wealthmanagement.com/files/styles/article_featured_standard/public/investment-technology-data-Pinkypills-iStock-ThinkstockPhotos-522152858_0.jpg?itok=fXjx8gaP'", alt='new2', style='width:70%;height:auto;')
        br
        h1 後台登入
      br
      b-row
        b-col(cols="12")
          b-form(@submit.prevent="onSubmit" @reset="onReset")
            b-form-group#input-group-1(
              label="帳號"
              label-for="input-1"
              :state="accountState"
              description="帳號長度為 8 ~ 20 個字"
              invalid-feedback="帳號格式不符"
            )
              b-form-input#input-1(
                v-model="account"
                type="text"
                required
                placeholder="請輸入帳號..."
                :state="accountState"
              )
            b-form-group#input-group-2(
              label="密碼"
              label-for="input-2"
              :state="passwordState"
              description="密碼長度為 8 ~ 20 個字"
              invalid-feedback="密碼格式不符"
            )
              b-form-input#input-2(
                v-model="password"
                type="password"
                required
                placeholder="請輸入密碼..."
                :state="passwordState"
              )
            div.text-center
              b-btn.mx-1(variant="info" type="submit") 登入
              b-btn.mx-1(variant="dark" type="reset") 重置
</template>

<script>
export default {
  name: 'Reg',
  data () {
    return {
      account: '',
      password: ''
    }
  },
  computed: {
    accountState () {
      if (this.account.length === 0) {
        return null
      } else if (this.account.length >= 8 && this.account.length <= 20) {
        return true
      } else {
        return false
      }
    },
    passwordState () {
      if (this.password.length === 0) {
        return null
      } else if (this.password.length >= 8 && this.password.length <= 20) {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    onSubmit () {
      // 如果帳號密碼驗證通過
      if (this.accountState && this.passwordState) {
        this.axios.post(process.env.VUE_APP_API + '/users/login', this.$data)
          .then(res => {
            if (res.data.success) {
              this.$store.commit('login', res.data.result)
              this.$swal({
                icon: 'success',
                title: '登入成功'
              }).then(() => {
                // sweet alert 對話框關掉後才跳到相簿頁
                this.$router.push('/upload')
              })
            } else {
              this.$swal({
                icon: 'error',
                title: '發生錯誤',
                text: res.data.message
              })
            }
          })
          .catch(err => {
            console.log(err)
            this.$swal({
              icon: 'error',
              title: '發生錯誤',
              text: err.response.data.message
            })
          })
      }
    },
    onReset () {
      this.account = ''
      this.password = ''
    }
  }
}
</script>
<style lang="stylus">
  #reg{
    height: 100vh;
    background-image: url('https://images.pexels.com/photos/373076/pexels-photo-373076.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
  }
  .loginbg{
    background rgba(0, 0, 0, 0.5)
  }
</style>
