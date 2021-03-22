import './style.js'

import Hello01 from './hello-01'

const components = [Hello01]

const install = (Vue, opts = {}) => {
  components.forEach(c => Vue.component(c.name, c))
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  Hello01
}
