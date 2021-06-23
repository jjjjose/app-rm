<template>
  <q-page class="q-mt-lg">
    <q-input outlined v-model="search" label="Buscar" />
    <filtro />
    <div class="row q-col-gutter-xl">
      <card />
      <card />
      <card />
      <card />
    </div>
  </q-page>
</template>

<script>
import Filtro from '@/components/Filtro'
import Card from '@/components/Card.vue'
export default {
  name: 'Index',
  data: () => ({
    search: null
  }),
  components: {
    Filtro,
    Card
  }
}

Card
</script>

<style></style>
