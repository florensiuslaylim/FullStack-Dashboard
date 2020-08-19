<template>
  <q-layout view="hHh Lpr lff">
    <q-header elevated>
      <q-toolbar id="main__toolbar">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="sidebar = !sidebar"
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

    <q-drawer
      v-model="sidebar"
      show-if-above
      :width="200"
      :breakpoint="500"
      bordered
      content-class="bg-grey-3"
    >
      <q-scroll-area class="fit bg-grey-9 text-white">
        <q-list v-for="(menuItem, index) in menuList" :key="index">

          <q-item clickable :active="menuItem.label === 'Outbox'" v-ripple>
            <q-item-section avatar>
              <q-icon :name="menuItem.icon" />
            </q-item-section>
            <q-item-section>
              {{ menuItem.label }}
            </q-item-section>
          </q-item>

          <q-separator v-if="menuItem.separator" dark />

        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
const menuList = [
  {
    icon: 'inbox',
    label: 'Inbox',
    separator: true
  },
  {
    icon: 'send',
    label: 'Outbox',
    separator: false
  },
  {
    icon: 'delete',
    label: 'Trash',
    separator: false
  },
  {
    icon: 'error',
    label: 'Spam',
    separator: true
  },
  {
    icon: 'settings',
    label: 'Settings',
    separator: false
  },
  {
    icon: 'feedback',
    label: 'Send Feedback',
    separator: false
  },
  {
    icon: 'help',
    iconColor: 'primary',
    label: 'Help',
    separator: false
  }
]

export default {
  data () {
    return {
      tab: 'mails',
      sidebar: false,
      menuList
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
  #main__toolbar {
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
