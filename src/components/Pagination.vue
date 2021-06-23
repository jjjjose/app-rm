<template>
  <div class="q-pa-lg flex flex-center">
    <q-pagination
      v-model="current"
      color="purple"
      :max="10"
      :max-pages="8"
      boundary-numbers
    />
  </div>
</template>

<script>
export default {
  name: 'pagination',
  data: () => ({
    current: 1
  })
}
</script>

<style></style>
