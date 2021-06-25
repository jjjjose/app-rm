import { mount, shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Index from '@/views/Index'
import Quasar, { QInput, QPage } from 'quasar'

const localVue = createLocalVue()

localVue.use(Vuex)
localVue.use(Quasar, {
  components: [QInput, QPage],
  config: {},
  plugins: {}
})

// pruebas de muestra para la primera vista de los personajes
describe('Index.vue', () => {
  let actions
  let store

  beforeEach(() => {
    actions = {
      bringData: jest.fn()
    }
    store = new Vuex.Store({
      state: {},
      actions
    })
  })
  it('mostrando la pagina principal de los personajes', () => {
    const wrapper = shallowMount(Index, {
      store,
      localVue
    })
    // console.log(wrapper.html())
    expect(wrapper.exists()).toBe(true)
  })
})
