<template>
  <q-page class="q-mt-lg">
    <div class="text-h3 text-weight-bold q-my-lg">Nombre</div>
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
    <div class="row q-gutter-lg" v-if="epi != null">
      <div class="col-12 col-sm-3 epi" v-for="(ep, index) in epi" :key="index">
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
        v-for="inter in interesantes"
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

export default {
  name: 'character',
  created() {
    this.oneCharacter(this.$route.params.id)
    this.randomCharacter()
    console.log('nuevo')
  },
  data: () => ({
    character: null,
    epi: null,
    interesantes: null
  }),
  components: {
    Card
  },
  methods: {
    //   trayendo datos del personaje
    async oneCharacter(id) {
      await this.axios
        .get(`https://rickandmortyapi.com/api/character/${id}`)
        .then(res => {
          this.character = res.data
          //   console.log(res.data)
          this.episodios()
        })
    },
    // recuperando datos de los episodios donde salio el personaje
    async episodios() {
      let episode = this.character.episode
      if (
        episode.lenght === null ||
        episode.lenght === '0' ||
        episode.lenght === ''
      ) {
        // console.log(episode)
        return
      }
      let ii = 0
      this.epi = []

      for (let i = 1; i <= episode.length; i++) {
        await this.axios.get(episode[ii]).then(res => {
          this.epi.push({
            nombre: res.data.name,
            fecha: res.data.air_date
          })
        })
        ii++
      }
    },
    randomCharacter() {
      let one, two, three, number
      one = this.genRandom()
      two = this.genRandom()
      three = this.genRandom()
      //   verificando si el numero es 0
      number = `${one === 0 ? 1 : one},${
        two === 0 || two === one ? two + 1 : two
      },${three === 0 || three === one || three === two ? three + 2 : three}`
      console.log(number)
      this.axios
        .get(`https://rickandmortyapi.com/api/character/${number}`)
        .then(res => {
          this.interesantes = res.data
        })
    }
  },
  computed: {
    //   generador de numero rando del 0 al 100
    genRandom() {
      return () => Math.floor(Math.random() * 100)
    }
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
