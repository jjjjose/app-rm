<template>
  <div class="col-12 col-sm-6 col-md-4 hov">
    <q-card @click="info" class="hov2">
      <img :src="imagen" />

      <q-card-section>
        <div class="text-h6">{{ nombre }}</div>
        <div class="text-subtitle2 flex items-center">
          Estado:
          <div class="text-body2 q-ml-sm">{{ estado }}</div>
        </div>
        <div class="text-subtitle2 flex items-center">
          Origen:
          <div class="text-body2 q-ml-sm">{{ origen }}</div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  name: 'Card',
  beforeRouteUpdate(to, from, next) {
    this.characterId = to.params.id
    next()
  },
  props: {
    characterId: {
      type: Number,
      default: 0
    },
    imagen: {
      type: String,
      default: 'https://cdn.quasar.dev/img/mountains.jpg'
    },
    nombre: {
      type: String,
      default: 'Mi nombre'
    },
    estado: {
      type: String,
      default: 'Su estado'
    },
    origen: {
      type: String,
      default: 'Su origen'
    }
  },
  methods: {
    // enviando la informacion unitaria del personaje
    info() {
      this.$router.push(`/character/${this.characterId}`)
    }
  }
}
</script>
<style lang="scss">
.hov {
  &:hover {
    cursor: pointer;
  }
}
.hov2 {
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
}
</style>
