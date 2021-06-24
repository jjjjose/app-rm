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
  created() {
    //   añadiendo el estado de la pagina actual o solicitada
    this.current = Number(this.$route.params.idpage)
  },
  //   actualizando ruta
  //   beforeRouteUpdate(to, from, next) {
  //     this.current = to.params.id
  //     next()
  //   },
  data: () => ({
    current: null,
    totalPages: null
  }),
  methods: {
    ...mapActions(['bringData']),
    //   recibiendo el click para solicitar la nueva página
    paginando(e) {
      if (this.current === Number(this.$route.params.idpage)) {
        return
      }
      this.bringData(e)
      this.$router.push(`/page/${e}`).catch(() => {})
    }
  },
  computed: {
    //   leyendo el total de pagina segun la api
    ...mapState(['pages'])
  }
}
</script>

<style></style>
