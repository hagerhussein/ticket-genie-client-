import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducers'
import ReduxThunk from 'redux-thunk'
import persistData from './localStorage'

/*let retrievedState;
try {
  retrievedState = localStorage.getItem('authUser');
  if (retrievedState === null){
    retrievedState = {};
  }
  retrievedState = JSON.parse(retrievedState);
} catch (err){
  retrievedState = {};
}*/

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const enhancer = composeEnhancers(
  applyMiddleware(ReduxThunk, /*persistData*/)
)

const store = createStore( reducer,/*retrievedState,*/ enhancer)



export default store