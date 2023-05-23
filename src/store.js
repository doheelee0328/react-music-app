import { legacy_createStore as createStore } from 'redux'

import { devToolsEnhancer } from 'redux-devtools-extension'
import filterSongs from './component/Reducer/FilterSongs'
const store = createStore(filterSongs, devToolsEnhancer())

export default store
