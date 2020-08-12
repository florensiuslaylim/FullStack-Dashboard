<template>
  <q-page>
    <div id="login_card" class="q-pa-md">

      <h6 class="text-center text-uppercase text-white" style="margin:0">Login</h6>

      <q-form class="q-mt-md">
        <div class="q-mb-md">
          <q-input
            outlined
            type="email"
            dark
            dense
            v-model="formLogin.email"
            placeholder="Email"
            hide-bottom-space
            lazy-rules
            :rules="[val => !!val || 'Field is required']">
            <template v-slot:prepend>
              <q-icon name="mail" />
            </template>
          </q-input>
        </div>

        <div class="q-mb-md">
          <q-input
            dark
            outlined
            type="password"
            dense
            v-model="formLogin.password"
            placeholder="Password"
            hide-bottom-space
            lazy-rules
            :rules="[val => !!val || 'Field is required']">
            <template v-slot:prepend>
              <q-icon name="lock" />
            </template>
          </q-input>
        </div>

        <q-btn
          class="full-width q-my-md"
          type="submit"
          color="grey-10"
          label="Sign In"
          outlined
          rounded
          :loading="loading"
          @click="submitForm"
        >
          <template v-slot:loading>
            <q-spinner-oval class="on-left" />
            <small>Loading...</small>
          </template>
        </q-btn>

        <p id="register" class="text-center">Don't register it yet?
          <span class="text-bold text-italic cursor-pointer" @click="signup = true">Sign Up</span>
        </p>
      </q-form>

      <q-dialog v-model="signup" persistent>
        <div id="register_card" class="q-pa-md">
          <div class="row items-center">
            <div class="text-h6 text-center">Register</div>
            <q-space />
            <q-btn icon="close" @click="resetRegisterFields" flat round dense v-close-popup />
          </div>

          <q-form class="q-mt-md">
            <div class="q-mb-md">
              <q-input
                outlined
                dense
                type="email"
                v-model="formRegister.email"
                placeholder="Email"
                hide-bottom-space
                lazy-rules
                :rules="[val => !!val || 'Field is required']">
                <template v-slot:prepend>
                  <q-icon name="mail" />
                </template>
              </q-input>
            </div>

            <div class="q-mb-md">
              <q-input
                outlined
                dense
                type="password"
                v-model="formRegister.password"
                placeholder="Password"
                hide-bottom-space
                lazy-rules
                :rules="[val => !!val || 'Field is required']">
                <template v-slot:prepend>
                  <q-icon name="lock" />
                </template>
              </q-input>
            </div>

            <div class="q-mb-md">
              <q-input
                outlined
                dense
                type="password"
                v-model="formRegister.confirmPassword"
                placeholder="Confirm Password"
                hide-bottom-space
                lazy-rules
                :rules="[val => !!val || 'Field is required']"
                error-message="Password is not match"
                :error="!isMatch">
                <template v-slot:prepend>
                  <q-icon name="lock" />
                </template>
              </q-input>
            </div>

            <div class="q-gutter-sm">
              <q-checkbox v-model="accept" color="teal" label="I accept the Terms of Use & Privacy Policy" />
            </div>

            <p class="text-red" style="font-size:12px" v-if="errorAccept">You do not accept the Terms of Use & Privacy Policy</p>

            <q-btn
              class="full-width q-my-md"
              type="submit"
              color="grey-10"
              label="Sign Up"
              outlined
              rounded
              :loading="loading"
              @click="registerUser"
            >
              <template v-slot:loading>
                <q-spinner-oval class="on-left" />
                <small>Loading...</small>
              </template>
            </q-btn>
          </q-form>
        </div>
      </q-dialog>
    </div>
  </q-page>
</template>

<script>
// import { mapActions } from vuex

export default {
  data () {
    return {
      formLogin: {
        email: '',
        password: ''
      },
      formRegister: {
        email: '',
        password: '',
        confirmPassword: ''
      },
      loading: false,
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
    // ...mapActions['postLogin'],
    submitForm () {
      this.loading = true
      setTimeout(() => {
        console.log('Sign In')
        this.loading = false
      }, 1000)
    },
    registerUser () {
      if (this.formRegister.email && this.formRegister.password && this.formRegister.confirmPassword) {
        if (this.formRegister.password === this.formRegister.confirmPassword) {
          if (this.accept) {
            this.errorAccept = false

            const sendForm = {
              email: this.formRegister.email,
              password: this.formRegister.password
            }

            this.$store.dispatch('postLogin', sendForm)
          } else {
            this.errorAccept = true
          }
        }
      }
    },
    resetRegisterFields () {
      this.formRegister = {
        email: '',
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

  .q-form #register {
    font-size: 11px;
    color: white;
  }

  .q-dialog #register_card {
    min-width: 50vmin;
    max-width: 100vmin;

    background: rgba(255, 255, 255, 1);
    border: 1px solid white;
    border-radius: 10px;
    border-style: groove;
  }
</style>
