import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pages: null,
    dataRes: null,
    data: null
  },
  mutations: {
    // actualizando los datos recibidos de la api
    bringData(state, data) {
      state.dataRes = data.results
      state.data = data.results
      state.page = data.pages
    }
  },
  actions: {
    // Trayendo datos de la API
    bringData({ commit }, page) {
      axios
        .get(`https://rickandmortyapi.com/api/character/?page=${page}`)
        .then(res => {
          commit('bringData', res.data)
        })
    }
  },
  modules: {}
})
