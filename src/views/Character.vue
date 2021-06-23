<template>
  <q-page class="q-mt-lg">
    <div class="text-h3 text-weight-bold q-my-lg">Nombre</div>
    <div class="row q-col-gutter-x-lg q-col-gutter-y-lg">
      <img class="col-12 col-sm-4 " src="https://cdn.quasar.dev/img/mountains.jpg" />
      <div class="col-12 col-sm-4 column justify-center q-col-gutter-y-lg">
        <div class="text-h6 text-weight-bold">Estatus:</div>
        <div class="text-h6 text-weight-bold">Gender:</div>
        <div class="text-h6 text-weight-bold">Origin:</div>
        <div class="text-h6 text-weight-bold">Species:</div>
      </div>
    </div>
    <div class="q-mt-lg q-mb-md text-h5 text-weight-bold">
      Episodios donde apareció
    </div>
    <div class="row q-gutter-lg">
      <div class="col-12 col-sm-3 epi">
        <q-card>
          <q-card-section>
            <div>Nombre</div>
            <div>Fecha</div>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div class="q-pt-xl q-mb-md  text-h5 text-weight-bold">
      Personajes Interesantes
    </div>
    <div class="row q-col-gutter-xl">
      <Card />
    </div>
  </q-page>
</template>

<script>
import Card from '@/components/Card.vue'
export default {
  components: {
    Card
  }
}
</script>
<style lang="scss">
.epi {
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
}
</style>
