<template>
  <div class="col-4">
    <q-card @click="info">
      <img src="https://cdn.quasar.dev/img/mountains.jpg" />

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
  props: {
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
    info() {
      console.log('holi')
    }
  }
}
</script>
