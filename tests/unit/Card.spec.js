import { mount, shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Card from '@/components/Card'
import Quasar, { QCard, QCardSection } from 'quasar'
import VueRouter from 'vue-router'

const localVue = createLocalVue()

localVue.use(Vuex)
localVue.use(Quasar, {
  components: [QCard, QCardSection],
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
  it('mostrando componente Card', () => {
    const wrapper = shallowMount(Card, {
      store,
      localVue,
      router
    })
    // console.log(wrapper.html())
    expect(wrapper.exists()).toBe(true)
  })

  test('verificando props de  Card', () => {
    let nombre = 'nombre de prueba'
    let estado = 'estado de prueba'
    let origen = 'origen de prueba'

    const wrapper = shallowMount(Card, {
      store,
      localVue,
      router,
      propsData: {
        nombre,
        estado,
        origen
      }
    })
    // console.log(wrapper.html())
    expect(wrapper.find('.text-h6').text()).toContain(nombre)
    expect(
      wrapper
        .findAll('.text-body2')
        .at(0)
        .text()
    ).toContain(estado)
    expect(
      wrapper
        .findAll('.text-body2')
        .at(1)
        .text()
    ).toContain(origen)
  })
})
