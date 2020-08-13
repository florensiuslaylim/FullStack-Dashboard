<template>
  <q-page>
    <div id="login_card" class="q-pa-md">

      <h6 class="text-center text-uppercase text-white" style="margin:0">Login</h6>

      <login-form
        :username.sync="formLogin.username"
        :password.sync="formLogin.password"
        @login-user="loginUser"
        :signup.sync="signup"
        :loading="loadingLogin" />

      <q-dialog v-model="signup" persistent>
        <register-form
          :username.sync="formRegister.username"
          :password.sync="formRegister.password"
          :confirmPassword.sync="formRegister.confirmPassword"
          :signup.sync="signup"
          :isMatch="isMatch"
          :accept.sync="accept"
          :errorAccept="errorAccept"
          @reset="resetRegisterFields"
          @register-user="registerUser"
          :loading="loadingRegister" />
      </q-dialog>

    </div>
  </q-page>
</template>

<script>
export default {
  components: {
    LoginForm: require('components/LoginForm/LoginFields.vue').default,
    RegisterForm: require('components/LoginForm/RegisterFields.vue').default
  },
  data () {
    return {
      formLogin: {
        username: '',
        password: ''
      },
      formRegister: {
        username: '',
        password: '',
        confirmPassword: ''
      },
      loadingLogin: false,
      loadingRegister: false,
      signup: false,
      accept: false,
      errorAccept: false
    }
  },
  computed: {
    isMatch () {
      return this.formRegister.password === this.formRegister.confirmPassword
    }
  },
  methods: {
    loginUser () {
      if (this.formLogin.username && this.formLogin.password) {
        this.loadingLogin = true
        setTimeout(() => {
          this.$store.dispatch('postLogin', this.formLogin)
            .then(response => {
              if (response) {
                this.loadingLogin = false
                this.$router.push('/')
              } else {
                this.loadingLogin = false
              }
            })
        }, 800)
      }
    },
    registerUser () {
      if (this.formRegister.username && this.formRegister.password && this.formRegister.confirmPassword) {
        if (this.formRegister.password === this.formRegister.confirmPassword) {
          if (this.accept) {
            this.errorAccept = false
            this.loadingRegister = true

            const sendForm = {
              username: this.formRegister.username,
              password: this.formRegister.password
            }

            setTimeout(() => {
              this.$store.dispatch('postRegister', sendForm)
                .then(response => {
                  if (response === 'User created successfully.') {
                    this.$q.notify({
                      message: response,
                      color: 'green-10',
                      position: 'top-right',
                      icon: 'done'
                    })
                  }
                  this.signup = false
                  this.loadingRegister = false
                })
            }, 800)
          } else {
            this.errorAccept = true
          }
        }
      }
    },
    resetRegisterFields () {
      this.formRegister = {
        username: '',
        password: '',
        confirmPassword: ''
      }
      this.accept = false
    }
  }
}
</script>

<style scoped>
  .q-page {
    display: flex;
    background: rgb(21,28,16);
    background: radial-gradient(circle, rgba(21,28,16,1) 12%, rgba(46,55,46,1) 41%, rgba(64,129,72,1) 100%);
  }

  #login_card {
    /* center horizontally vertically; */
    min-width: 45vmin;
    max-width: 100vmin;
    margin: auto;

    /* border style */
    background: rgba(255, 255, 255, .1);
    border: 1px solid white;
    border-radius: 10px;
    border-style: groove;
    box-shadow: 5px 5px #FFF;
  }
</style>
