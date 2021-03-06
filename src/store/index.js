import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pages: null,
    dataRes: null,
    data: null,
    character: null,
    episode: null,
    threeRandom: null,
    // parametros apra relaizar una busqueda
    name: null,
    status: null,
    gender: null
  },
  mutations: {
    // actualizando los datos recibidos de la api
    bringData(state, data) {
      state.dataRes = data.results
      state.data = data.results
      state.pages = data.info.pages
      state.name = data.search.name
      state.status = data.search.status
      state.gender = data.search.gender
    },
    limpiar(state) {
      state.data = null
    },
    oneCharacter(state, { character, episode }) {
      state.character = character
      state.episode = episode
    },
    randomCharacter(state, data) {
      state.threeRandom = data
    }
  },
  actions: {
    // Trayendo datos de la API
    bringData({ commit }, { page, name, status, gender }) {
      commit('limpiar')
      let url = 'https://rickandmortyapi.com/api/character/?page='
      let n, s, g
      url = url + page
      // creacion de la url segun solicitud
      if (name) {
        n = `&name=${name}`
        url = url + n
      }
      if (status) {
        s = `&status=${status}`
        url = url + s
      }
      if (gender) {
        g = `&gender=${gender}`
        url = url + g
      }

      axios
        .get(url)
        .then(res => {
          // console.log(res)
          res.data.search = {
            name,
            status,
            gender
          }
          commit('bringData', res.data)
        })
        .catch(error => {
          console.log('opcion invalida')
          // console.log(error.toJSON())
        })
    },
    // trayendo datos de un solo personaje y en los episodios que salio
    oneCharacter({ commit }, id) {
      axios.get(`https://rickandmortyapi.com/api/character/${id}`).then(res => {
        let epi = res.data.episode
        let ii = 0
        let episode = []

        for (let i = 1; i <= epi.length; i++) {
          axios.get(epi[ii]).then(r => {
            episode.push({
              nombre: r.data.name,
              fecha: r.data.air_date
            })
          })
          ii++
        }
        let data = {
          character: res.data,
          episode
        }
        commit('oneCharacter', data)
      })
    },
    //  generador de numero aleatorio del 0 al 100
    randomCharacter({ commit }) {
      let genRandom = () => Math.floor(Math.random() * 100)
      let one, two, three, number
      one = genRandom()
      two = genRandom()
      three = genRandom()
      //   verificando si el numero es 0
      number = `${one === 0 ? 1 : one},${
        two === 0 || two === one ? two + 1 : two
      },${three === 0 || three === one || three === two ? three + 2 : three}`
      axios
        .get(`https://rickandmortyapi.com/api/character/${number}`)
        .then(res => {
          // console.log(number)
          commit('randomCharacter', res.data)
        })
    }
  },
  modules: {}
})
