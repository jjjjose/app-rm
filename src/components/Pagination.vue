<template>
  <div class="q-pa-lg flex flex-center">
    <q-pagination
      v-model="current"
      color="purple"
      :max="Number(pages)"
      :max-pages="7"
      boundary-numbers
      @input="paginando"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'pagination',
  //   actualizando ruta
  //   beforeRouteUpdate(to, from, next) {
  //     this.current = to.params.id
  //     next()
  //   },
  data: () => ({
    current: 1,
    totalPages: null
  }),
  methods: {
    ...mapActions(['bringData']),
    //   recibiendo el click para solicitar la nueva página
    paginando(e) {
      this.bringData(e)
      this.$router.push({ path: `/page/${e}` })
    }
  },
  computed: {
    //   leyendo el total de pagina segun la api
    ...mapState(['pages'])
  }
}
</script>

<style></style>
