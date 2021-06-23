<template>
  <q-page class="q-mt-lg">
    <div v-if="character != null" class="text-h3 text-weight-bold q-my-lg">
      {{ character.name }}
    </div>
    <div
      v-if="character != null"
      class="row q-col-gutter-x-lg q-col-gutter-y-lg"
    >
      <img class="col-12 col-sm-4 " :src="character.image" />
      <div class="col-12 col-sm-4 column justify-center q-col-gutter-y-lg">
        <div class="text-h6 flex text-weight-bold">
          Estatus:
          <div class="text-h6 text-weight-regular q-pl-sm">
            {{ character.status }}
          </div>
        </div>
        <div class="text-h6 flex text-weight-bold">
          Gender:
          <div class="text-h6 text-weight-regular q-pl-sm">
            {{ character.gender }}
          </div>
        </div>
        <div class="text-h6 flex text-weight-bold">
          Origin:
          <div class="text-h6 text-weight-regular q-pl-sm">
            {{ character.origin.name }}
          </div>
        </div>
        <div class="text-h6 flex text-weight-bold">
          Species:
          <div class="text-h6 text-weight-regular q-pl-sm">
            {{ character.species }}
          </div>
        </div>
      </div>
    </div>
    <div class="q-mt-lg q-mb-md text-h5 text-weight-bold">
      Episodios donde apareció
    </div>
    <div class="row q-gutter-lg" v-if="episode != null">
      <div
        class="col-12 col-sm-3 epi"
        v-for="(ep, index) in episode"
        :key="index"
      >
        <q-card>
          <q-card-section>
            <div class="text-weight-bold">{{ ep.nombre }}</div>
            <div>{{ ep.fecha }}</div>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div class="q-pt-xl q-mb-md  text-h5 text-weight-bold">
      Personajes Interesantes
    </div>
    <div class="row q-col-gutter-xl">
      <Card
        v-for="inter in threeRandom"
        :key="inter.id"
        :characterId="inter.id"
        :imagen="inter.image"
        :nombre="inter.name"
        :estado="inter.status"
        :origen="inter.origin.name"
      />
    </div>
  </q-page>
</template>

<script>
import Card from '@/components/Card.vue'
import { mapActions, mapState } from 'vuex'
export default {
  name: 'character',
  created() {
    this.oneCharacter(this.$route.params.id)
    this.randomCharacter()
  },
  data: () => ({
    // character: null,
    // epi: null,
    // interesantes: null
  }),
  components: {
    Card
  },
  methods: {
    ...mapActions(['oneCharacter', 'randomCharacter'])
  },
  computed: {
    ...mapState(['character', 'episode', 'threeRandom'])
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
