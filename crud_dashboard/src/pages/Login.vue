<template>
  <q-page>
    <div id="main-page" class="q-pa-md">

      <h6 class="text-center text-uppercase text-white" style="margin:0">Login</h6>

      <q-form class="q-mt-md">
        <div class="q-mb-md">
          <q-input outlined dark dense v-model="form.email" placeholder="Username">
            <template v-slot:prepend>
              <q-icon name="mail" />
            </template>
          </q-input>
        </div>

        <div class="q-mb-md">
          <q-input dark outlined dense v-model="form.password" placeholder="Password">
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
          <span class="text-bold text-italic cursor-pointer" @click="registerUser">Register</span>
        </p>
      </q-form>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      form: {
        email: '',
        password: ''
      },
      loading: false
    }
  },
  methods: {
    submitForm () {
      this.loading = true
      setTimeout(() => {
        console.log('Sign In')
        this.loading = false
      }, 1000)
    },
    registerUser () {
      console.log('Register User')
    }
  }
}
</script>

<style scoped>
  .q-page {
    display: flex;
    background: rgb(21,28,16);
    background: radial-gradient(circle, rgba(21,28,16,1) 1%, rgba(64,129,72,1) 45%, rgba(46,55,46,1) 77%);
  }

  #main-page {
    /* center horizontally vertically; */
    min-width: 45vmin;
    max-width: 100vmin;
    margin: auto;

    /* border style */
    background: rgba(255, 255, 255, .1);
    border: 1px solid white;
    border-radius: 10px;
    border-style: groove;
    box-shadow: 1px 1px #FFF;
  }

  .q-form #register {
    font-size: 11px;
    color: white;
  }
</style>
