import uppercase from './filter-uppercase'
import limit from './filter-limit'
import currency from './filter-currency'

export default {
  install (Vue) {
    Vue.filter('uppercase', uppercase)
    Vue.filter('limit', limit)
    Vue.filter('currency', currency)
  }
}
