import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
// import { devToolsEnhancer } from 'redux-devtools-extension'
import allReducers from './component/Reducer'

const composeFunctions = composeWithDevTools(...[applyMiddleware(thunk)])

const store = createStore(allReducers, composeFunctions)

export default store
