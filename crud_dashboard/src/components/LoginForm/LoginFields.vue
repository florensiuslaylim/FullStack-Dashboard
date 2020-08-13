<template>
  <q-form class="q-mt-md">
    <div class="q-mb-md">
      <q-input
        :value="username"
        @input="$emit('update:username', $event)"
        outlined
        dark
        dense
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
        :value="password"
        @input="$emit('update:password', $event)"
        dark
        outlined
        type="password"
        dense
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
      @click="$emit('login-user')"
    >
      <template v-slot:loading>
        <q-spinner-oval class="on-left" />
        <small>Loading...</small>
      </template>
    </q-btn>

    <p id="register" class="text-center text-white">Don't register it yet?
      <span class="text-bold text-italic cursor-pointer" @click="$emit('update:signup', true)">Sign Up</span>
    </p>
  </q-form>
</template>

<script>
export default {
  props: ['username', 'password', 'loading', 'signup']
}
</script>

<style scoped>
  .q-form #register {
    font-size: 11px;
    color: white;
  }
</style>
