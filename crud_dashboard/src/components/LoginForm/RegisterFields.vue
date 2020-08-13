<template>
  <div id="register_card" class="q-pa-md">
    <div class="row items-center">
      <div class="text-h6 text-center">Register</div>

      <q-space />

      <q-btn icon="close" @click="$emit('reset')" flat round dense v-close-popup />
    </div>

    <q-form class="q-mt-md">
      <div class="q-mb-md">
        <q-input
          outlined
          dense
          :value="username"
          @input="$emit('update:username', $event)"
          placeholder="Username"
          hide-bottom-space
          lazy-rules
          :rules="[val => !!val || 'Field is required']">
          <template v-slot:prepend>
            <q-icon name="person" />
          </template>
        </q-input>
      </div>

      <div class="q-mb-md">
        <q-input
          outlined
          dense
          type="password"
          :value="password"
          @input="$emit('update:password', $event)"
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
          :value="confirmPassword"
          @input="$emit('update:confirmPassword', $event)"
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
        <q-checkbox
          :value="accept"
          @input="$emit('update:accept', $event)"
          color="teal"
          label="I accept the Terms of Use & Privacy Policy" />
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
        @click="$emit('register-user')">
        <template v-slot:loading>
          <q-spinner-oval class="on-left" />
          <small>Loading...</small>
        </template>
      </q-btn>
    </q-form>
  </div>
</template>

<script>
export default {
  props: ['username', 'password', 'confirmPassword', 'signup', 'loading', 'isMatch', 'accept', 'errorAccept']
}
</script>

<style scoped>
  .q-dialog #register_card {
    min-width: 50vmin;
    max-width: 100vmin;

    background: rgba(255, 255, 255, 1);
    border: 1px solid white;
    border-radius: 10px;
    border-style: groove;
  }
</style>
