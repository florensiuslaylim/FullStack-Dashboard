<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar id="main_toolbar">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title id="main_toolbar-title">
          Dashboard
        </q-toolbar-title>

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
    }
  }
}
</script>

<style scoped>
  #main_toolbar {
    background: rgb(21,28,16);
    background: radial-gradient(circle, rgba(21,28,16,1) 12%, rgba(46,55,46,1) 41%, rgba(64,129,72,1) 100%);
  }

  #main_toolbar-title {
    font-family: 'Pacifico';
  }
</style>
