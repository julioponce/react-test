import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reduxThunk from 'redux-thunk'
import routesReducer from './reducers/routesReducer'
import calculatorReducer from './reducers/calculatorReducer'
import page1ContentReducer from './reducers/page1ContentReducer'
import page2ContentReducer from './reducers/page2ContentReducer'

const reducers = combineReducers({
  routes: routesReducer,
  calculator: calculatorReducer,
  page1Content: page1ContentReducer,
  page2Content: page2ContentReducer
})

const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(reduxThunk)
  )
)

// store.subscribe(() => { console.log(store.getState()) })

export default store
