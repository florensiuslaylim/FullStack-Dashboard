<template>
  <q-layout view="lHh Lpr lFf" id="layout">
    <q-header elevated id="main__header">
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
          shrink
          stretch
        >
          <q-btn flat stretch label="Logout" @click="logout" />
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
  },
  methods: {
    logout () {
      this.$store.dispatch('onLogout')
        .then(response => {
          if (response) {
            this.$q.notify({
              message: response.message,
              color: 'green-10',
              position: 'top-right',
              icon: 'done'
            })
            this.$router.replace('/login')
          }
        })
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

  #main__header {
    box-shadow: 1px 1px white;
  }
</style>
