<template>
  <q-page class="q-mt-lg">
    <q-input outlined v-model="search" label="Buscar" @input="Searching" />
    <filtro />
    <div>
      <div v-if="!data" class="flex items-center justify-center text-h6">
        Sin Resultados...
      </div>
      <div class="row q-col-gutter-x-lg q-col-gutter-y-lg">
        <card
          v-for="(dat, index) in data"
          :key="index"
          :characterId="dat.id"
          :imagen="dat.image"
          :nombre="dat.name"
          :estado="dat.status"
          :origen="dat.origin.name"
        />
      </div>
      <pagination />
    </div>
  </q-page>
</template>

<script>
import Filtro from '@/components/Filtro'
import Card from '@/components/Card.vue'
import Pagination from '../components/Pagination.vue'
import { mapActions, mapState } from 'vuex'
export default {
  name: 'Index',
  created() {
    // trayendo datos de la api
    this.bringData({ page: this.$route.params.idpage })
  },
  data: () => ({
    search: null,
  }),
  components: {
    Filtro,
    Card,
    Pagination,
  },
  methods: {
    ...mapActions(['bringData']),
    Searching() {
      this.bringData({ page: 1, name: this.search })
    },
  },
  computed: {
    ...mapState(['data']),
  },
}

Card
</script>

<style></style>
