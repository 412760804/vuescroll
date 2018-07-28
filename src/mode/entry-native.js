import vuescroll from './core/vuescroll';
import GCF from './shared/global-config';

import { deepMerge } from './util';
import { refreshAll } from './core/mixins/api';

import './style/vuescroll.scss';

const Vuescroll = {
  install(Vue) {
    // registry vuescroll
    Vue.component(vuescroll.name, vuescroll);
    Vue.prototype.$vuescrollConfig = deepMerge(GCF, {});
  },
  version: '__version__',
  refreshAll
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  Vue.use(Vuescroll);
}

export default Vuescroll;
