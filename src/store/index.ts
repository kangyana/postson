import { createStore, Store } from 'vuex';
import * as modules from './models'

const store: Store<any> = createStore({
  modules
});

export default store