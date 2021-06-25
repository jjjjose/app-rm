import { mount, shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Pagination from '@/components/Pagination'
import Quasar, { QPagination } from 'quasar'
import VueRouter from 'vue-router'

const localVue = createLocalVue()

localVue.use(Vuex)
localVue.use(Quasar, {
  components: [QPagination],
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
      bringData: jest.fn()
    }
    store = new Vuex.Store({
      state: {},
      actions
    })
  })
  it('mostrando el componente Pagination', () => {
    const wrapper = shallowMount(Pagination, {
      store,
      localVue,
      router
    })
    // console.log(wrapper.html())
    expect(wrapper.exists()).toBe(true)
  })
})
