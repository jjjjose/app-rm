<template>
  <q-page class="q-mt-lg">
    <q-input outlined v-model="search" label="Buscar" />
    <filtro />
    <div class="row q-col-gutter-x-lg q-col-gutter-y-lg">
      <card />
      <card />
      <card />
      <card />
    </div>
    <pagination />
  </q-page>
</template>

<script>
import Filtro from '@/components/Filtro'
import Card from '@/components/Card.vue'
import Pagination from '../components/Pagination.vue'
export default {
  name: 'Index',
  data: () => ({
    search: null
  }),
  components: {
    Filtro,
    Card,
    Pagination
  }
}

Card
</script>

<style></style>
