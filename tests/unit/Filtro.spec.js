import { mount, shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Filtro from '@/components/Filtro'
import Quasar, { QCard, QSelect } from 'quasar'

const localVue = createLocalVue()

localVue.use(Vuex)
localVue.use(Quasar, {
  components: [QCard, QSelect],
  config: {},
  plugins: {}
})

describe('Character.vue', () => {
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
  it('mostrando el componente Filtro', () => {
    const wrapper = shallowMount(Filtro, {
      store,
      localVue
    })
    // console.log(wrapper.html())
    expect(wrapper.exists()).toBe(true)
  })
})
