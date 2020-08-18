<template>
  <q-layout view="lHh Lpr lFf" id="layout">
    <q-header elevated>
      <q-toolbar id="main__tolbar">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title id ="main__toolbar-title">
          Dashboard
        </q-toolbar-title>

         <q-tabs
          v-model="tab"
          class="text-white"
        >
          <q-tab name="mails" label="Mails" />
          <q-tab name="phone" label="Phone" />
          <q-btn flat label="Logout" no-wrap />
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      tab: 'mails'
    }
  }
}
</script>

<style scoped>
  #main__tolbar {
    background: rgb(21,28,16);
    background: radial-gradient(circle, rgba(21,28,16,1) 12%, rgba(46,55,46,1) 41%, rgba(64,129,72,1) 100%);
  }
  #main__toolbar-title {
    font-family: Bangers;
  }
</style>
