<template>
  <q-page class="q-mt-lg">
    <q-input outlined v-model="search" label="Buscar" />
    <filtro />
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
    this.bringData(this.$route.params.id)
  },
  data: () => ({
    search: null
  }),
  components: {
    Filtro,
    Card,
    Pagination
  },
  methods: {
    ...mapActions(['bringData'])
  },
  computed: {
    ...mapState(['data'])
  }
}

Card
</script>

<style></style>
