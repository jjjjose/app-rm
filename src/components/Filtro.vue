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
        v-model="selectStatus"
        :options="status"
        label="Status"
        style="width: 250px"
      />
      <q-select
        class="col-12"
        outlined
        v-model="selectGender"
        :options="gender"
        label="Origin"
        style="width: 250px"
      />
    </div>
  </div>
</template>

<style></style>

<script>
export default {
  name: 'Filtro',
  data: () => ({
    selectStatus: null,
    selectGender: null,
    status: ['alive', 'dead', 'unknown'],
    gender: ['female', 'male', 'genderless', 'unknown']
  })
}
</script>
