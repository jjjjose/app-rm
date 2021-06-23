<template>
  <div class=" flex items-center q-py-lg">
    Filtrar por:
    <div class="q-ml-lg q-gutter-md row">
      <q-select
        outlined
        v-model="model"
        :options="options"
        label="Status"
        style="width: 250px"
      />
      <q-select
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
