import { mount, shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Character from '@/views/Character'
import Quasar, { QCard, QPage } from 'quasar'
import VueRouter from 'vue-router'

const localVue = createLocalVue()

localVue.use(Vuex)
localVue.use(Quasar, {
  components: [QCard, QPage],
  config: {},
  plugins: {}
})
localVue.use(VueRouter)
const router = new VueRouter()

describe('Character.vue', () => {
  let actions
  let store

  beforeEach(() => {
    actions = {
      oneCharacter: jest.fn(),
      randomCharacter: jest.fn()
    }
    store = new Vuex.Store({
      state: {},
      actions
    })
  })
  it('mostrando la pagina de solo un personaje', () => {
    const wrapper = shallowMount(Character, {
      store,
      localVue,
      router
    })
    // console.log(wrapper.html())
    expect(wrapper.exists()).toBe(true)
  })
})
