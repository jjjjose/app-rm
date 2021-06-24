<template>
  <div class="q-pa-lg flex flex-center">
    <q-pagination
      v-if="pages != 1"
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
  // actualizando ruta
  beforeRouteUpdate(to, from, next) {
    this.current = to.params.id
    next()
  },
  data: () => ({
    current: null
  }),
  methods: {
    ...mapActions(['bringData']),
    //   recibiendo el click para solicitar la nueva página
    paginando(e) {
      // si esta en la misma pagina actual no hacer nada
      if (this.current === Number(this.$route.params.idpage)) {
        return
      }
      //   si es distinta solicitar la siguiente pagina
      this.bringData({
        page: e,
        name: this.name,
        status: this.status,
        gender: this.gender
      })
      this.$router.push(`/page/${e}`).catch(() => {})
    }
  },
  computed: {
    //   leyendo el total de pagina segun la api
    ...mapState(['pages', 'name', 'status', 'gender'])
  }
}
</script>

<style></style>
