<template>
  <div
    class="row flex items-center q-py-lg q-col-gutter-x-lg  q-col-gutter-y-lg"
  >
    <div class="col-12 col-md-1">
      Filtrar por:
    </div>
    <div
      class="col-12 col-md-6 q-ml-lg row q-col-gutter-x-lg  q-col-gutter-y-lg"
    >
      <q-select
        class="col-12"
        outlined
        v-model="model"
        :options="options"
        label="Status"
        style="width: 250px"
      />
      <q-select
        class="col-12"
        outlined
        v-model="model"
        :options="options"
        label="Origin"
        style="width: 250px"
      />
    </div>
  </div>
</template>

<style></style>

<script>
const options = ['Google', 'Facebook', 'Twitter', 'Apple', 'Oracle']
export default {
  name: 'Filtro',
  data: () => ({
    model: null,
    options
  })
}
</script>
