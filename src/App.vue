<template>
  <div id="main">
    <q-layout view="lHh Lpr lFf">
      <q-header elevated class="glossy">
        <q-toolbar>
          <q-btn
            flat
            dense
            round
            @click="leftDrawerOpen = !leftDrawerOpen"
            aria-label="Menu"
            icon="menu"
          />

          <q-toolbar-title>
            Quasar App
          </q-toolbar-title>

          <div>Quasar v{{ $q.version }}</div>
        </q-toolbar>
      </q-header>
      <q-page-container> </q-page-container>
    </q-layout>
  </div>
</template>

<script>
export default {
  name: 'LayoutDefault',

  data() {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>

<style lang="scss" scoped>
#main {
  width: 100%;
}
</style>
