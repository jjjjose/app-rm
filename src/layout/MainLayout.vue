<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="q-px-xl">
        <q-toolbar-title class="title" @click="inicio">
          Rick and Morty
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container class="q-pa-xl">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
  methods: {
    inicio() {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
body,
html {
  min-height: 100%;
}
.title {
  cursor: pointer;
}
#main {
  width: 100%;
  min-height: 80%;
  background: #ddd;
  .mid {
    width: 100%;
    background: #fff;
    @media (min-width: 599px) {
      width: 1023px;
    }
  }
}
</style>
