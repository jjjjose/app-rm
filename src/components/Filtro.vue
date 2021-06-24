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
        @input="Search1"
      />
      <q-select
        class="col-12"
        outlined
        v-model="selectGender"
        :options="gender"
        label="Gender"
        style="width: 250px"
        @input="Search2"
      />
    </div>
  </div>
</template>

<style></style>

<script>
import { mapActions, mapState } from 'vuex'
const data = {
  page: 1,
  name: null,
  status: null,
  gender: null
}
export default {
  name: 'Filtro',
  data: () => ({
    selectStatus: null,
    selectGender: null,
    status: ['alive', 'dead', 'unknown'],
    gender: ['female', 'male', 'genderless', 'unknown']
  }),
  methods: {
    ...mapActions(['bringData']),
    Search1() {
      data.name = this.name
      if (this.selectGender === null || this.selectGender === '') {
        data.status = this.selectStatus
        // console.log(data)
        this.bringData(data)
        return
      }
      data.status = this.selectStatus
      data.gender = this.selectGender
      // console.log(data)
      this.bringData(data)
    },
    Search2() {
      data.name = this.name
      if (this.selectStatus === null || this.selectStatus === '') {
        data.gender = this.selectGender
        // console.log(data)
        this.bringData(data)
        return
      }
      data.status = this.selectStatus
      data.gender = this.selectGender
      // console.log(data)
      this.bringData(data)
    }
  },
  computed: {
    ...mapState(['name'])
  }
}
</script>
