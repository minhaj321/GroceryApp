import {combineReducers,createStore} from 'redux'
import setScreen from './reducer.js'

// const reducer = combineReducers({
//     user
// })

const store = createStore(setScreen)

export default store;